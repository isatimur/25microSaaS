"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The AI Cold Outreach Agent 3x'd our reply rate. We went from 2% to 7% overnight. Worth every penny.",
    name: "Sarah K.",
    role: "Agency Owner",
    agent: "AI Cold Outreach Agent",
  },
  {
    quote: "I was spending 2 hours a day answering the same 10 questions. Now I spend zero. The support agent handles everything.",
    name: "Marcus T.",
    role: "Shopify App Developer",
    agent: "AI Customer Support Agent",
  },
  {
    quote: "We publish 10 SEO articles a month now. Before, we could barely do 2. The quality is genuinely better than our freelancer.",
    name: "Jessica L.",
    role: "Content Marketing Lead",
    agent: "AI SEO Content Agent",
  },
  {
    quote: "The code review agent caught a SQL injection vulnerability our senior devs missed. Paid for itself in one PR.",
    name: "David R.",
    role: "Engineering Manager",
    agent: "AI Code Review Agent",
  },
  {
    quote: "I record the podcast, upload it, and everything else is done. Show notes, clips, social posts. Magic.",
    name: "Alex P.",
    role: "Podcast Host",
    agent: "AI Podcast Producer",
  },
  {
    quote: "Tailored my resume for 30 different jobs in one afternoon. Got 5 interviews in the first week. Insane ROI.",
    name: "Priya M.",
    role: "Software Engineer",
    agent: "AI Resume Tailor Agent",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">
          What Users Are Saying
        </h2>
        <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
          Real feedback from early adopters of our AI agents.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>
              <p className="text-neutral-200 mb-6 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-neutral-100">
                  {t.name}
                </p>
                <p className="text-xs text-neutral-500">{t.role}</p>
                <p className="text-xs text-brand-yellow mt-1">{t.agent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
