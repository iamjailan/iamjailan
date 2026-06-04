import About from "@/components/about";
import Intro from "@/components/intro";
import LazySections from "@/components/lazy-sections";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <LazySections />
    </main>
  );
}
