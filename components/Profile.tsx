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
        <div className="absolute left-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#FF0000]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#FF0000]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col lg:min-h-[720px] lg:flex-row lg:items-stretch">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative flex-1 overflow-hidden rounded-t-3xl border border-white/10 bg-[#101010]/90 p-8 shadow-2xl backdrop-blur-sm lg:rounded-l-3xl lg:rounded-r-none lg:border-r-0 md:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF0000] to-transparent opacity-70" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF0000]/10 blur-3xl" />

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#FF0000]">
            About Me
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m Alan<span className="text-[#FF0000]">.</span>
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
            {InfoData.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <IconComponent className="h-5 w-5 shrink-0 text-[#FF0000]" />
                  <p className="text-sm font-medium text-gray-200">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/my-projects"
              className="inline-flex items-center rounded-full bg-[#FF0000] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              See my work
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/experience"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FF0000]/60 hover:bg-white/[0.06]"
            >
              View experience
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 rounded-b-3xl border border-white/10 bg-[#0d0d0d]/90 p-6 shadow-2xl backdrop-blur-sm lg:rounded-l-none lg:rounded-r-3xl md:p-8"
        >
          <div className="mb-6">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#FF0000]">
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
                <article
                  key={item.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF0000]/60 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF0000]/30 bg-[#FF0000]/10 text-[#FF0000]">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-xs text-[#FF0000]">
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
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;