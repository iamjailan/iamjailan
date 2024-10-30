import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jailan Samun | Personal Portfolio | Full Stack Developer",
  description:
    "Jailan Samun is a full-stack developer with 3 years of experience.",
  openGraph: {
    description:
      "Jailan Samun is a full-stack developer with 3 years of experience.",
    images: [""],
  },
  keywords: [
    "Full-Stack Developer",
    "Jailan Samun",
    "Jailan Mirkhel",
    "Ahmad Jailan Samun",
    "Backend Developer",
    "NestJS",
    "Aseel",
    "Node.js",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Prisma",
    "TypeORM",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Express.js",
    "Azure Web Services",
    "Firebase",
    "Twilio Integration",
    "Docker",
    "Kubernetes",
    "REST APIs",
    "GraphQL",
    "Vite",
    "Tailwind CSS",
    "React Query",
    "React Redux",
    "Full-Stack Web Development",
    "Backend Architecture",
    "API Development",
    "Test-Driven Development",
    "Chargebee Integration",
    "Web App Development",
    "Time Management App",
    "Serverless Applications",
    "VPS Hosting",
    "Remote Software Developer",
    "Mid-level Developer",
    "Tech and IT Career",
    "Azure Deployment",
    "Cloud Infrastructure",
    "API Security",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
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

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
