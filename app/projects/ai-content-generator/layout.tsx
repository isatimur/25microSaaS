import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "AI Content Generator - Effortless Content Creation",
  description: "Generate high-quality blog posts, social media updates, and product descriptions with our AI-powered content creation tool. Save time and boost your content strategy.",
  keywords: ["ai content generator", "content creation tool", "automated content", "marketing ai", "copywriting tool", "ai writer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/ai-content-generator",
    title: "AI Content Generator - Effortless Content Creation",
    description: "Generate high-quality blog posts, social media updates, and product descriptions with our AI-powered content creation tool. Save time and boost your content strategy.",
    siteName: "AI Content Generator - 25 MicroSaaS Challenge",
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generator - Effortless Content Creation",
    description: "Generate high-quality blog posts, social media updates, and product descriptions with our AI-powered content creation tool. Save time and boost your content strategy.",
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
    canonical: 'https://25microsaas.com/projects/ai-content-generator',
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
