"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}

export function StaggerContainer({ children, className, staggerChildren = 0.1 }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
