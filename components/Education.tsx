"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

type EducationItem = {
  type: string;
  time: string;
  place: string;
  info: string[];
};

const educationItems: EducationItem[] = [
  {
    type: "Bachelor of Science — Computer Science",
    time: "September 2018 – August 2020",
    place: "University of Washington Bothell",
    info: [
      "Coursework included C++ data structures and algorithms, database systems, operating systems, cybersecurity, hardware, and project management.",
    ],
  },
  {
    type: "Associate in Arts and Sciences",
    time: "January 2014 – March 2018",
    place: "Bellevue College",
    info: [
      "Coursework included Java data structures and algorithms, database theory, C# programming, SQL, web development, networking, and ASP.NET web development.",
    ],
  },
  {
    type: "Data Analyst Apprenticeship",
    time: "June 2015 – August 2016",
    place: "Year Up",
    info: [
      "Completed a 15-month program covering college coursework, professional development, and a 7-month Microsoft internship.",
    ],
  },
];

const EducationCard = ({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
        rotateX: 0.8,
        rotateY: -0.8,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      }}
      className="group rounded-3xl border border-white/10 bg-[#101010]/90 p-6 shadow-xl backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/60 hover:bg-white/[0.04]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <p className="mb-3 font-mono text-xs text-[#6366F1]">0{index + 1}</p>

      <h3 className="text-xl font-semibold text-white">{item.type}</h3>

      <p className="mt-2 text-sm font-medium text-gray-400">{item.place}</p>

      <p className="mt-1 text-xs text-gray-500">{item.time}</p>

      <ul className="mt-4 space-y-2">
        {item.info.map((line) => (
          <li key={line} className="flex gap-3 text-sm leading-6 text-gray-300">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Education = () => {
  return (
    <motion.aside
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="h-fit rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm md:p-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
          Background
        </p>
        <h2 className="text-3xl font-semibold text-white">Education</h2>
      </div>

      <div className="space-y-5">
        {educationItems.map((item, index) => (
          <EducationCard
            key={`${item.type}-${item.time}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </motion.aside>
  );
};

export default Education;