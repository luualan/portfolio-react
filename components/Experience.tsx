"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";
import { fadeIn } from "@/variants";

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
          <li>{languages && "Tech Stack: " + languages}</li>
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
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
            position="Xbox Software Engineer - Manufacturing Tests"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="March 2022 - September 2023"
            address="Redmond, WA"
            work="Developed hardware and software reliability tests for new Xbox consoles, achieving a 96% on-time delivery to Xbox testing labs worldwide. Troubleshooted worldwide Xbox test errors, ensuring uninterrupted daily testing by identifying firmware, hardware, OS, and network issues. Rectified 54 C# and 68 C++ CodeQL errors in 4 Xbox repos, eliminating security vulnerabilities, memory leaks, and enhancing code quality. Refactored 41 decade-old C# projects and pre-built their NuGet packages in a separate repo, reducing the main repo's build time by 6 minutes."
            languages="Azure DevOps, Batch, C#, C++, CodeQL, Python, Kusto Query, Scrum, XAML"
          />
          <Details
            position="Xbox Software Engineer Intern - Web Development"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="February 2016 - August 2016"
            address="Mountain View, CA"
            work="Analyzed Cosmos databases and fetched Cortana's daily usage data on Xbox One, identifying most-used features among alpha and beta testers. Developed statistical OnePulse websites to showcase Cortana data, aiding developers and managers in business and requirement decisions."
            languages="ASP.NET, Bootstrap, CSS, C#, Cosmos DB, HTML, JavaScript, jQuery, OnePulse, Scrum, U-SQL"
          />
          <Details
            position="Co-Teacher C#"
            company="Year Up"
            companyLink="https://www.yearup.org/"
            time="September 2015 - November 2015"
            address="Redmond, WA"
            work="Assisted in teaching Year Up students the fundamentals of C#."
            languages=""
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
