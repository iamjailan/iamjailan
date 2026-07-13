"use client";

import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsClaude, BsOpenai } from "react-icons/bs";
import { RiDeepseekFill } from "react-icons/ri";
import { RiGrokAiFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const prompt =
    "Who is Jailan Samun? He is a full-stack developer with 5 years of experience building modern web apps. See details at his portfolio https://sleepany.com , LinkedIn https://linkedin.com/in/iamjailan and GitHub https://github.com/iamjailan . Tell me about his background, experience, skills and projects.";

  const aiAssistants = [
    {
      label: "ChatGPT",
      href: (p: string) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
      icon: (
        <BsOpenai className="w-[22px] h-[22px]" style={{ color: "#74AA9C" }} />
      ),
    },
    {
      label: "Claude",
      href: (p: string) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
      icon: (
        <BsClaude className="w-[22px] h-[22px]" style={{ color: "#D97706" }} />
      ),
    },
    {
      label: "Grok",
      href: (p: string) => `https://grok.com/?q=${encodeURIComponent(p)}`,
      icon: (
        <RiGrokAiFill
          className="w-[22px] h-[22px]"
          style={{ color: "#000000" }}
        />
      ),
    },
    {
      label: "Gemini",
      href: (p: string) =>
        `https://gemini.google.com/app?prompt=${encodeURIComponent(p)}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[22px] h-[22px]"
          style={{ color: "#4285F4" }}
        >
          <path d="M12 2l2.35 7.05L22 12l-7.65 2.95L12 22l-2.35-7.05L2 12l7.65-2.95L12 2z" />
        </svg>
      ),
    },
    {
      label: "DeepSeek",
      href: (p: string) => `https://chat.deepseek.com/`,
      icon: (
        <RiDeepseekFill
          className="w-[22px] h-[22px]"
          style={{ color: "#4D6BFE" }}
        />
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="animate-scale-in">
            <img
              src="/profile-avatar.webp"
              alt="Jailan Samun"
              width="96"
              height="96"
              fetchPriority="high"
              decoding="async"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>

          <span
            className="animate-scale-in absolute bottom-0 right-0 text-4xl"
            style={{ animationDelay: "100ms" }}
          >
            👋
          </span>
        </div>
      </div>

      <h1 className="animate-rise mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-[35px]">
        <span className="font-bold">Hello, I'm Jailan Samun.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience delivering{" "}
        <span className="font-bold">end-to-end web applications</span>. I've
        worked on everything from{" "}
        <span className="font-bold">responsive user interfaces</span> to{" "}
        <span className="font-bold">backend services</span>, databases, and
        deployment, always focusing on building{" "}
        <span className="underline">reliable and scalable products</span>.
      </h1>

      <div
        className="animate-rise flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        style={{ animationDelay: "100ms" }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Jailan-Samun-CV-2026.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/iamjailan"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/iamjailan"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>

      {/* AI chat buttons - bottom section, icon-only */}
      <div className="mt-3 flex flex-col items-center">
        <div className="mb-1 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-400 dark:text-gray-500">
          Ask AI
        </div>
        <div className="flex items-center justify-center gap-2">
          {aiAssistants.map((ai, i) => (
            <a
              key={i}
              className="bg-white p-4 text-gray-700 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={ai.href(prompt)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask ${ai.label} about Jailan`}
              onClick={(e) => {
                if (ai.label === "Gemini" || ai.label === "DeepSeek") {
                  e.preventDefault();
                  navigator.clipboard.writeText(prompt);
                  toast.success(
                    `Prompt copied to clipboard, paste it in ${ai.label}.`,
                  );

                  setTimeout(() => {
                    window.open(
                      ai.href(prompt),
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }, 2000);
                }
              }}
            >
              {ai.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
