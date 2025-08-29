import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About QYD | Quiet Your Device",
  description: "Learn about our mission to help people develop healthier relationships with technology. Discover why we created Quiet Your Device and our gentle, non-preachy approach to digital wellness.",
  alternates: {
    canonical: 'https://quietyourdevice.com/about',
  },
  openGraph: {
    title: "About QYD | Quiet Your Device",
    description: "Learn about our mission to help people develop healthier relationships with technology and our gentle approach to digital wellness.",
    type: 'website',
    url: 'https://quietyourdevice.com/about',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About QYD | Quiet Your Device",
    description: "Learn about our mission to help people develop healthier relationships with technology.",
    creator: '@quietyourdevice',
  },
  keywords: ['digital wellness mission', 'quiet your device story', 'healthy technology habits', 'mindful tech use'],
};

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-mist py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-fern mb-6">
            About QYD
          </h1>
          <p className="text-xl text-stone leading-relaxed">
            We&apos;re building tools to help people disconnect from their devices and reconnect with life.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">💬 Our Mission</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-stone">
            <p className="text-xl leading-relaxed mb-8">
              Life is better when you&apos;re present. We&apos;re here to help you take back control 
              of your time, energy, and attention.
            </p>
            
            <p className="leading-relaxed mb-6">
              In a world where the average person checks their phone 96 times per day, 
              we believe there&apos;s a better way to interact with technology. QYD (Quiet Your Device) 
              was created to provide gentle, practical tools for building healthier digital habits.
            </p>
            
            <p className="leading-relaxed mb-6">
              We&apos;re not anti-technology. We&apos;re pro-awareness. Our approach focuses on 
              intentional use rather than complete avoidance, helping you create boundaries 
              that work for your life.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 bg-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">📱 Why We Exist</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed mb-6">
              If you&apos;ve ever opened your phone without knowing why... you&apos;re not alone.
            </p>
            
            <p className="leading-relaxed mb-6">
              Digital overwhelm is real. The constant ping of notifications, the endless scroll 
              of social feeds, and the pressure to always be &quot;on&quot; can leave us feeling anxious, 
              distracted, and disconnected from what truly matters.
            </p>
            
            <p className="leading-relaxed mb-6">
              We created QYD because we experienced this ourselves. We were tired of feeling 
              busy but unproductive, connected but lonely, informed but overwhelmed.
            </p>
              <div className="bg-fern/10 p-6 rounded-lg">
              <p className="text-fern font-medium text-center italic">
                &quot;We&apos;re not anti-tech. We&apos;re pro-awareness.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">🛠 What We Offer</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                🗓 7-Day Digital Detox Challenge
              </h3>
              <p className="leading-relaxed">
                A gentle, progressive approach to reducing screen time. Each day includes 
                one small, manageable challenge designed to help you build awareness and 
                create healthier habits.
              </p>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                🧘 Mental Wellness Tools
              </h3>
              <p className="leading-relaxed">
                Curated recommendations for apps, resources, and practices that support 
                mindfulness, focus, and overall digital wellness.
              </p>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                📱 Recommended Apps
              </h3>
              <p className="leading-relaxed">
                Carefully selected tools like Calm, Forest, and One Sec that help you 
                build better relationships with technology.
              </p>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                📋 Printable Resources
              </h3>
              <p className="leading-relaxed">
                Downloadable worksheets, habit cards, and reflection prompts you can 
                use offline to support your digital wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Who We Are Section */}
      <section className="py-16 bg-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-fern mb-6">👤 Who&apos;s Behind QYD</h2>
          
          <div className="bg-white/10 p-8 rounded-lg">
            <p className="text-lg leading-relaxed mb-6 text-stone">
              QYD was built by people who were tired of being busy but disconnected. 
              We&apos;re not productivity gurus or digital minimalism extremists.
            </p>
            
            <p className="leading-relaxed mb-6 text-stone">
              We&apos;re regular people who wanted to use technology more intentionally, 
              spend more time present with our families, and create space for the 
              things that truly matter.
            </p>
            
            <p className="leading-relaxed text-stone">
              We&apos;re building these tools to help ourselves — and sharing them 
              because we believe they might help you too.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-fern mb-8">Join the Movement</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                📩 Weekly Unplugged Email
              </h3>
              <p className="leading-relaxed mb-4">
                One email a week. No fluff. Just real advice, curated tools, 
                and a new idea to help you disconnect and recharge.
              </p>
              <button className="bg-fern text-white px-6 py-3 rounded-lg font-medium hover:bg-fern/90 transition-colors">
                Coming Soon
              </button>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fern mb-4">
                🌱 Start Today
              </h3>
              <p className="leading-relaxed mb-4">
                Ready to begin your digital wellness journey? 
                Try our 7-day challenge and take the first step toward a more mindful relationship with technology.
              </p>
              <a 
                href="/challenge"
                className="bg-fern text-white px-6 py-3 rounded-lg font-medium hover:bg-fern/90 transition-colors inline-block"
              >
                Try the Challenge
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
