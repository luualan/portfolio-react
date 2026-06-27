import React from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1b1b1b] px-6 py-24 text-white md:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[15%] h-[350px] w-[350px] rounded-full bg-[#FF0000]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#FF0000]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#FF0000]">
            Career Timeline
          </p>

          <h1 className="text-4xl font-semibold md:text-6xl">
            Experience & Education<span className="text-[#FF0000]">.</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-300 md:text-lg">
            An overview of my engineering experience and academic background across backend systems, cloud data workflows, test automation, and system validation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(380px,0.75fr)]">
          <Experience />
          <Education />
        </div>
      </div>
    </main>
  );
};

export default Page;