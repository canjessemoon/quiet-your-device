import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stories & Insights | Quiet Your Device",
  description: "Expert insights, research-backed strategies, and practical guidance for your digital wellness journey. Read our latest thoughts on mindful technology use.",
  alternates: {
    canonical: 'https://quietyourdevice.com/blog',
  },
  openGraph: {
    title: "Stories & Insights | Quiet Your Device",
    description: "Expert insights, research-backed strategies, and practical guidance for your digital wellness journey.",
    type: 'website',
    url: 'https://quietyourdevice.com/blog',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stories & Insights | Quiet Your Device",
    description: "Expert insights, research-backed strategies, and practical guidance for your digital wellness journey.",
    creator: '@quietyourdevice',
  },
  keywords: ['digital wellness blog', 'mindfulness articles', 'phone addiction help', 'screen time tips', 'digital detox stories', 'technology balance'],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
