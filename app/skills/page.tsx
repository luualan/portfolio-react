"use client";
import Image from "next/image";
import React, { useState } from "react";
import SkillsSlider from "@/components/SkillsSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Page = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center md:flex-row min-h-screen darken-code">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-3 md:mt-0 mt-24 mb-4"
      >
        <h1 className="text-[50px] text-white font-semibold md:p-0 p-3">
          My Skills<span className=" text-[#FF2E00]">.</span>
        </h1>
        <p className="max-w-[400px] text-[18px] text-gray-100 font-medium md:p-0 p-3">
          The following are programming languages, frameworks, and tools I have
          worked with.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-75"
      >
        <Image
          src="/assets/images/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="w-full h-full hidden md:block"
        />
      </motion.div>
      <SkillsSlider />
    </div>
  );
};

export default Page;
