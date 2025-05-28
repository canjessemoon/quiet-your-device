import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-fern via-mist to-sage">
        {/* Hero Background Placeholder - Replace with hero.jpg */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJ0cmVlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KICAgICAgPHBhdGggZD0iTTIwIDVMMjUgMjBIMTVaIiBmaWxsPSIjNEY2RjUyIiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPHJlY3QgeD0iMTkiIHk9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIxNSIgZmlsbD0iIzRGNkY1MiIgb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI3RyZWVzKSIvPgo8L3N2Zz4K')"
             }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Less Phone.<br />
            <span className="text-gold">More Life.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tired of mindless scrolling and phantom buzzes? Reclaim your time, focus, 
            and peace of mind with simple, science-backed strategies to help you unplug.
          </p>
          
          <Link 
            href="/challenge"
            className="inline-flex items-center bg-fern text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-fern/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            👉 Start Your Digital Detox
          </Link>
        </div>
        
        {/* Replace with hero.jpg note */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-2 rounded">
          Replace with hero.jpg - Forest path background
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-fern mb-4">
              💡 Why It Matters
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                We live in a world of constant notifications, endless feeds, and always-on communication. 
                It&apos;s easy to feel overwhelmed, anxious, or simply burnt out from being &quot;on&quot; all the time.
              </p>
              
              <p className="text-lg leading-relaxed">
                The average person taps their phone over <strong className="text-fern">2,600 times per day</strong> — 
                and most of us don&apos;t even realize it.
              </p>
              
              <div className="bg-mist p-6 rounded-lg">
                <h3 className="font-semibold text-fern mb-4">If you&apos;ve ever:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-fern mr-2">•</span>
                    Checked your phone and forgotten why you picked it up
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-2">•</span>
                    Felt phantom vibrations
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-2">•</span>
                    Opened apps on autopilot
                  </li>
                  <li className="flex items-start">
                    <span className="text-fern mr-2">•</span>
                    Felt anxious when your phone isn&apos;t nearby
                  </li>
                </ul>
                <p className="mt-4 text-fern font-medium">...you&apos;re not alone.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mist to-sage p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-fern mb-4">Average Daily Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-stone">2,600+</div>
                    <div className="text-sm text-stone/80">Phone touches per day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-stone">3+ hours</div>
                    <div className="text-sm text-stone/80">Screen time daily</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-stone">96 times</div>
                    <div className="text-sm text-stone/80">Checking phone daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-fern mb-4">
              🌱 How We Help
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-stone max-w-3xl mx-auto">
              This site offers practical, gentle approaches to building healthier digital habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-fern mb-2">Practical Steps</h3>
              <p className="text-sm">Take control of your screen time with actionable strategies</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-fern mb-2">Expert-Backed</h3>
              <p className="text-sm">Science-based advice on building healthier digital habits</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-semibold text-fern mb-2">Mental Health</h3>
              <p className="text-sm">Support through recommended tools and resources</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-fern mb-2">Daily Challenges</h3>
              <p className="text-sm">Detox one day at a time with guided activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-fern mb-4">
              🧰 Top Tools We Recommend
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-stone">
              These apps support mental health, focus, and screen-time reduction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-mist p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-fern rounded-full flex items-center justify-center text-white font-bold mr-4">
                  🧘‍♂️
                </div>
                <div>
                  <h3 className="font-semibold text-fern">Calm</h3>
                  <p className="text-sm text-stone">Meditation & sleep</p>
                </div>
              </div>
              <p className="text-sm">Guided meditations, sleep stories, and breathing exercises to reduce stress and improve focus.</p>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-fern rounded-full flex items-center justify-center text-white font-bold mr-4">
                  🌳
                </div>
                <div>
                  <h3 className="font-semibold text-fern">Forest</h3>
                  <p className="text-sm text-stone">Gamified focus</p>
                </div>
              </div>
              <p className="text-sm">Plant virtual trees while you focus. Stay concentrated and build a beautiful forest over time.</p>
            </div>
            
            <div className="bg-mist p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-fern rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ⛔
                </div>
                <div>
                  <h3 className="font-semibold text-fern">Freedom</h3>
                  <p className="text-sm text-stone">Block distractions</p>
                </div>
              </div>
              <p className="text-sm">Block distracting apps and websites across all your devices to maintain focus.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/resources"
              className="inline-flex items-center text-fern font-semibold hover:text-fern/80 transition-colors"
            >
              View All Resources 
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge CTA Section */}
      <section className="py-16 bg-fern text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🧪 Ready for the 7-Day Challenge?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Try our free digital detox. Each day gives you one small mission designed to 
            reduce distractions, create intentional tech use, and improve your well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/challenge"
              className="bg-white text-fern px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Start 7-Day Challenge
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-fern transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
