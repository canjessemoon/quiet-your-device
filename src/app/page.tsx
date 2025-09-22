import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <main>      {/* Hero Section */}      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(79, 111, 82, 0.7), rgba(93, 111, 119, 0.7)), url('/images/hero.png')`
        }}
      >
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Less Phone.<br />More Life.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Break free from digital overwhelm. Rediscover presence, connection, and joy in the real world.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog/7"
              className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
            >
              Read the Latest Insight
            </Link>
            <Link 
              href="/resources"
              className="border-2 border-white/70 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-fern mb-4">
              This Week&apos;s Insight
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <img 
                src="/images/onedayoff-herolist.png" 
                alt="One Day Off digital detox checklist and planning illustration"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-mist text-sage px-3 py-1 rounded-full text-sm font-medium">Research</span>
                <span className="text-stone text-sm">October 2025</span>
                <span className="text-stone text-sm">7 min read</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-fern mb-4">
                One Day Off: How a Weekly Digital Reset Restores Your Brain
              </h3>
              
              <p className="text-lg text-stone mb-6 leading-relaxed max-w-2xl">
                Taking one day off from screens each week gives your mind and body a reset. Research shows regular disconnection improves mood, focus, sleep, and relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog/7"
                  className="bg-gold hover:bg-gold/90 text-stone px-6 py-3 rounded-full font-semibold transition-colors inline-block text-center"
                >
                  Read More →
                </Link>
                <Link 
                  href="#newsletter"
                  className="text-sage hover:text-fern font-medium transition-colors inline-block text-center"
                >
                  Subscribe to Weekly Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-beige py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fern text-center mb-12">
            Why It Matters
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-stone mb-8 leading-relaxed">
              We live in a world of constant notifications, endless feeds, and always-on communication. It&apos;s easy to feel overwhelmed, anxious, or simply burnt out from being &ldquo;on&rdquo; all the time.
            </p>
            
            <p className="text-xl text-fern font-bold">
              You can reset. Gently.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fern text-center mb-12">
            How We Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insights */}
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fern mb-4">Insights</h3>
              <p className="text-stone mb-6">
                Research-backed articles and stories to help you understand the psychology behind digital habits and find your path to balance.
              </p>
              <Link 
                href="/blog" 
                className="text-sage hover:text-fern font-medium transition-colors"
              >
                Read Articles →
              </Link>
            </div>
            
            {/* 7-Day Reset */}
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fern mb-4">7-Day Reset</h3>
              <p className="text-stone mb-6">
                A gentle one-week experiment to help you reset your relationship with technology and rediscover what matters most.
              </p>
              <Link 
                href="/challenge" 
                className="text-sage hover:text-fern font-medium transition-colors"
              >
                Try the Reset →
              </Link>
            </div>
            
            {/* Resources */}
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-fern mb-4">Resources</h3>
              <p className="text-stone mb-6">
                Curated books, apps, and tools recommended by experts to support your digital wellness journey.
              </p>
              <Link 
                href="/resources" 
                className="text-sage hover:text-fern font-medium transition-colors"
              >
                Explore Tools →
              </Link>
            </div>
          </div>
        </div>
      </section>      {/* Challenge CTA Section */}
      <section className="bg-fern py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-6">
            Ready to Try the 7-Day Reset?
          </h2>
          <p className="text-xl text-beige mb-8 max-w-2xl mx-auto">
            A gentle experiment to help you rediscover balance with technology.
          </p>
          <Link 
            href="/challenge"
            className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
          >
            Start the 7-Day Reset
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fern mb-4">
              📧 Subscribe to Weekly Insights
            </h2>
            <p className="text-xl text-stone max-w-2xl mx-auto">
              One email a week with a fresh insight, a gentle challenge, and a practical tool to try. No spam.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-mist p-8 rounded-xl text-center">
              {/* Newsletter Signup Form */}
              <NewsletterForm />
              
              <p className="text-sm text-sage mt-4">
                ✨ Unsubscribe anytime. We respect your inbox and your time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}