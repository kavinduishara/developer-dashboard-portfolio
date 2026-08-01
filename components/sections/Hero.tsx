"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiTerminal } from "react-icons/fi";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
}

export function Hero({ name, title }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const roles = useMemo(
    () => [title, "DevOps Enthusiast", "Full-Stack Developer", "Cloud Learner", "Distributed Systems Explorer"],
    [title],
  );
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [roles.length, shouldReduceMotion]);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(60% 50% at 50% 30%, rgba(34,211,238,0.10), transparent 70%)",
        }}
      />

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 font-mono text-xs text-slate-300 backdrop-blur">
          <FiTerminal className="text-cyan-400" size={14} />
          System.ready()
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Hello, I&apos;m {name}
          <motion.span
            aria-hidden
            className="text-cyan-400"
            animate={shouldReduceMotion ? {} : { opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            _
          </motion.span>
        </h1>

        <div className="flex min-h-9 items-center justify-center overflow-hidden text-lg font-medium text-cyan-400 sm:text-xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[activeRoleIndex]}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-mono"
            >
              {roles[activeRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}
