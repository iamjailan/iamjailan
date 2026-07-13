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
import type { YearMonth } from "@/lib/locale-format";

export type ExperienceItem = {
  id: string;
  icon: React.ReactElement;
  url?: string;
  start: YearMonth | null;
  end: YearMonth | "present" | null;
};

export type ProjectYear = number | { start: number; end: number };

export type ProjectItem = {
  id: string;
  title: string;
  tags: string[];
  imageUrl: typeof resumeAF;
  linkUrl: string;
  githubUrl: string;
  year: ProjectYear;
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "dursa",
    icon: React.createElement(CgWorkAlt),
    start: { year: 2022, month: 6 },
    end: { year: 2023, month: 1 },
  },
  {
    id: "mcco",
    url: "https://mcco.af",
    icon: React.createElement(LuGraduationCap),
    start: { year: 2023, month: 2 },
    end: { year: 2023, month: 12 },
  },
  {
    id: "aseel",
    url: "https://aseelapp.com",
    icon: React.createElement(CgWorkAlt),
    start: { year: 2023, month: 12 },
    end: { year: 2024, month: 8 },
  },
  {
    id: "blissio",
    url: "https://blissio.ai",
    icon: React.createElement(CgWorkAlt),
    start: { year: 2024, month: 9 },
    end: { year: 2026, month: 5 },
  },
  {
    id: "open",
    icon: React.createElement(FaReact),
    start: null,
    end: "present",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "resumeaf",
    title: "ResumeAF",
    tags: ["PHP", "Laravel", "React", "Next.js", "Tailwind", "MySQL"],
    imageUrl: resumeAF,
    linkUrl: "https://resume.sleepany.com/",
    githubUrl: "https://github.com/iamjailan",
    year: 2026,
  },
  {
    id: "sunzala",
    title: "Sunzala Afghan Store",
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
    year: 2026,
  },
  {
    id: "marghai",
    title: "Marghai Job Portal",
    tags: ["Nextjs", "Nestjs", "PostgreSQL", "Tailwind", "React Query"],
    imageUrl: marghai,
    linkUrl: "https://marghai.vercel.app/",
    githubUrl: "https://github.com/iamjailan/marghai-jobs-landing",
    year: 2025,
  },
  {
    id: "wadan",
    title: "Wadan Real Estate",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node"],
    imageUrl: wadan,
    linkUrl: "https://wadan-estate.onrender.com/",
    githubUrl: "https://github.com/iamjailan/mern-estate-",
    year: { start: 2023, end: 2024 },
  },
  {
    id: "chatak",
    title: "Chatak Weather",
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
    year: 2023,
  },
  {
    id: "singar",
    title: "Singar Store",
    tags: ["React", "React Router", "React Redux", "Tailwind"],
    imageUrl: singar,
    linkUrl: "https://singar.netlify.app/",
    githubUrl: "https://github.com/iamjailan/singar-store",
    year: 2023,
  },
];

export const skillsData = {
  programmingLanguages: ["JavaScript", "TypeScript", "Python", "PHP"],
  frameworksLibraries: [
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "Framer Motion",
    "Redux",
    "Zustand",
    "React Query",
    "FastAPI",
    "Laravel",
  ],
  databasesOrm: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "TypeORM",
    "Firebase",
    "MySQL",
  ],
  cloudDeployment: [
    "Docker",
    "Azure",
    "Google Cloud",
    "Digital Ocean",
    "CI/CD",
    "GitHub Actions",
  ],
  toolsOther: [
    "Git",
    "Tailwind",
    "MedusaJS",
    "Web Performance",
    "SEO (Technical & On-Page)",
  ],
  methodologies: ["Agile / Scrum"],
  languages: [] as readonly string[],
} as const;

export type ExperienceId = (typeof experiencesData)[number]["id"];
export type ProjectId = (typeof projectsData)[number]["id"];
export type SkillCategoryId = keyof typeof skillsData;
