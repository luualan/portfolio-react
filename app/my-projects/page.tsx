import React from "react";
import ProjectSlider from "@/components/ProjectSlider";

// md:flex-row puts things in a row
// #f5f5f5 #1b1b1b

const Page = () => {
  return (
    <div className="flex md:flex-row min-h-screen bg-[#1b1b1b]">
      {<ProjectSlider />}
    </div>
  );
};

export default Page;
