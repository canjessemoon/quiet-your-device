'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample blog posts data (sorted newest first)
const blogPosts = [
  {
    id: 6,
    title: "The Social Scroll Trap: How Infinite Feeds Hijack Your Mind",
    excerpt: "Infinite scroll and autoplay weren't accidents — they were engineered to keep you hooked. Learn how to reclaim your attention and turn scrolling into intentional use.",
    author: "QYD Team",
    date: "September 2025",
    readTime: "6 min read",
    category: "Science"
  },
  {
    id: 5,
    title: "The 7-Day App Cleanse: Reset Your Home Screen (and Your Head)",
    excerpt: "A one-week app cleanse to cut screen time without going off-grid: delete the time-sinks, reset notifications, and rebuild a calmer home screen.",
    author: "QYD Team",
    date: "August 29, 2025",
    readTime: "8 min read",
    category: "Practical Tips"
  },
  {
    id: 4,
    title: "The First 30 Minutes: How a Phone-Free Morning Can Change Your Life",
    excerpt: "What if, for just the first 30 minutes of your day, your phone stayed out of reach? Not forever. Just long enough to hear yourself think.",
    author: "QYD Team",
    date: "June 25, 2025",
    readTime: "4 min read",
    category: "Mindfulness"
  },
  {
    id: 1,
    title: "Your Phone's Buzz Is Stressing You Out (And What to Do About It)",
    excerpt: "Every ping, buzz, and flash creates a micro-stress response in our nervous system. Here's how to break the cycle and reclaim your peace of mind.",
    author: "QYD Team",
    date: "May 28, 2025",
    readTime: "5 min read",
    category: "Mindfulness"
  },
  {
    id: 2,
    title: "The Science of Why You Can't Stop Checking Your Phone",
    excerpt: "Understanding the neuroscience behind our phone addiction can help us develop more compassionate and effective strategies for change.",
    author: "QYD Team", 
    date: "May 25, 2025",
    readTime: "7 min read",
    category: "Science"
  },
  {
    id: 3,
    title: "How to Create Phone-Free Spaces That Support Real Rest",
    excerpt: "How to designate phone-free zones in your home that actually work, plus why your bedroom should be the first place to start.",
    author: "QYD Team",
    date: "May 20, 2025", 
    readTime: "4 min read",
    category: "Practical Tips"
  }
];

// Interface for user stories (currently disabled for coming soon feature)
interface UserStory {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
}

// Sample user stories (currently empty for coming soon feature)
const initialUserStories: UserStory[] = [];

export default function BlogPage() {
  const [userStories] = useState(initialUserStories);

  // Placeholder function for disabled functionality
  const handleLike = (id: number) => {
    console.log('Like functionality disabled:', id);
  };

  return (
    <main className="bg-beige min-h-screen">
      {/* Hero Section */}
      <section className="bg-fern py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-beige mb-6">
            Stories & Insights
          </h1>
          <p className="text-xl text-beige/90 max-w-2xl mx-auto">
            Explore our latest thoughts on digital wellness and read real stories from people transforming their relationship with technology.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fern mb-4">
              📝 Latest from Our Blog
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Expert insights, research-backed strategies, and practical guidance for your digital wellness journey.
            </p>
          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-mist text-fern text-sm px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-sage text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-fern mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-sage">
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-fern hover:text-sage font-medium text-sm transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-fern py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-beige/90 mb-8 max-w-2xl mx-auto">
            Get our latest blog posts and digital wellness tips delivered to your inbox.
          </p>
          <Link 
            href="/#newsletter"
            className="bg-gold hover:bg-gold/90 text-stone px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg inline-block"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>

      {/* User Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fern mb-4">
              🌟 Your Stories
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto mb-8">
              Real experiences from people like you who are creating healthier relationships with technology.
            </p>
            
            <button
              disabled
              className="bg-sage/50 text-stone/70 px-6 py-3 rounded-full font-semibold cursor-not-allowed shadow-lg"
            >
              Share Your Story
            </button>
            
            {/* Coming Soon Banner */}
            <div className="mt-6 bg-gold/20 border border-gold/30 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-stone font-medium">
                🚧 <strong>Coming Soon!</strong> We&apos;re building a beautiful space for community stories.
              </p>
            </div>
          </div>

          {/* User Stories Display - Empty for now */}
          {userStories.length > 0 && (
            <div className="space-y-8">
              {userStories.map((story) => (
                <div key={story.id} className="bg-beige p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-fern mb-4">
                    {story.title}
                  </h3>
                  
                  <p className="text-stone leading-relaxed mb-4">
                    {story.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-sage">
                      <span className="font-medium">{story.author}</span>
                      <span className="mx-2">•</span>
                      <span>{story.date}</span>
                    </div>
                    
                    <button
                      onClick={() => handleLike(story.id)}
                      className="flex items-center gap-2 text-sage hover:text-fern transition-colors"
                    >
                      <span className="text-lg">👍</span>
                      <span className="font-medium">{story.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: September 7, 2025
          </p>
        </div>
      </section>
    </main>
  );
}
