import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "Personalized Habit Tracker & Coach - Build Better Habits",
  description: "Achieve your goals with our smart habit tracker and AI coach. Get personalized reminders, motivation, and track your progress effortlessly.",
  keywords: ["habit tracker", "goal setting", "personal development", "AI coach", "self improvement app", "daily habits", "mobile web app"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/personalized-habit-tracker",
    title: "Personalized Habit Tracker & Coach - Your Path to Success",
    description: "Build lasting habits with AI-powered guidance, personalized reminders, and detailed progress tracking. Start your journey today!",
    siteName: "Personalized Habit Tracker & Coach - 25 MicroSaaS Challenge", // Assuming siteName should also be updated
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Better Habits with an AI Coach & Tracker",
    description: "Track your habits, get motivated, and achieve your goals with our personalized habit tracking app.",
    images: ["/palm-leaf.png"],
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
  alternates: {
    canonical: 'https://25microsaas.com/projects/personalized-habit-tracker',
  },
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster />
      <Analytics />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
