import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    date: "2023 - 2024",
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
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Chatak Weather",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      "React",
      "JavaScript",
      "OpenWeather API",
      "Tailwind",
      "React Router",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Singar Store",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "React Router", "React Redux", "Tailwind"],
    imageUrl: wordanalyticsImg,
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
