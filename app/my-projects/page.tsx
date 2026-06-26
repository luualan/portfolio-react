"use client";

import React from "react";
import ProjectSlider from "@/components/ProjectSlider";
import Particle from "@/components/Particle";

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1b1b1b] px-6 py-24 text-white md:px-16">
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <Particle />
      </div>

      <div className="relative z-[10] mx-auto max-w-7xl">
        <ProjectSlider />
      </div>
    </main>
  );
};

export default Page;