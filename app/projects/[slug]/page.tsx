"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  DollarSign,
  TrendingUp,
  Zap,
  CalendarDays,
  Target,
  Swords,
  Lightbulb,
  Users,
} from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  const statusLabel =
    project.status === "launched"
      ? "Launched"
      : project.status === "in-progress"
      ? "In Progress"
      : "Coming Soon";

  const statusColor =
    project.status === "launched"
      ? "text-green-400"
      : project.status === "in-progress"
      ? "text-brand-yellow"
      : "text-neutral-400";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm mb-4">
              <span className="text-brand-yellow font-medium">
                Project #{project.number}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">{project.type}</span>
              <span className="text-neutral-600">·</span>
              <span className={statusColor}>{statusLabel}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <CalendarDays className="w-3 h-3" />
                {project.buildWeek}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-4 italic">
              {project.tagline}
            </p>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              {project.heroSubtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
              >
                <Icon className="w-5 h-5 mr-2" />
                {project.ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Revenue Dashboard */}
        <section className="py-16 px-4 bg-neutral-900/50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-8 text-neutral-100">
              Revenue Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center">
                <DollarSign className="w-7 h-7 text-green-400 mx-auto mb-2" />
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                  Pricing
                </p>
                <p className="text-sm font-semibold text-neutral-50">
                  {project.pricing}
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center">
                <TrendingUp className="w-7 h-7 text-brand-yellow mx-auto mb-2" />
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                  Revenue Potential
                </p>
                <p className="text-sm font-semibold text-neutral-50">
                  {project.monthlyRevenuePotential}/mo
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center">
                <Zap className="w-7 h-7 text-purple-400 mx-auto mb-2" />
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                  Revenue Model
                </p>
                <p className="text-sm font-semibold text-neutral-50">
                  {project.revenueModel}
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center">
                <CalendarDays className="w-7 h-7 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                  Build Sprint
                </p>
                <p className="text-sm font-semibold text-neutral-50">
                  {project.buildWeek}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Makes Money */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
              Why This Makes Money
            </h2>
            <div className="p-8 rounded-2xl border border-green-900/50 bg-green-950/20">
              <p className="text-lg text-neutral-200 leading-relaxed">
                {project.whyItMakesMoney}
              </p>
            </div>
          </div>
        </section>

        {/* Ideal Customer */}
        <section className="py-16 px-4 bg-neutral-900/50">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/80">
              <div className="p-3 rounded-xl bg-brand-yellow/10 flex-shrink-0">
                <Target className="w-8 h-8 text-brand-yellow" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-neutral-50">
                  Ideal Customer
                </h2>
                <p className="text-neutral-300 leading-relaxed">
                  {project.idealCustomer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-7 h-7 text-brand-yellow" />
              <h2 className="text-3xl font-bold text-neutral-50">
                Use Cases
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <span className="text-brand-yellow font-bold text-lg mt-0.5">
                    {index + 1}.
                  </span>
                  <p className="text-neutral-300">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-16 px-4 bg-neutral-900/50">
          <div className="container mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Agentic AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <Star className="w-8 h-8 mb-4 text-brand-yellow" />
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 bg-neutral-900/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gradient">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <span className="text-neutral-200 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Swords className="w-7 h-7 text-red-400" />
              <h2 className="text-3xl font-bold text-neutral-50">
                Competitive Landscape
              </h2>
            </div>
            <p className="text-neutral-400 mb-6">
              Existing tools in this space — and why an AI-first approach wins:
            </p>
            <div className="flex flex-wrap gap-3">
              {project.competitors.map((competitor, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800/50 text-sm text-neutral-300"
                >
                  {competitor}
                </span>
              ))}
            </div>
            <p className="text-neutral-400 mt-6 text-sm">
              Our AI agent approach differentiates by automating the entire workflow autonomously — not just assisting. While these competitors require significant manual effort, our agent works end-to-end with minimal human input.
            </p>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 px-4 bg-neutral-900/50">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-7 h-7 text-brand-blue" />
              <h2 className="text-3xl font-bold text-neutral-50">
                What You&apos;ll Learn Building This
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyLearnings.map((learning, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30"
                >
                  <Star className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
              Interested in {project.title}?
            </h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
              {project.status === "launched"
                ? "This AI agent is live and generating revenue. Try it today."
                : project.status === "in-progress"
                ? "We're building this AI agent right now. Subscribe to get early access."
                : "This project is on our roadmap. Subscribe to be first in line when it launches."}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-6 h-6 mr-2" />
                See All 25 AI Agents
              </a>
              <a
                href="/blog"
                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
              >
                Read the Build Log
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.title,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            url: `https://25microsaas.com/projects/${project.id}`,
            description: project.description,
            featureList: project.features.map((f) => f.title),
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: project.pricing,
            },
          }),
        }}
      />
    </>
  );
}
