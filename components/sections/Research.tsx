import Link from "next/link";
import { research } from "../../data/research";
import { SectionHeading } from "../ui/SectionHeading";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] via-slate-900/40 to-transparent p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="research"
              command="./run --thesis"
              title={research.title}
              description="A flagship research direction focused on distributed SQL processing, performance budgets, and intelligent execution strategies."
            />
            <p className="mt-6 text-base leading-7 text-slate-400">{research.summary}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="flex flex-wrap gap-2">
              {research.technologies.slice(0, 4).map((item) => (
                <span key={item} className="rounded-md bg-slate-900 px-2 py-1 font-mono text-xs text-cyan-400">
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/research"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Read thorough research details <FiArrowUpRight size={18} />
            </Link>
            
            
          </div>
          <a
            href={research.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
          >
            <FiGithub size={16} /> View source
          </a>
        </div>
      </div>
    </section>
  );
}
