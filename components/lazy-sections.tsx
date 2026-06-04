"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

const Experience = dynamic(() => import("@/components/experience"), {
  ssr: false,
  loading: () => <SectionPlaceholder className="mb-28 h-[48rem] sm:mb-40" />,
});
const Skills = dynamic(() => import("@/components/skills"), {
  ssr: false,
  loading: () => <SectionPlaceholder className="mb-28 h-[38rem] sm:mb-40" />,
});
const Projects = dynamic(() => import("@/components/projects"), {
  ssr: false,
  loading: () => <SectionPlaceholder className="mb-28 h-[76rem]" />,
});
const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => <SectionPlaceholder className="mb-20 h-[38rem] sm:mb-28" />,
});

const lazySections = [
  {
    id: "experience",
    name: "Experience",
    Component: Experience,
    placeholderClassName: "mb-28 h-[48rem] sm:mb-40",
  },
  {
    id: "skills",
    name: "Skills",
    Component: Skills,
    placeholderClassName: "mb-28 h-[38rem] sm:mb-40",
  },
  {
    id: "projects",
    name: "Projects",
    Component: Projects,
    placeholderClassName: "mb-28 h-[76rem]",
  },
  {
    id: "contact",
    name: "Contact",
    Component: Contact,
    placeholderClassName: "mb-20 h-[38rem] sm:mb-28",
  },
] as const;

function SectionPlaceholder({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={className} />;
}

function LazySection({
  id,
  name,
  Component,
  placeholderClassName,
}: (typeof lazySections)[number]) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = React.useState(false);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    const mountForHash = () => {
      if (window.location.hash === `#${id}`) {
        setShouldMount(true);
        return true;
      }

      return false;
    };

    if (mountForHash()) {
      return;
    }

    window.addEventListener("hashchange", mountForHash);

    return () => window.removeEventListener("hashchange", mountForHash);
  }, [id]);

  React.useEffect(() => {
    if (shouldMount) {
      return;
    }

    if (window.location.hash === `#${id}`) {
      setShouldMount(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "600px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [id, shouldMount]);

  React.useEffect(() => {
    if (shouldMount) {
      return;
    }

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
          setActiveSection(name);
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
  }, [name, setActiveSection, shouldMount, timeOfLastClick]);

  if (shouldMount) {
    return <Component />;
  }

  return (
    <div id={id} ref={ref} className="scroll-mt-28">
      <SectionPlaceholder className={placeholderClassName} />
    </div>
  );
}

export default function LazySections() {
  return (
    <>
      {lazySections.map((section) => (
        <LazySection key={section.id} {...section} />
      ))}
    </>
  );
}
