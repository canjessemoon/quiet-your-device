'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Hidden Cost of Notification Anxiety",
    excerpt: "Every ping, buzz, and flash creates a micro-stress response in our nervous system. Here's how to break the cycle and reclaim your peace of mind.",
    author: "QYD Team",
    date: "May 28, 2025",
    readTime: "5 min read",
    category: "Mindfulness"
  },
  {
    id: 2,
    title: "Why Your Brain Craves Digital Stimulation",
    excerpt: "Understanding the neuroscience behind our phone addiction can help us develop more compassionate and effective strategies for change.",
    author: "QYD Team", 
    date: "May 25, 2025",
    readTime: "7 min read",
    category: "Science"
  },
  {
    id: 3,
    title: "Creating Sacred Spaces in a Digital World",
    excerpt: "How to designate phone-free zones in your home that actually work, plus why your bedroom should be the first place to start.",
    author: "QYD Team",
    date: "May 20, 2025", 
    readTime: "4 min read",
    category: "Practical Tips"
  }
];

// Sample user stories
const initialUserStories = [
  {
    id: 1,
    title: "30 Days Without Social Media Changed Everything",
    content: "I never realized how much mental energy I was spending on social media until I stopped. The first week was hard, but by week 3, I felt like I had my mind back. I&apos;m sleeping better, more present with my family, and actually reading books again!",
    author: "Sarah M.",
    date: "May 29, 2025",
    likes: 12
  },
  {
    id: 2,
    title: "The Phone Basket Experiment",
    content: "We put a basket by our front door where everyone puts their phones when they come home. Game changer! Dinner conversations are actually conversations now, and my kids are playing board games again instead of asking for screen time.",
    author: "Mike D.",
    date: "May 27, 2025", 
    likes: 8
  },
  {
    id: 3,
    title: "From 8 Hours to 2 Hours: My Screen Time Journey",
    content: "It took me 3 months, but I went from 8+ hours of daily screen time to under 2 hours. The key was replacing the habit, not just removing it. Now I garden, cook, and actually have hobbies again!",
    author: "Jessica L.",
    date: "May 24, 2025",
    likes: 15
  }
];

export default function BlogPage() {
  const [userStories, setUserStories] = useState(initialUserStories);
  const [newStory, setNewStory] = useState({ title: '', content: '', author: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStory.title && newStory.content && newStory.author) {
      const story = {
        id: userStories.length + 1,
        ...newStory,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        likes: 0
      };
      setUserStories([story, ...userStories]);
      setNewStory({ title: '', content: '', author: '' });
      setShowForm(false);
    }
  };

  const handleLike = (id: number) => {
    setUserStories(userStories.map(story => 
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    ));
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
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
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-fern hover:text-sage font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
              onClick={() => setShowForm(!showForm)}
              className="bg-gold hover:bg-gold/90 text-stone px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Share Your Story
            </button>
          </div>

          {/* Story Submission Form */}
          {showForm && (
            <div className="bg-mist p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-fern mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmitStory} className="space-y-4">
                <div>
                  <label htmlFor="storyTitle" className="block text-stone font-medium mb-2">
                    Story Title
                  </label>
                  <input
                    type="text"
                    id="storyTitle"
                    value={newStory.title}
                    onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                    className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-fern focus:border-transparent"
                    placeholder="What would you like to share?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="storyContent" className="block text-stone font-medium mb-2">
                    Your Story
                  </label>
                  <textarea
                    id="storyContent"
                    value={newStory.content}
                    onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-fern focus:border-transparent resize-vertical"
                    placeholder="Tell us about your digital wellness journey, what worked for you, challenges you faced, or insights you&apos;ve gained..."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="storyAuthor" className="block text-stone font-medium mb-2">
                    Your Name (or initials)
                  </label>
                  <input
                    type="text"
                    id="storyAuthor"
                    value={newStory.author}
                    onChange={(e) => setNewStory({ ...newStory, author: e.target.value })}
                    className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-fern focus:border-transparent"
                    placeholder="How would you like to be credited?"
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="bg-fern hover:bg-fern/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Share Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* User Stories Display */}
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
        </div>
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
    </main>
  );
}
