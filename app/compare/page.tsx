"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { CheckCircle2, Loader2, Clock, ArrowUpRight } from "lucide-react";

const statusIcons = {
  launched: CheckCircle2,
  "in-progress": Loader2,
  upcoming: Clock,
};
const statusColors = {
  launched: "text-green-400",
  "in-progress": "text-yellow-400",
  upcoming: "text-neutral-500",
};

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        <section className="relative h-[24rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Compare All 25 Agents
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Every agent side-by-side: pricing, revenue potential, status, and build week.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-neutral-800">
              <table className="w-full text-sm min-w-[900px]">
                <thead>
                  <tr className="bg-neutral-800/50 text-left">
                    <th className="px-4 py-4 text-neutral-400 font-medium w-8">#</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Agent</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Type</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Status</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Pricing</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Revenue/mo</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Model</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium">Week</th>
                    <th className="px-4 py-4 text-neutral-400 font-medium w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => {
                    const StatusIcon = statusIcons[project.status];
                    const color = statusColors[project.status];
                    return (
                      <tr
                        key={project.id}
                        className="border-t border-neutral-800 hover:bg-neutral-900/50 transition-colors"
                      >
                        <td className="px-4 py-3 text-brand-yellow font-medium">
                          {project.number}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={project.projectPageUrl}
                            className="text-neutral-100 hover:text-brand-yellow transition-colors font-medium"
                          >
                            {project.title}
                          </Link>
                          <p className="text-xs text-neutral-600 mt-0.5 truncate max-w-[200px]">
                            {project.tagline}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-neutral-400 text-xs">
                          {project.type}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`flex items-center gap-1.5 ${color}`}>
                            <StatusIcon className="w-3.5 h-3.5" />
                            <span className="text-xs">
                              {project.status === "launched"
                                ? "Live"
                                : project.status === "in-progress"
                                ? "Building"
                                : "Planned"}
                            </span>
                          </span>
                        </td>
                        <td className="px-4 py-3 text-neutral-300 text-xs">
                          {project.pricing}
                        </td>
                        <td className="px-4 py-3 text-green-400 font-medium text-xs">
                          {project.monthlyRevenuePotential}
                        </td>
                        <td className="px-4 py-3 text-neutral-400 text-xs">
                          {project.revenueModel}
                        </td>
                        <td className="px-4 py-3 text-neutral-500 text-xs">
                          {project.buildWeek}
                        </td>
                        <td className="px-4 py-3">
                          <Link href={project.projectPageUrl}>
                            <ArrowUpRight className="w-4 h-4 text-neutral-600 hover:text-brand-yellow transition-colors" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
