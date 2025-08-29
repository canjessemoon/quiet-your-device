import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QYD - Quiet Your Device | Digital Wellness & Phone Detox",
  description: "Reduce screen time and reconnect with life. Join our 7-day digital detox challenge and discover tools for healthier digital habits.",
  metadataBase: new URL('https://quietyourdevice.com'),
  openGraph: {
    title: "QYD - Quiet Your Device | Digital Wellness & Phone Detox",
    description: "Reduce screen time and reconnect with life. Join our 7-day digital detox challenge and discover tools for healthier digital habits.",
    type: 'website',
    url: 'https://quietyourdevice.com',
    siteName: 'Quiet Your Device',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "QYD - Quiet Your Device | Digital Wellness & Phone Detox",
    description: "Reduce screen time and reconnect with life. Join our digital detox challenge.",
    creator: '@quietyourdevice',
    site: '@quietyourdevice',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ['digital wellness', 'phone detox', 'screen time reduction', 'digital detox', 'mindful technology', 'digital minimalism', 'phone addiction help'],
  authors: [{ name: 'QYD Team' }],
  creator: 'QYD Team',
  publisher: 'Quiet Your Device',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-beige text-stone`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
