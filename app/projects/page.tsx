"use client";

import { Header } from "@/components/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Newsletter } from "@/components/Newsletter";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, Clock } from "lucide-react";

const statusConfig = {
  launched: { label: "Launched", icon: CheckCircle2, color: "text-green-400 bg-green-400/10 border-green-400/20" },
  "in-progress": { label: "In Progress", icon: Loader2, color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  upcoming: { label: "Coming Soon", icon: Clock, color: "text-neutral-400 bg-neutral-400/10 border-neutral-400/20" },
};

export default function ProjectsPage() {
  const launched = projects.filter((p) => p.status === "launched");
  const inProgress = projects.filter((p) => p.status === "in-progress");
  const upcoming = projects.filter((p) => p.status === "upcoming");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[30rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              All 25 Projects
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
              From Chrome extensions to AI-powered tools — explore every micro-SaaS
              project in our 50-week challenge.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="w-4 h-4" /> {launched.length} Launched
              </span>
              <span className="flex items-center gap-2 text-yellow-400">
                <Loader2 className="w-4 h-4" /> {inProgress.length} In Progress
              </span>
              <span className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4" /> {upcoming.length} Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* Launched Projects */}
        {launched.length > 0 && (
          <ProjectSection title="Launched Projects" projects={launched} />
        )}

        {/* In Progress Projects */}
        {inProgress.length > 0 && (
          <ProjectSection title="In Progress" projects={inProgress} />
        )}

        {/* Upcoming Projects */}
        {upcoming.length > 0 && (
          <ProjectSection title="Coming Soon" projects={upcoming} />
        )}

        {/* Newsletter */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-blue">
              Get Notified of New Launches
            </h2>
            <p className="text-xl text-center text-neutral-400 mb-8">
              Subscribe to hear when new projects go live and get behind-the-scenes updates.
            </p>
            <div className="mt-8">
              <Newsletter />
            </div>
          </div>
        </section>
      </main>
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
                <h3 className="text-lg font-semibold mb-2 text-neutral-50 group-hover:text-brand-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{project.type}</span>
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
