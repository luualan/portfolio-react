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
  type: string;
  time: string;
  place: string;
  info: string;
};

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
  const ref = useRef(null);
  const sentences = info.split(/(?<=\.)(?![a-zA-Z])\s*/);

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
        <h3 className="captialize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-[#1b1b1b]/75">
          {place} | {time}
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
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  // prevent style bug with right side of screen on sm devices
  const fadeInUndefinedVariant = fadeIn("undefined");
  const fadeInLeftVariant = fadeIn("left", 0.5);
  const isSmallDevice = useMediaQuery("(max-width: 480px)");

  // Set the variants based on the screen size
  const variants = isSmallDevice ? fadeInUndefinedVariant : fadeInLeftVariant;

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
        Education<span className="text-[#FF0000]">.</span>
      </h1>

      <div ref={ref} className="w-[100%] relative">
        <motion.div
          style={{ scaleY }}
          className="absolute ml-9 top-0 w-[4px] h-full bg-[#1b1b1b] origin-top"
        />

        <ul className="md:w-full w-fit flex flex-col items-start justify-between ml-20">
          <Details
            type="Bachelor Of Science - Computer Science"
            time="September 2018 - August 2020"
            place="University of Washington"
            info="Relevant courses included Analysis and Design, Cyber Security, Database Systems, Data Structure and Algorithms in C++, Hardware, Operating Systems, and Project Management."
          />
          <Details
            type="Associate - Arts And Sciences"
            time="January 2014 - March 2018"
            place="Bellevue College"
            info="Relevant courses included Data Structure and Algorithms in Java, Database Theory, C# Programming, Networking Intro, SQL Intro, Web Development Intro, and ASP.NET Development."
          />
          <Details
            type="Apprenticeship - Data Analyst"
            time="June 2015 - August 2016"
            place="Year Up"
            info="Completed a 15-month Data Analyst program encompassing college courses, professionalism training, and a 7-month internship."
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
