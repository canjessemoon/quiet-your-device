'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-beige border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}          <Link href="/" className="flex items-center space-x-2">            <Image 
              src="/images/qyd-logo-nobackground.png" 
              alt="QYD Logo" 
              width={240} 
              height={78}
              className="h-18 w-auto"
            />
          </Link>          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-stone hover:text-fern transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className="text-stone hover:text-fern transition-colors duration-200 font-medium"
            >
              Resources
            </Link>
            <Link 
              href="/blog" 
              className="text-stone hover:text-fern transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/challenge" 
              className="text-stone hover:text-fern transition-colors duration-200 font-medium"
            >
              Challenge
            </Link>
            <Link 
              href="/about" 
              className="text-stone hover:text-fern transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <Link 
            href="/challenge"
            className="hidden md:block bg-fern text-white px-4 py-2 rounded-lg hover:bg-fern/90 transition-colors duration-200 font-medium"
          >
            Start Detox
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-stone hover:text-fern transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>              <Link 
                href="/resources" 
                className="text-stone hover:text-fern transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/blog" 
                className="text-stone hover:text-fern transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/challenge" 
                className="text-stone hover:text-fern transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Challenge
              </Link>
              <Link 
                href="/about" 
                className="text-stone hover:text-fern transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/challenge"
                className="bg-fern text-white px-4 py-2 rounded-lg hover:bg-fern/90 transition-colors duration-200 font-medium text-center w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Detox
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
