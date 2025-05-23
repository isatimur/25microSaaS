import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "Smart Plant Care Assistant - Keep Your Plants Thriving",
  description: "Your personal plant care guide! Identify plants, get personalized watering/fertilizing schedules, log care, and receive reminders. AI-powered diagnostics for happy plants.",
  keywords: ["plant care app", "houseplant care", "gardening assistant", "plant identifier", "watering reminder", "ai plant care", "smart garden"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/smart-plant-care-assistant",
    title: "Smart Plant Care Assistant - Green Thumb, Simplified",
    description: "Never kill a plant again! Get AI-powered care schedules, reminders, and diagnostics for all your houseplants.",
    siteName: "Smart Plant Care Assistant - 25 MicroSaaS Challenge", // Assuming siteName follows the pattern
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Keep Your Plants Happy with Our Smart Plant Care App",
    description: "Identify, track, and get personalized care schedules for your plants. AI diagnostics included!",
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
    canonical: 'https://25microsaas.com/projects/smart-plant-care-assistant',
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
