"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("About");

  return (
    <section
      ref={ref}
      className="animate-rise mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      style={{ animationDelay: "175ms" }}
      id="about"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="mb-3">{t("p1")}</p>

      <p>
        {t("p2Before")}{" "}
        <span className="font-medium">{t("stack")}</span>
        {t("p2After")}
      </p>
    </section>
  );
}
