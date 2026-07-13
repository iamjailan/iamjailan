"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData, type SkillCategoryId } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="space-y-6">
        {(Object.entries(skillsData) as [SkillCategoryId, readonly string[]][]).map(
          ([category, skills]) => {
            const items =
              category === "languages" ? [t("languagesSkill")] : [...skills];

            return (
              <div key={category}>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-white/60">
                  {t(`categories.${category}`)}
                </h4>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                  {items.map((skill, index) => (
                    <motion.li
                      className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
