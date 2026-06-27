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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

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
        <nav className="mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl md:rounded-full md:px-6">
          <div className="flex items-center justify-between">
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

            <div className="flex items-center gap-2 md:gap-3">
              {Socials.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 transition duration-300 hover:bg-[#4338CA]/80 md:h-10 md:w-10 md:hover:-translate-y-1 md:hover:shadow-[0_10px_24px_rgba(67,56,202,0.35)]"
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

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="ml-1 flex h-9 w-9 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-[#4338CA]/80 md:hidden"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-white transition-transform duration-200 ${
                      menuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block h-[2px] w-5 rounded-full bg-white transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] block h-[2px] w-5 rounded-full bg-white transition-transform duration-200 ${
                      menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden">
              {navLinks.map((link) => {
                const isActive = path === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#4338CA]/70 text-white"
                        : "bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-[#A5B4FC]"
                    }`}
                  >
                    {link.name}
                    <span className="text-[#818CF8]">→</span>
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;