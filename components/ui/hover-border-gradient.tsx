"use client";

import React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type HoverBorderGradientProps<
  T extends React.ElementType = "div"
> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<T>;

export const HoverBorderGradient = <
  T extends React.ElementType = "div"
>({
  as,
  children,
  className,
  containerClassName,
  ...props
}: HoverBorderGradientProps<T>) => {
  const Component = as || "div";

  // 1. Create a continuous time counter in milliseconds
  const time = useTime();

  // 2. Map the time to a rotation value. 
  // Duration is 8000ms (8 seconds) for a full 360-degree turn.
  // Using a modulo-like calculation inside useTransform ensures it climbs infinitely.
  const rotate = useTransform(time, (t) => (t / 4000) * 360);

  return (
    <Component
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px]",
        containerClassName
      )}
    >
      {/* 3. Apply the 'rotate' motion value to the style prop instead of 'animate' */}
      <motion.span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#B39867_92%,transparent_100%)]"
        style={{ rotate }}
      />

      {/* inner content */}
      <span
        className={cn(
          "relative z-10 inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-colors",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
};