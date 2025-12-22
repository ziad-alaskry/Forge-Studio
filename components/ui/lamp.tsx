"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-black",
        className
      )}
    >
      {/* lamp glow */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            absolute top-0 left-1/2
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(179,152,103,0.35),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      {/* content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
