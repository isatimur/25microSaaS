"use client";

import { Header } from "@/components/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Newsletter } from "@/components/Newsletter";

const faqs = [
  {
    question: "What is the 25 MicroSaaS Challenge?",
    answer: "The 25 MicroSaaS Challenge is a 50-week program where participants build and launch 25 micro-SaaS projects. Each project is designed to teach valuable skills in development, design, and business while building a portfolio of real products."
  },
  {
    question: "Do I need to be an experienced programmer?",
    answer: "No, you don't need to be an experienced programmer. The challenge is designed for developers of all skill levels. We provide resources, guidance, and a supportive community to help you succeed regardless of your starting point."
  },
  {
    question: "How much time do I need to commit?",
    answer: "We recommend dedicating 10-15 hours per week to the challenge. However, you can adjust this based on your schedule and goals. The bi-weekly project cycle gives you flexibility in managing your time."
  },
  {
    question: "What kind of support is available?",
    answer: "You'll have access to a supportive community, bi-weekly live Q&A sessions, detailed project guides, code reviews, and a resource library. We also provide technical support and business guidance throughout your journey."
  },
  {
    question: "Can I use any programming language or framework?",
    answer: "Yes, you can use any programming language or framework you're comfortable with. We provide recommendations and resources for popular choices, but the final decision is yours."
  },
  {
    question: "What happens after I complete a project?",
    answer: "After completing each project, you'll have the opportunity to launch it, receive feedback from the community, and optionally monetize it. Each project becomes part of your portfolio and can potentially generate passive income."
  },
  {
    question: "Is there a cost to participate?",
    answer: "The basic challenge participation is free. However, we offer a premium tier with additional benefits like 1-on-1 mentoring, advanced workshops, and exclusive resources."
  },
  {
    question: "Can I join at any time?",
    answer: "Yes, you can join the challenge at any time. While we have scheduled cohorts, you can start your journey whenever you're ready and work at your own pace."
  }
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
              Everything you need to know about the 25 MicroSaaS Challenge.
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
                  <p className="text-neutral-300">
                    {faq.answer}
                  </p>
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
                Subscribe to our newsletter to get regular updates and answers to your questions.
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