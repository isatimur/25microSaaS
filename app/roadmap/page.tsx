"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { projects } from "@/lib/projects";
import Link from "next/link";
import {
  CheckCircle2,
  Loader2,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const statusConfig = {
  launched: { icon: CheckCircle2, color: "text-green-400", bg: "bg-green-400/10 border-green-400/20", label: "Launched" },
  "in-progress": { icon: Loader2, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20", label: "Building" },
  upcoming: { icon: Clock, color: "text-neutral-500", bg: "bg-neutral-500/10 border-neutral-700", label: "Planned" },
};

export default function RoadmapPage() {
  const launched = projects.filter((p) => p.status === "launched").length;
  const total = projects.length;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero */}
        <section className="relative h-[28rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              50-Week Roadmap
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto mb-6">
              Every 2 weeks we ship a new AI agent. Here&apos;s the full 50-week
              plan from start to finish.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-400">
                {launched} / {total} shipped
              </span>
              <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 text-neutral-300">
                {Math.round((launched / total) * 100)}% complete
              </span>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-800" />

              {projects.map((project) => {
                const Icon = project.icon;
                const cfg = statusConfig[project.status];
                const StatusIcon = cfg.icon;

                return (
                  <Link
                    key={project.id}
                    href={project.projectPageUrl}
                    className="group relative flex gap-6 mb-8 last:mb-0"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${cfg.bg} ${
                          project.status === "launched"
                            ? "border-green-400"
                            : project.status === "in-progress"
                            ? "border-yellow-400"
                            : "border-neutral-700"
                        }`}
                      >
                        <StatusIcon className={`w-5 h-5 ${cfg.color}`} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 group-hover:bg-neutral-900/80 group-hover:border-neutral-700 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-brand-yellow" />
                          <span className="text-xs text-brand-yellow font-medium">
                            #{project.number}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {project.buildWeek}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.color}`}
                          >
                            {cfg.label}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-50 group-hover:text-brand-yellow transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500 italic mb-2">
                        {project.tagline}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-green-400 flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {project.monthlyRevenuePotential}/mo
                        </span>
                        <span className="text-neutral-500">{project.type}</span>
                        <span className="text-neutral-500">{project.pricing}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Newsletter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
