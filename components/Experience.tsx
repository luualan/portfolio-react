"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

type ExperienceItem = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    position: "Azure CXP Software Engineer — Data/Backend",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "April 2024 – December 2025",
    location: "Redmond, WA",
    summary:
      "Worked on cloud data workflows, backend systems, telemetry dashboards, and automated testing for Azure usage and billing analytics.",
    highlights: [
      "Migrated legacy Scala logic to PySpark in Azure Synapse, rewriting 20+ notebooks and data pipelines for Fortune 500 consumption and billing analytics.",
      "Reduced runtime of 3 production Spark pipelines by 75% by optimizing joins, partitioning, cluster scaling, and Managed Identity authentication.",
      "Built ETL workflows using Cosmos DB, Cosmos SCOPE, and Kusto/KQL to ingest, validate, and onboard 80+ telemetry metrics.",
      "Owned and enhanced 150+ Playwright E2E tests across Product, Consumption, and Quality areas for an Azure Usage dashboard.",
    ],
    skills: [
      "Python",
      "PySpark",
      "Azure Synapse",
      "Azure Data Factory",
      "Cosmos DB",
      "Kusto/KQL",
      "Playwright",
      "TypeScript",
      "React",
      "C#",
      "Azure DevOps",
    ],
  },
  {
    position: "Xbox Software Engineer — Manufacturing Tests",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "March 2022 – September 2023",
    location: "Redmond, WA",
    summary:
      "Developed reliability and system validation test suites for next-generation Xbox consoles across hardware, OS, networking, and test infrastructure.",
    highlights: [
      "Developed and maintained multi-day reliability test suites in C# and C++ for Xbox console validation across global lab environments.",
      "Debugged long-running test failures involving memory leaks, port exhaustion, firmware, OS, networking, and test infrastructure.",
      "Automated Xbox test log extraction to Excel, reducing manual data entry for lab technicians.",
      "Resolved 120+ CodeQL issues across 4 production repositories, improving code quality, security, and maintainability.",
      "Refactored 41 legacy C# projects and migrated pre-built NuGet packages to reduce main repo build time by 6 minutes.",
    ],
    skills: [
      "C#",
      "C++",
      ".NET Framework",
      "PowerShell",
      "Python",
      "CodeQL",
      "Azure DevOps",
      "Kusto",
      "XAML",
      "Scrum",
    ],
  },
  {
    position: "Xbox Software Engineer Intern — Full Stack",
    company: "Microsoft",
    companyLink: "https://www.microsoft.com/en-us/",
    time: "February 2016 – August 2016",
    location: "Redmond, WA",
    summary:
      "Built analytics scripts, dashboard features, and internal tools for Cortana usage insights on Xbox One.",
    highlights: [
      "Developed Cosmos SCOPE analytics scripts to extract and summarize Cortana speech feature usage.",
      "Built OnePulse dashboard metric tiles in C# to visualize Cortana usage trends for engineering teams.",
      "Implemented an ASP.NET web dashboard to aggregate Cortana metrics and improve access to usage insights.",
    ],
    skills: [
      "ASP.NET",
      "C#",
      "Cosmos SCOPE",
      "SQL Server",
      "U-SQL",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    position: "Co-Teacher — C#",
    company: "Year Up",
    companyLink: "https://www.yearup.org/",
    time: "September 2015 – November 2015",
    location: "Redmond, WA",
    summary:
      "Supported students preparing for internships by teaching C# and IT fundamentals.",
    highlights: [
      "Led weekly lessons covering C#, IT fundamentals, and CompTIA A+ preparation.",
      "Created study guides and practice materials to help students strengthen technical foundations.",
    ],
    skills: ["C#", "CompTIA A+", "Teaching", "Technical Mentorship"],
  },
];

const ExperienceCard = ({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) => {
  return (
    <article className="group relative pl-10">
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="absolute bottom-[-2rem] left-[7px] top-7 w-px origin-top bg-gradient-to-b from-[#6366F1]/70 via-white/10 to-transparent"
        />
      )}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.35,
          delay: index * 0.08,
          ease: "easeOut",
        }}
        className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[#6366F1] bg-[#1b1b1b] shadow-[0_0_22px_rgba(99,102,241,0.55)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.45,
          delay: index * 0.08,
          ease: "easeOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.01,
          rotateX: 0.6,
          rotateY: -0.6,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        }}
        className="rounded-3xl border border-white/10 bg-[#101010]/90 p-6 shadow-xl backdrop-blur-sm transition-colors duration-300 hover:border-[#6366F1]/60 hover:bg-white/[0.04]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-[#6366F1]">
              0{index + 1}
            </p>

            <h2 className="text-2xl font-semibold text-white">
              {item.position}
            </h2>

            <p className="mt-2 text-sm font-medium text-gray-400">
              <a
                href={item.companyLink}
                target="_blank"
                rel="noreferrer"
                className="text-[#6366F1] hover:underline"
              >
                {item.company}
              </a>{" "}
              · {item.location}
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300">
            {item.time}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-gray-300">{item.summary}</p>

        <ul className="mb-5 space-y-3">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-gray-300"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-200 transition duration-200 hover:border-[#6366F1]/50 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </article>
  );
};

const Experience = () => {
  return (
    <motion.section
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm md:p-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#6366F1]">
          Work History
        </p>
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
      </div>

      <div className="space-y-8">
        {experienceItems.map((item, index) => (
          <ExperienceCard
            key={`${item.position}-${item.time}`}
            item={item}
            index={index}
            isLast={index === experienceItems.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;