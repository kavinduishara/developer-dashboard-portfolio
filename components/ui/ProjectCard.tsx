"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  dateRange: string;
  shortDescription: string;
  stack: string[];
  githubUrl: string;
  slug: string;
}

export function ProjectCard({ title, dateRange, shortDescription, stack, githubUrl, slug }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(34, 211, 238, 0.12)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{dateRange}</p>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View GitHub repository for ${title}`}
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300"
        >
          <FiGithub size={18} />
        </a>
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.slice(0, 4).map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {item}
          </span>
        ))}
      </div>

      <Link href={`/projects/${slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400">
        Read case study →
      </Link>
    </motion.article>
  );
}
