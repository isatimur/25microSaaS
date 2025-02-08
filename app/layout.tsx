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
  title: '25 MicroSaaS Challenge - Build Your SaaS Empire',
  description: 'Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in 50 weeks. Our first project, Daily Affirmations Chrome Extension, is now live!',
  keywords: ["microSaaS", "SaaS challenge", "startup challenge", "indie hacker", "software development", "entrepreneurship", "chrome extension", "daily affirmations"],
  authors: [{ name: "25 MicroSaaS Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.com",
    title: "25 MicroSaaS Challenge - Build Your SaaS Empire",
    description: "Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in 50 weeks. Our first project, Daily Affirmations Chrome Extension, is now live!",
    siteName: "25 MicroSaaS Challenge",
    images: [{
      url: "/palm-leaf.png",
      width: 1200,
      height: 630,
      alt: "25 MicroSaaS Challenge",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 MicroSaaS Challenge",
    description: "Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in 50 weeks!",
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
