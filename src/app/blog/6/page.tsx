import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Social Scroll Trap: How Infinite Feeds Hijack Your Mind | QYD Blog",
  description: "Infinite scroll and autoplay weren't accidents — they were engineered to keep you hooked. Learn how to reclaim your attention and turn scrolling into intentional use.",
  alternates: {
    canonical: 'https://quietyourdevice.com/blog/6',
  },
  openGraph: {
    title: "The Social Scroll Trap: How Infinite Feeds Hijack Your Mind",
    description: "Infinite scroll and autoplay weren't accidents — they were engineered to keep you hooked. Learn how to reclaim your attention and turn scrolling into intentional use.",
    type: 'article',
    url: 'https://quietyourdevice.com/blog/6',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Social Scroll Trap: How Infinite Feeds Hijack Your Mind",
    description: "Infinite scroll and autoplay weren't accidents — they were engineered to keep you hooked.",
    creator: '@quietyourdevice',
  },
};

export default function BlogPost6() {
  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="text-sm">
          <Link href="/blog" className="text-stone hover:text-fern transition-colors">
            ← Back to Blog
          </Link>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-fern mb-6 leading-tight">
            The Social Scroll Trap: How Infinite Feeds Hijack Your Mind
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-stone mb-6">
            <span>QYD Team</span>
            <span>•</span>
            <span>September 2025</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Science</span>
          </div>
        </header>

        {/* TL;DR */}
        <div className="bg-mist border-l-4 border-fern p-6 mb-8">
          <h2 className="text-lg font-semibold text-fern mb-3">TL;DR</h2>
          <p className="text-stone">
            Infinite scroll and autoplay weren&apos;t accidents — they were engineered to keep you hooked. They hijack your brain&apos;s reward system, making it harder to stop than you think. The good news: with the right tools and rituals, you can reclaim your attention and turn scrolling into intentional use.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-fern mb-4">The Invention That Changed Everything</h2>
          <p className="text-stone mb-6 leading-relaxed">
            Back in 2006, UX designer Aza Raskin invented infinite scroll. The idea was simple: remove the &ldquo;stop&rdquo; button. No pagination. No natural end. Just a bottomless feed.
          </p>
          <p className="text-stone mb-6 leading-relaxed">
            Raskin later admitted he regretted the invention, calling it a tool that &ldquo;traps people into spending more time than they want.&rdquo; Combined with autoplay video and algorithmic feeds, it has become one of the most powerful attention-grabbing designs in history.
          </p>
          <blockquote className="border-l-4 border-fern pl-6 italic text-lg text-stone mb-8">
            &ldquo;If you don&apos;t design for people&apos;s values, someone else will design for their impulses.&rdquo; – Aza Raskin
          </blockquote>

          <h2 className="text-2xl font-bold text-fern mb-4">Why Your Brain Can&apos;t Stop</h2>
          <p className="text-stone mb-4 leading-relaxed">
            Infinite scroll isn&apos;t just convenient — it&apos;s addictive by design. It taps into the variable reward system: the same principle that makes slot machines so compelling.
          </p>
          <p className="text-stone mb-4 leading-relaxed">
            Sometimes you see a funny video, inspiring post, or message from a friend.
          </p>
          <p className="text-stone mb-4 leading-relaxed">
            Other times you see nothing valuable at all.
          </p>
          <p className="text-stone mb-6 leading-relaxed">
            That unpredictability keeps your dopamine system firing. You never know when the next swipe will deliver something rewarding — so you keep swiping.
          </p>
          <p className="text-stone mb-8 leading-relaxed">
            Research shows that this &ldquo;variable ratio reinforcement&rdquo; schedule is the most powerful way to shape behavior.<sup>1</sup>
          </p>

          <h2 className="text-2xl font-bold text-fern mb-4">The Hidden Costs</h2>
          <p className="text-stone mb-4 leading-relaxed">
            Scrolling feels harmless in the moment. But over time, it adds up:
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <strong className="text-fern">Attention Drain:</strong> <span className="text-stone">Every swipe fragments your focus. <a href="/api/amazon?asin=1335449418" target="_blank" rel="noopener sponsored" className="text-fern hover:text-green-800 underline decoration-1 underline-offset-2 transition-colors">Gloria Mark&apos;s work</a> shows it takes an average of 23 minutes to fully refocus after a distraction.<sup>2</sup></span>
            </div>
            <div>
              <strong className="text-fern">Sleep Disruption:</strong> <span className="text-stone">The endless &ldquo;just one more video&rdquo; cycle pushes bedtimes later.</span>
            </div>
            <div>
              <strong className="text-fern">Mood Shifts:</strong> <span className="text-stone">Social comparison spikes anxiety, while outrage-driven content raises cortisol.</span>
            </div>
            <div>
              <strong className="text-fern">Lost Hours:</strong> <span className="text-stone">The average person spends 2.5+ hours per day on social media. That&apos;s more than 38 full days each year.<sup>3</sup></span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-fern mb-4">How to Break Free from the Scroll</h2>
          <p className="text-stone mb-6 leading-relaxed">
            You don&apos;t need to delete every app. But you can put friction back into the system — and give yourself natural stopping points.
          </p>

          <h3 className="text-xl font-semibold text-fern mb-3">Set a Scroll Limit</h3>
          <p className="text-stone mb-4 leading-relaxed">
            Use iOS App Limits or Android Digital Wellbeing to cap feed-based apps at 30–45 minutes per day.
          </p>
          <p className="text-stone mb-6 leading-relaxed">
            When the limit hits, ask: &ldquo;Did this time reflect my values?&rdquo;
          </p>

          <h3 className="text-xl font-semibold text-fern mb-3">Create Endpoints</h3>
          <p className="text-stone mb-4 leading-relaxed">
            Follow accounts that post in batches (e.g., newsletters, blogs, podcasts) rather than endless feeds.
          </p>
          <p className="text-stone mb-6 leading-relaxed">
            Use tools to insert reminders into your feeds.
          </p>

          <h3 className="text-xl font-semibold text-fern mb-3">Disable Autoplay</h3>
          <p className="text-stone mb-6 leading-relaxed">
            Turn off YouTube and TikTok autoplay. This forces a conscious choice before the next video starts.
          </p>

          <h3 className="text-xl font-semibold text-fern mb-3">Reclaim Rituals</h3>
          <p className="text-stone mb-4 leading-relaxed">
            Replace &ldquo;scroll reflexes&rdquo; with intentional pauses: take three breaths, drink water, stretch.
          </p>
          <p className="text-stone mb-8 leading-relaxed">
            Try our <Link href="/challenge" className="text-fern hover:text-green-800 underline decoration-1 underline-offset-2 transition-colors">7-Day App Cleanse</Link> for a structured reset.
          </p>

          <h2 className="text-2xl font-bold text-fern mb-4">The Peace on the Other Side</h2>
          <p className="text-stone mb-6 leading-relaxed">
            Once you step out of the scroll trap, something surprising happens: you realize that most of what you missed wasn&apos;t important at all.
          </p>
          <p className="text-stone mb-8 leading-relaxed">
            What you gain back — time, focus, calm — is worth far more than the next swipe.
          </p>

          {/* Quote */}
          <div className="bg-mist p-8 rounded-lg text-center mb-8">
            <p className="text-lg italic text-stone mb-2">
              📱 &ldquo;Infinite scroll is infinite distraction. You don&apos;t need endless content. You need intentional moments.&rdquo;
            </p>
            <p className="text-fern font-semibold">– QYD</p>
          </div>

          {/* References */}
          <h2 className="text-2xl font-bold text-fern mb-4">References</h2>
          <div className="text-sm text-stone space-y-2 mb-8">
            <p>1. Skinner, B. F. (1953). Science and Human Behavior. Free Press.</p>
            <p>2. Mark, G. (2023). <a href="/api/amazon?asin=1335449418" target="_blank" rel="noopener sponsored" className="text-fern hover:text-green-800 underline decoration-1 underline-offset-2 transition-colors">Attention Span: A Groundbreaking Way to Restore Balance, Happiness and Productivity</a>. Hanover Square Press.</p>
            <p>3. DataReportal. (2025). Digital 2025: Global Digital Overview. <a href="https://datareportal.com/reports/?tag=Digital+2025" target="_blank" rel="noopener" className="text-fern hover:text-green-800 underline decoration-1 underline-offset-2 transition-colors">https://datareportal.com/reports/?tag=Digital+2025</a></p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-sage">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-fern hover:text-green-800 transition-colors"
            >
              ← Back to Blog
            </Link>
            <Link 
              href="/challenge" 
              className="inline-flex items-center gap-2 bg-fern hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Start 7-Day Challenge →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
