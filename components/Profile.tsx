"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { InfoData, Background } from "@/constants";
import Link from "next/link";

const Profile = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 md:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#6366F1]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#6366F1]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col lg:min-h-[720px] lg:flex-row lg:items-stretch">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{
            y: -4,
            scale: 1.005,
            rotateX: 0.4,
            rotateY: 0.4,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 22,
            },
          }}
          className="relative flex-1 overflow-hidden rounded-none rounded-tl-3xl border border-white/10 bg-[#101010]/90 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/40 lg:rounded-tr-none lg:border-r-0 md:p-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-70" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-3xl" />

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
            About Me
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m Alan<span className="text-[#6366F1]">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            I&apos;m a Washington-based Software Engineer with 4 years of
            experience building backend systems, cloud-based data workflows,
            data-driven applications, test automation, and system validation
            test suites.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
            Outside of work, I enjoy reading, boxing, playing piano, skiing,
            golf, and PC gaming.
          </p>

          <div className="mt-8 grid gap-3">
            {InfoData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 6,
                    scale: 1.01,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-[#6366F1]/50 hover:bg-white/[0.06]"
                >
                  <IconComponent className="h-5 w-5 shrink-0 text-[#6366F1]" />
                  <p className="text-sm font-medium text-gray-200">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/my-projects"
                className="inline-flex items-center rounded-full bg-[#6366F1] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(99,102,241,0.28)] transition hover:bg-[#4338CA] hover:shadow-[0_14px_32px_rgba(67,56,202,0.38)]"
              >
                See my work
                <span className="ml-2">→</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/experience"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
              >
                View experience
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{
            y: -4,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 22,
            },
          }}
         className="flex-1 rounded-none rounded-tr-3xl border border-white/10 bg-[#101010]/90 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/40 md:p-8"
        // style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mb-6">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
              Experience Areas
            </p>
            <h2 className="text-3xl font-semibold text-white">
              What I&apos;ve worked on
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              A high-level summary of my engineering background. For more
              detail, see my Experience page.
            </p>
          </div>

          <div className="space-y-4 lg:max-h-[590px] lg:overflow-y-auto lg:pr-2">
            {Background.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.article
                  key={item.name}
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
                    rotateX: 0.6,
                    rotateY: -0.6,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#6366F1]/30 bg-[#6366F1]/10 text-[#6366F1] transition duration-300 group-hover:border-[#6366F1]/60 group-hover:bg-[#6366F1]/20">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-xs text-[#6366F1]">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
        
      </div>
      <motion.div
  variants={fadeIn("up", 0.35)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative z-10 mx-auto max-w-7xl rounded-b-3xl rounded-t-none border border-t-0 border-white/10 bg-[#101010]/90 p-6 shadow-2xl backdrop-blur-sm md:p-8"
>
  <div className="mb-6">
    <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
      Currently Building
    </p>
    <h2 className="text-3xl font-semibold text-white">
      What I&apos;m working on now
    </h2>
    <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
     Projects I&apos;m actively improving to strengthen my full-stack, cloud, distributed systems, and system design skills.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    {[
      // {
      //   title: "AI Agent Analytics Dashboard",
      //   description:
      //     "A dashboard for tracking AI requests, latency, token usage, cost, failures, traces, and tool calls.",
      //   stack: ["React", "FastAPI", "PostgreSQL", "OpenAI API"],
      // },
      {
        title: "Kafka Job Scheduler",
        description:
          "An event-driven job processing system with queueing, retries, workers, status tracking, and failure handling.",
        stack: ["Python", "Kafka", "PostgreSQL", "Docker"],
      },
    ].map((project, index) => (
      <motion.article
        key={project.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.45,
          delay: index * 0.08,
          ease: "easeOut",
        }}
       className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
      >
        <p className="mb-3 font-mono text-xs text-[#6366F1]">
          0{index + 1}
        </p>

        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg- px-3 py-1.5 font-mono text-xs text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    ))}
  </div>
</motion.div>
      
    </section>
  );
};

export default Profile;