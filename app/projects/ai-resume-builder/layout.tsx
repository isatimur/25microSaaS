import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://25microsaas.com'),
  title: "AI Resume Builder & Reviewer - Craft Your Perfect Resume",
  description: "Build a professional resume with AI-powered suggestions, keyword optimization, and formatting help. Get AI reviews for ATS compatibility and impact.",
  keywords: ["ai resume builder", "resume creator", "cv builder", "ats resume", "resume optimization", "ai career coach", "job application tools"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com/projects/ai-resume-builder",
    title: "AI Resume Builder & Reviewer - Land Your Dream Job",
    description: "Create an outstanding resume with our AI assistant. Get instant feedback, optimize for ATS, and impress recruiters.",
    siteName: "AI Resume Builder & Reviewer - 25 MicroSaaS Challenge", // Updated siteName
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "Daily Affirmations Chrome Extension Preview",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a Better Resume with AI",
    description: "Craft a job-winning resume with AI-powered guidance and review tools.",
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
    canonical: 'https://25microsaas.com/projects/ai-resume-builder',
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
