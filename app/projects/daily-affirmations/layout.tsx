import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com/projects/daily-affirmations'),
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
    title: "Daily Affirmations - Transform Your New Tab Experience",
    description: "Install our Chrome Extension for daily inspiration with beautiful affirmations and customizable widgets. Join 25 MicroSaaS Challenge projects.",
    images: [{
      url: "/daily-affirmations-og.jpg",
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "app",
    site: "@25microsaas",
    title: "New Tab Motivation - Daily Affirmations Chrome Extension",
    description: "Install our free Chrome Extension for beautiful daily affirmations and productivity tools #microsaas"
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://25microsaas.com/projects/daily-affirmations',
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
