import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "7-Day Digital Detox Challenge | Quiet Your Device",
  description: "Transform your relationship with technology in just 7 days. Download our free digital detox challenge cards and start your journey to mindful tech use today.",
  alternates: {
    canonical: 'https://quietyourdevice.com/challenge',
  },
  openGraph: {
    title: "7-Day Digital Detox Challenge | Quiet Your Device",
    description: "Transform your relationship with technology in just 7 days. Download our free digital detox challenge cards and start your journey to mindful tech use.",
    type: 'website',
    url: 'https://quietyourdevice.com/challenge',
    siteName: 'Quiet Your Device',
  },
  twitter: {
    card: 'summary_large_image',
    title: "7-Day Digital Detox Challenge | Quiet Your Device",
    description: "Transform your relationship with technology in just 7 days with our free digital detox challenge.",
    creator: '@quietyourdevice',
  },
  keywords: ['7-day digital detox', 'digital detox challenge', 'phone detox', 'screen time challenge', 'digital wellness challenge', 'mindful technology use'],
};

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
