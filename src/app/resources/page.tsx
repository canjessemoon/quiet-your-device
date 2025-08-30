import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Wellness Resources & Tools | Quiet Your Device",
  description: "Discover curated apps, books, and tools to help you build a healthier relationship with technology. From meditation apps to digital detox resources.",
  alternates: {
    canonical: 'https://quietyourdevice.com/resources',
  },
  openGraph: {
    title: "Digital Wellness Resources & Tools | Quiet Your Device",
    description: "Discover curated apps, books, and tools to help you build a healthier relationship with technology.",
    type: 'website',
    url: 'https://quietyourdevice.com/resources',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Wellness Resources & Tools | Quiet Your Device",
    description: "Discover curated apps, books, and tools to help you build a healthier relationship with technology.",
    creator: '@quietyourdevice',
  },
  keywords: ['digital wellness apps', 'meditation apps', 'screen time tools', 'digital detox resources', 'mindfulness tools', 'healthy technology'],
};

export default function Resources() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-mist py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-fern mb-6">
            Digital Wellness Resources
          </h1>
          <p className="text-xl text-stone leading-relaxed max-w-2xl mx-auto">
            Curated apps, tools, and resources to help you build a healthier relationship with technology.
          </p>
        </div>
      </section>

      {/* Reading List Section - Moved to Top */}
      <section className="py-16 bg-white" aria-labelledby="rec-reading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="rec-reading" className="text-3xl font-bold text-fern mb-4">📖 Recommended Reading</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          {/* Embedded CSS for book styling */}
          <style dangerouslySetInnerHTML={{
            __html: `
              .qyd-shelf{display:grid;gap:18px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
              .qyd-book{display:grid;grid-template-columns:84px 1fr;gap:14px;padding:16px;border:1px solid #A4B2A3;border-radius:14px;background:#fff}
              .qyd-cover{width:84px;height:120px;border-radius:8px;background:linear-gradient(120deg,#DCE8DC,#A4B2A3,#DCE8DC);
                         background-size:200% 200%;animation:qyd-shimmer 2s linear infinite}
              @keyframes qyd-shimmer{0%{background-position:0% 50%}100%{background-position:100% 50%}}
              .qyd-book h3 a{color:#4F6F52;text-decoration:underline;text-underline-offset:3px;font-weight:700}
              .qyd-reason{color:#5D6F77;margin:6px 0 10px}
              .qyd-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:9999px;background:#4F6F52;color:#fff;font-weight:700;text-decoration:none}
              .qyd-btn:hover{background:#3d5542}
            `
          }} />

          <div className="qyd-shelf">
            {/* Digital Minimalism — ASIN 0525536515 */}
            <article className="qyd-book" data-asin="0525536515" data-market="US">
              <div className="qyd-cover" aria-hidden="true"></div>
              <div>
                <h3><a href="https://amzn.to/4n7M9Wm" target="_blank" rel="noopener sponsored">Digital Minimalism — Cal Newport</a></h3>
                <p className="qyd-reason">Clear framework for reducing digital noise without going off-grid.</p>
                <a className="qyd-btn" href="https://amzn.to/4n7M9Wm" target="_blank" rel="noopener sponsored">See on Amazon →</a>
              </div>
            </article>

            {/* How to Break Up with Your Phone — ASIN 0593837169 */}
            <article className="qyd-book" data-asin="0593837169" data-market="US">
              <div className="qyd-cover" aria-hidden="true"></div>
              <div>
                <h3><a href="https://amzn.to/4mIHg6r" target="_blank" rel="noopener sponsored">How to Break Up with Your Phone — Catherine Price</a></h3>
                <p className="qyd-reason">30-day plan with science-backed tactics to reclaim attention.</p>
                <a className="qyd-btn" href="https://amzn.to/4mIHg6r" target="_blank" rel="noopener sponsored">See on Amazon →</a>
              </div>
            </article>

            {/* The Tech-Wise Family — ASIN 0801018668 */}
            <article className="qyd-book" data-asin="0801018668" data-market="US">
              <div className="qyd-cover" aria-hidden="true"></div>
              <div>
                <h3><a href="https://amzn.to/47qTlZf" target="_blank" rel="noopener sponsored">The Tech-Wise Family — Andy Crouch</a></h3>
                <p className="qyd-reason">Practical guardrails for healthier family tech habits.</p>
                <a className="qyd-btn" href="https://amzn.to/47qTlZf" target="_blank" rel="noopener sponsored">See on Amazon →</a>
              </div>
            </article>
          </div>

          {/* Client-side hydrator: swaps placeholders for PA-API images */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (async function hydrateCovers(){
                const cards = [...document.querySelectorAll('.qyd-book')];
                const payload = cards.map(c => ({ asin: c.dataset.asin, market: c.dataset.market || 'US' }));
                try {
                  const res = await fetch('/api/paapi/get-items', {
                    method:'POST', headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({items: payload})
                  });
                  const data = await res.json(); // { "ASIN": { image, width, height }, ... }
                  cards.forEach(card => {
                    const info = data[card.dataset.asin];
                    if (!info) return;
                    const holder = card.querySelector('.qyd-cover');
                    const img = new Image();
                    img.src = info.image; img.alt = 'Book cover';
                    img.width = 84; img.height = 120;
                    img.style.width='84px'; img.style.height='120px'; img.style.borderRadius='8px';
                    holder.replaceWith(img);
                  });
                } catch (_) { /* keep shimmering placeholders */ }
              })();
            `
          }} />
        </div>
      </section>

      {/* Simple Practical Actions Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">Simple, Practical, and Actionable Things You Can Try Right Now</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                🕰 1. Leave Your Phone Outside the Bedroom
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Reduces late-night scrolling and improves sleep
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> Use an alarm clock or put your phone to charge in the hallway
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                ⏰ 2. Set One &ldquo;Phone-Free Hour&rdquo; a Day
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Rebuilds attention span and calm
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> Mealtimes, first hour of the day, or pre-bed wind-down
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                📴 3. Turn Off All Non-Human Notifications
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Removes low-value interruptions
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> Keep texts and calls. Silence Instagram, Gmail, and everything else.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                📥 4. Move Distracting Apps Off Your Home Screen
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Adds friction to habits like Instagram or Twitter
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> Bury time-wasting apps in a folder or delete them for a day
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                📓 5. Use a Paper Journal or Notebook
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Encourages reflection without a glowing screen
              </p>              <p className="text-stone text-sm">
                <strong>Try:</strong> One-page morning reflection or a &ldquo;no-phone ideas&rdquo; journal
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                🧘 6. Try &ldquo;One-Screen Mornings&rdquo;
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Prevents digital chaos at the start of your day
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> No checking email, texts, or socials until after breakfast
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                🌳 7. Go Outside Without Your Phone
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Reconnects you to your senses and surroundings
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> A 5-minute walk around the block, no device
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                🔔 8. Use a &ldquo;Do Not Disturb&rdquo; Schedule
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Builds healthy boundaries without going offline
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> DND from 8pm–8am, with exceptions for favorites/emergencies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                🌐 9. Install Focus Tools
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Adds external support to internal discipline
              </p>
              <div className="text-stone text-sm">
                <strong>Try:</strong>
                <ul className="mt-1 ml-4 space-y-1">
                  <li>• One Sec — Adds a pause before opening addictive apps</li>
                  <li>• Freedom — Blocks apps/sites across devices</li>
                  <li>• Forest — Gamifies focus with tree planting</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-fern mb-3 flex items-center">
                ✋ 10. Create a &ldquo;Phone-Free Zone&rdquo; at Home
              </h3>
              <p className="text-stone text-sm mb-2">
                <strong>Why it helps:</strong> Designates safe spaces to disconnect
              </p>
              <p className="text-stone text-sm">
                <strong>Try:</strong> Kitchen, bathroom, or living room — start with just one
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Featured Apps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">Apps for Mindfulness and Focus</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-stone mt-4 max-w-2xl mx-auto">
              Tools to support intentional tech use — not more of it.
            </p>
          </div>          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mist p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-fern mb-2">Calm</h3>
                <p className="text-sm text-sage mb-4">iOS & Android</p>
                <p className="text-stone mb-4">
                  Meditation & sleep stories to replace mindless scrolling with mindful moments.
                </p>
                <p className="text-stone mb-4 italic">
                  <strong>Why we like it:</strong> It helps shift your phone from stress to stillness — one deep breath at a time.
                </p>
                <p className="text-sage text-sm">💸 Free with premium upgrade</p>
              </div>
            </div>

            <div className="bg-mist p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-fern mb-2">Forest</h3>
                <p className="text-sm text-sage mb-4">iOS & Android</p>
                <p className="text-stone mb-4">
                  Gamified focus: stay present and grow a tree instead of checking your phone.
                </p>
                <p className="text-stone mb-4 italic">
                  <strong>Why we like it:</strong> It turns focus into something visible, calming, and even fun — perfect for detox beginners.
                </p>
                <p className="text-sage text-sm">💸 One-time purchase (~$3.99)</p>
              </div>
            </div>

            <div className="bg-mist p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-fern mb-2">Freedom</h3>
                <p className="text-sm text-sage mb-4">All platforms</p>
                <p className="text-stone mb-4">
                  Block distracting apps and websites across your devices simultaneously.
                </p>
                <p className="text-stone mb-4 italic">
                  <strong>Why we like it:</strong> It&apos;s like a digital boundary you set once and trust completely. Solid, serious help when you need a break.
                </p>
                <p className="text-sage text-sm">💸 Subscription (~$7/month)</p>
              </div>
            </div>

            <div className="bg-mist p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-fern mb-2">One Sec</h3>
                <p className="text-sm text-sage mb-4">iOS only</p>
                <p className="text-stone mb-4">
                  Adds a brief pause before opening time-wasting apps — giving your brain time to decide.
                </p>
                <p className="text-stone mb-4 italic">
                  <strong>Why we like it:</strong> It&apos;s tiny but powerful. That one-second moment of clarity really works.
                </p>
                <p className="text-sage text-sm">💸 Free with optional upgrade</p>
              </div>
            </div>

            <div className="bg-mist p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-fern mb-2">Moment</h3>
                <p className="text-sm text-sage mb-4">iOS & Android</p>
                <p className="text-stone mb-4">
                  Track screen time, set goals, and build self-awareness without judgment.
                </p>
                <p className="text-stone mb-4 italic">
                  <strong>Why we like it:</strong> It&apos;s about gentle accountability — not guilt. Awareness is the first step to change.
                </p>
                <p className="text-sage text-sm">💸 Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Tools Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">🛠 Physical Tools</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-fern mb-4">📻 Analog Alarm Clock</h3>
              <p className="text-stone mb-4">
                Replace your phone as your bedside alarm. Keep your device out of the bedroom for better sleep hygiene.
              </p>
              <div className="text-sage text-sm">
                Recommendation: Simple digital or analog clock with battery backup
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-fern mb-4">📚 Physical Books</h3>
              <p className="text-stone mb-4">
                Rediscover the joy of reading without notifications. Physical books provide a screen-free escape.
              </p>
              <div className="text-sage text-sm">
                Start with: Fiction, memoirs, or topics you&apos;re passionate about
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-fern mb-4">📝 Paper Journal</h3>
              <p className="text-stone mb-4">
                Process thoughts and feelings without digital distractions. Journaling can replace mindless scrolling.
              </p>
              <div className="text-sage text-sm">
                Try: Morning pages, gratitude journaling, or evening reflection
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-fern mb-4">🎧 Noise-Canceling Headphones</h3>
              <p className="text-stone mb-4">
                Create a peaceful environment for focus work or meditation without reaching for your phone.
              </p>
              <div className="text-sage text-sm">
                Great for: Deep work, meditation, or simply enjoying silence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fern py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-6">
            Ready to Start Your Digital Wellness Journey?
          </h2>
          <p className="text-xl text-beige mb-8 max-w-2xl mx-auto">
            Combine these tools with our 7-day challenge for a comprehensive approach to digital wellness.
          </p>
          <Link 
            href="/challenge"
            className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
          >
            Start 7-Day Challenge
          </Link>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: August 30, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
