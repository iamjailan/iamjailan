"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiStatusOnline } from "react-icons/hi";

type ProjectProps = Omit<(typeof projectsData)[number], "year"> & {
  description: string;
  imageAlt: string;
  year: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkUrl,
  githubUrl,
  year,
  imageAlt,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 mx-auto"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pe-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:ps-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Mobile image - stacked on top for small screens */}
        <Link href={linkUrl} target="_blank" className="block sm:hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            quality={75}
            sizes="100vw"
            placeholder="blur"
            className="w-full h-48 object-cover"
          />
        </Link>

        <div className="pt-4 pb-7 px-5 sm:ps-10 sm:pe-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ms-[18rem]">
          <h3 className="text-2xl font-semibold flex items-baseline gap-2">
            {title}
            <span className="text-base font-normal text-gray-500 dark:text-white/60 tracking-normal">
              {year}
            </span>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <section className="flex justify-around items-center mt-3">
            {githubUrl && /github\.com\/[^/]+\/.+/.test(githubUrl) && (
              <Link
                className="cursor-pointer text-lg opacity-70 transition-opacity duration-300 hover:opacity-100"
                href={githubUrl}
                target="_blank"
              >
                <BsGithub />
              </Link>
            )}
            <Link
              className="cursor-pointer text-lg opacity-70 transition-opacity duration-300 hover:opacity-100"
              href={linkUrl}
              target="_blank"
            >
              <HiStatusOnline />
            </Link>
          </section>
        </div>

        {/* Desktop image - absolutely positioned with hover effects */}
        <Link href={linkUrl} target="_blank" className="hidden sm:block">
          <Image
            src={imageUrl}
            alt={imageAlt}
            quality={75}
            sizes="452px"
            placeholder="blur"
            className="absolute top-8 -end-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3 rtl:group-hover:translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2 rtl:group-hover:rotate-2
        
        group-even:group-hover:translate-x-3 rtl:group-even:group-hover:-translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 rtl:group-even:group-hover:-rotate-2
        
        group-even:end-[initial] group-even:-start-40"
          />
        </Link>
      </section>
    </motion.div>
  );
}
