"use client";

import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { InfoData, Background } from "@/constants";
import Link from "next/link";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto text-[#1b1b1b]">
        <div className="flex flex-col lg:flex-row">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            // className="flex-1 lg:bg-[url('/assets/services.png')] lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            className="flex-1 lg:bg-bottom lg:bg-[url('/assets/images/developer.png')] bg-blend-lighten bg-no-repeat mt-4 lg:mt-0 shadow-2xl px-6 py-6"
          >
            {/* <h2 className="h2 font-bold text-black mb-6">About Me</h2> */}
            <h1 className="text-[50px] font-semibold mb-4">
              About Me<span className="text-[#FF0000]">.</span>
            </h1>
            <p className="max-w-[500px] text-[18px] font-medium w-full mb-4">
              My name is Alan, and I&apos;m a Software Engineer with 2 years of
              work experience. During my free times, I enjoy reading, boxing,
              playing the piano and PC gaming.
            </p>
            <div className="mb-4">
              {InfoData.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-x-4 mx-auto space-y-3"
                  >
                    <div
                      className="flex"
                      style={{ transform: "translateY(5px)" }}
                    >
                      <IconComponent className="w-6 h-6 text-[#FF0000]" />
                    </div>
                    <div className="font-medium">{item.text}</div>
                  </div>
                );
              })}
            </div>
            <a
              href="/my-projects"
              className="z-[4] relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#FF0000] group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1b1b1b] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                See my work
              </span>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 shadow-2xl px-6 py-6"
          >
            {/* service list */}
            <div>
              {Background.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <div
                    // lg:h-[176px] h-[226px]
                    className="border-b border-[#1b1b1b]/60 mb-[20px] flex"
                    key={index}
                  >
                    <div className="max-w-[500px]">
                      <h3 className="captialize font-semibold text-2xl mb-6">
                        {/* <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6"> */}
                        {name}
                      </h3>
                      {/* md:text-gray-500 */}
                      <p className="leading-tight font-medium w-full text-[16px] mb-6">
                        {/* <p className=" font-secondary leading-tight"> */}
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <Link
                        href={""}
                        className=" text-white rounded-full hover:bg-[#1b1b1b] bg-[#FF0000] w-9 h-9 flex justify-center items-center"
                      >
                        <service.icon className="w-[28px] h-[28px]" />
                      </Link>

                      {/* <a href="#" className="text-gradient text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
