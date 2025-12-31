import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import singar from "@/public/Singar.png";
import chatak from "@/public/chatak.png";
import wadan from "@/public/wadan.png";
import marghai from "@/public/marghai.jpg";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
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
      "Worked as a Full-Stack Developer at MCCO, building the company website using Next.js, Tailwind CSS, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "Kabul, AF – AseelApp",
    description:
      "Worked as a Back-End Developer at AseelApp for one year, building and maintaining backend services using MedusaJS and expanding into full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 – 2024",
  },
  {
    title: "Backend Developer",
    location: "Remote – blissio.ai",
    description:
      "Worked as a Backend Developer at blissio.ai, developing scalable APIs and services using NestJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – 2026",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF / Remote",
    description:
      "Currently working as a Full-Stack Developer and open to freelance and full-time opportunities. Tech stack includes React, Next.js, Node.js, TypeScript, Express.js, Tailwind CSS, Prisma, PostgreSQL, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Marghai Job Portal",
    description:
      "A full-stack job portal with secure authentication, job browsing, filtering, and real-time applications.",
    tags: ["Nextjs", "Nestjs", "PostgreSQL", "Tailwind", "React Query"],
    imageUrl: marghai,
    linkUrl: "https://marghai.vercel.app/",
    githubUrl: "https://github.com/iamjailan/marghai-jobs-landing",
  },
  {
    title: "Wadan Real Estate",
    description:
      "A real estate web app built with the MERN stack featuring user sign-up and sign-in.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node"],
    imageUrl: wadan,
    linkUrl: "https://wadan-estate.onrender.com/",
    githubUrl: "https://github.com/iamjailan/mern-estate-",
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
  },
  {
    title: "Singar Store",
    description:
      "An e-commerce app built with React and Tailwind, using Firebase for storage.",
    tags: ["React", "React Router", "React Redux", "Tailwind"],
    imageUrl: singar,
    linkUrl: "https://singar.netlify.app/",
    githubUrl: "https://github.com/iamjailan/singar-store",
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
  "Framer Motion",
  "Learning Docker",
  "DevOps",
  "Azure",
  "CI/CD",
] as const;
