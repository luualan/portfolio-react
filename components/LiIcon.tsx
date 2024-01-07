import React from "react";
import { motion, useScroll } from "framer-motion";

type LiIconProps = {
  reference: any;
};

// svg icon
const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-[#1b1b1b]">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[#FF0000] stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-transparent"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-[#FF0000]"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
