"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { SkillImages, SkillImages2 } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const SkillsSlider = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-[70%] y-[100%] md:w-[33%] lg:p-0 p-3"
    >
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-10">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4 lg:gap-x-4 gap-x-2">
            {SkillImages.map((image) => (
              <div
                className="relative group w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="skill image"
                  width={200}
                  height={200}
                  className="rounded-full h-full w-full object-cover"
                />
                {/* opacity set to 0 to hide, when mouse hover over, group-hover:opacity-70 */}
                <div className="rounded-full cursor-pointer absolute inset-0 bg-[#FF0000] opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                <div className="rounded-full cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-200 text-white md:text-lg">
                  {image.level}
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4 lg:gap-x-4 gap-x-2">
            {SkillImages2.map((image) => (
              <div
                className="relative group w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="skill image"
                  width={200}
                  height={200}
                  className="rounded-full h-full w-full object-cover"
                />
                {/* opacity set to 0 to hide, when mouse hover over, group-hover:opacity-70 */}
                <div className="rounded-full cursor-pointer absolute inset-0 bg-[#FF0000] opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                <div className="rounded-full cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-200 text-white md:text-lg">
                  {image.level}
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default SkillsSlider;
