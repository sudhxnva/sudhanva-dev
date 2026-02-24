"use client";

import { AnimatePresence } from "motion/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export default function Home() {
  const { loadingComplete, setLoadingComplete } = useTheme();

  return (
    <>
      <ScrollProgressBar />
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <LoadingScreen
            key="loading"
            onComplete={() => setLoadingComplete(true)}
          />
        )}
      </AnimatePresence>
      {loadingComplete && (
        <>
          <NavBar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}