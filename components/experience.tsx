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

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "var(--timeline-card-bg)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid var(--timeline-arrow-color)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "var(--timeline-icon-bg)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">
                {"url" in item && item.url ? (
                  <>
                    {item.location.split("–")[0].trim()}{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {item.location.split("–")[1].trim()}
                    </a>
                  </>
                ) : (
                  item.location
                )}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          )) as ReactNode
        }
      </VerticalTimeline>
    </section>
  );
}
