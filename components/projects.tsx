"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="max-w-[42rem] mx-auto">
        <p className="mb-8 text-gray-700 dark:text-white/70">
          My most recent personal project is Sunzala Afghan Store. You can click
          on any project card to view the live demo or explore the source code on
          GitHub. Please note that many of these projects are from earlier stages
          of my career, as the majority of my professional time has been spent
          building production applications for companies.
        </p>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
