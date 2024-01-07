"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProjectData } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <div className="items-center justify-center mx-auto my-auto w-[60%] z-[10] md:w-[65%]">
      <motion.h1
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-[50px] text-white font-semibold mb-6"
      >
        My Work<span className="text-[#FF0000]">.</span>
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {ProjectData.map((item) => (
            <SwiperSlide key={item.title}>
              {/* mb = margin bottom, py = padding y, rounded-md makes corners round for images  */}
              <div className="cursor-pointer flex flex-col gap-8 mb-10 group relative text-white shadow-lg rounded-xl px-6 py-8 md:h-[450px] md:w-[400px] h-[330px] w-[280px] mx-auto overflow-hidden">
                {/* background image, also lets you use normal css */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundPosition: "center top",
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                />
                <div className="cursor-pointer absolute inset-0 bg-[#FF0000] opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-200 text-white md:text-lg">
                  <a href={item.link}>
                    {item.title}
                    <br />
                    {item.content}
                  </a>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="invert brightness-0 ml-2"
                  />
                </div>
                {/* <div className="absolute inset-0 bg-[#1b1b1b] opacity-0 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
