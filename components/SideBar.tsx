"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const SideBar = () => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];

    // if user refreshes or navigates, ensure sidebar shows the active page
    if (navigationEntry && navigationEntry.entryType === "navigation") {
      const findNav = NavLinks.find((navLink) => navLink.link === path);
      console.log(`path: ${path} findNav: ${findNav}`);
      setIsActive(findNav ? findNav.name : "");
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="fixed right-8 top-[40%] z-[20] h-[260px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      <AnimatePresence mode="wait">
        {isRouting && <Transition />}
        <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
          {NavLinks.map((link) => (
            <Link key={link.name} href={link.link}>
              <link.icon
                className={`w-[28px] h-[28px] ${
                  isActive === link.name ? " text-[#FF0000]" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
