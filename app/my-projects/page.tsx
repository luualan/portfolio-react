"use client";

import React from "react";
import ProjectSlider from "@/components/ProjectSlider";
import Particle from "@/components/Particle";

// md:flex-row puts things in a row
// #f5f5f5 #1b1b1b

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1b1b1b]">
      <div className="absolute h-full w-full z-[5]">
        <Particle />
      </div>
      {<ProjectSlider />}
    </div>
  );
};

export default Page;
