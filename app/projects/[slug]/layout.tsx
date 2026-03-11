import type { Metadata } from "next";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { getProjectBySlug } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    metadataBase: new URL("https://25microsaas.com"),
    title: `${project.title} — AI Agent Challenge`,
    description: project.description,
    keywords: [
      project.title.toLowerCase(),
      project.type.toLowerCase(),
      "ai agents",
      "agentic ai",
      ...project.techStack.map((t) => t.toLowerCase()),
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://25microsaas.com/projects/${project.id}`,
      title: `${project.title} — AI Agent Challenge`,
      description: project.description,
      siteName: "AI Agent Challenge",
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://25microsaas.com/projects/${project.id}`,
    },
  };
}

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
