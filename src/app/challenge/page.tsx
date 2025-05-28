'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Challenge() {
  const downloadCards = () => {
    // Placeholder for download functionality
    alert('Download functionality coming soon! For now, you can right-click and save individual cards.');
  };  const detoxCards = [
    {
      day: 1,
      title: "Phone-Free Morning",
      description: "Keep your phone in another room for the first hour after waking up.",
      image: "/detox-cards/day1.png"
    },
    {
      day: 2,
      title: "Notification Cleanse",
      description: "Turn off all non-essential notifications on your phone.",
      image: "/detox-cards/day2.png"
    },
    {
      day: 3,
      title: "Mindful Meals",
      description: "Eat one meal today without any screens.",
      image: "/detox-cards/day3.png"
    },
    {
      day: 4,
      title: "Phone-Free Walk",
      description: "Take a 15-minute walk without your phone.",
      image: "/detox-cards/day4.png"
    },
    {
      day: 5,
      title: "Real Conversations",
      description: "Have a phone-free conversation with someone.",
      image: "/detox-cards/day5.png"
    },
    {
      day: 6,
      title: "Creative Time",
      description: "Spend 30 minutes on a creative activity without digital input.",
      image: "/detox-cards/day6.png"
    },
    {
      day: 7,
      title: "Digital Sabbath",
      description: "Take a full morning or afternoon off from all non-essential technology.",
      image: "/detox-cards/day7.png"
    }
  ];

  return (
    <div className="py-16">      {/* Hero Section */}      <section className="bg-gradient-to-br from-fern to-stone py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-beige">
            7-Day Digital Detox Challenge
          </h1>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-stone">
            A gentle, progressive approach to reducing screen time and building 
            healthier digital habits. One small step each day.
          </p>            <div className="bg-white/10 p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-fern">What You&apos;ll Get:</h3>
            <ul className="text-left space-y-2 text-sm text-stone">
              <li>• Daily challenges that take 5-10 minutes</li>
              <li>• Downloadable card deck (mobile + print)</li>
              <li>• Science-backed strategies</li>
              <li>• No judgment, just gentle guidance</li>
            </ul>
            <button 
              onClick={downloadCards}
              className="mt-4 bg-gold hover:bg-gold/90 text-stone px-6 py-2 rounded-full font-semibold transition-colors w-full"
            >
              📥 Download Cards
            </button>
          </div>
        </div>
      </section>

      {/* Challenge Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-fern mb-2">7 Days, 7 Challenges</h3>
              <p className="text-sm text-stone">
                Each day introduces one small, manageable challenge designed to build awareness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-fern mb-2">Gentle Progress</h3>
              <p className="text-sm text-stone">
                No extreme measures. Just mindful steps toward healthier digital habits
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-fern mb-2">Real Life Application</h3>
              <p className="text-sm text-stone">
                Practical strategies you can implement immediately in your daily routine
              </p>
            </div>
          </div>

          <div className="bg-mist p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-fern mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-stone mb-6">
              Download the complete card deck or browse the challenges below. 
              You can start any day — there&apos;s no &quot;perfect&quot; time to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-fern text-white px-6 py-3 rounded-lg font-medium hover:bg-fern/90 transition-colors">
                📥 Download PDF (Coming Soon)
              </button>
              <button className="border-2 border-fern text-fern px-6 py-3 rounded-lg font-medium hover:bg-fern hover:text-white transition-colors">
                📱 View on Mobile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detox Cards Grid */}
      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">The 7-Day Challenge Cards</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-stone">
              Click any card to see the full challenge details
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {detoxCards.map((card) => (
              <div 
                key={card.day} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={card.image}
                    alt={`Day ${card.day}: ${card.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-fern text-white text-sm font-bold px-2 py-1 rounded-full mr-2">
                      Day {card.day}
                    </span>
                  </div>
                  <h3 className="font-semibold text-fern mb-2">{card.title}</h3>
                  <p className="text-sm text-stone">{card.description}</p>
                </div>
              </div>
            ))}
            
            {/* Placeholder cards for remaining days */}
            {[3, 4, 5, 6, 7].map((day) => (
              <div 
                key={day} 
                className="bg-white rounded-lg shadow-md overflow-hidden opacity-50"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-mist to-sage flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📅</div>
                    <div className="font-bold">Day {day}</div>
                    <div className="text-sm">Coming Soon</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-sage text-white text-sm font-bold px-2 py-1 rounded-full mr-2">
                      Day {day}
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone mb-2">Challenge {day}</h3>
                  <p className="text-sm text-stone/60">More challenges coming soon...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-fern mb-4">📖 What People Are Saying</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mist p-6 rounded-lg">              <p className="italic text-stone mb-4">
                &quot;I used to reach for my phone the moment I woke up. After trying the 7-day challenge, 
                my mornings are now calm, intentional, and phone-free.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-fern rounded-full flex items-center justify-center text-white font-bold mr-3">
                  D
                </div>
                <div>
                  <div className="font-semibold text-fern">David</div>
                  <div className="text-sm text-stone">Toronto</div>
                </div>
              </div>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">              <p className="italic text-stone mb-4">
                &quot;I felt like I was always &apos;on call.&apos; Disconnecting helped me feel present 
                with my family again.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-fern rounded-full flex items-center justify-center text-white font-bold mr-3">
                  R
                </div>
                <div>
                  <div className="font-semibold text-fern">Reema</div>
                  <div className="text-sm text-stone">Vancouver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Call to Action */}
      <section className="py-16 bg-fern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-beige">
            Ready to Quiet Your Device?
          </h2>
          <p className="text-xl mb-8 text-beige">
            Start with Day 1 today. No sign-up required, no pressure. 
            Just you, taking back control of your time and attention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">            <Link 
              href="/challenge"
              className="bg-white text-fern px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors inline-block"
            >
              Begin Day 1 Challenge
            </Link><a 
              href="/about"
              className="border-2 border-beige text-beige px-8 py-4 rounded-lg text-lg font-semibold hover:bg-beige hover:text-fern transition-colors inline-block"
            >
              Learn More About QYD
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
