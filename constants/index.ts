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
import { BsDatabaseFillGear, BsFillClipboardDataFill, BsTools } from "react-icons/bs";
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
    src: "/assets/skills/c++.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/mysql.svg",
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
  {
    src: "/assets/skills/android-studio.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/react.svg",
    level: "Advance"
  },
  {
    src: "/assets/skills/nextjs.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/tailwindcss.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/spring.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/node.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/azure.svg",
    level: "Advance"
  },
  {
    src: "/assets/skills/git.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/eclipse.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/visual-studio.svg",
    level: "Intermediate"
  },
  {
    src: "/assets/skills/linux.svg",
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
    name: "Cloud Data & Backend Engineering",
    description:
      "I built and optimized cloud-based data workflows for Azure usage and billing analytics at Microsoft. My work included migrating Scala logic to PySpark in Azure Synapse, improving production pipeline performance, onboarding 80+ telemetry metrics, and supporting backend/data systems with Cosmos DB, Kusto/KQL, Azure DevOps, and TypeScript.",
    link: "Learn More",
    icon: BsDatabaseFillGear
  },
  {
    name: "Reliability & System Validation",
    description:
      "I developed reliability stress and system validation test suites for Xbox consoles, helping testers verify firmware, hardware, and OS behavior across lab environments. This work strengthened my debugging skills by requiring me to investigate issues across hardware/software boundaries and support Xbox test execution worldwide.",
    link: "Learn More",
    icon: BsFillClipboardDataFill
  },
  {
    name: "Test Automation & Quality Engineering",
    description:
      "I owned and enhanced 150+ Playwright end-to-end tests for an Azure Usage dashboard, expanding coverage across Product, Consumption, and Quality areas. I focused on stabilizing flaky tests, adapting coverage to UI changes, and improving confidence in dashboard features used for cloud usage and telemetry monitoring.",
    link: "Learn More",
    icon: BsFillClipboardDataFill
  },
  {
    name: "Full-Stack Development",
    description:
      "I have experience building web applications and internal tools using React, Next.js, Tailwind CSS, TypeScript, C#, and REST APIs. My work includes Microsoft dashboard and analytics projects, along with personal projects where I continue to strengthen my frontend, backend, and API development skills.",
    link: "Learn More",
    icon: MdOutlineWeb
  },
  {
    name: "Data Analytics & Engineering",
    description:
      "My data experience began through Year Up, college coursework, and a Microsoft internship with the Xbox Cortana team, where I analyzed large-scale Xbox feature and voice command data. Since then, I’ve expanded into production data engineering with PySpark, Azure Synapse, ETL pipelines, Cosmos DB, SQL, and Kusto/KQL.",
    link: "Learn More",
    icon: BsDatabaseFillGear
  },
  {
    name: "Mobile Development",
    description:
      "I also have mobile development experience from my University of Washington capstone project, where I built an Android app for students to share course notes. I’ve continued exploring mobile and cross-platform development through React Native projects.",
    link: "Learn More",
    icon: FaMobileAlt
  },
];

// export const ProjectData = [
//   {
//     icon: RxReader,
//     title: "Notehub",
//     content: "A Android app to share notes.",
//     backgroundImage: "/assets/projects/notehub-home.jpg",
//     link: "https://github.com/luualan/capstone-notehub-android"
//   },
//   {
//     icon: FaMobileAlt,
//     title: "Job Helper",
//     content: "A job app to apply for work.",
//     backgroundImage: "/assets/projects/job-app.png",
//     link: "https://github.com/luualan/search-jobs-mobile-app"
//   },
//   {
//     icon: RxPencil2,
//     title: "Story Finder",
//     content: "A website to search for articles.",
//     backgroundImage: "/assets/projects/story-finder.png",
//     link: "https://github.com/luualan/react-storyfinder"
//   },
//   {
//     icon: RxDesktop,
//     title: "Disassembler",
//     content: "Convert data to Assembly instructions.",
//     backgroundImage: "/assets/projects/disassembler.png",
//     link: "https://github.com/luualan/css422-disassembler"
//   },
// ];

export const ProjectData = [
  {
    title: "Retail Sales AWS Pipeline",
    category: "Data Engineering",
    description:
      "A data engineering project focused on building an AWS-based pipeline for ingesting, transforming, and analyzing retail sales data.",
    image: "/assets/projects/retail-sales-pipeline.png",
    techStack: ["Python", "AWS S3", "AWS Glue", "PySpark", "SQL", "FastAPI"],
    highlights: [
      "Designed a cloud data pipeline using AWS storage and processing services.",
      "Transformed raw retail data into analytics-ready datasets.",
      "Built to demonstrate AWS data engineering concepts from an Azure background.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/retail-sales-aws-pipeline",
      },
      {
        label: "Frontend",
        href: "https://retail-sales-aws-pipeline.vercel.app/",
      },
      {
        label: "Backend",
        href: "https://retaillens-api-mfr4.onrender.com/docs",
      },
    ],
  },
  {
    title: "Job Scheduler API",
    category: "Backend API",
    description:
      "A backend job scheduling service that manages job creation, status tracking, processing, and failure handling through REST API endpoints.",
    image: "/assets/projects/job-scheduler.png",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs"],
    highlights: [
      "Designed job lifecycle states such as pending, running, completed, and failed.",
      "Implemented REST endpoints for creating, processing, and tracking jobs.",
      "Built with backend API design and production-style workflow patterns in mind.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/job-processing-api",
      },
      {
        label: "Backend",
        href: "https://job-processing-api.onrender.com/docs",
      },
    ],
  },
  {
    title: "LLM Shadow Proxy",
    category: "AI / Backend API",
    description:
      "A FastAPI backend service for evaluating LLM behavior by routing requests to a primary model mock while shadowing the same requests through a candidate model mock for comparison.",
    image: "/assets/projects/llm-shadow-proxy.png",
    techStack: ["Python", "FastAPI", "AsyncIO", "Pytest", "REST APIs", "LLM Evaluation"],
    highlights: [
      "Built a proxy API that synchronously handles primary LLM requests while using an asyncio queue for background shadow jobs.",
      "Implemented layered architecture with API, service, client, model, and utility components.",
      "Added mismatch logging, metrics, and tests to compare primary and candidate LLM behavior.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/llm-shadow-proxy",
      },
      {
        label: "Backend",
        href: "https://llm-shadow-proxy.onrender.com/docs",
      },
    ],
  },
  {
    title: "Telemetry Ingestion API",
    category: "Backend API",
    description:
      "A FastAPI REST API for ingesting, storing, filtering, and summarizing telemetry events through cleanly separated application layers.",
    image: "/assets/projects/telemetry-ingestion-api.png",
    techStack: ["Python", "FastAPI", "Pydantic", "Pytest", "REST APIs"],
    highlights: [
      "Designed layered architecture with models, routes, services, and repository logic.",
      "Implemented endpoints for event ingestion, event lookup, health checks, and customer summaries.",
      "Built with testability and future database integration in mind through a swappable repository layer.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/telemetry-ingestion-api",
      },
      {
        label: "Backend",
        href: "https://telemetry-ingestion-api.onrender.com/docs",
      },
    ],
  },
  {
    title: "Notehub",
    category: "Mobile Development",
    description:
      "An Android application built for students to share course notes as part of my University of Washington capstone project.",
    image: "/assets/projects/notehub-home.jpg",
    techStack: ["Android", "Java", "Django", "REST APIs", "Mobile Development"],
    highlights: [
      "Created a mobile app for uploading and sharing course notes.",
      "Built core app flows for users to browse and contribute content.",
      "Collaborated on a capstone project from design through implementation.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/capstone-notehub-android",
      },
    ],
  },
  {
    title: "Job Search Mobile App",
    category: "Mobile Development",
    description:
      "A React Native mobile application that allows users to search for jobs, view job details, and access application links through a mobile-friendly interface.",
    image: "/assets/projects/job-search-mobile-app.png",
    techStack: ["React Native", "Expo", "JavaScript", "RapidAPI", "JSearch API"],
    highlights: [
      "Built a mobile job search experience with home and job detail screens.",
      "Integrated the JSearch API through RapidAPI to fetch job posting data.",
      "Used Expo Router to structure native navigation with file-based routing.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/search-jobs-mobile-app",
      },
    ],
  },
  {
    title: "Story Finder",
    category: "Web Application",
    description:
      "A web application that allows users to search and explore articles through a clean frontend interface.",
    image: "/assets/projects/story-finder.png",
    techStack: ["React", "JavaScript", "REST APIs", "CSS"],
    highlights: [
      "Built article search functionality using API-driven data.",
      "Designed a simple frontend for browsing and viewing article results.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/react-storyfinder",
      },
      {
        label: "Frontend",
        href: "https://storyfinder-73093.web.app/",
      },
    ],
  },
  {
    title: "Disassembler",
    category: "Systems Programming",
    description:
      "A low-level programming project that converts machine-level data into readable assembly instructions.",
    image: "/assets/projects/disassembler.png",
    techStack: ["Assembly", "Systems Programming"],
    highlights: [
      "Parsed binary instruction data and converted it into assembly output.",
      "Strengthened understanding of low-level architecture and instruction formats.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/luualan/css422-disassembler",
      },
    ],
  },
];