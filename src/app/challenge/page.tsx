'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Challenge() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const challenges = [
    {
      day: 1,
      title: "Notification Cleanse",
      description: "Turn off all non-essential notifications on your phone",
      duration: "10 minutes",
      image: "/detox-cards/QYD_Day_01_v2.png",
      fullDescription: "Reduce the number of times your phone demands your attention throughout the day. Go through your notification settings and turn off everything except truly essential alerts.",
      tips: [
        "Keep only calls, texts, and emergency alerts",
        "Turn off social media, email, and app notifications",
        "Use Do Not Disturb during focused work time",
        "Check apps when you choose to, not when they tell you to"
      ]
    },
    {
      day: 2,
      title: "30 Minutes Phone-Free",
      description: "Spend 30 minutes away from your phone today",
      duration: "30 minutes",
      image: "/detox-cards/QYD_Day_02_v2.png",
      fullDescription: "Take a dedicated break from your phone for 30 minutes. Use this time to reconnect with yourself and your immediate environment without digital distractions.",
      tips: [
        "Put your phone in another room or drawer",
        "Choose an activity you enjoy - reading, walking, cooking",
        "Notice any urges to check your phone and let them pass",
        "Use this time for reflection or mindful awareness"
      ]
    },
    {
      day: 3,
      title: "Mindful Meals",
      description: "Eat one meal today without any screens",
      duration: "30 minutes",
      image: "/detox-cards/QYD_Day_03_v2.png",
      fullDescription: "Rediscover the simple pleasure of eating without distraction. Choose one meal today to eat mindfully, paying attention to taste, texture, and the company around you.",
      tips: [
        "Put all devices away from the table",
        "Chew slowly and notice flavors",
        "If eating with others, engage in conversation",
        "Practice gratitude for your food"
      ]
    },
    {
      day: 4,
      title: "App Cleanse",
      description: "Delete or hide apps that waste your time",
      duration: "15 minutes",
      image: "/detox-cards/QYD_Day_04_v2.png",
      fullDescription: "Clean up your phone by removing or organizing apps that don't serve your well-being. Focus on apps that drain your time and attention without adding value.",
      tips: [
        "Delete apps you use mindlessly or compulsively",
        "Move time-wasting apps off your home screen",
        "Keep only apps that serve a clear purpose",
        "Notice which apps you reach for out of habit"
      ]
    },
    {
      day: 5,
      title: "Real Conversations",
      description: "Have one phone-free conversation today (10–20 minutes)",
      duration: "10-20 minutes",
      image: "/detox-cards/QYD_Day_05_v2.png",
      fullDescription: "Connect with another person without the barrier of screens. Put phones away and have a genuine, focused conversation with a friend, family member, or colleague. Removing the device signals attention and deepens rapport.",
      tips: [
        "Put phones in another room and use Do Not Disturb",
        "Sit face-to-face for better connection",
        "Make eye contact and actively listen",
        "Notice how the conversation feels different without phones nearby",
        "Boost: Make dinner a phone-free conversation"
      ]
    },
    {
      day: 6,
      title: "Creative Time",
      description: "Spend 30 minutes creating with no digital input",
      duration: "30 minutes",
      image: "/detox-cards/QYD_Day_06_v2.png",
      fullDescription: "Rediscover the joy of creating with your hands. Spend time on any creative activity that doesn't involve screens. Hands-on making restores focus and sense of progress.",
      tips: [
        "Pick pen & paper, an instrument, or a craft",
        "Set a simple timer for 30 minutes",
        "Don't worry about the outcome, focus on the process",
        "Notice how your mind feels when creating",
        "Boost: Repeat tomorrow or extend to 45–60 minutes"
      ]
    },
    {
      day: 7,
      title: "Phone-Free Walk",
      description: "Take a 15-minute walk without your phone",
      duration: "15 minutes",
      image: "/detox-cards/QYD_Day_07_v2.png",
      fullDescription: "Step outside and reconnect with the world around you. Leave your phone behind and take a short walk. A brief movement break resets mood and attention.",
      tips: [
        "Tell someone your route for safety",
        "Leave the phone at home or in the car",
        "Notice five sights or sounds you usually miss",
        "Let your mind wander freely",
        "Boost: Go for 30 minutes or choose a nature path"
      ]
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
              <li>• Daily challenges that take 5-30 minutes</li>
              <li>• Progressive difficulty that builds habits</li>
              <li>• Science-backed strategies</li>
              <li>• No judgment, just gentle guidance</li>
            </ul>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div 
                key={challenge.day} 
                onClick={() => setSelectedChallenge(challenge.day)}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer border border-mist"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={challenge.image}
                    alt={`Day ${challenge.day}: ${challenge.title}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-fern text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Day {challenge.day}
                    </span>
                    <span className="text-xs text-sage font-medium">
                      {challenge.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-fern mb-2 leading-tight">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed mb-4">
                    {challenge.description}
                  </p>
                  <button className="text-fern text-sm font-medium hover:text-fern/80 transition-colors">
                    Start Day {challenge.day} →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Download PDF Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-sm border border-green-200 p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Download All Cards
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Get the complete 7-day challenge as a printable PDF
              </p>
              <a 
                href="/detox-cards/QYD_7-Day_Challenge_Cards_v2_FINAL.pdf"
                download="QYD_7-Day_Challenge_Cards_v2_FINAL.pdf"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>📥</span>
                Download PDF
              </a>
            </div>
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
            
            <div className="bg-mist p-6 rounded-lg">
              <p className="italic text-stone mb-4">
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
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-fern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-beige">
            Ready to Quiet Your Device?
          </h2>
          <p className="text-xl mb-8 text-beige">
            Start with Day 1 today. No sign-up required, no pressure. 
            Just you, taking back control of your time and attention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-fern px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Start Day 1 Now
            </button>
            <Link 
              href="/about"
              className="border-2 border-beige text-beige px-8 py-4 rounded-lg text-lg font-semibold hover:bg-beige hover:text-fern transition-colors inline-block"
            >
              Learn More About QYD
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Challenge Details */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <span className="bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Day {selectedChallenge}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {challenges.find(c => c.day === selectedChallenge)?.duration}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedChallenge(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Challenge Image */}
              <div className="aspect-[4/3] relative mb-6 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={challenges.find(c => c.day === selectedChallenge)?.image || ''}
                  alt={`Day ${selectedChallenge}: ${challenges.find(c => c.day === selectedChallenge)?.title}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Challenge Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-800">
                  {challenges.find(c => c.day === selectedChallenge)?.title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  {challenges.find(c => c.day === selectedChallenge)?.fullDescription}
                </p>

                <div>
                  <h3 className="font-semibold text-green-800 mb-3">Tips for Success:</h3>
                  <ul className="space-y-2">
                    {challenges.find(c => c.day === selectedChallenge)?.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setSelectedChallenge(null)}
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1"
                  >
                    Start This Challenge
                  </button>
                  <button 
                    onClick={() => setSelectedChallenge(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Last Updated */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: September 1, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
