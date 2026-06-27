"use client";

import Particle from "@/components/Particle";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const downloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden darken-city">
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-70">
        <Particle />
      </div>

      <section className="laptop-hero-position z-[10]">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="laptop-hero-content"
        >
          {/* <p className="text-[#93C5FD] text-[12px] md:text-[14px] font-semibold tracking-[0.28em] uppercase mb-3">
            Software Engineer
          </p> */}

          <h1 className="text-[28px] leading-tight font-semibold text-white md:text-[44px]">
            Hello, I am a
          </h1>

          <h2 className="mt-1 min-h-[42px] leading-tight font-semibold text-[#818CF8] md:min-h-[58px]">
            {/* Mobile typing text */}
            <span className="inline-block text-[30px] sm:hidden">
              <TypeAnimation
                sequence={[
                  "Engineer.",
                  2000,
                  "Builder.",
                  2000,
                  "Solver.",
                  2000,
                  "Learner.",
                  2000,
                ]}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>

            {/* Desktop/tablet typing text */}
            <span className="hidden whitespace-nowrap text-[clamp(36px,5vw,52px)] sm:inline-block">
              <TypeAnimation
                sequence={[
                  "Software Engineer.",
                  2000,
                  "Backend Builder.",
                  2000,
                  "Problem Solver.",
                  2000,
                  "Lifelong Learner.",
                  2000,
                ]}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
          </h2>
          <p className="mt-3 text-[13px] md:text-[15px] leading-6 text-slate-200 font-medium max-w-[480px] mx-auto">
            Always learning, always building — creating software that grows with every challenge.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="laptop-button"
              onClick={() =>
                downloadFile(
                  "/assets/resume/Alan_Luu_Resume.pdf",
                  "Alan_Luu_Resume.pdf"
                )
              }
            >
              Resume
              <span aria-hidden="true">↓</span>
            </button>

            <a href="/about-me" className="laptop-button">
              About
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}