"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Kavindu Ishara. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:kavinduishara2923@gmail.com" aria-label="Email Kavindu" className="transition hover:text-cyan-600">
            <FiMail size={18} />
          </a>
          <a href="https://github.com/kavinduishara" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile" className="transition hover:text-cyan-600">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kavindu-rathnayaka-b1b201416/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile" className="transition hover:text-cyan-600">
            <FiLinkedin size={18} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="rounded-full border border-slate-200 p-2 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
