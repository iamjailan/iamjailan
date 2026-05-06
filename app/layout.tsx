import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://me.sleepany.com"),
  title: "Jailan Samun | Full Stack Developer",
  description:
    "Jailan Samun is a full-stack developer with 5 years of experience in backend, DevOps, and AI. Specializing in React, Next.js, Node.js, NestJS, and TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jailan Samun | Full Stack Developer",
    description:
      "Full-stack developer with 5 years of experience in backend, DevOps, and AI. Building modern web applications with React, Next.js, and Node.js.",
    url: "https://me.sleepany.com",
    siteName: "Jailan Samun Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 192,
        height: 192,
        alt: "Jailan Samun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jailan Samun | Full Stack Developer",
    description:
      "Full-stack developer with 5 years of experience in backend, DevOps, and AI.",
    images: ["/profile.jpg"],
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
    "DevOps",
    "Azure",
    "AI Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jailan Samun",
              url: "https://me.sleepany.com",
              image: "https://me.sleepany.com/profile.jpg",
              jobTitle: "Full-Stack Developer",
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
                "DevOps",
                "AI Engineering",
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
