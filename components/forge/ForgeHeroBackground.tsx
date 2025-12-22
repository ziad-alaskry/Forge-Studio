"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { Spotlight } from "@/components/ui/spotlight";

const ForgeHeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background boxes */}
      

      {/* Spotlight accent */}
      <Spotlight
        className="-top-0 right-50 -translate-y-1/2 opacity-50"
         fill="#f2ff00"
        />
      <Spotlight
        className="-top-64 left-1/2 -translate-y-1/2 opacity-20"
         fill="blue"
        />
    </div>
  );
};

export default ForgeHeroBackground;
