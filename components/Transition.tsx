"use client";

import React from "react";
import { motion } from "framer-motion";

const curtainEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

const layers = [
  {
    color: "bg-[#1b1b1b]",
    delay: 0,
    width: "w-[125vw]",
    left: "left-[-12vw]",
    zIndex: "z-[30]",
  },
  {
    color: "bg-[#4338CA]",
    delay: 0.08,
    width: "w-[112vw]",
    left: "left-[-6vw]",
    zIndex: "z-[40]",
  },
  {
    color: "bg-[#6366F1]",
    delay: 0.16,
    width: "w-[96vw]",
    left: "left-[2vw]",
    zIndex: "z-[50]",
  },
];

const Transition = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-transparent">
      {layers.map((layer) => (
        <motion.div
          key={`${layer.color}-${layer.delay}`}
          className={`fixed inset-y-0 ${layer.left} h-[100svh] ${layer.width} ${layer.color} ${layer.zIndex} will-change-transform`}
          initial={{ x: "115%", skewX: -8 }}
          animate={{
            x: ["115%", "0%", "0%", "-115%"],
            skewX: [-8, -8, -8, -8],
          }}
          transition={{
            delay: layer.delay,
            duration: 0.95,
            ease: curtainEase,
            times: [0, 0.38, 0.58, 1],
          }}
        />
      ))}
    </div>
  );
};

export default Transition;