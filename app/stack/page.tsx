"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Code2, Database, CreditCard, Cloud, Cpu,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    tools: [
      { name: "Next.js 14", role: "App framework", desc: "Server components, API routes, file-based routing. One framework for the marketing site + the full app.", url: "https://nextjs.org", cost: "Free" },
      { name: "TypeScript", role: "Language", desc: "Type safety for complex agent data flows. Catches prompt-formatting bugs before production.", url: "https://typescriptlang.org", cost: "Free" },
      { name: "Tailwind CSS", role: "Styling", desc: "Ship polished UI in hours. Every agent looks beautiful from day one without CSS architecture decisions.", url: "https://tailwindcss.com", cost: "Free" },
      { name: "shadcn/ui", role: "Component library", desc: "Copy-paste accessible components. Buttons, toasts, cards — consistent across all agents.", url: "https://ui.shadcn.com", cost: "Free" },
    ],
  },
  {
    title: "AI & Agents",
    icon: Cpu,
    tools: [
      { name: "LangChain", role: "Agent orchestration", desc: "Tool-calling chains for single-agent workflows. Web search, scraping, API tools wired together.", url: "https://langchain.com", cost: "Free" },
      { name: "CrewAI", role: "Multi-agent systems", desc: "Role-based agent collaboration. Researcher → writer → editor crews for content workflows.", url: "https://crewai.com", cost: "Free" },
      { name: "OpenAI GPT-4", role: "Intelligence", desc: "Best reasoning model for complex planning, code review, and nuanced writing. Our primary LLM.", url: "https://openai.com", cost: "$50–200/mo" },
      { name: "Whisper API", role: "Speech-to-text", desc: "95%+ accuracy transcription for meeting and podcast agents. Speaker diarization support.", url: "https://openai.com/research/whisper", cost: "Pay per minute" },
      { name: "DALL-E 3", role: "Image generation", desc: "Blog images, product photos, virtual staging. ~$0.04 per image.", url: "https://openai.com/dall-e-3", cost: "$0.04/image" },
    ],
  },
  {
    title: "Data & Storage",
    icon: Database,
    tools: [
      { name: "Supabase", role: "Database + Auth", desc: "Postgres + row-level security + auth + realtime. Free tier covers MVP. Multi-tenant ready.", url: "https://supabase.com", cost: "Free → $25/mo" },
      { name: "Pinecone", role: "Vector store", desc: "Managed vector DB for RAG pipelines. Similarity search in milliseconds. Free tier covers 100K vectors.", url: "https://pinecone.io", cost: "Free → $70/mo" },
      { name: "Upstash Redis", role: "Cache & queues", desc: "Serverless Redis for job queues (Bull MQ), rate limiting, and caching. Pay-per-request pricing.", url: "https://upstash.com", cost: "Free → $10/mo" },
    ],
  },
  {
    title: "Payments & Email",
    icon: CreditCard,
    tools: [
      { name: "Stripe", role: "Payments", desc: "Subscriptions, usage-based billing, customer portal. Best developer experience for SaaS billing.", url: "https://stripe.com", cost: "2.9% + $0.30" },
      { name: "Resend", role: "Transactional email", desc: "Welcome emails, receipts, notifications. Clean API, great deliverability, generous free tier.", url: "https://resend.com", cost: "Free → $20/mo" },
    ],
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    tools: [
      { name: "Vercel", role: "Deployment", desc: "Zero-config deploys for Next.js. Preview URLs for every branch. Edge functions for fast APIs.", url: "https://vercel.com", cost: "Free → $20/mo" },
      { name: "Bull MQ", role: "Job queues", desc: "Reliable background job processing. Retries, scheduling, and rate limiting for long-running agent tasks.", url: "https://bullmq.io", cost: "Free" },
      { name: "Playwright", role: "Web scraping", desc: "Headless browser automation for agents that need to interact with websites and extract data.", url: "https://playwright.dev", cost: "Free" },
    ],
  },
];

export default function StackPage() {
  const totalFree = categories.flatMap((c) => c.tools).filter((t) => t.cost === "Free").length;
  const totalTools = categories.flatMap((c) => c.tools).length;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        <section className="relative h-[28rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              The Stack
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto mb-6">
              Every tool we use to build 25 AI agents. {totalFree} of {totalTools} tools
              are free. Total infrastructure cost: $50–245/month per agent.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-400">
                {totalFree}/{totalTools} free tools
              </span>
              <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 text-neutral-300">
                $50–245/mo total cost
              </span>
            </div>
          </div>
        </section>

        {categories.map((category) => {
          const CatIcon = category.icon;
          return (
            <section key={category.title} className="py-12 px-4 odd:bg-neutral-900/30">
              <div className="container mx-auto max-w-5xl">
                <div className="flex items-center gap-3 mb-8">
                  <CatIcon className="w-6 h-6 text-brand-yellow" />
                  <h2 className="text-2xl font-bold text-neutral-50">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-base font-semibold text-neutral-50 group-hover:text-brand-yellow transition-colors">
                            {tool.name}
                          </h3>
                          <span className="text-xs text-neutral-500">{tool.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${tool.cost === "Free" ? "bg-green-400/10 text-green-400 border border-green-400/20" : "bg-neutral-800 text-neutral-400 border border-neutral-700"}`}>
                            {tool.cost}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-yellow transition-colors" />
                        </div>
                      </div>
                      <p className="text-sm text-neutral-400">{tool.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Cost Summary */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Monthly Cost Per Agent</h2>
            <div className="overflow-hidden rounded-2xl border border-neutral-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-800/50">
                    <th className="text-left px-6 py-4 text-neutral-400 font-medium">Component</th>
                    <th className="text-right px-6 py-4 text-neutral-400 font-medium">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["OpenAI API (GPT-4 + embeddings)", "$50–200"],
                    ["Supabase (database + auth)", "$0–25"],
                    ["Pinecone (vector store)", "$0"],
                    ["Vercel (hosting)", "$0–20"],
                    ["Stripe (payment processing)", "% of revenue"],
                    ["Resend (email)", "$0"],
                    ["Redis / Upstash (queues)", "$0"],
                  ].map(([component, cost]) => (
                    <tr key={component} className="border-t border-neutral-800">
                      <td className="px-6 py-3 text-neutral-300">{component}</td>
                      <td className="px-6 py-3 text-right text-neutral-300">{cost}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-neutral-700 bg-neutral-800/30">
                    <td className="px-6 py-4 font-bold text-neutral-50">Total</td>
                    <td className="px-6 py-4 text-right font-bold text-green-400">$50–245/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-neutral-500 mt-4">
              At $200+/mo revenue, every agent is profitable from its first paying customers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
