import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "Niche Community Forum Builder - Create Your Own Forum",
  description: "Easily create and manage focused online community forums for any niche. Connect with like-minded people and build your community.",
  keywords: ["community builder", "forum software", "niche forum", "online community platform", "create a forum", "discussion platform"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/niche-community-forum-builder",
    title: "Niche Community Forum Builder - Your Space, Your Rules",
    description: "Launch your own online forum for any topic or interest. Simple to use, powerful features. Start building your community today.",
    siteName: "Niche Community Forum Builder - 25 MicroSaaS Challenge", // Assuming siteName should also be updated
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Niche Community Forum Easily",
    description: "Create and manage your own online forum with our intuitive platform. Perfect for hobbies, professional groups, and more.",
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
    canonical: 'https://25microsaas.com/projects/niche-community-forum-builder',
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
