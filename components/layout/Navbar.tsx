"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  href: string;
  label: string;
  sectionId?: string;
  matches?: string[];
};

const links: NavLink[] = [
  { href: "/#about", label: "about", sectionId: "about" },
  { href: "/#skills", label: "skills", sectionId: "skills" },
  { href: "/#experience", label: "experience", sectionId: "experience" },
  { href: "/#projects", label: "projects", sectionId: "projects", matches: ["/projects"] },
  { href: "/#research", label: "research", sectionId: "research", matches: ["/research"] },
  { href: "/#contact", label: "contact", sectionId: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

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

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = links.map((link) => link.sectionId).filter((id): id is string => Boolean(id));

    const syncActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
        return;
      }

      const viewportOffset = 180;
      const sectionTops = sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element))
        .map((element) => ({ id: element.id, top: element.getBoundingClientRect().top + window.scrollY }));

      if (sectionTops.length === 0) {
        return;
      }

      const scrollPosition = window.scrollY + viewportOffset;
      const current = [...sectionTops]
        .reverse()
        .find((section) => scrollPosition >= section.top);

      if (current) {
        setActiveSection(current.id);
        return;
      }

      setActiveSection(sectionTops[0]?.id ?? "");
    };

    syncActiveSection();

    const handleScroll = () => {
      syncActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [pathname]);

  const isActive = (link: NavLink) => {
    const matchesRoute = link.matches?.some((match) => pathname === match || pathname.startsWith(`${match}/`));
    const matchesHashSection = pathname === "/" && activeSection === link.sectionId;

    if (matchesRoute || matchesHashSection) {
      return true;
    }

    if (pathname !== "/") {
      return false;
    }

    return false;
  };

  const navLinkClassName = (active: boolean) =>
    [
      "rounded-full px-3 py-2 font-mono text-sm transition",
      active
        ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30"
        : "text-slate-400 hover:bg-slate-800/60 hover:text-cyan-300",
    ].join(" ");

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

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const active = isActive(link);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={navLinkClassName(active)}
                >
                  ./{link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-md border border-slate-800 p-2 text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-400 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-slate-800/60 bg-slate-950/95 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const active = isActive(link);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={navLinkClassName(active)}
                    onClick={() => setOpen(false)}
                  >
                    ./{link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
