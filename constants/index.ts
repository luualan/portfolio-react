// npm install react-icons

import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxHome,
    RxPerson,
    RxDashboard,
    RxBackpack,
  } from "react-icons/rx";

  import { MdOutlineWeb, MdMail, MdPerson, MdWork } from "react-icons/md";
  import {BsDatabaseFillGear, BsFillClipboardDataFill, BsTools } from "react-icons/bs";
  import { FaMobileAlt, FaPhoneAlt } from "react-icons/fa";
  import { RiGraduationCapFill } from "react-icons/ri";
 
  export const Socials = [
    {
      name: "LinkedIn",
      src: "/assets/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/alan-luu-579837107/"
    },
    {
      name: "Github",
      src: "/assets/icons/github.svg",
      link: "https://github.com/luualan"
    },
    // {
    //   name: "Facebook",
    //   src: "/assets/icons/facebook.svg",
    // },
    // {
    //   name: "Instagram",
    //   src: "/assets/icons/instagram.svg",
    // },
  ];
  
  export const InfoData = [
    {
      icon: FaPhoneAlt,
      text: "206-307-2044",
    },
    {
      icon: MdMail,
      text: "alanviluu@gmail.com",
    },
    {
      icon: RiGraduationCapFill,
      text: "Computer Science",
    },
  ];

  export const NavLinks = [
    {
      name: "Home",
      icon: RxHome,
      link: "/",
    },
    {
      name: "About Me",
      icon: RxPerson,
      link: "/about-me",
    },
    {
      name: "Experience",
      icon: MdWork,
      link: "/experience",
    },
    {
      name: "Skills",
      icon: BsTools,
      link: "/skills",
    },
    {
      name: "Projects",
      icon: RxDashboard,
      link: "/my-projects",
    },
  ];
  
  export const SkillImages = [
    {
      src: "/assets/skills/java.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/javascript.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/c-sharp.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/mysql.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/react.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/html.svg",
      level: "Advance"
    },
    {
      src: "/assets/skills/css.svg",
      level: "Intermediate"
    },
    {
      src: "/assets/skills/xml.svg",
      level: "Intermediate"
    },
    {
      src: "/assets/skills/python.svg",
      level: "Intermediate"
    },
  ];

  export const SkillImages2 = [
    {
      src: "/assets/skills/android-studio-v2.svg",
      level: "Intermediate"
    },
    {
      src: "/assets/skills/c++.svg",
      level: "Intermediate"
    },
    {
      src: "/assets/skills/batch.svg",
      level: "Intermediate"
    },  
    {
      src: "/assets/skills/git.svg",
      level: "Intermediate"
    },
  ];
  
  // services data
export const Background = [
  {
    name: "Quality Assurance Software Engineer",
    description:
      "I have 18 months of experience developing and deploying robust test solutions for new Xbox consoles, covering firmware, hardware, and OS. This has strengthened my troubleshooting skills, as I regularly identify and address errors and bugs across Xbox labs worldwide.",
    link: "Learn More",
    icon: BsFillClipboardDataFill
  },
  {
    name: "Data Analyst Software Engineer",
    description:
      "I have 15 months of Data Analyst experience through a Year Up apprenticeship, including 8 months of college courses. In a 7-month internship at Microsoft with the Cortana team, I analyzed data on Xbox One features and Cortana voice commands, presenting insights to developers and managers.",
    link: "Learn More",
    icon: BsDatabaseFillGear
  },
  {
    name: "Full-Stack Software Engineer",
    description:
      "I have 7 months of web development experience at Microsoft on the Xbox Cortana team, creating statistical websites about Cortana and Xbox features. Since then, I've refined my skills by working on side projects, learning frameworks such as React, Next.js, and Tailwind CSS, and implementing REST APIs.",
    link: "Learn More",
    icon: MdOutlineWeb
  },
  {
    name: "Mobile Software Engineer",
    description:
      "I have several months of mobile development experience, having created an Android app for my University of Washington capstone project for users to share course notes. I've also explored React Native, building a cross-platform app that lets users search and apply for jobs.",
    link: "Learn More",
    icon: FaMobileAlt
  },
];
  
  export const ProjectData = [
    {
      icon: RxReader,
      title: "Notehub",
      content: "A Android app to share notes.",
      backgroundImage: "/assets/projects/Notehub.jpg",
      link: "https://github.com/luualan/capstone-notehub-android"
    },
    {
      icon: FaMobileAlt,
      title: "Job Helper",
      content: "A job app to apply for work.",
      backgroundImage: "/assets/projects/job-app.png",
      link: "https://github.com/luualan/search-jobs-mobile-app"
    },
    {
      icon: RxPencil2,
      title: "Story Finder",
      content: "A website to search for articles.",
      backgroundImage: "/assets/projects/story-finder.png",
      link: "https://github.com/luualan/react-storyfinder"
    },
    {
      icon: RxDesktop,
      title: "Disassembler",
      content: "Convert data to Assembly instructions.",
      backgroundImage: "/assets/projects/disassembler.png",
      link: "https://github.com/luualan/css422-disassembler"
    },
  ];