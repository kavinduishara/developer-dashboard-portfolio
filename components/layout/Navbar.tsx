"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#research", label: "research" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-px w-full bg-slate-800">
        <div className="h-px bg-cyan-400 transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" className="font-mono text-sm tracking-[0.2em] text-white">
            KAVINDU<span className="text-cyan-400">_</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="font-mono text-sm text-slate-400 transition hover:text-cyan-400">
                ./{link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-md border border-slate-800 p-2 text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-400 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-slate-800/60 bg-slate-950/95 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm text-slate-300 transition hover:text-cyan-400"
                  onClick={() => setOpen(false)}
                >
                  ./{link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}