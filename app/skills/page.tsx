"use client";

import React from "react";
import SkillsSlider from "@/components/SkillsSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Page = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#1b1b1b] px-6 py-24 text-white md:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#6366F1]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#6366F1]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
            Technical Toolkit
          </p>

          <h1 className="text-4xl font-semibold md:text-6xl">
            My Skills
            <span className="text-[#6366F1]">.</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-300 md:text-lg">
            Technologies I’ve used to build backend services, cloud data
            workflows, internal dashboards, test automation, and full-stack
            applications.
          </p>
        </motion.div>

        <SkillsSlider />
      </div>
    </main>
  );
};

export default Page;