"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import { formatProjectYear } from "@/lib/locale-format";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="max-w-[42rem] mx-auto">
        <p className="mb-8 text-gray-700 dark:text-white/70">{t("intro")}</p>
        <div>
          {projectsData.map((project) => (
            <React.Fragment key={project.id}>
              <Project
                {...project}
                title={t(`items.${project.id}.title`)}
                year={formatProjectYear(project.year, locale)}
                description={t(`items.${project.id}.description`)}
                imageAlt={t("imageAlt")}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
