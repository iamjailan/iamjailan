import type { ReactNode } from "react";
import { Inter, Geist } from "next/font/google";
import { getLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { isRtlLocale, routing } from "@/i18n/routing";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const themeInitScript = `try{const theme=localStorage.getItem("theme");const prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;if(theme==="dark"||(!theme&&prefersDark)){document.documentElement.classList.add("dark")}}catch{}`;

export default async function RootLayout({ children }: Props) {
  let locale: string = routing.defaultLocale;
  try {
    const resolved = await getLocale();
    if (hasLocale(routing.locales, resolved)) {
      locale = resolved;
    }
  } catch {
    // Fallback during edge cases where locale is not yet available.
  }

  const isRtl = isRtlLocale(locale);

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={cn(
        "!scroll-smooth",
        isRtl ? "font-estedad" : "font-sans",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Blocking theme bootstrap must live in the real document head */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {isRtl ? (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Estedad:wght@100..900&display=swap"
              rel="stylesheet"
            />
          </>
        ) : null}
      </head>
      <body
        className={cn(
          isRtl ? "font-estedad" : inter.className,
          // Use text-gray-50/90 (not text-opacity) so tailwind-merge keeps the dark color.
          "bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50/90",
        )}
      >
        {children}
      </body>
    </html>
  );
}
