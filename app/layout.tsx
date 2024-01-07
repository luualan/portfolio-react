"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const path = usePathname();
  const backgroundColor =
    path === "/experience" || path === "/about-me"
      ? "bg-[#1b1b1b]"
      : "bg-transparent";

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar backgroundColor={backgroundColor} />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
