"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";
import { fadeIn } from "@/variants";
import { useMediaQuery } from "usehooks-ts";

// w-full: full width of container
// text-black/75 /75 adds 75% opactity
// my adding space after
// originally ml 4 now ml 20
// mx-auto centers div

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
  languages: string;
};

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  languages,
}) => {
  const ref = useRef(null);
  const sentences = work.split(/(?<=\.)(?![a-zA-Z])\s*/);

  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[80%] flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="captialize font-bold text-2xl">
          {position}

          {/* &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-[#FF0000] capitalize"
          >
            @{company}
          </a> */}
        </h3>
        <span className="capitalize font-medium text-[#1b1b1b]/75">
          {company} | {address} | {time}
        </span>

        <ul>
          {sentences.map((sentence, index) => (
            <li
              key={index}
              className="font-medium w-full list-disc list-inside"
            >
              {sentence}
            </li>
          ))}
        </ul>
        <ul className=" font-semibold w-full list-inside list:none">
          <li>{languages && "Skills: " + languages}</li>
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // prevent style bug with right side of screen on sm devices
  const fadeInUndefinedVariant = fadeIn();
  const fadeInRightVariant = fadeIn("right", 0.5);
  const isSmallDevice = useMediaQuery("(max-width: 480px)");

  // Set the variants based on the screen size
  const variants = isSmallDevice ? fadeInUndefinedVariant : fadeInRightVariant;

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="my-28 shadow-2xl py-6 text-[#1b1b1b]"
    >
      <h1 className="text-[50px] font-bold mb-14 md:w-full text-center justify-between">
        Experience<span className="text-[#FF0000]">.</span>
      </h1>

      <div ref={ref} className="w-[100%] relative">
        <motion.div
          style={{ scaleY }}
          className="absolute ml-9 top-0 w-[4px] h-full bg-[#1b1b1b] origin-top"
        />

        <ul className="md:w-full w-fit flex flex-col items-start justify-between ml-20">
          <Details
            position="Azure CXP Software Engineer - Data/Backend"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="April 2024 - December 2025"
            address="Redmond, WA"
            work="Migrated legacy Scala JAR logic to PySpark in Azure Synapse, rewriting 20+ notebooks and data pipelines to improve scalability and maintainability of Fortune 500 consumption and billing analytics (ex: Adobe, NVIDIA, Walmart). Reduced runtime of 3 production Apache Spark data pipelines by 75% (24h → 5–6h) by optimizing joins and partitioning, resolving stage retries through cluster scaling, and updating authentication to Managed Identity. Built ETL pipelines using Cosmos DB, Cosmos SCOPE, and Kusto/KQL to ingest, validate, and onboard 80+ metrics to an Azure Usage dashboard, deploying JSON configs to render graphs for telemetry and cloud metrics. Owned and enhanced 150+ Playwright E2E tests (TypeScript), expanding coverage across Product, Consumption, and Quality domains while stabilizing flaky tests and validating Azure Usage dashboard features amid UI changes."
            languages="ASP.NET Core, Azure DevOps, Azure Synapse/ADF, C#, Cosmos DB (NoSQL), Cosmos SCOPE, Kusto (KQL), Playwright, PySpark, React, TypeScript, PowerShell, Scrum, SQL Server"
          />
          <Details
            position="Xbox Software Engineer - Manufacturing Tests"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="March 2022 - September 2023"
            address="Redmond, WA"
            work="Developed and maintained multi-day (1–12 day) reliability test suites (C#, C++) for next-gen Xbox consoles, validating hardware, OS, networking, and thermal performance, ensuring timely delivery to global testing teams. Stabilized long-running Xbox reliability tests by debugging and resolving memory leaks, port exhaustion, and cross-stack failures across firmware, OS, networking, and test infrastructure, unblocking global teams. Automated extraction of Xbox test logs to Excel, eliminating the need for manual data entry by lab technicians. Improved code quality and security across 4 production repositories by resolving 120+ CodeQL issues (C#, C++), addressing vulnerabilities and maintainability risks. Refactored 41 legacy C# projects and migrated and pre-built their NuGet packages in a separate repo, cutting the main repo’s build time by 6 minutes."
            languages="Azure DevOps, Batch, C#, C++, CodeQL, Kusto Query, .NET Framework, PowerShell, Python, Scrum, XAML"
          />
          <Details
            position="Xbox Software Engineer Intern - Full Stack"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="February 2016 - August 2016"
            address="Redmond, WA"
            work="Developed Cosmos SCOPE analytics scripts to extract and summarize Cortana speech feature usage, helping developers identify high-impact features for the Xbox One Cortana release. Built OnePulse dashboard metric tiles (C#) to visualize Cortana usage trends, enabling engineering teams to prioritize feature improvements. Implemented an ASP.NET web dashboard aggregating Cortana metrics, improving access to usage insights."
            languages="ASP.NET, Bootstrap, CSS, C#, Cosmos SCOPE, HTML, JavaScript, jQuery, .NET, OnePulse, Scrum, SQL Server, U-SQL"
          />
          <Details
            position="Co-Teacher C#"
            company="Year Up"
            companyLink="https://www.yearup.org/"
            time="September 2015 - November 2015"
            address="Redmond, WA"
            work="
            Instructed Year Up students in C# and IT fundamentals, preparing them for their internships and the CompTIA A+ certification exam. Conducted dynamic lessons every Friday from 12 pm to 1 pm, crafting and distributing targeted study guides to ensure comprehensive learning and exam readiness."
            languages="C#, CompTIA A+"
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
