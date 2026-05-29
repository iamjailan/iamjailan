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
      "Built and launched MCCO's official website from the ground up as the sole Full-Stack Developer. Designed the full-stack architecture using Next.js, Tailwind CSS, and MongoDB, and managed the complete application deployment, delivering a production-ready, professional digital presence for the company.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF – AseelApp",
    description:
      "Progressed through three distinct roles at AseelApp within one year: started as Backend Developer building core APIs while collaborating with frontend and UI/UX teams, transitioned to React Native mobile development on the Aseel Atalan app, then led frontend development on the main web platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 – 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote – blissio.ai",
    description:
      "Led the backend team at blissio.ai, architecting and shipping production APIs. Managed full application and API deployments for the entire platform across Azure, Google Cloud, and Digital Ocean using Docker. Also deployed and maintained AI models on Azure and Google Cloud. Owned end-to-end DevOps responsibilities, including CI/CD pipelines. Later contributed to the React Native mobile frontend.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – 2026",
  },
  {
    title: "Software Engineer",
    location: "Remote – Profitwave360 LLC",
    description:
      "Driving website modernization, SEO optimization, and performance improvements as a Software Engineer at Profitwave360 LLC. Delivering ongoing frontend and backend enhancements that directly impact the organization's online presence and user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2026 – Present",
  },
  {
    title: "Open to Opportunities",
    location: "Remote & On-site",
    description:
      "Actively seeking full-time and freelance opportunities in Full-Stack, Backend, Frontend, DevOps, and Database roles. Open to both remote and on-site positions worldwide.",
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
  "Docker",
  "DevOps",
  "Azure",
  "CI/CD",
] as const;
