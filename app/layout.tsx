"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import ScrollProgress from "@/components/ScollProgress";
import { RouteTransitionProvider } from "@/components/RouteTransitionProvider";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RouteTransitionProvider>
          <ScrollProgress />

          <Navbar />

          <div className="hidden lg:block">
            <SideBar />
          </div>

          {children}
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
