"use client"

import { useEffect, useState } from 'react'
import { format, addDays, isSameDay, isWithinInterval } from 'date-fns'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const START_DATE = new Date('2025-01-14')
// const END_DATE = new Date('2025-12-31')
const TOTAL_PROJECTS = 25
const DAYS_PER_PROJECT = 14

export function ProjectTracker() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  const projectBlocks = Array.from({ length: TOTAL_PROJECTS }, (_, index) => {
    const projectStartDate = addDays(START_DATE, index * DAYS_PER_PROJECT)
    const projectEndDate = addDays(projectStartDate, DAYS_PER_PROJECT - 1)
    const days = Array.from({ length: DAYS_PER_PROJECT }, (_, dayIndex) => addDays(projectStartDate, dayIndex))

    return { projectStartDate, projectEndDate, days }
  })

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">25 MicroSaaS Project Tracker</h2>
      <div className="grid grid-cols-5 gap-4">
        {projectBlocks.map((project, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <CardContent className="p-4">
                    <div className="text-center mb-2 font-semibold text-sm text-blue-600">
                      Project {index + 1}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {project.days.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-3 h-3 rounded-full ${
                            isSameDay(day, currentDate)
                              ? 'bg-green-500'
                              : isWithinInterval(day, { start: START_DATE, end: currentDate })
                              ? 'bg-blue-400'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {format(project.projectStartDate, 'MMM d, yyyy')} - {format(project.projectEndDate, 'MMM d, yyyy')}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}

