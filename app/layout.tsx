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
  metadataBase: new URL('https://25microsaas.vercel.app'),
  title: "25 MicroSaaS Challenge - Build Your SaaS Empire",
  description: "Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in one year. Learn, build, and grow your SaaS portfolio with our supportive community.",
  keywords: ["microSaaS", "SaaS challenge", "startup challenge", "indie hacker", "software development", "entrepreneurship"],
  authors: [{ name: "25 MicroSaaS Team" }],
  openGraph: {
    title: "25 MicroSaaS Challenge - Build Your SaaS Empire",
    description: "Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in one year. Learn, build, and grow your SaaS portfolio.",
    type: "website",
    locale: "en_US",
    url: "https://25microsaas.vercel.app",
    siteName: "25 MicroSaaS Challenge",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "25 MicroSaaS Challenge",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 MicroSaaS Challenge - Build Your SaaS Empire",
    description: "Join the 25 MicroSaaS Challenge and build 25 micro-SaaS projects in one year.",
    site: "@25microsaas",
    creator: "@25microsaas",
    images: ["/og-image.jpg"],
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
    canonical: 'https://25microsaas.vercel.app',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
