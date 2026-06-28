"use client";

import React from "react";
import Script from "next/script";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

type TurnstileRenderOptions = {
  sitekey: string;
  theme?: "auto" | "light" | "dark";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: TurnstileRenderOptions,
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

const getBrowserInfo = () => {
  const navigatorWithUserAgentData = window.navigator as Navigator & {
    userAgentData?: {
      brands?: { brand: string; version: string }[];
      platform?: string;
    };
  };

  const brandInfo = navigatorWithUserAgentData.userAgentData?.brands
    ?.map(({ brand, version }) => `${brand} ${version}`)
    .join(", ");
  const platform =
    navigatorWithUserAgentData.userAgentData?.platform ||
    window.navigator.platform ||
    "Unknown platform";

  return [
    brandInfo || window.navigator.userAgent || "Unknown browser",
    platform,
    window.navigator.language,
  ]
    .filter(Boolean)
    .join(" | ");
};

const getLocalTimeZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
  } catch {
    return "Unknown";
  }
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = React.useRef<HTMLFormElement>(null);
  const turnstileContainerRef = React.useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = React.useRef<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = React.useState(false);
  const [turnstileToken, setTurnstileToken] = React.useState("");

  const renderTurnstile = React.useCallback(() => {
    if (
      !turnstileSiteKey ||
      !turnstileLoaded ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        theme: "auto",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      },
    );
  }, [turnstileLoaded]);

  React.useEffect(() => {
    renderTurnstile();

    return () => {
      if (turnstileWidgetIdRef.current) {
        window.turnstile?.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  const resetTurnstile = () => {
    setTurnstileToken("");

    if (turnstileWidgetIdRef.current) {
      window.turnstile?.reset(turnstileWidgetIdRef.current);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onReady={() => setTurnstileLoaded(true)}
        />
      ) : null}
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jailan.samun@gmail.com">
          jailan.samun@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          if (!turnstileToken) {
            toast.error("Please complete the security check.");
            return;
          }

          formData.set("cf-turnstile-response", turnstileToken);
          formData.set("userTimeZone", getLocalTimeZone());
          formData.set("userLocalTime", new Date().toString());
          formData.set("browserInfo", getBrowserInfo());

          const { error } = await sendEmail(formData);

          resetTurnstile();

          if (error) {
            toast.error(error);
            return;
          }

          formRef.current?.reset();
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <input
          type="hidden"
          name="cf-turnstile-response"
          value={turnstileToken}
          readOnly
        />
        <div className="my-3 flex min-h-[4.25rem] items-center justify-center">
          {turnstileSiteKey ? (
            <div ref={turnstileContainerRef} />
          ) : (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Contact form verification is not configured.
            </p>
          )}
        </div>
        <SubmitBtn disabled={!turnstileSiteKey || !turnstileToken} />
      </form>
    </motion.section>
  );
}
