import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: 'Daily Affirmations Chrome Extension - 25 MicroSaaS Challenge',
  description: 'Boost your daily motivation with our Chrome Extension featuring beautiful affirmations, weather widgets, and customizable themes. Part of the 25 MicroSaaS Challenge.',
  keywords: [
    "daily affirmations chrome extension",
    "productivity chrome extension",
    "motivational new tab",
    "microsaas projects",
    "chrome extension development",
    "positive mindset tool"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/daily-affirmations",
    title: "Daily Affirmations - Transform Your New Tab Experience",
    description: "Install our Chrome Extension for daily inspiration with beautiful affirmations and customizable widgets. Join 25 MicroSaaS Challenge projects.",
    siteName: "Daily Affirmations - 25 MicroSaaS Challenge",
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Affirmations Chrome Extension",
    description: "Transform your new tab with beautiful daily affirmations and productivity tools",
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
    canonical: 'https://25microsaas.com/projects/daily-affirmations',
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
