import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://sleepany.com";

function localeUrl(locale: string): string {
  return locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const languageAlternates: Record<string, string> = {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, localeUrl(locale)]),
    ),
    "x-default": baseUrl,
  };

  return routing.locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: languageAlternates,
    },
  }));
}
