import Header from "@/components/header";
import "./globals.css";
import { Inter, Geist } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sleepany.com"),
  applicationName: "Jailan Samun",
  title: "Jailan Samun | Full Stack Developer",
  description:
    "Jailan Samun is a full-stack developer with 5 years of experience building modern web applications, scalable APIs, and production-ready software with React, Next.js, Node.js, NestJS, and TypeScript.",
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
    canonical: "/",
  },
  openGraph: {
    title: "Jailan Samun | Full Stack Developer",
    description:
      "Full-stack developer with 5 years of experience building modern web applications, scalable APIs, and production-ready software with React, Next.js, Node.js, and NestJS.",
    url: "https://sleepany.com",
    siteName: "Jailan Samun",
    images: [
      {
        url: "/profile-avatar.webp",
        width: 384,
        height: 384,
        alt: "Jailan Samun - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jailan Samun | Full Stack Developer",
    description:
      "Full-stack developer with 5 years of experience building modern web applications, scalable APIs, and polished frontend experiences.",
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

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("!scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const theme=localStorage.getItem("theme");const prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;if(theme==="dark"||(!theme&&prefersDark)){document.documentElement.classList.add("dark")}}catch{}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  inLanguage: "en",
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
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

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
      </body>
    </html>
  );
}
