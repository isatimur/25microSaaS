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
              About the AI Agent Challenge
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              Building 25 autonomous AI agents that generate real revenue — one every two weeks for 50 weeks.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow the Build
              </a>
              <a
                href="https://github.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                Open Source Code
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
              The Mission
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-neutral-300">
                The AI agent revolution is here. LangChain, CrewAI, OpenAI&apos;s function calling,
                and autonomous AI frameworks have made it possible for solo developers to build
                AI products that replace thousands of dollars worth of human labor.
              </p>
              <p className="text-lg text-neutral-300">
                Our mission is simple: <strong className="text-neutral-50">build 25 AI agent micro-SaaS businesses
                in 50 weeks, each generating at least $200/month in revenue.</strong> We document
                every step — the architecture, the code, the marketing, the revenue numbers.
              </p>
              <p className="text-lg text-neutral-300">
                This isn&apos;t a tutorial project. These are real businesses with real customers
                paying real money for AI agents that automate their work.
              </p>
            </div>
          </div>
        </section>

        {/* The Thesis */}
        <section className="py-20 px-4 bg-neutral-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
              The Thesis
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-neutral-300">
                Every business has repetitive tasks that cost $500-5,000/month in human labor.
                AI agents can automate 60-80% of these tasks at a fraction of the cost.
                The businesses that adopt AI agents first will have an insurmountable cost advantage.
              </p>
              <p className="text-lg text-neutral-300">
                We believe the best way to learn AI agents is to build and sell them.
                Each project teaches a new agentic AI pattern — from RAG pipelines to
                multi-agent orchestration to autonomous web scraping.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Philosophy */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
              Our Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js + TypeScript",
                "LangChain / CrewAI",
                "OpenAI GPT-4",
                "Supabase + Pinecone",
                "Stripe Billing",
                "Vercel Deployment",
                "Bull MQ (Jobs)",
                "Resend (Email)",
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-center"
                >
                  <span className="text-neutral-200 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-blue">
                Follow the Journey
              </h2>
              <p className="text-xl text-center text-neutral-400 mb-8">
                Weekly build logs, revenue updates, and the code behind every AI agent.
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
