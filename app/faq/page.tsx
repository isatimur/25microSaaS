"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Newsletter } from "@/components/Newsletter";

const faqs = [
  {
    question: "What is an AI agent, and how is it different from a chatbot?",
    answer:
      "AI agents are autonomous systems that can plan, research, and execute multi-step tasks independently. Unlike chatbots that just respond to prompts, agents use tools (APIs, web scraping, databases) to take real actions — like writing and publishing a blog post, screening 100 resumes, or monitoring competitors 24/7.",
  },
  {
    question: "Can each project really generate $200+/month?",
    answer:
      "Yes. Every project targets a specific business pain point where companies currently pay $500–$5,000/month for human labor. An AI agent that replaces even a fraction of that is easily worth $200+/month. We validate demand before building and document revenue from day one.",
  },
  {
    question: "What tech stack do you use to build these agents?",
    answer:
      "Next.js + TypeScript for the web app, LangChain or CrewAI for agent orchestration, OpenAI GPT-4 (or Claude/open-source models) for intelligence, Supabase for the database, Pinecone for RAG, Stripe for payments, and Vercel for deployment. Each agent is a full-stack SaaS product.",
  },
  {
    question: "How do the AI agents make money?",
    answer:
      "Each agent uses one of these proven models: monthly subscriptions ($19–$99/mo), pay-per-use ($9.99/task), tiered usage-based pricing, or per-seat/per-repo pricing. We chose the model that best matches customer expectations for each niche.",
  },
  {
    question: "Are these open-source?",
    answer:
      "Build logs, architecture decisions, and key learnings are shared publicly. The codebase for each project is documented in detail. Some agents may be open-sourced after they've validated revenue. Subscribe to the newsletter for early access.",
  },
  {
    question: "What's the cost to run each AI agent?",
    answer:
      "Most agents cost $50–$200/month in infrastructure (OpenAI API, Supabase, Vercel, etc.). With $200+/month in revenue, every agent is profitable from its first paying customers. We document exact unit economics for each project.",
  },
  {
    question: "How long does it take to build each agent?",
    answer:
      "Two weeks per agent: Week 1 is architecture, core AI logic, and MVP. Week 2 is payment integration, landing page, launch, and first customers. Speed is the point — we ship fast and iterate based on real customer feedback.",
  },
  {
    question: "Can I build along with you?",
    answer:
      "Absolutely! Subscribe to the newsletter for weekly build logs with architecture diagrams, code snippets, and the exact playbook we use. Many subscribers are building their own AI agents following our process.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
              Everything you need to know about building AI agents that make money.
            </p>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4 text-neutral-50">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-300">{faq.answer}</p>
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-center text-neutral-400 mb-8">
                Subscribe and reply to any email — we read and respond to every message.
              </p>
              <div className="mt-8">
                <Newsletter />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
