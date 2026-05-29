import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import singar from "@/public/Singar.png";
import chatak from "@/public/chatak.png";
import wadan from "@/public/wadan.png";
import marghai from "@/public/marghai.jpg";
import sunzala from "@/public/sunzala_project.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF – MCCO.af",
    description:
      "Served as a Full-Stack Developer at MCCO, architecting and launching the company website using Next.js, Tailwind CSS, and MongoDB to deliver a modern and professional digital presence.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF – AseelApp",
    description:
      "Joined AseelApp as a Backend Developer, building APIs and collaborating with frontend developers and UI/UX designers. Transitioned to mobile development, working on the Aseel Atalan app using React Native. Later moved to web frontend, building and contributing to the Aseel frontend alongside the team.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 – 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote – blissio.ai",
    description:
      "Joined blissio.ai as a Backend Developer, managing the backend team and building APIs for the blissio.ai app. Deployed and managed AI models on Azure and Google Cloud, overseeing CI/CD pipelines and deployments across Azure, Google Cloud, and Digital Ocean while handling all DevOps operations. Later worked on the app frontend using React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – 2026",
  },
  {
    title: "Software Engineer",
    location: "Remote – Profitwave360 LLC",
    description:
      "Currently working as a Software Engineer at Profitwave360 LLC, improving the organization's websites, optimizing SEO, enhancing web performance, and delivering ongoing frontend and backend improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "2026 – Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF / Remote",
    description:
      "Currently working as a Full-Stack Developer and open to freelance and full-time opportunities in Full-Stack, Backend, Frontend, DevOps, and Database roles (including combinations of these areas). Tech stack includes React, Next.js, Node.js, TypeScript, Express.js, Tailwind CSS, Prisma, PostgreSQL, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sunzala Afghan Store",
    description:
      "An Afghan marketplace connecting buyers with authentic crafts, spices, clothing, and gemstones.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "React Query", "Tailwind", "E-commerce"],
    imageUrl: sunzala,
    linkUrl: "https://sunzala.vercel.app",
    githubUrl: "https://github.com/iamjailan/sunzala-store.git",
    year: "2026",
  },
  {
    title: "Marghai Job Portal",
    description:
      "A full-stack job portal with secure authentication, job browsing, filtering, and real-time applications.",
    tags: ["Nextjs", "Nestjs", "PostgreSQL", "Tailwind", "React Query"],
    imageUrl: marghai,
    linkUrl: "https://marghai.vercel.app/",
    githubUrl: "https://github.com/iamjailan/marghai-jobs-landing",
    year: "2025",
  },
  {
    title: "Wadan Real Estate",
    description:
      "A real estate web app built with the MERN stack featuring user sign-up and sign-in.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node"],
    imageUrl: wadan,
    linkUrl: "https://wadan-estate.onrender.com/",
    githubUrl: "https://github.com/iamjailan/mern-estate-",
    year: "2023 – 2024",
  },
  {
    title: "Chatak Weather",
    description:
      "A multilingual weather app built with React using the OpenWeather API.",
    tags: [
      "React",
      "JavaScript",
      "OpenWeather API",
      "Tailwind",
      "React Router",
    ],
    imageUrl: chatak,
    linkUrl: "https://weather-af.netlify.app/",
    githubUrl: "https://github.com/iamjailan/weather",
    year: "2023",
  },
  {
    title: "Singar Store",
    description:
      "An e-commerce app built with React and Tailwind, using Firebase for storage.",
    tags: ["React", "React Router", "React Redux", "Tailwind"],
    imageUrl: singar,
    linkUrl: "https://singar.netlify.app/",
    githubUrl: "https://github.com/iamjailan/singar-store",
    year: "2023",
  },

] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "MedusaJS",
  "Git",
  "Tailwind",
  "Prisma",
  "TypeORM",
  "ReactQuery",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "SEO",
  "Technical SEO",
  "On-Page SEO",
  "Web Performance",
  "Framer Motion",
  "Learning Docker",
  "DevOps",
  "Azure",
  "CI/CD",
] as const;
