import Link from 'next/link';
import { Metadata } from 'next';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
}

interface BlogPostProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(id);
  
  if (!post) {
    return {
      title: 'Post Not Found | Quiet Your Device',
      description: 'Sorry, we couldn\'t find the blog post you\'re looking for.',
    };
  }

  return {
    title: `${post.title} | Quiet Your Device`,
    description: post.description,
    alternates: {
      canonical: `https://quietyourdevice.com/blog/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, 'Digital Wellness', 'Mindfulness', 'Technology Balance'],
      url: `https://quietyourdevice.com/blog/${id}`,
      siteName: 'Quiet Your Device',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@quietyourdevice',
    },
    authors: [{ name: post.author }],
    category: post.category,
    keywords: ['digital wellness', 'mindfulness', 'phone addiction', 'screen time', 'digital detox', 'technology balance'],
  };
}

// This would typically come from a CMS or database
const getBlogPost = (id: string): BlogPost | null => {
  const posts: Record<string, BlogPost> = {    '1': {
      id: 1,
      title: "Your Phone's Buzz Is Stressing You Out (And What to Do About It)",
      description: "Discover how phone notifications trigger stress hormones and learn practical strategies to break free from notification anxiety for better mental health.",
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
    },    '2': {
      id: 2,      title: "The Science of Why You Can't Stop Checking Your Phone",
      description: "Understanding the neuroscience behind phone addiction - from dopamine loops to variable reward schedules - and how to work with your brain, not against it.",
      content: `
        <div style="background-color: #f0f7f0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #4F6F52; margin-bottom: 10px;">TL;DR</h3>
          <ul style="margin: 0; padding-left: 20px; color: #5D6F77;">
            <li style="margin-bottom: 8px;">It's not your fault. Phones are designed to trigger dopamine — the brain chemical tied to seeking, not satisfaction.</li>
            <li style="margin-bottom: 8px;">Social media mimics gambling. Unpredictable rewards (likes, messages, content) keep your brain hooked.</li>
            <li style="margin-bottom: 8px;">Your attention is being sold. Tech companies use neuroscience to keep you scrolling.</li>
            <li style="margin-bottom: 8px;">Constant stimulation has side effects. It shortens attention spans, raises anxiety, and weakens memory.</li>
            <li style="margin-bottom: 0;">Change is possible. With small shifts — like delaying the urge, designing your space, and replacing habits — you can reclaim your focus and calm.</li>
          </ul>
        </div>
        
        <p style="margin-bottom: 20px;">Understanding why we reach for our phones can help us develop more compassionate and effective strategies for change. It's not about willpower - it's about understanding how our brains work.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Dopamine Connection</strong></h2>
        <p style="margin-bottom: 20px;">Every time you get a like, a message, or even see a red notification badge, your brain releases dopamine. This isn't the "happiness" chemical many people think it is - dopamine is actually about anticipation and seeking.</p>
        
        <p style="margin-bottom: 20px;">Here's the fascinating part: dopamine is released more during the anticipation of a reward than when you actually receive it. This is why checking your phone can feel both satisfying and never quite satisfying enough.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Variable Reward Schedule</strong></h2>
        <p style="margin-bottom: 20px;">Social media platforms use what psychologists call "variable ratio reinforcement" - the same principle that makes gambling addictive. Sometimes you get a reward (interesting content, social validation), sometimes you don't. This unpredictability keeps you coming back.</p>
        
        <p style="margin-bottom: 20px;">Your brain doesn't know if this check will be the one that brings something exciting, so it keeps you looking. It's not a character flaw - it's psychology.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Attention Merchants</strong></h2>
        <p style="margin-bottom: 20px;">Tech companies employ teams of neuroscientists, behavioral economists, and game designers whose job is to capture and hold your attention. They use:</p>
        <ul style="margin-bottom: 20px;">
          <li>Infinite scroll (no natural stopping point)</li>
          <li>Push notifications (interrupting your day)</li>
          <li>Social approval metrics (likes, hearts, reactions)</li>
          <li>Fear of missing out (FOMO-inducing features)</li>
          <li>Autoplay videos (keeping you watching)</li>
        </ul>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Your Brain on Digital</strong></h2>
        <p style="margin-bottom: 20px;">Constant digital stimulation changes how your brain works:</p>
        <ul style="margin-bottom: 20px;">
          <li><strong>Shortened attention span:</strong> We lose the ability to focus deeply</li>
          <li><strong>Increased anxiety:</strong> Always expecting the next notification</li>
          <li><strong>Reduced patience:</strong> We want everything instantly</li>
          <li><strong>Weakened memory:</strong> Why remember when you can Google?</li>
          <li><strong>Decreased creativity:</strong> No boredom means fewer breakthrough ideas</li>
        </ul>
        
        <div style="background-color: #f0f7f0; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; border-left: 4px solid #4F6F52;">
          <blockquote style="font-size: 1.25rem; font-style: italic; color: #4F6F52; margin: 0; font-weight: 500;">
            "It's not about willpower. It's about working with your brain."
          </blockquote>
        </div>          <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Working With Your Brain, Not Against It</strong></h2>
        <p style="margin-bottom: 20px;">Instead of fighting your brain's natural tendencies, work with them:</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">1. Replace, Don't Remove</h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">When you feel the urge to check your phone, have a replacement ready: take three deep breaths, look out a window, stretch, or drink some water.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">2. Create Positive Friction</h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Make checking your phone slightly more difficult. Move it to another room, turn it face down, or use airplane mode during focused work.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">3. Design Your Environment</h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Put books, musical instruments, or art supplies where you used to keep your phone. Make good choices easier than bad ones.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">4. Practice Delayed Gratification</h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">When you want to check your phone, wait 60 seconds. Often, the urge will pass. This strengthens your "pause muscle."</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">5. Compassion, Not Criticism</h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Remember: your phone habits aren't a moral failing. They're the result of sophisticated technology designed to capture attention, meeting very human needs for connection, stimulation, and validation.</p>
        
        <p style="margin-bottom: 20px;">Approach your digital wellness journey with curiosity rather than criticism. What is your phone use trying to give you? How can you meet those needs in healthier ways?</p>
        
        <p style="margin-bottom: 30px;">Change happens not through force, but through understanding, patience, and small, consistent choices that honor both your human needs and your deeper values.</p>
      `,
      author: "QYD Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      category: "Science"
    },    '3': {
      id: 3,
      title: "How to Create Phone-Free Spaces That Support Real Rest",
      description: "Transform your home into a sanctuary with practical tips for creating phone-free zones that promote genuine relaxation, connection, and peace.",
      content: `
        <div style="background-color: #f0f7f0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #4F6F52; margin-bottom: 15px;">TL;DR: How to Create Sacred, Phone-Free Spaces at Home</h3>
          <p style="color: #5D6F77; margin-bottom: 15px;">Your environment shapes your attention. When your phone is always nearby, your brain stays in alert mode.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">Designating phone-free zones — like the bedroom, dining room, or living room — helps your body and mind truly rest.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">Simple changes make a big impact: use an analog alarm clock, keep books in reach, and create cozy, tech-free corners.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">Start small. Begin with one room or even one corner. Replace screen time with something meaningful.</p>
          <p style="color: #5D6F77; margin-bottom: 0;">This isn't about restriction — it's about intention. When you create space from screens, you make more room for presence, connection, and calm.</p>
        </div>
        
        <p style="margin-bottom: 20px;">In a world where our devices follow us everywhere, creating physical spaces that support digital wellness has become essential for mental health and genuine connection.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Why Physical Space Matters</strong></h2>
        <p style="margin-bottom: 20px;">Our environment shapes our behavior more than we realize. When your phone is always within arm's reach, your brain stays in a state of partial attention, always ready for the next notification.</p>
          <p style="margin-bottom: 20px;">Creating phone-free zones gives your nervous system permission to truly rest and your relationships permission to deepen.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Bedroom: Designed for Peace, Not Pings</strong></h2>
        <p style="margin-bottom: 20px;">Your bedroom should be a sanctuary for rest, intimacy, and restoration. Here's how to reclaim it:</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">Why Phones Don't Belong in Bedrooms</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Blue light disrupts melatonin production</li>
          <li>• Late-night scrolling increases anxiety</li>
          <li>• Morning phone-checking floods you with cortisol</li>
          <li>• It interferes with intimate connection</li>
          <li>• Emergency calls can come to a landline or partner's phone</li>
        </ul>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">Setting Up Your Phone-Free Bedroom</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Buy an analog alarm clock (yes, they still exist!)</li>
          <li>• Create a charging station outside your bedroom</li>
          <li>• Keep a journal and pen beside your bed instead</li>
          <li>• Use blackout curtains and a white noise machine</li>
          <li>• Place a book on your nightstand for late-night reading</li>        </ul>
        
        <div style="text-align: center; margin: 40px 0;">
          <img src="/images/Room-blog-3.png" alt="A cozy, phone-free living room designed for connection and calm" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Dining Room: Reconnecting Over Meals</strong></h2>
        <p style="margin-bottom: 20px;">Meals are one of our most important opportunities for connection, but phones often steal this sacred time.</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">Creating a Phone-Free Dining Experience</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Establish a "phone basket" by the entrance</li>
          <li>• Make it a family rule: no phones at the table</li>
          <li>• Use a physical timer for kids' "phone breaks"</li>
          <li>• Create conversation starters or questions</li>
          <li>• Put on gentle background music instead of having phones for entertainment</li>
        </ul>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Living Room: Space for Presence</strong></h2>
        <p style="margin-bottom: 20px;">Your living room can become a space for genuine relaxation, conversation, and mindful entertainment.</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">Design for Connection</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Arrange furniture to face each other, not just the TV</li>
          <li>• Create a visible spot for phones to "rest"</li>
          <li>• Keep books, board games, and puzzles easily accessible</li>
          <li>• Use warm, soft lighting instead of harsh overhead lights</li>
          <li>• Display photos that spark conversation and memory</li>
        </ul>
          <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Designing Personal Spaces for Calm</strong></h2>
        <p style="margin-bottom: 20px;">Even in small homes, you can create a personal space that supports digital wellness:</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">A Reading Nook</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Comfortable chair with good lighting</li>
          <li>• Small bookshelf or basket of books</li>
          <li>• Soft throw blanket</li>
          <li>• Perhaps a plant or calming artwork</li>
          <li>• No WiFi password visible from this spot</li>
        </ul>
          <h3 style="margin-top: 25px; margin-bottom: 15px;">A Meditation Corner</h3>
        <ul style="margin-bottom: 20px;">
          <li>• Cushion or comfortable spot to sit</li>
          <li>• Something natural: a plant, stone, or small fountain</li>
          <li>• Perhaps a candle or essential oil diffuser</li>
          <li>• Keep it simple and uncluttered</li>
        </ul>
          <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Practical Implementation Tips</strong></h2>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>Start Small</strong></h3>
        <p style="margin-bottom: 20px;">Don't try to make your entire home phone-free overnight. Pick one room or even one corner to start with.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>Involve Everyone</strong></h3>
        <p style="margin-bottom: 20px;">If you live with others, make this a collaborative effort. Explain why these spaces matter to you and ask for their support.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>Create Positive Alternatives</strong></h3>
        <p style="margin-bottom: 20px;">Don't just remove phones - replace them with things that bring joy: books, instruments, art supplies, games, or plants.</p>
          <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>Be Patient</strong></h3>
        <p style="margin-bottom: 20px;">It takes time to break the habit of reaching for your phone. Be gentle with yourself as you adjust to these new spaces.</p>
        
        <div style="background-color: #f0f7f0; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; border-left: 4px solid #4F6F52;">
          <blockquote style="font-size: 1.25rem; font-style: italic; color: #4F6F52; margin: 0; font-weight: 500;">
            🛋️ "Your home should reflect your values — not your notifications."
          </blockquote>
          <p style="margin: 10px 0 0 0; color: #5D6F77; font-size: 0.9rem; font-weight: 500;">– QYD</p>
        </div>
          <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The Ripple Effects</strong></h2>
        <p style="margin-bottom: 20px;">When you create sacred spaces in your home, you're not just changing your phone habits - you're creating opportunities for:</p>
        <ul style="margin-bottom: 20px;">
          <li>• Deeper conversations with family and friends</li>
          <li>• Better quality sleep and rest</li>
          <li>• Increased creativity and reflection</li>
          <li>• More mindful eating and appreciation</li>
          <li>• Stronger sense of home as sanctuary</li>
        </ul>
        
        <p style="margin-bottom: 20px;">Your home should be a place that supports your values, not undermines them. By creating sacred spaces, you're choosing presence over productivity, connection over convenience, and peace over perpetual stimulation.</p>
        
        <p style="margin-bottom: 30px;">Start today. Pick one space. Make it phone-free. Notice what grows in that space when technology steps back.</p>
      `,
      author: "QYD Team",
      date: "May 20, 2025",
      readTime: "4 min read",
      category: "Practical Tips"
    },
    '4': {
      id: 4,
      title: "The First 30 Minutes: How a Phone-Free Morning Can Change Your Life",
      description: "Discover how starting your day without screens can transform your mental clarity, reduce stress, and set a peaceful tone for everything that follows.",
      content: `
        <div style="background-color: #f0f7f0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #4F6F52; margin-bottom: 15px;">TL;DR: Your Morning Sets the Tone</h3>
          <p style="color: #5D6F77; margin-bottom: 15px;">We wake up and immediately reach for our phones, flooding our minds with notifications before we&apos;ve even had water.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">Those first 30 minutes matter. How you spend them sets the tone for your entire day.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">A phone-free morning isn&apos;t about perfection — it&apos;s about giving your brain a softer start.</p>
          <p style="color: #5D6F77; margin-bottom: 0;">Try it tomorrow: analog alarm, stretch in bed, drink water, step outside. Just 30 minutes of quiet before the world rushes in.</p>
        </div>
        
        <p style="margin-bottom: 20px;">You wake up. Your eyes are barely open, but your hand&apos;s already reaching for your phone.</p>
        
        <p style="margin-bottom: 20px;">Notifications, texts, news alerts, emails. The outside world crashes in before you&apos;ve even had a sip of water.</p>
        
        <p style="margin-bottom: 20px;">It&apos;s a habit so many of us have — and it&apos;s exhausting.</p>
        
        <p style="margin-bottom: 20px;">But what if your morning didn&apos;t start that way? What if, for just the first 30 minutes of your day, your phone stayed out of reach?</p>
        
        <p style="margin-bottom: 20px;">Not forever. Just long enough to hear yourself think.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Why It Matters: Your Brain Deserves a Softer Start</strong></h2>
        
        <p style="margin-bottom: 20px;">The moment you check your phone, your brain goes from rest mode to react mode. Cortisol (your stress hormone) spikes. Your to-do list floods in. Social comparison kicks off before you&apos;ve even left bed.</p>
        
        <p style="margin-bottom: 20px;">Our brains weren&apos;t designed to wake up to 37 notifications.</p>
        
        <p style="margin-bottom: 20px;">Those first few moments after waking up are when your mind is most open. How you spend them sets the tone for the rest of your day — and it turns out, quiet wins.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>What a Phone-Free Morning Actually Looks Like</strong></h2>
        
        <p style="margin-bottom: 20px;">This isn&apos;t about building a perfect 5AM routine with cold plunges and sun salutations. It&apos;s about making space. Even 30 minutes can make a difference.</p>
        
        <p style="margin-bottom: 20px;">Here&apos;s what that could look like:</p>
        
        <ul style="margin-bottom: 20px;">
          <li>Wake up with an analog alarm (or leave your phone in another room overnight)</li>
          <li>Stretch in bed or take a few deep breaths before getting up</li>
          <li>Drink a glass of water, not scroll TikTok</li>
          <li>Open a window. Step outside. Feel the air.</li>
          <li>Journal a sentence or two — not for productivity, just to hear your own voice before the world&apos;s</li>
          <li>Move your body — a walk, a few stretches, whatever feels right</li>
        </ul>
        
        <p style="margin-bottom: 20px;">None of it needs to be fancy. Just something that&apos;s yours.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Start Small: Try It Tomorrow</strong></h2>
        
        <p style="margin-bottom: 20px;">You don&apos;t need to commit forever. Just try one phone-free morning this week. Pick a day. Set things up the night before. Leave a book or notepad where your phone usually lives.</p>
        
        <p style="margin-bottom: 20px;">Notice how you feel.</p>
        
        <p style="margin-bottom: 20px;">You might be surprised how calm your day starts to feel — and how much easier it becomes to hear yourself think again.</p>
        
        <div style="background-color: #f0f7f0; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; border-left: 4px solid #4F6F52;">
          <blockquote style="font-size: 1.25rem; font-style: italic; color: #4F6F52; margin: 0; font-weight: 500;">
            🌅 "How you spend the first 30 minutes of your day sets the tone for everything that follows."
          </blockquote>
          <p style="margin: 10px 0 0 0; color: #5D6F77; font-size: 0.9rem; font-weight: 500;">– QYD</p>
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Want more quiet moments like this? We&apos;ve got you.</strong></h2>
        
        <p style="margin-bottom: 30px;">This is Quiet Your Device. Not about quitting. Just making space for what matters.</p>
      `,
      author: "QYD Team",
      date: "June 25, 2025",
      readTime: "4 min read",
      category: "Mindfulness"
    },
    '5': {
      id: 5,
      title: "The 7-Day App Cleanse: Reset Your Home Screen (and Your Head)",
      description: "A one-week app cleanse to cut screen time without going off-grid: delete the time-sinks, reset notifications, and rebuild a calmer home screen.",
      content: `
        <div style="background-color: #f0f7f0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #4F6F52; margin-bottom: 15px;">TL;DR: Reset Your Digital Life in One Week</h3>
          <p style="color: #5D6F77; margin-bottom: 15px;">Audit your apps, delete the time-sinks, turn off default notifications, and rebuild a calmer home screen in a week.</p>
          <p style="color: #5D6F77; margin-bottom: 15px;">Track pickups + daily average; keep only what serves you.</p>
          <p style="color: #5D6F77; margin-bottom: 0;">It's like Marie Kondo for your phone — but you get to keep the essentials.</p>
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Why an "App Cleanse"?</strong></h2>
        
        <p style="margin-bottom: 20px;">We tidy closets; we rarely tidy phones. An app cleanse is a short, structured reset: remove what hijacks attention, keep what supports your life, and rebuild with intention.</p>
        
        <p style="margin-bottom: 20px;">Think of it as Marie Kondo for your digital life — but instead of asking "does this spark joy?", ask "does this serve my values?"</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Before You Start (10 minutes)</strong></h2>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>📊 Baseline:</strong></h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Note your Daily Average, Pickups, and Most Used apps (Screen Time on iOS / Digital Wellbeing on Android).</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>💾 Backup:</strong></h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Ensure iCloud/Google backup is current.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;"><strong>👥 Partner up:</strong></h3>
        <p style="margin-bottom: 20px; margin-left: 20px;">Ask a friend to join — accountability helps.</p>
        
        <div style="background-color: #f0f7f0; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; border-left: 4px solid #4F6F52;">
          <blockquote style="font-size: 1.25rem; font-style: italic; color: #4F6F52; margin: 0; font-weight: 500;">
            📱 "A cleaner phone leads to a clearer mind."
          </blockquote>
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>The 7-Day Plan</strong></h2>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 0 (Prep):</strong></h3>
        <p style="margin-bottom: 20px;">Set a simple goal: "Reduce daily average by 30 minutes" or "Under 60 pickups/day."</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 1 — Triage Every App</strong></h3>
        <p style="margin-bottom: 15px;">Create 5 lists:</p>
        <ul style="margin-bottom: 20px;">
          <li><strong>Essential:</strong> banking, maps, messages, authenticator</li>
          <li><strong>Useful weekly:</strong> transit, grocery, airline</li>
          <li><strong>Create/learn:</strong> camera, notes, Kindle, music creation</li>
          <li><strong>Social/entertainment:</strong> feeds, short-form video, gaming</li>
          <li><strong>"Slot machines" (delete-prone):</strong> infinite scroll + variable rewards</li>
        </ul>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 2 — Delete and Offload (20% Rule)</strong></h3>
        <p style="margin-bottom: 20px;">Remove at least one in five apps — start with "slot machines." Offload rarely used utilities (you can still re-download).</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 3 — Notifications from Zero</strong></h3>
        <p style="margin-bottom: 15px;">Turn all app notifications off. Add back only:</p>
        <ul style="margin-bottom: 20px;">
          <li>Person-to-person messages</li>
          <li>Ride/food delivery updates</li>
          <li>Banking fraud alerts</li>
        </ul>
        <p style="margin-bottom: 20px;">No badges for social. No sounds/vibrate unless time-critical.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 4 — Home Screen Surgery</strong></h3>
        <ul style="margin-bottom: 20px;">
          <li>One home screen only</li>
          <li>Dock: 3–4 true essentials</li>
          <li>Grid by verbs: Pay, Move, Read, Capture (not brands)</li>
          <li>Hide everything else in the App Library/Drawer</li>
        </ul>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 5 — Time Guards</strong></h3>
        <ul style="margin-bottom: 20px;">
          <li>Focus/DND: work, family, sleep</li>
          <li>App limits: e.g., Social total ≤ 30–45 min/day</li>
          <li>Downtime/Bedtime: apps off after 9 pm (keep phone + texts if needed)</li>
        </ul>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 6 — Friction Hacks</strong></h3>
        <ul style="margin-bottom: 20px;">
          <li>Grayscale after 8 pm</li>
          <li>Remove addictive widgets from home screen</li>
          <li>Log out of the most tempting app; require Face/Passcode to open</li>
        </ul>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px; color: #4F6F52;"><strong>Day 7 — Rebuild with Intention</strong></h3>
        <p style="margin-bottom: 20px;">Add back up to five "create/learn" apps you truly use. Keep the rest off. Re-check Screen Time vs Day 0.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Quick How-To (High Level)</strong></h2>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">📱 iOS (Settings):</h3>
        <p style="margin-bottom: 20px;">Screen Time → App Limits / Downtime • Focus → Allowed notifications • Display → Color Filters (grayscale) • Notifications → turn off by default.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">🤖 Android (varies):</h3>
        <p style="margin-bottom: 20px;">Digital Wellbeing → Dashboard / Focus mode / Bedtime • Notifications → per-app • Display → Grayscale (Monochrome) or Bedtime Mode.</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Track & Reflect</strong></h2>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">📊 Metrics:</h3>
        <p style="margin-bottom: 20px;">Daily Average, Pickups, Notifications received, Top 3 most-used apps.</p>
        
        <h3 style="margin-top: 25px; margin-bottom: 15px;">💭 Feel:</h3>
        <p style="margin-bottom: 20px;">Energy after 9 pm? Easier mornings? Fewer "reflex opens"?</p>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Maintenance</strong></h2>
        
        <ul style="margin-bottom: 20px;">
          <li><strong>Weekly "Trash Day" (5 min):</strong> delete 1–2 apps, review badges</li>
          <li><strong>Monthly review (10 min):</strong> re-sort home screen, tighten limits</li>
        </ul>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>If You've Got Kids</strong></h2>
        
        <p style="margin-bottom: 20px;">Use a shared Focus at dinner/bedtime. Make it a family challenge: kids "earn" adding back one creative app (stop-motion, drawing) after seven days.</p>
        
        <div style="background-color: #f0f7f0; padding: 30px; border-radius: 12px; margin: 40px 0; text-align: center; border-left: 4px solid #4F6F52;">
          <blockquote style="font-size: 1.25rem; font-style: italic; color: #4F6F52; margin: 0; font-weight: 500;">
            🧹 "Declutter your apps, declutter your mind."
          </blockquote>
          <p style="margin: 10px 0 0 0; color: #5D6F77; font-size: 0.9rem; font-weight: 500;">– QYD</p>
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-weight: bold;"><strong>Ready to Start Your App Cleanse?</strong></h2>
        
        <p style="margin-bottom: 20px;">Seven days. A cleaner phone. A clearer mind.</p>
        
        <p style="margin-bottom: 30px;">Start tomorrow with Day 0, and remember — this isn't about perfection. It's about intention.</p>
      `,
      author: "QYD Team",
      date: "August 29, 2025",
      readTime: "8 min read",
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

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: 'https://quietyourdevice.com/images/hero.jpg', // Default image
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Quiet Your Device',
      logo: {
        '@type': 'ImageObject',
        url: 'https://quietyourdevice.com/images/qyd-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://quietyourdevice.com/blog/${id}`,
    },
    keywords: post.category,
    articleSection: 'Digital Wellness',
    wordCount: post.content.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="text-center bg-green-50 p-8 rounded-xl border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-gray-700 mb-6">
              Get more insights on digital wellness delivered to your inbox.
            </p>
            <Link 
              href="/#newsletter"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
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
    </>
  );
}
// Force change 
