import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import singar from "@/public/singar.webp";
import chatak from "@/public/chatak.webp";
import wadan from "@/public/wadan.webp";
import marghai from "@/public/marghai.webp";
import sunzala from "@/public/sunzala-project.webp";
import resumeAF from "@/public/resume_af.png";

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Afghanistan – Dursa",
    description: [
      "Developed and maintained the Dursa website using Next.js, React, and Tailwind CSS.",
      "Built responsive, user-friendly, and accessible web interfaces.",
      "Implemented new features and enhanced existing functionality based on project requirements.",
      "Optimized website performance and improved page load speed.",
      "Collaborated with the team to deliver high-quality, maintainable code.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 – Jan 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF – MCCO.af",
    url: "https://mcco.af",
    description:
      "Built and launched MCCO's official website from the ground up as the sole Full-Stack Developer. Designed the full-stack architecture using Next.js, Tailwind CSS, and MongoDB, and managed the complete application deployment, delivering a production-ready platform in under 3 months.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 – Dec 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kabul, AF – AseelApp",
    url: "https://aseelapp.com",
    description:
      "Progressed through three distinct roles at AseelApp over 12 months: started as Backend Developer building core APIs, transitioned to React Native mobile development on the Aseel Atalan app, then led frontend development on the main web platform, collaborating with cross-functional teams throughout.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 – Aug 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote – blissio.ai",
    url: "https://blissio.ai",
    description:
      "Led the backend team at blissio.ai, architecting and shipping production APIs for the core platform. Managed application and API deployments across Azure, Google Cloud, and Digital Ocean using Docker, supported AI model integrations, and later contributed to the React Native mobile frontend.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – May 2026",
  },
  {
    title: "Open to Opportunities",
    location: "Remote & On-site",
    description:
      "Actively seeking full-time and freelance opportunities in Full-Stack, Backend, Frontend, and Database roles. Open to both remote and on-site positions worldwide.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "ResumeAF",
    description:
      "A CV and resume builder. Create your CV or resume, choose a template, and export it.",
    tags: ["PHP", "Laravel", "React", "Next.js", "Tailwind", "MySQL"],
    imageUrl: resumeAF,
    linkUrl: "https://resume.sleepany.com/",
    githubUrl: "https://github.com/iamjailan",
    year: "2026",
  },
  {
    title: "Sunzala Afghan Store",
    description:
      "An Afghan marketplace connecting buyers with authentic crafts, spices, clothing, and gemstones.",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "React Query",
      "Tailwind",
      "E-commerce",
    ],
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

export const skillsData = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "PHP"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "Framer Motion",
    "Redux",
    "React Query",
    "FastAPI",
    "Laravel",
  ],
  "Databases & ORMs": [
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "TypeORM",
    "Firebase",
    "MySQL",
  ],
  "Cloud & Deployment": [
    "Docker",
    "Azure",
    "Google Cloud",
    "Digital Ocean",
    "CI/CD",
    "GitHub Actions",
  ],
  "Tools & Other": [
    "Git",
    "Tailwind",
    "MedusaJS",
    "Web Performance",
    "SEO (Technical & On-Page)",
  ],
  Methodologies: ["Agile / Scrum"],
  Languages: ["English: C1 (business fluent)"],
} as const;
