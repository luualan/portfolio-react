import Image from "next/image";
import { Socials } from "@/constants";
import React from "react";
import styled from "styled-components";

type NavbarProps = {
  backgroundColor: string;
};

const Navbar: React.FC<NavbarProps> = ({ backgroundColor }) => {
  return (
    <div
      className={`absolute top-0 ${backgroundColor} z-[20] w-full flex gap-5 md:justify-between md:px-60 p-3`}
    >
      <h1 className="text-white text-[45px]">
        Alan <span className="font-thin">Luu</span>
        <span className="text-[#FF0000]">.</span>
      </h1>
      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <a href={social.link} key={social.name} className="flex">
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={45}
              height={45}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
