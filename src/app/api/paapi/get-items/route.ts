// Vercel Node.js Function (Web API signature). Put this file at /api/paapi/get-items/route.ts
// POST body: { "items": [ { "asin": "0525536515", "market": "US" }, { "asin": "0801018668", "market": "CA" } ] }
// Response: { "ASIN": { "image": "https://...", "width": 500, "height": 800 }, ... }

import crypto from "crypto";

type PayloadItem = { asin: string; market?: "US" | "CA" };
type ResultMap = Record<string, { image: string; width: number; height: number }>;

const MARKET = {
  US: { host: "webservices.amazon.com", region: "us-east-1" },
  CA: { host: "webservices.amazon.ca", region: "us-east-1" },
} as const;

// Partner tags: set PAAPI_PARTNER_TAG (default), or market-specific overrides
function partnerTagFor(market: "US" | "CA"): string {
  const byMarket = market === "CA" ? process.env.PAAPI_PARTNER_TAG_CA : process.env.PAAPI_PARTNER_TAG_US;
  const fallback = process.env.PAAPI_PARTNER_TAG;
  if (byMarket) return byMarket;
  if (fallback) return fallback;
  throw new Error("Missing env: PAAPI_PARTNER_TAG (or PAAPI_PARTNER_TAG_US / PAAPI_PARTNER_TAG_CA)");
}

// ---- AWS SigV4 helpers (minimal) ----
function hmac(key: Buffer | string, str: string) {
  return crypto.createHmac("sha256", key).update(str, "utf8").digest();
}
function sha256hex(str: string) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}
function amzDates(date = new Date()) {
  const amz = date.toISOString().replace(/[:-]|\.\d{3}/g, ""); // 20250101T120000Z
  return { amzdate: amz, datestamp: amz.slice(0, 8) };
}

async function callGetItems(market: "US" | "CA", itemIds: string[]) {
  const { host, region } = MARKET[market];
  const endpoint = `https://${host}/paapi5/getitems`;
  const PartnerTag = partnerTagFor(market);

  const bodyObj = {
    PartnerTag,
    PartnerType: "Associates",
    ItemIds: itemIds,
    Resources: ["Images.Primary.Medium", "Images.Primary.Large"], // ask only for images
  };
  const payload = JSON.stringify(bodyObj);

  const { amzdate, datestamp } = amzDates();
  const service = "ProductAdvertisingAPI";
  const method = "POST";
  const canonicalUri = "/paapi5/getitems";
  const canonicalQuery = "";
  const contentType = "application/json; charset=utf-8";
  const contentEncoding = "amz-1.0";
  const xAmzTarget = "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems";

  // Build canonical headers (keys MUST be lowercase; order matters)
  const canonicalHeaders =
    `content-encoding:${contentEncoding}\n` +
    `content-type:${contentType}\n` +
    `host:${host}\n` +
    `x-amz-date:${amzdate}\n` +
    `x-amz-target:${xAmzTarget}\n`;

  const signedHeaders = "content-encoding;content-type;host;x-amz-date;x-amz-target";
  const canonicalRequest =
    `${method}\n${canonicalUri}\n${canonicalQuery}\n${canonicalHeaders}\n${signedHeaders}\n${sha256hex(payload)}`;

  const algorithm = "AWS4-HMAC-SHA256";
  const credentialScope = `${datestamp}/${region}/${service}/aws4_request`;
  const stringToSign = `${algorithm}\n${amzdate}\n${credentialScope}\n${sha256hex(canonicalRequest)}`;

  const kDate = hmac("AWS4" + (process.env.PAAPI_SECRET_KEY || ""), datestamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  const kSigning = hmac(kService, "aws4_request");
  const signature = crypto.createHmac("sha256", kSigning).update(stringToSign, "utf8").digest("hex");

  const authorization =
    `${algorithm} Credential=${process.env.PAAPI_ACCESS_KEY}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const r = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-encoding": contentEncoding,
      "content-type": contentType,
      "x-amz-date": amzdate,
      "x-amz-target": xAmzTarget,
      "authorization": authorization,
      "host": host,
    },
    body: payload,
  });

  if (!r.ok) {
    const text = await r.text().catch(() => "");
    throw new Error(`PA-API ${market} ${r.status}: ${text || r.statusText}`);
  }

  const json = await r.json();

  const map: ResultMap = {};
  for (const item of json?.ItemsResult?.Items || []) {
    const img = item?.Images?.Primary?.Medium || item?.Images?.Primary?.Large;
    if (img?.URL) map[item.ASIN] = { image: img.URL, width: img.Width, height: img.Height };
  }
  return map;
}

export async function POST(request: Request) {
  try {
    const { items } = (await request.json()) as { items?: PayloadItem[] };
    if (!items?.length) {
      return Response.json({ error: "Missing 'items' array" }, { status: 400 });
    }

    // Group ASINs by market to minimize calls
    const byMarket: Record<"US" | "CA", string[]> = { US: [], CA: [] };
    for (const it of items) {
      const mk = (it.market || "US").toUpperCase() as "US" | "CA";
      if (!byMarket[mk]) throw new Error(`Unsupported market: ${it.market}`);
      if (it.asin) byMarket[mk].push(it.asin);
    }

    const tasks: Promise<ResultMap>[] = [];
    if (byMarket.US.length) tasks.push(callGetItems("US", Array.from(new Set(byMarket.US))));
    if (byMarket.CA.length) tasks.push(callGetItems("CA", Array.from(new Set(byMarket.CA))));

    const results = await Promise.all(tasks);
    const merged: ResultMap = Object.assign({}, ...results);

    // Cache for 24h at the CDN, allow stale for a week (tune to your needs)
    return Response.json(merged, {
      headers: { "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800" },
    });
  } catch (err: any) {
    const message = err?.message || "Server error";
    return Response.json({ error: message }, { status: 500 });
  }
}
