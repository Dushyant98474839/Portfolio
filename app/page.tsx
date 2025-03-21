import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <AboutMe />
        <Skills />
        <Project />
        <Contact/>
      </div>
    </main>
  );
}
