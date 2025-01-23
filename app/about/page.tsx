"use client";

import { Header } from "@/components/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Newsletter } from "@/components/Newsletter";
import { Github, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              About 25 MicroSaaS Challenge
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              Building a portfolio of micro-SaaS projects, one challenge at a time.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow on Twitter
              </a>
              <a
                href="https://github.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
              Our Mission
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-neutral-300">
                The 25 MicroSaaS Challenge was born from a simple idea: what if we could help developers 
                turn their coding skills into sustainable micro-businesses? Our mission is to inspire and 
                guide developers of all skill levels to build and launch their own micro-SaaS projects.
              </p>
              <p className="text-lg text-neutral-300">
                Through bi-weekly challenges, community support, and comprehensive resources, we&apos;re 
                creating an environment where developers can learn, build, and grow together.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-neutral-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-blue">
              Behind the Challenge
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-neutral-300">
                We&apos;re a team of passionate developers and entrepreneurs who believe in the power of 
                learning by doing. Our experience in building and scaling SaaS products has taught us 
                valuable lessons that we&apos;re excited to share with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-blue">
                Join Our Community
              </h2>
              <p className="text-xl text-center text-neutral-400 mb-8">
                Get updates on new projects, behind-the-scenes insights, and early access to launches.
              </p>
              <div className="mt-8">
                <Newsletter />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 