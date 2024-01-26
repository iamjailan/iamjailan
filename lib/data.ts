import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import singar from "@/public/Singar.png";
import chatak from "@/public/chatak.png";
import wadan from "@/public/wadan.png";

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
    location: "Kabul, AF",
    description:
      "I worked as Full-Stack developer in Kabul with MCCO(www.mcco.af) Org, I created their website using Next.js, Tailwind CSS and MongoDB",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "Kabul, AF",
    description:
      "I worked as a back-end developer for 1 year with AseelApp, i worked with and created their Backend using MedusaJS. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF",
    description:
      "I'm now a full-stack developer and looking for a freelancer job. My stack includes React, Next.js, Node.js , TypeScript, Express.js, Tailwind, Prisma, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Wadan Real Estate",
    description:
      "i have created Wadan Real Estate Project using latest version MERN stack, in the website i created the functionality of sign up and sign in.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node"],
    imageUrl: wadan,
    linkUrl: "https://wadan-estate.onrender.com/",
    githubUrl: "https://github.com/iamjailan/mern-estate-",
  },
  {
    title: "Chatak Weather",
    description:
      "I have created thid project using react and react router, it's a weather app with multilingual functionality using i18next library.",
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
      "this i an e-commerce app i created using React, and Tailwind CSS, and also used the Firebase for storage handling.",
    tags: ["React", "React Router", "React Redux", "Tailwind"],
    imageUrl: singar,
    linkUrl: "https://singar.netlify.app/",
    githubUrl: "https://github/iamjailan/singar-store",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
] as const;
