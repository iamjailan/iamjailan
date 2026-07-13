"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";
import { isRtlLocale, type Locale } from "@/i18n/routing";

/**
 * Keep <html lang/dir> in sync on client-side locale switches.
 * Root layout only sets these on the initial server render; soft navigations
 * would otherwise leave dir="rtl" active on English (and reverse the navbar).
 */
export default function LocaleDocumentAttributes() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    const isRtl = isRtlLocale(locale);
    const root = document.documentElement;

    root.lang = locale;
    root.dir = isRtl ? "rtl" : "ltr";
    root.classList.toggle("font-estedad", isRtl);
    root.classList.toggle("font-sans", !isRtl);
  }, [locale]);

  return null;
}
