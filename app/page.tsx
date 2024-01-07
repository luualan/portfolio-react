"use client";

import Particle from "@/components/Particle";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// mt modern top
// md medium device

const downloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);

  console.log(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto relative darken-city">
      <div className="absolute right-0 top-0 h-full w-full z-[5]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        {/* <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        /> */}
      </div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        // className="flex flex-col gap-3 z-[10] mb-10 pl-20 md:pl-60"
        className="mb-10 md:p-0 p-3 z-[10]"
      >
        <h1 className="text-[50px] font-semibold text-white max-w-[600px]">
          Hello, I am a{" "}
          <span className="text-[#FF0000]">
            <TypeAnimation
              sequence={[
                "Developer.",
                2000,
                "Reader.",
                2000,
                "Musician.",
                2000,
                "Gamer.",
                2000,
              ]}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </span>
        </h1>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[18px] text-gray-100 font-medium mb-2 md:pb-2 max-w-[600px] z-[10]">
            I&apos;m a Software Engineer located in Washington, with a keen
            interest in learning new technologies, programming languages, and
            frameworks.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a
            href="#"
            className="z-[10] relative mr-4 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#FF0000] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            onClick={() =>
              downloadFile(
                "/assets/resume/Alan_Luu_Resume.pdf",
                "Alan_Luu_Resume.pdf"
              )
            }
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FF0000] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#FF0000]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Download">
                  <path
                    id="Vector"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Download">
                  <path
                    id="Vector"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Resume
            </span>
          </a>
          <a
            href="/about-me"
            className="z-[10] relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#FF0000] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FF0000] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#FF0000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Learn about me
            </span>
          </a>
        </motion.div>
        {/* <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5 ">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div> */}
      </motion.div>
    </main>
  );
}
