"use client";

import { projects } from "@/lib/projects";
import { CheckCircle2, Loader2, Clock } from "lucide-react";

export function ChallengeProgress() {
  const launched = projects.filter((p) => p.status === "launched").length;
  const inProgress = projects.filter((p) => p.status === "in-progress").length;
  const upcoming = projects.filter((p) => p.status === "upcoming").length;
  const total = projects.length;
  const completedPercent = Math.round(((launched + inProgress * 0.5) / total) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-brand-blue">Challenge Progress</h3>
        <span className="text-3xl font-extrabold text-brand-blue">{completedPercent}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-4 bg-neutral-100 rounded-full overflow-hidden">
        <div className="h-full flex">
          <div
            className="bg-green-500 transition-all duration-1000"
            style={{ width: `${(launched / total) * 100}%` }}
          />
          <div
            className="bg-yellow-400 transition-all duration-1000"
            style={{ width: `${(inProgress / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium">{launched}</span> Launched
          </span>
          <span className="flex items-center gap-1.5 text-yellow-600">
            <Loader2 className="w-4 h-4" />
            <span className="font-medium">{inProgress}</span> Building
          </span>
          <span className="flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{upcoming}</span> Planned
          </span>
        </div>
        <span className="text-neutral-400">{launched + inProgress} / {total} agents</span>
      </div>
    </div>
  );
}
