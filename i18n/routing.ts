import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ps", "fa"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ps: "PS",
  fa: "FA",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ps: "پښتو",
  fa: "فارسی",
};

export const rtlLocales: Locale[] = ["ps", "fa"];

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}
