"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillCategories, SkillHighlights } from "@/constants";

const PAGE_ANIMATION_DELAY = 0.75;

const SkillsSlider = () => {
  return (
    <section className="space-y-10">
      {/* Skill highlight cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SkillHighlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: PAGE_ANIMATION_DELAY + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/80 p-5 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/60"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-60" />

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#6366F1]/10 blur-2xl transition duration-300 group-hover:bg-[#6366F1]/20" />

            <p className="relative text-3xl font-semibold text-[#6366F1]">
              {item.value}
            </p>

            <p className="relative mt-2 text-sm leading-6 text-gray-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skill category cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SkillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: PAGE_ANIMATION_DELAY + 0.2 + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/80 p-6 shadow-xl backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/60"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#6366F1]/70 via-white/10 to-transparent" />

            <div className="relative mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#6366F1]">
                  {category.type}
                </p>

                <h2 className="text-2xl font-semibold text-white">
                  {category.title}
                </h2>
              </div>

              <span className="rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-3 py-1 text-xs font-medium text-[#6366F1]">
                0{index + 1}
              </span>
            </div>

            <p className="relative mb-6 text-sm leading-6 text-gray-300">
              {category.description}
            </p>

            <div className="relative flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-200 transition duration-200 hover:border-[#6366F1]/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSlider;