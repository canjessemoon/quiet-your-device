import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogPostProps {
  params: Promise<{
    id: string;
  }>;
}

// This would typically come from a CMS or database
const getBlogPost = (id: string): BlogPost | null => {
  const posts: Record<string, BlogPost> = {    '1': {
      id: 1,
      title: "Your Phone's Buzz Is Stressing You Out (And What to Do About It)",
      content: `
        <div style="background-color: #f0f7f0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #4F6F52; margin-bottom: 10px;">TL;DR</h3>
          <p>Notifications aren&apos;t just distractions—they&apos;re micro-stressors. Each ping triggers a cortisol release, and with 60–80 notifications daily, that&apos;s a constant state of alertness. <a href="https://gloriamark.com/" target="_blank" rel="noopener noreferrer" style="color: #4F6F52; text-decoration: underline;">Dr. Gloria Mark&apos;s</a> research reveals it takes over 23 minutes to regain focus after an interruption. This perpetual cycle hampers productivity and well-being. Combat this by auditing your notifications, establishing phone-free zones, and embracing mindful pauses. Reclaim your attention and serenity.</p>
        </div>        <p style="margin-bottom: 20px;">Every ping, buzz, and flash creates a micro-stress response in our nervous system. Most of us don&apos;t realize how these constant interruptions are affecting our mental and physical well-being.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Science Behind Notification Stress</strong></h2>
        
        <p style="margin-bottom: 20px;">When your phone buzzes, your brain releases cortisol - the same hormone triggered during a fight-or-flight response. While one notification might seem harmless, the average person receives 60-80 notifications per day. That&apos;s 60-80 tiny stress responses, every single day.</p>
        
        <p style="margin-bottom: 20px;"><a href="https://gloriamark.com/" target="_blank" rel="noopener noreferrer" style="color: #4F6F52; text-decoration: underline;">Dr. Gloria Mark&apos;s</a> research at UC Irvine found that it takes an average of 23 minutes and 15 seconds to fully refocus after an interruption. With notifications coming every few minutes, we&apos;re never truly focused, never truly present.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Physical Impact</strong></h2>
        
        <p style="margin-bottom: 20px;">This constant state of partial attention doesn&apos;t just affect our productivity - it affects our bodies:</p>
        
        <ul style="margin-bottom: 20px;">
          <li>Elevated cortisol levels throughout the day</li>
          <li>Disrupted sleep patterns</li>
          <li>Increased anxiety and irritability</li>
          <li>Weakened immune system</li>
          <li>Difficulty with deep, restorative rest</li>        </ul>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Breaking the Cycle</strong></h2>
        
        <p style="margin-bottom: 20px;">The good news? You can break free from notification anxiety with some simple changes:</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">1. Audit Your Notifications</h3>
        
        <p style="margin-bottom: 20px;">Go through every app on your phone. Ask yourself: &ldquo;Is this notification helping me or distracting me?&rdquo; Turn off everything that isn&apos;t truly urgent.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">2. Create Notification-Free Zones</h3>
        
        <p style="margin-bottom: 20px;">Designate specific times and places as notification-free. Start with one hour before bed and the first hour after waking up.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">3. Use Do Not Disturb Strategically</h3>
        
        <p style="margin-bottom: 20px;">Schedule Do Not Disturb during your most important work, rest, and connection times. Allow only true emergencies to break through.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">4. Practice the Pause</h3>
          <p style="margin-bottom: 20px;">When you feel the urge to check your phone, pause for three breaths. Ask yourself: &ldquo;What am I really looking for right now?&rdquo;</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Peace on the Other Side</strong></h2>
        
        <p style="margin-bottom: 20px;">When you reduce notification anxiety, you&apos;re not just eliminating stress - you&apos;re creating space for presence, creativity, and genuine connection. You&apos;re giving your nervous system permission to rest and your mind permission to wander.</p>
        
        <p style="margin-bottom: 20px;">Start small. Pick one app today and turn off its notifications. Notice how it feels to not be interrupted by it. Then tomorrow, pick another one.</p>
          <p style="margin-bottom: 30px;">Your peace of mind is worth more than staying instantly connected to every digital demand on your attention.</p>

        <hr style="border: none; height: 2px; background-color: #A4B2A3; margin: 40px 0;" />

        <h2 style="margin-top: 30px; margin-bottom: 20px;">About Dr. Gloria Mark</h2>
        
        <p style="margin-bottom: 20px;">Dr. Gloria Mark is a Professor of Informatics at the University of California, Irvine, and a leading researcher in the field of digital distraction, attention, and the psychology of technology use. Her work explores how our interactions with digital devices impact focus, stress, and well-being. She is the author of the acclaimed book Attention Span, and her research has been featured in major outlets such as The New York Times, The Atlantic, and NPR.</p>
        
        <p style="margin-bottom: 20px;">🔗 <a href="https://gloriamark.com/" target="_blank" rel="noopener noreferrer" style="color: #4F6F52; text-decoration: underline;">gloriamark.com</a></p>
      `,
      author: "QYD Team",
      date: "May 28, 2025",
      readTime: "5 min read",
      category: "Mindfulness"
    },
    '2': {
      id: 2,
      title: "Why Your Brain Craves Digital Stimulation",
      content: `
        <p>Understanding why we reach for our phones can help us develop more compassionate and effective strategies for change. It's not about willpower - it's about understanding how our brains work.</p>
        
        <h2>The Dopamine Connection</h2>
        <p>Every time you get a like, a message, or even see a red notification badge, your brain releases dopamine. This isn't the "happiness" chemical many people think it is - dopamine is actually about anticipation and seeking.</p>
        
        <p>Here's the fascinating part: dopamine is released more during the anticipation of a reward than when you actually receive it. This is why checking your phone can feel both satisfying and never quite satisfying enough.</p>
        
        <h2>The Variable Reward Schedule</h2>
        <p>Social media platforms use what psychologists call "variable ratio reinforcement" - the same principle that makes gambling addictive. Sometimes you get a reward (interesting content, social validation), sometimes you don't. This unpredictability keeps you coming back.</p>
        
        <p>Your brain doesn't know if this check will be the one that brings something exciting, so it keeps you looking. It's not a character flaw - it's psychology.</p>
        
        <h2>The Attention Merchants</h2>
        <p>Tech companies employ teams of neuroscientists, behavioral economists, and game designers whose job is to capture and hold your attention. They use:</p>
        <ul>
          <li>Infinite scroll (no natural stopping point)</li>
          <li>Push notifications (interrupting your day)</li>
          <li>Social approval metrics (likes, hearts, reactions)</li>
          <li>Fear of missing out (FOMO-inducing features)</li>
          <li>Autoplay videos (keeping you watching)</li>
        </ul>
        
        <h2>Your Brain on Digital</h2>
        <p>Constant digital stimulation changes how your brain works:</p>
        <ul>
          <li><strong>Shortened attention span:</strong> We lose the ability to focus deeply</li>
          <li><strong>Increased anxiety:</strong> Always expecting the next notification</li>
          <li><strong>Reduced patience:</strong> We want everything instantly</li>
          <li><strong>Weakened memory:</strong> Why remember when you can Google?</li>
          <li><strong>Decreased creativity:</strong> No boredom means fewer breakthrough ideas</li>
        </ul>
        
        <h2>Working With Your Brain, Not Against It</h2>
        <p>Instead of fighting your brain's natural tendencies, work with them:</p>
        
        <h3>Replace, Don't Remove</h3>
        <p>When you feel the urge to check your phone, have a replacement ready: take three deep breaths, look out a window, stretch, or drink some water.</p>
        
        <h3>Create Positive Friction</h3>
        <p>Make checking your phone slightly more difficult. Move it to another room, turn it face down, or use airplane mode during focused work.</p>
        
        <h3>Design Your Environment</h3>
        <p>Put books, musical instruments, or art supplies where you used to keep your phone. Make good choices easier than bad ones.</p>
        
        <h3>Practice Delayed Gratification</h3>
        <p>When you want to check your phone, wait 60 seconds. Often, the urge will pass. This strengthens your "pause muscle."</p>
        
        <h2>Compassion, Not Criticism</h2>
        <p>Remember: your phone habits aren't a moral failing. They're the result of sophisticated technology designed to capture attention, meeting very human needs for connection, stimulation, and validation.</p>
        
        <p>Approach your digital wellness journey with curiosity rather than criticism. What is your phone use trying to give you? How can you meet those needs in healthier ways?</p>
        
        <p>Change happens not through force, but through understanding, patience, and small, consistent choices that honor both your human needs and your deeper values.</p>
      `,
      author: "QYD Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      category: "Science"
    },
    '3': {
      id: 3,
      title: "Creating Sacred Spaces in a Digital World",
      content: `
        <p>In a world where our devices follow us everywhere, creating physical spaces that support digital wellness has become essential for mental health and genuine connection.</p>
        
        <h2>Why Physical Space Matters</h2>
        <p>Our environment shapes our behavior more than we realize. When your phone is always within arm's reach, your brain stays in a state of partial attention, always ready for the next notification.</p>
        
        <p>Creating phone-free zones gives your nervous system permission to truly rest and your relationships permission to deepen.</p>
        
        <h2>The Bedroom: Your First Sacred Space</h2>
        <p>Your bedroom should be a sanctuary for rest, intimacy, and restoration. Here's how to reclaim it:</p>
        
        <h3>Why Phones Don't Belong in Bedrooms</h3>
        <ul>
          <li>Blue light disrupts melatonin production</li>
          <li>Late-night scrolling increases anxiety</li>
          <li>Morning phone-checking floods you with cortisol</li>
          <li>It interferes with intimate connection</li>
          <li>Emergency calls can come to a landline or partner's phone</li>
        </ul>
        
        <h3>Setting Up Your Phone-Free Bedroom</h3>
        <ul>
          <li>Buy an analog alarm clock (yes, they still exist!)</li>
          <li>Create a charging station outside your bedroom</li>
          <li>Keep a journal and pen beside your bed instead</li>
          <li>Use blackout curtains and a white noise machine</li>
          <li>Place a book on your nightstand for late-night reading</li>
        </ul>
        
        <h2>The Dining Room: Reconnecting Over Meals</h2>
        <p>Meals are one of our most important opportunities for connection, but phones often steal this sacred time.</p>
        
        <h3>Creating a Phone-Free Dining Experience</h3>
        <ul>
          <li>Establish a "phone basket" by the entrance</li>
          <li>Make it a family rule: no phones at the table</li>
          <li>Use a physical timer for kids' "phone breaks"</li>
          <li>Create conversation starters or questions</li>
          <li>Put on gentle background music instead of having phones for entertainment</li>
        </ul>
        
        <h2>The Living Room: Space for Presence</h2>
        <p>Your living room can become a space for genuine relaxation, conversation, and mindful entertainment.</p>
        
        <h3>Design for Connection</h3>
        <ul>
          <li>Arrange furniture to face each other, not just the TV</li>
          <li>Create a visible spot for phones to "rest"</li>
          <li>Keep books, board games, and puzzles easily accessible</li>
          <li>Use warm, soft lighting instead of harsh overhead lights</li>
          <li>Display photos that spark conversation and memory</li>
        </ul>
        
        <h2>Creating Personal Sacred Spaces</h2>
        <p>Even in small homes, you can create a personal space that supports digital wellness:</p>
        
        <h3>A Reading Nook</h3>
        <ul>
          <li>Comfortable chair with good lighting</li>
          <li>Small bookshelf or basket of books</li>
          <li>Soft throw blanket</li>
          <li>Perhaps a plant or calming artwork</li>
          <li>No WiFi password visible from this spot</li>
        </ul>
        
        <h3>A Meditation Corner</h3>
        <ul>
          <li>Cushion or comfortable spot to sit</li>
          <li>Something natural: a plant, stone, or small fountain</li>
          <li>Perhaps a candle or essential oil diffuser</li>
          <li>Keep it simple and uncluttered</li>
        </ul>
        
        <h2>Practical Implementation Tips</h2>
        
        <h3>Start Small</h3>
        <p>Don't try to make your entire home phone-free overnight. Pick one room or even one corner to start with.</p>
        
        <h3>Involve Everyone</h3>
        <p>If you live with others, make this a collaborative effort. Explain why these spaces matter to you and ask for their support.</p>
        
        <h3>Create Positive Alternatives</h3>
        <p>Don't just remove phones - replace them with things that bring joy: books, instruments, art supplies, games, or plants.</p>
        
        <h3>Be Patient</h3>
        <p>It takes time to break the habit of reaching for your phone. Be gentle with yourself as you adjust to these new spaces.</p>
        
        <h2>The Ripple Effects</h2>
        <p>When you create sacred spaces in your home, you're not just changing your phone habits - you're creating opportunities for:</p>
        <ul>
          <li>Deeper conversations with family and friends</li>
          <li>Better quality sleep and rest</li>
          <li>Increased creativity and reflection</li>
          <li>More mindful eating and appreciation</li>
          <li>Stronger sense of home as sanctuary</li>
        </ul>
        
        <p>Your home should be a place that supports your values, not undermines them. By creating sacred spaces, you're choosing presence over productivity, connection over convenience, and peace over perpetual stimulation.</p>
        
        <p>Start today. Pick one space. Make it phone-free. Notice what grows in that space when technology steps back.</p>
      `,
      author: "QYD Team",
      date: "May 20, 2025",
      readTime: "4 min read",
      category: "Practical Tips"
    }
  };
    return posts[id] || null;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = getBlogPost(id);
  
  if (!post) {
    return (
      <main className="bg-beige min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-fern mb-6">Post Not Found</h1>
          <p className="text-stone mb-8">Sorry, we couldn&apos;t find the blog post you&apos;re looking for.</p>
          <Link 
            href="/blog"
            className="bg-fern hover:bg-fern/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-beige min-h-screen">
      {/* Article Header */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="text-sage hover:text-fern font-medium transition-colors flex items-center gap-2 mb-6"
            >
              ← Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block bg-mist text-fern text-sm px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-sage text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-fern mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sage">
              <span className="font-medium">{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div 
            className="prose prose-lg prose-stone max-w-none
              prose-headings:text-fern prose-headings:font-semibold
              prose-p:text-stone prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-stone prose-li:mb-2
              prose-strong:text-fern prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Share & Subscribe */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center bg-mist p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-fern mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-stone mb-6">
              Get more insights on digital wellness delivered to your inbox.
            </p>
            <Link 
              href="/#newsletter"
              className="bg-fern hover:bg-fern/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-fern text-center mb-12">
            More from Our Blog
          </h2>
          <div className="text-center">
            <Link 
              href="/blog"
              className="bg-gold hover:bg-gold/90 text-stone px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
