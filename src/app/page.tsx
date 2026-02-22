"use client";

import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { useTheme } from "@/components/providers/ThemeProvider";
import { NavBar } from "@/components/layout/NavBar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  const { loadingComplete, setLoadingComplete } = useTheme();

  return (
    <>
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
          <Hero />
        </>
      )}
    </>
  );
}
