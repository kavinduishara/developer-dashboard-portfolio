"use client";

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 font-mono text-sm text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} Kavindu Ishara. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:kavinduishara2923@gmail.com" aria-label="Email Kavindu" className="transition hover:text-cyan-400">
            <FiMail size={18} />
          </a>
          <a href="https://github.com/kavinduishara" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile" className="transition hover:text-cyan-400">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kavindu-rathnayaka-b1b201416/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile" className="transition hover:text-cyan-400">
            <FiLinkedin size={18} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="rounded-md border border-slate-800 p-2 transition hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}