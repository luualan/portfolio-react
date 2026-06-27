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
    }, 1100);

    return () => clearTimeout(timeout);
  }, [isRouting]);

  return (
    <>
      {isRouting && <Transition />}

      <nav className="fixed right-6 top-1/2 z-[40] hidden -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/35 px-3 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:block">
        <div className="flex flex-col items-center justify-center gap-4">
          {NavLinks.map((link) => {
            const isActive = activeNavName === link.name;

            return (
              <Link
                key={link.name}
                href={link.link}
                onClick={() => handleNavClick(link.link)}
                aria-label={link.name}
                title={link.name}
                className={`group flex h-11 w-11 items-center justify-center rounded-full transition duration-200 ${
                  isActive
                    ? "bg-[#4338CA] text-white shadow-[0_10px_24px_rgba(67,56,202,0.35)]"
                    : "text-slate-200 hover:bg-white/10 hover:text-[#A5B4FC]"
                }`}
              >
                <link.icon className="h-[22px] w-[22px]" />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SideBar;