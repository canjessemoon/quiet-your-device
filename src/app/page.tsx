import Link from 'next/link';

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
          </p>          <Link 
            href="/challenge"
            className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>      {/* Why It Matters Section */}
      <section className="bg-beige py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fern text-center mb-12">
            Why It Matters
          </h2>
          <div className="text-center max-w-3xl mx-auto">            <p className="text-lg text-stone mb-8 leading-relaxed">
              We live in a world of constant notifications, endless feeds, and always-on communication. It&apos;s easy to feel overwhelmed, anxious, or simply burnt out from being &ldquo;on&rdquo; all the time. The average person taps their phone over 2,600 times per day — and most of us don&apos;t even realize it.
            </p>
            
            <div className="text-left bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-lg text-stone mb-6">If you&apos;ve ever:</p>
              <ul className="space-y-4 text-stone">
                <li className="flex items-start">
                  <span className="text-fern mr-3">•</span>
                  Checked your phone and forgotten why you picked it up
                </li>
                <li className="flex items-start">
                  <span className="text-fern mr-3">•</span>
                  Felt phantom vibrations
                </li>
                <li className="flex items-start">
                  <span className="text-fern mr-3">•</span>
                  Opened apps on autopilot
                </li>                <li className="flex items-start">
                  <span className="text-fern mr-3">•</span>
                  Felt anxious when your phone isn&apos;t nearby
                </li>
              </ul>
            </div>
            
            <p className="text-xl text-fern font-semibold">...you&apos;re not alone.</p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fern text-center mb-12">
            🌱 How We Help
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-stone mb-8 leading-relaxed">
              This site offers:
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 text-left">
              <div className="bg-mist p-6 rounded-xl">
                <ul className="space-y-4 text-stone">
                  <li className="flex items-start">
                    <span className="text-fern mr-3 text-xl">•</span>
                    <span>Practical steps to take control of your screen time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-3 text-xl">•</span>
                    <span>Expert-backed advice on building healthier digital habits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-3 text-xl">•</span>
                    <span>Mental health support through recommended tools and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-3 text-xl">•</span>
                    <span>Challenges that help you detox, one day at a time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-3 text-xl">•</span>
                    <span>A community of people just like you, trying to unplug and reconnect with what really matters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fern text-center mb-12">
            Simple Tools for Digital Wellness
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-fern mb-4">Mindful Breaks</h3>
              <p className="text-stone mb-4">
                Gentle reminders to pause, breathe, and reconnect with the present moment.
              </p>
              <a href="#" className="text-sage hover:text-fern font-medium transition-colors">
                Learn More →
              </a>
            </div>
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-fern mb-4">Phone-Free Zones</h3>
              <p className="text-stone mb-4">
                Create sacred spaces in your home where devices take a back seat to life.
              </p>
              <a href="#" className="text-sage hover:text-fern font-medium transition-colors">
                Learn More →
              </a>
            </div>
            <div className="bg-mist p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-fern mb-4">Intentional Usage</h3>
              <p className="text-stone mb-4">
                Develop awareness around when and why you reach for your device.
              </p>
              <a href="#" className="text-sage hover:text-fern font-medium transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge CTA Section */}
      <section className="bg-fern py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-6">
            Ready to Begin?
          </h2>          <p className="text-xl text-beige mb-8 max-w-2xl mx-auto">
            Join thousands who&apos;ve discovered the freedom of a more intentional relationship with technology.
          </p><Link 
            href="/challenge"
            className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
          >
            Start 7-Day Challenge
          </Link>
        </div>
      </section>
    </main>
  );
}