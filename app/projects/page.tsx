"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Newsletter } from "@/components/Newsletter";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, Clock, DollarSign } from "lucide-react";

const statusConfig = {
  launched: { label: "Launched", icon: CheckCircle2, color: "text-green-400 bg-green-400/10 border-green-400/20" },
  "in-progress": { label: "Building", icon: Loader2, color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  upcoming: { label: "Planned", icon: Clock, color: "text-neutral-400 bg-neutral-400/10 border-neutral-400/20" },
};

export default function ProjectsPage() {
  const launched = projects.filter((p) => p.status === "launched");
  const inProgress = projects.filter((p) => p.status === "in-progress");
  const upcoming = projects.filter((p) => p.status === "upcoming");

  const totalRevenue = "$60K–$180K/yr";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[32rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm mb-6">
              <span className="text-brand-yellow">100% Agentic AI</span>
              <span className="text-neutral-400 mx-2">·</span>
              <span className="text-green-400">$200+/mo each</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              25 AI Agent Businesses
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-4">
              Every project is an autonomous AI agent designed to generate real revenue.
              From SEO writers to code reviewers — each one solves a $200+/mo problem.
            </p>
            <p className="text-lg text-green-400 font-semibold mb-8">
              Combined portfolio potential: {totalRevenue}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="w-4 h-4" /> {launched.length} Launched
              </span>
              <span className="flex items-center gap-2 text-yellow-400">
                <Loader2 className="w-4 h-4" /> {inProgress.length} Building
              </span>
              <span className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4" /> {upcoming.length} Planned
              </span>
            </div>
          </div>
        </section>

        {launched.length > 0 && (
          <ProjectSection title="Launched & Generating Revenue" projects={launched} />
        )}
        {inProgress.length > 0 && (
          <ProjectSection title="Currently Building" projects={inProgress} />
        )}
        {upcoming.length > 0 && (
          <ProjectSection title="On the Roadmap" projects={upcoming} />
        )}

        {/* Newsletter */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-blue">
              Get Launch Alerts & Revenue Updates
            </h2>
            <p className="text-xl text-center text-neutral-400 mb-8">
              Subscribe to follow our journey building 25 AI agents that make money.
            </p>
            <div className="mt-8">
              <Newsletter />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectSection({
  title,
  projects: sectionProjects,
}: {
  title: string;
  projects: typeof projects;
}) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-neutral-50">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionProjects.map((project) => {
            const Icon = project.icon;
            const cfg = statusConfig[project.status];
            const StatusIcon = cfg.icon;
            return (
              <Link
                key={project.id}
                href={project.projectPageUrl}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-800">
                      <Icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <span className="text-sm text-brand-yellow font-medium">
                      #{project.number}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${cfg.color}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {cfg.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-neutral-50 group-hover:text-brand-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 italic mb-3">{project.tagline}</p>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-green-400">
                      <DollarSign className="w-3 h-3" />
                      {project.monthlyRevenuePotential}/mo
                    </span>
                    <span className="text-xs text-neutral-600">{project.buildWeek}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
