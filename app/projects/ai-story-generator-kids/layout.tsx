import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "AI Story Generator for Kids - Create Unique Tales",
  description: "Spark your child's imagination! Generate personalized, age-appropriate stories with our AI story creator. Input names, interests, and themes for a unique adventure.",
  keywords: ["ai story generator", "kids stories", "personalized stories", "childrens book creator", "creative writing for kids", "ai storytelling", "bedtime stories"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/ai-story-generator-kids",
    title: "AI Personalized Story Generator for Kids - Magical Tales Await",
    description: "Create enchanting and unique stories for your child with AI. Perfect for bedtime, learning, and sparking creativity.",
    siteName: "AI Story Generator for Kids - 25 MicroSaaS Challenge", // Assuming siteName follows the pattern
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Unique AI-Powered Stories for Kids",
    description: "Generate personalized adventures for your children with our AI Story Generator. Fun, easy, and creative!",
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
    canonical: 'https://25microsaas.com/projects/ai-story-generator-kids',
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
