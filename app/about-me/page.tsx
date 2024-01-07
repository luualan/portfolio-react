import React from "react";
import Profile from "@/components/Profile";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden">
      {/* <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      /> */}
      <Profile />
    </div>
  );
};

export default Page;
