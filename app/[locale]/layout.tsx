import Header from "@/components/header";
import LocaleDocumentAttributes from "@/components/locale-document-attributes";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, loc === "en" ? "/" : `/${loc}`]),
  );

  return {
    metadataBase: new URL("https://sleepany.com"),
    applicationName: "Jailan Samun",
    title: t("title"),
    description: t("description"),
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: ["/favicon.ico"],
    },
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        ...languages,
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "en" ? "https://sleepany.com" : `https://sleepany.com/${locale}`,
      siteName: "Jailan Samun",
      images: [
        {
          url: "/profile-avatar.webp",
          width: 384,
          height: 384,
          alt: "Jailan Samun - Full Stack Developer",
        },
      ],
      locale: locale === "fa" ? "fa_AF" : locale === "ps" ? "ps_AF" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/profile-avatar.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    keywords: [
      "Full-Stack Developer",
      "Jailan Samun",
      "Jailan Mirkhel",
      "Ahmad Jailan Samun",
      "Backend Developer",
      "NestJS",
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Prisma",
      "TypeORM",
      "PostgreSQL",
      "MongoDB",
      "Express.js",
      "Docker",
      "REST APIs",
      "GraphQL",
      "Tailwind CSS",
      "Full-Stack Web Development",
      "Backend Architecture",
      "API Development",
      "Azure",
      "Cloud Deployment",
    ],
  };
}

export const viewport = {
  themeColor: "#ffffff",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sleepany.com/#website",
        url: "https://sleepany.com/",
        name: "Jailan Samun",
        alternateName: [
          "Jailan Samun",
          "Jailan Samun | Full Stack Developer",
        ],
        inLanguage: locale,
      },
      {
        "@type": "Organization",
        "@id": "https://sleepany.com/#organization",
        name: "Jailan Samun",
        url: "https://sleepany.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://sleepany.com/android-chrome-512x512.png",
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "Person",
        "@id": "https://sleepany.com/#person",
        name: "Jailan Samun",
        url: "https://sleepany.com/",
        image: "https://sleepany.com/profile-avatar.webp",
        jobTitle: "Full-Stack Developer",
        worksFor: { "@id": "https://sleepany.com/#organization" },
        sameAs: [
          "https://github.com/iamjailan",
          "https://linkedin.com/in/iamjailan",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Cloud Deployment",
          "Full-Stack Web Development",
        ],
      },
    ],
  };

  return (
    <>
      {/*
        JSON-LD as a non-executable data script. Rendered only on the server
        for the initial HTML; id is stable per locale for client navigations.
      */}
      <script
        id={`json-ld-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/*
        Clip decorative blurs so their physical left/right overflow does not
        expand document scrollWidth. In RTL that overflow creates a horizontal
        scrollbar and lets the page be dragged sideways.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      </div>

      <NextIntlClientProvider messages={messages}>
        <LocaleDocumentAttributes />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Analytics />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </NextIntlClientProvider>
    </>
  );
}
