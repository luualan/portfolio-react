import React from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

// items-center: Centers items along the cross-axis (vertically).
// justify-center: Centers items along the main axis (horizontally).

const Page = () => {
  return (
    <div className="min-h-screen md:flex flex-row justify-center">
      <div className="md:w-2/5 md:flex">
        <Experience />
      </div>
      <div className="md:w-2/5 md:flex">
        <Education />
      </div>
    </div>
  );
};

export default Page;
