"use client";

import { useEffect, useState } from "react";
import { format, addDays, isSameDay, isWithinInterval } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { CheckCircle2, Loader2, Clock } from "lucide-react";

const START_DATE = new Date("2025-01-14");
const TOTAL_PROJECTS = 25;
const DAYS_PER_PROJECT = 14;

const statusIcons = {
  launched: CheckCircle2,
  "in-progress": Loader2,
  upcoming: Clock,
};

const statusColors = {
  launched: "text-green-500",
  "in-progress": "text-yellow-500",
  upcoming: "text-neutral-400",
};

export function ProjectTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentDate(new Date()),
      1000 * 60 * 60
    );
    return () => clearInterval(timer);
  }, []);

  const projectBlocks = Array.from({ length: TOTAL_PROJECTS }, (_, index) => {
    const projectStartDate = addDays(START_DATE, index * DAYS_PER_PROJECT);
    const projectEndDate = addDays(projectStartDate, DAYS_PER_PROJECT - 1);
    const days = Array.from({ length: DAYS_PER_PROJECT }, (_, dayIndex) =>
      addDays(projectStartDate, dayIndex)
    );
    const project = projects[index];

    return { projectStartDate, projectEndDate, days, project };
  });

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">
        25 AI Agent Tracker
      </h2>
      <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-green-500" /> Launched
        </span>
        <span className="flex items-center gap-1">
          <Loader2 className="w-4 h-4 text-yellow-500" /> In Progress
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-neutral-400" /> Coming Soon
        </span>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {projectBlocks.map((block, index) => {
          const StatusIcon = statusIcons[block.project?.status ?? "upcoming"];
          const statusColor =
            statusColors[block.project?.status ?? "upcoming"];

          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={block.project?.projectPageUrl ?? "#"}>
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-xs text-blue-600 truncate mr-1">
                            {block.project?.title ?? `Project ${index + 1}`}
                          </div>
                          <StatusIcon
                            className={`w-3.5 h-3.5 flex-shrink-0 ${statusColor}`}
                          />
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {block.days.map((day, dayIndex) => (
                            <div
                              key={dayIndex}
                              className={`w-3 h-3 rounded-full ${
                                isSameDay(day, currentDate)
                                  ? "bg-green-500"
                                  : isWithinInterval(day, {
                                      start: START_DATE,
                                      end: currentDate,
                                    })
                                  ? "bg-blue-400"
                                  : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">
                    #{index + 1} {block.project?.title}
                  </p>
                  <p className="text-xs">
                    {format(block.projectStartDate, "MMM d, yyyy")} -{" "}
                    {format(block.projectEndDate, "MMM d, yyyy")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}
