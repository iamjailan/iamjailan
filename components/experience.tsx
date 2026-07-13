"use client";

import React, { ReactNode } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import { formatExperienceDate } from "@/lib/locale-format";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("Experience");
  const locale = useLocale();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor="" className="experience-timeline">
        {
          experiencesData.map((item, index) => {
            const title = t(`items.${item.id}.title`);
            const location = t(`items.${item.id}.location`);
            const description = t.raw(`items.${item.id}.description`) as
              | string
              | string[];
            const date = formatExperienceDate(
              item.start,
              item.end,
              locale,
              t("present"),
            );

            return (
              <VerticalTimelineElement
                key={item.id}
                contentStyle={{
                  background: "var(--timeline-card-bg)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "start",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid var(--timeline-arrow-color)",
                }}
                date={date}
                dateClassName="experience-timeline-date"
                icon={item.icon}
                iconStyle={{
                  background: "var(--timeline-icon-bg)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">
                  {"url" in item && item.url ? (
                    <>
                      {location.split("–")[0].trim()}{" "}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {location.split("–")[1]?.trim()}
                      </a>
                    </>
                  ) : (
                    location
                  )}
                </p>
                {Array.isArray(description) ? (
                  <ul className="!mt-1 list-disc ps-5 !font-normal text-gray-700 dark:text-white/75">
                    {description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {description}
                  </p>
                )}
              </VerticalTimelineElement>
            );
          }) as ReactNode
        }
      </VerticalTimeline>
    </section>
  );
}
