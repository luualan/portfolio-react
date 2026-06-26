"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const SideBar = () => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);

  const activeNavName =
    NavLinks.find((navLink) => navLink.link === path)?.name ?? "Home";

  const handleNavClick = (link: string) => {
    if (link !== path) {
      setIsRouting(true);
    }
  };

  useEffect(() => {
    if (!isRouting) return;

    const timeout = setTimeout(() => {
      setIsRouting(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [isRouting]);

  return (
    <div className="fixed right-8 top-[40%] z-[20] h-[260px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      {isRouting && <Transition />}

      <div className="flex h-full flex-col items-center justify-center gap-5 pb-3">
        {NavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            onClick={() => handleNavClick(link.link)}
          >
            <link.icon
              className={`h-[28px] w-[28px] ${
                activeNavName === link.name ? "text-[#FF0000]" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;