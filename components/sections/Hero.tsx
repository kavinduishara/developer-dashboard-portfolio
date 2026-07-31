"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
}

export function Hero({ name, title, summary, email, phone, githubUrl, linkedinUrl }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 px-6 py-10 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.15),_transparent_35%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="space-y-6">
          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">
            Full-Stack Developer • Cloud & DevOps Enthusiast
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="text-xl font-medium text-cyan-600 dark:text-cyan-400">{title}</p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500">
              <FiDownload /> Resume
            </a>
            <a href="#projects" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              Explore Projects
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={`mailto:${email}`} aria-label="Email Kavindu" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <FiMail size={18} />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <FiGithub size={18} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <FiLinkedin size={18} />
            </a>
            <a href={`tel:${phone}`} aria-label="Call Kavindu" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <FiPhone size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }} animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }} className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl font-semibold text-cyan-300">
            KI
          </div>
          <h2 className="mt-6 text-2xl font-semibold">What I build</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <li>• Full-stack applications with modern React and Spring Boot architecture.</li>
            <li>• Cloud-native deployments and CI/CD automation with AWS and Docker.</li>
            <li>• Scalable, production-minded systems built for real-world collaboration.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
