"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-10 h-[169%] w-[138%]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.0309 -0.9995 0.9995 -0.0309 73.984 3011.36)"
          fill={fill}
          fillOpacity="0.25"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="3787"
          height="2842"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="200" />
        </filter>
      </defs>
    </svg>
  );
};
