"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // "view" reveals on scroll; "mount" plays once on first paint (hero).
  trigger?: "view" | "mount";
  as?: "div" | "li";
};

/**
 * Fade-and-rise entrance. Used to sequence content as it enters, so the eye
 * lands on headlines before supporting detail. Static under reduced motion.
 */
export function Reveal({ children, className, delay = 0, trigger = "view", as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;
  const target = { opacity: 1, y: 0 };

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      {...(trigger === "mount"
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, amount: 0.25 } })}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Component>
  );
}
