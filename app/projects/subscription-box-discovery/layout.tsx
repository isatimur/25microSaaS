import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "Subscription Box Discovery - Find Your Next Favorite Box",
  description: "Explore a curated directory of subscription boxes across all categories. Read reviews, filter by interest, and discover your perfect monthly surprise.",
  keywords: ["subscription box", "discovery platform", "curated boxes", "monthly boxes", "lifestyle boxes", "beauty boxes", "food boxes", "tech subscriptions"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/subscription-box-discovery",
    title: "Subscription Box Discovery - Unbox Happiness Monthly",
    description: "Your ultimate guide to the best subscription boxes. Search, filter, and find boxes tailored to your interests.",
    siteName: "Subscription Box Discovery - 25 MicroSaaS Challenge", // Assuming siteName should also be updated
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Amazing Subscription Boxes",
    description: "Find and compare subscription boxes in beauty, food, tech, and more. What will you discover?",
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
    canonical: 'https://25microsaas.com/projects/subscription-box-discovery',
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
