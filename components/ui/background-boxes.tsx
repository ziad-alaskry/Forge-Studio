"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Boxes = () => {
  const rows = 40;
  const cols = 60;
  const boxes = [];

  for (let i = 0; i < rows * cols; i++) {
    boxes.push(
      <motion.div
        key={i}
        className={cn(
         "h-6 w-6 border border-neutral-800/30",
          "hover:bg-neutral-700/20 transition-colors"
        )}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center scale-[1.2] opacity-30">
      <div
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
        className="grid"
      >
        {boxes}
      </div>
    </div>
  );
};
