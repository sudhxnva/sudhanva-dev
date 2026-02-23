import { Variants, TargetAndTransition } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export const blurFadeInSlow: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.0,
      ease,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const dividerDraw: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export const slideUpStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

// ─── Compatibility aliases (legacy variants used by existing components) ───

export const fadeInUp: Variants = slideUp;

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const navSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const cardPop: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// statBarFill is called as a function: statBarFill(level) => Variants
export function statBarFill(level: number): Variants {
  return {
    hidden: { scaleX: 0, width: `${level}%` },
    visible: {
      scaleX: 1,
      width: `${level}%`,
      transition: { duration: 0.8, ease },
    },
  };
}

export const loadingLogoReveal: Variants = blurFadeIn;

export const crtExit: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 0.5, ease },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

// floatAnimation is used as a direct `animate` prop (TargetAndTransition), not as Variants
export const floatAnimation: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const underlineDraw: Variants = dividerDraw;
