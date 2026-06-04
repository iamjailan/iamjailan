"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="animate-rise mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      style={{ animationDelay: "175ms" }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Full Stack Developer with over 5 years of experience building and
        scaling production web and mobile applications, leading backend teams,
        and deploying AI infrastructure on Azure and Google Cloud. I specialize
        in React, Next.js, Node.js, and modern backend systems, with a track
        record of delivering real products across startups and established
        companies.
      </p>

      <p>
        My favorite part of programming is solving complex problems end-to-end.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, TypeScript, PostgreSQL, and Prisma
        </span>
        . I am also experienced with NestJS, React Query, Redux, and DevOps
        practices.
      </p>
    </section>
  );
}
