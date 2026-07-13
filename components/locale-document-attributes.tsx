"use client";

import { useLocale } from "next-intl";
import { useLayoutEffect } from "react";
import { isRtlLocale, type Locale } from "@/i18n/routing";

const ESTEDAD_STYLESHEET_ID = "estedad-font-stylesheet";
const ESTEDAD_STYLESHEET_HREF =
  "https://fonts.googleapis.com/css2?family=Estedad:wght@100..900&display=swap";

function ensureEstedadStylesheet() {
  if (typeof document === "undefined") return;
  if (document.getElementById(ESTEDAD_STYLESHEET_ID)) return;

  const existing = document.querySelector<HTMLLinkElement>(
    `link[rel="stylesheet"][href="${ESTEDAD_STYLESHEET_HREF}"]`,
  );
  if (existing) {
    existing.id = ESTEDAD_STYLESHEET_ID;
    return;
  }

  if (!document.querySelector('link[href="https://fonts.googleapis.com"]')) {
    const preconnectGoogle = document.createElement("link");
    preconnectGoogle.rel = "preconnect";
    preconnectGoogle.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnectGoogle);
  }

  if (!document.querySelector('link[href="https://fonts.gstatic.com"]')) {
    const preconnectGstatic = document.createElement("link");
    preconnectGstatic.rel = "preconnect";
    preconnectGstatic.href = "https://fonts.gstatic.com";
    preconnectGstatic.crossOrigin = "anonymous";
    document.head.appendChild(preconnectGstatic);
  }

  const stylesheet = document.createElement("link");
  stylesheet.id = ESTEDAD_STYLESHEET_ID;
  stylesheet.rel = "stylesheet";
  stylesheet.href = ESTEDAD_STYLESHEET_HREF;
  document.head.appendChild(stylesheet);
}

export default function LocaleDocumentAttributes() {
  const locale = useLocale() as Locale;

  useLayoutEffect(() => {
    const isRtl = isRtlLocale(locale);
    const root = document.documentElement;
    const body = document.body;

    root.lang = locale;
    root.dir = isRtl ? "rtl" : "ltr";
    root.classList.toggle("font-estedad", isRtl);
    root.classList.toggle("font-sans", !isRtl);

    body.classList.toggle("font-estedad", isRtl);

    if (isRtl) {
      ensureEstedadStylesheet();
    }
  }, [locale]);

  return null;
}
