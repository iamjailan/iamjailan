import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
  const ref = useRef<HTMLElement | null>(null);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;

        if (Date.now() - timeOfLastClick <= 1000) {
          return;
        }

        const section = ref.current;
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const readingLine = window.innerHeight * 0.45;

        if (rect.top <= readingLine && rect.bottom >= readingLine) {
          setActiveSection(sectionName);
        }
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
