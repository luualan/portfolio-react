"use client";

import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/constants";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Transition from "./Transition";

type NavbarProps = {
  backgroundColor?: string;
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-me" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/my-projects" },
];

const Navbar: React.FC<NavbarProps> = ({ backgroundColor = "" }) => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);

  const handleNavClick = (href: string) => {
    if (href !== path) {
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

      <header className={`fixed left-0 top-0 z-[50] w-full ${backgroundColor}`}>
        <nav className="mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/35 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-6">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="group text-2xl font-semibold tracking-tight text-white transition md:text-3xl"
          >
            Alan{" "}
            <span className="font-light text-slate-200 transition group-hover:text-white">
              Luu
            </span>
            <span className="text-[#818CF8] transition group-hover:text-[#A5B4FC]">
              .
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = path === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-medium transition duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:bg-[#818CF8] after:transition-all after:duration-300 ${
                    isActive
                      ? "text-[#A5B4FC] after:w-full"
                      : "text-slate-200 after:w-0 hover:text-[#A5B4FC] hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition duration-300 hover:-translate-y-1 hover:bg-[#4338CA]/80 hover:shadow-[0_10px_24px_rgba(67,56,202,0.35)]"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;