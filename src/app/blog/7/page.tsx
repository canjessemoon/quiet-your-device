import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "One Day Off: How a Weekly Digital Reset Restores Your Brain | QYD Insights",
  description: "Taking one day off from screens each week gives your mind and body a reset. Research shows regular disconnection improves mood, focus, sleep, and relationships.",
  alternates: {
    canonical: 'https://quietyourdevice.com/blog/7',
  },
  openGraph: {
    title: "One Day Off: How a Weekly Digital Reset Restores Your Brain",
    description: "Taking one day off from screens each week gives your mind and body a reset. Research shows regular disconnection improves mood, focus, sleep, and relationships.",
    type: 'article',
    url: 'https://quietyourdevice.com/blog/7',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "One Day Off: How a Weekly Digital Reset Restores Your Brain",
    description: "Taking one day off from screens each week gives your mind and body a reset. Research shows regular disconnection improves mood, focus, sleep, and relationships.",
    creator: '@quietyourdevice',
  },
};

export default function BlogPost7() {
  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm">
          <Link href="/blog" className="text-stone hover:text-fern transition-colors">
            ← Back to Insights
          </Link>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-fern mb-6 leading-tight">
            One Day Off: How a Weekly Digital Reset Restores Your Brain
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-stone mb-6">
            <span>QYD Team</span>
            <span>•</span>
            <span>October 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="/images/onedayoff-herolist.png" 
            alt="One Day Off digital detox checklist and planning illustration"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* TL;DR */}
        <div className="bg-mist border-l-4 border-fern p-6 mb-8">
          <h2 className="text-lg font-semibold text-fern mb-3">TL;DR</h2>
          <p className="text-stone">
            Taking one day off from screens each week gives your mind and body a reset. It&apos;s not about rejecting technology — it&apos;s about reclaiming rest. Research shows regular disconnection improves mood, focus, sleep, and relationships. With a little preparation, it&apos;s easier than you think.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-fern mb-4">The Ancient Idea of Rest</h2>
          <p className="text-stone mb-6 leading-relaxed">
            Across cultures and centuries, people have built rhythms of pause into their lives. The Jewish and Christian Sabbath, Hindu Ekadashi, Buddhist Uposatha — all versions of a simple truth: humans need rest.
          </p>
          <p className="text-stone mb-6 leading-relaxed">
            Today, we face a different kind of exhaustion: not fields or factories, but feeds and notifications. Just as older traditions carved out sacred time away from labor, we can create One Day Off — a modern pause to recover from digital overload.
          </p>
          <p className="text-stone mb-8 leading-relaxed">
            Psychologists call this &ldquo;psychological detachment&rdquo; — mentally switching off from demands. Research shows it leads to lower stress, better sleep, and greater life satisfaction.<sup>1</sup>
          </p>

          <h2 className="text-2xl font-bold text-fern mb-4">Why One Day Off Works</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white p-4 rounded-lg border-l-4 border-sage">
              <strong className="text-fern">1. Stress Recovery:</strong> <span className="text-stone">Notifications keep cortisol high. Going offline lowers baseline stress.</span>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-sage">
              <strong className="text-fern">2. Better Sleep:</strong> <span className="text-stone">Without late-night scrolling, circadian rhythms realign and sleep quality improves.</span>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-sage">
              <strong className="text-fern">3. Stronger Connection:</strong> <span className="text-stone">Conversations and meals without phones foster deeper relationships.</span>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-sage">
              <strong className="text-fern">4. Renewed Focus:</strong> <span className="text-stone">Stepping away restores attention span and creativity.</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-fern mb-4">How to Prepare</h2>
          <p className="text-stone mb-6 leading-relaxed">
            One Day Off doesn&apos;t need to be complicated, but a little planning helps:
          </p>
          <ul className="space-y-3 mb-8 text-stone">
            <li className="flex items-start">
              <span className="text-fern mr-3 font-bold">•</span>
              <span><strong>Pick Your Day:</strong> Most choose Saturday or Sunday, but any 24-hour stretch works.</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3 font-bold">•</span>
              <span><strong>Notify Others:</strong> Let friends or coworkers know you&apos;ll be offline. Set an email autoresponder if needed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3 font-bold">•</span>
              <span><strong>Print Essentials:</strong> Directions, boarding passes, or recipes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3 font-bold">•</span>
              <span><strong>Plan Alternatives:</strong> Stock up on books, board games, or art supplies to avoid defaulting back to screens.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-fern mb-4">What to Do Instead</h2>
          <p className="text-stone mb-6 leading-relaxed">
            Your One Day Off is about joy and presence, not deprivation. Try:
          </p>
          <ul className="space-y-2 mb-8 text-stone grid md:grid-cols-2 gap-2">
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Morning walk without headphones</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Cooking a new recipe with family</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Reading a physical book</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Playing board games or puzzles</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Writing a journal entry or sketching</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Visiting a park or museum</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Napping without guilt</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-fern mb-4">Start Small</h2>
          <p className="text-stone mb-8 leading-relaxed">
            If a full day feels daunting, try half a day first — Saturday morning until lunch. Notice how your body and mind feel. Extend gradually to 24 hours.
          </p>

          {/* Checklist Image */}
          <div className="mb-8">
            <img 
              src="/images/onedayoff-checklist.png" 
              alt="One Day Off preparation checklist with practical tips"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          <h2 className="text-2xl font-bold text-fern mb-4">The Ripple Effect</h2>
          <p className="text-stone mb-6 leading-relaxed">
            People who practice One Day Off often report:
          </p>
          <ul className="space-y-3 mb-8 text-stone">
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Lower anxiety by Sunday night</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Improved patience with kids or partners</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>More creative ideas from quiet time</span>
            </li>
            <li className="flex items-start">
              <span className="text-fern mr-3">•</span>
              <span>Better Monday energy and focus</span>
            </li>
          </ul>

          <p className="text-stone mb-8 leading-relaxed">
            As Tiffany Shlain (author of 24/6) puts it: <em>&ldquo;When you turn off screens, you turn on the rest of your life.&rdquo;</em><sup>2</sup>
          </p>

          <div className="bg-fern text-white p-6 rounded-xl text-center mb-8">
            <p className="text-xl">
              📱 &ldquo;One day off isn&apos;t about losing connection. It&apos;s about regaining yourself.&rdquo; – QYD
            </p>
          </div>
        </div>

        {/* References */}
        <div className="border-t border-sage/20 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-fern mb-4">References</h3>
          <div className="text-sm text-stone space-y-2">
            <p>1. Sonnentag, S., & Fritz, C. (2007). The Recovery Experience Questionnaire: Development and validation of a measure for assessing recuperation and unwinding from work. Journal of Occupational Health Psychology, 12(3), 204–221.</p>
            <p>2. Shlain, T. (2019). <em>24/6: The Power of Unplugging One Day a Week</em>. Gallery Books.</p>
          </div>
        </div>

        {/* Suggested Internal Links */}
        <div className="border-t border-sage/20 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-fern mb-4">Related Articles</h3>
          <div className="space-y-2 text-stone">
            <p>• <Link href="/blog/4" className="text-sage hover:text-fern transition-colors">The First 30 Minutes: How a Phone-Free Morning Can Change Your Life</Link></p>
            <p>• <Link href="/blog/5" className="text-sage hover:text-fern transition-colors">The 7-Day App Cleanse: Reset Your Home Screen</Link></p>
            <p>• <Link href="/resources" className="text-sage hover:text-fern transition-colors">How to Create Phone-Free Spaces That Support Real Rest</Link></p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-sage">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-fern hover:text-green-800 transition-colors"
            >
              ← Back to Insights
            </Link>
            <Link 
              href="/challenge"
              className="bg-fern hover:bg-fern/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Our 7-Day Reset
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}