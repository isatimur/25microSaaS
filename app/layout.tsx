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
  metadataBase: new URL('https://25microsaas.com'),
  title: '25 AI Agents in 50 Weeks — Build AI That Makes Money',
  description: 'Building 25 autonomous AI agents in 50 weeks, each generating $200+/month. Follow the journey from idea to revenue with agentic AI, LangChain, and GPT-4.',
  keywords: ["AI agents", "agentic AI", "LangChain", "micro-SaaS", "AI automation", "GPT-4", "AI business", "passive income AI", "autonomous AI", "AI startup"],
  authors: [{ name: "AI Agent Challenge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com",
    title: "25 AI Agents in 50 Weeks — Build AI That Makes Money",
    description: "Building 25 autonomous AI agents, each generating $200+/month. From SEO writers to code reviewers — real AI businesses with real revenue.",
    siteName: "AI Agent Challenge",
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "25 AI Agents in 50 Weeks",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 AI Agents in 50 Weeks",
    description: "Building 25 autonomous AI agents, each generating $200+/month. Follow the build journey.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://25microsaas.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
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
      </body>
    </html>
  );
}
