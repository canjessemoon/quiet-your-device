export const runtime = 'edge';

// Your Amazon Associate tags
const US_TAG = process.env.AMAZON_US_ASSOCIATE_TAG || 'quietyourdevi-20';
const CA_TAG = process.env.AMAZON_CA_ASSOCIATE_TAG || 'quietyourde0b-20';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const asin = searchParams.get('asin');
  
  if (!asin) {
    return new Response('Missing asin parameter', { status: 400 });
  }

  // Get visitor's country from Vercel geolocation header (defaults to US)
  const country = (request.headers.get('x-vercel-ip-country') || 'US').toUpperCase();
  const isCA = country === 'CA';

  // Choose the right Amazon domain and affiliate tag
  const host = isCA ? 'www.amazon.ca' : 'www.amazon.com';
  const tag = isCA ? CA_TAG : US_TAG;

  // Build the final Amazon URL
  const dest = `https://${host}/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(tag)}`;
  
  // Return redirect with explicit headers
  return new Response(null, {
    status: 302,
    headers: {
      'Location': dest,
      'Cache-Control': 'no-cache'
    }
  });
}
