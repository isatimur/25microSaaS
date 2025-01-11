"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <div className={cn("absolute inset-0 z-0 h-full w-full overflow-hidden", className)}>
        <svg
          id="bg-beams"
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-50"
        >
          {/* Main curved beams */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
            stroke="url(#paint0_radial_242_278)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.5 }}
            d="M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867"
            stroke="url(#paint0_radial_242_278)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
            d="M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859"
            stroke="url(#paint0_radial_242_278)"
            strokeWidth="2"
          ></motion.path>

          {/* Additional diagonal beams */}
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5 }}
            x1="0" y1="0" x2="1000" y2="1000"
            stroke="url(#paint1_linear)"
            strokeWidth="1"
          />
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
            x1="1000" y1="0" x2="0" y2="1000"
            stroke="url(#paint1_linear)"
            strokeWidth="1"
          />

          {/* Pulsing circles */}
          <motion.circle
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: 200, opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            cx="500" cy="500"
            fill="url(#paint2_radial)"
          />

          <defs>
            {/* Main gradient for curved beams */}
            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop stopColor="hsl(var(--brand-yellow))" stopOpacity="0.5"></stop>
              <stop offset="0.5" stopColor="white" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="hsl(var(--brand-blue))" stopOpacity="0.2"></stop>
            </radialGradient>

            {/* Linear gradient for diagonal lines */}
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="hsl(var(--brand-yellow))" stopOpacity="0.2" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
              <stop offset="1" stopColor="hsl(var(--brand-blue))" stopOpacity="0.2" />
            </linearGradient>

            {/* Radial gradient for pulsing circle */}
            <radialGradient id="paint2_radial" cx="0.5" cy="0.5" r="0.5">
              <stop stopColor="hsl(var(--brand-yellow))" stopOpacity="0.3" />
              <stop offset="1" stopColor="hsl(var(--brand-blue))" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams"; 