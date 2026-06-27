"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectData } from "@/constants";
import { fadeIn } from "@/variants";

const PAGE_ANIMATION_DELAY = 0.75;

const ProjectSlider = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
          Portfolio
        </p>

        <h1 className="text-4xl font-semibold text-white md:text-6xl">
          Featured Projects<span className="text-[#6366F1]">.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
          A selection of projects focused on backend systems, data engineering,
          full-stack development, automation, and practical software design.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ProjectData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: PAGE_ANIMATION_DELAY + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
          >
            {project.image && (
              <div className="relative h-52 w-full overflow-hidden bg-black/30">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent" />
              </div>
            )}

            <div className="flex min-h-[330px] flex-col p-6">
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
                  {project.category}
                </p>

                <h2 className="text-2xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {project.description}
                </p>
              </div>

              {project.highlights?.length > 0 && (
                <ul className="mb-5 space-y-2 text-sm text-gray-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links
                    .filter((link) => link.href)
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#6366F1] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4338CA]"
                      >
                        {link.label}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;