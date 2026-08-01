import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiBarChart2, FiCpu, FiExternalLink, FiGitBranch, FiTarget } from "react-icons/fi";
import { FadeIn } from "../../components/motion/FadeIn";
import { research } from "../../data/research";

export const metadata: Metadata = {
  title: `${research.title} | Research`,
  description: research.subtitle,
};

const statCards = [
  { label: "Research Area", value: "Distributed Query Processing" },
  { label: "Primary Focus", value: "QoS-aware SQL execution" },
  { label: "Deployment Model", value: "Containerized multi-node cluster" },
];

export default function ResearchPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800/60 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <Link href="/#research" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-400">
              <FiArrowLeft size={14} /> Back to overview
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="font-mono text-sm text-cyan-400">~/research $ describe --thorough</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {research.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{research.subtitle}</p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-6">
                <div className="flex flex-wrap gap-2">
                  {research.technologies.map((item) => (
                    <span key={item} className="rounded-md bg-slate-950 px-2 py-1 font-mono text-xs text-cyan-300">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={research.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  <FiExternalLink size={16} /> View Repository
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="space-y-8">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
                <FiTarget className="text-cyan-400" size={24} /> Research Problem
              </h2>
              <p className="mt-4 leading-7 text-slate-400">{research.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Objective</h2>
              <p className="mt-4 leading-7 text-slate-400">{research.objective}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {statCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-slate-800 bg-slate-900/35 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
                <p className="mt-3 text-base font-semibold text-slate-100">{card.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-slate-800/60 bg-slate-900/20 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
              <FiGitBranch className="text-cyan-400" size={24} /> System Architecture
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {research.architecture.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
              <FiCpu className="text-cyan-400" size={24} /> Methodology
            </h2>
            <div className="mt-8 space-y-5">
              {research.methodology.map((item, index) => (
                <article key={item.title} className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-5 sm:grid-cols-[3rem_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 font-mono text-sm text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-8">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
                <FiBarChart2 className="text-cyan-400" size={24} /> Evaluation Metrics
              </h2>
              <div className="mt-6 space-y-4">
                {research.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
                    <h3 className="font-semibold text-white">{metric.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-slate-800/60 px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-2xl font-semibold text-white">Key Contributions</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400">
              {research.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-2xl font-semibold text-white">Future Work</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400">
              {research.roadmap.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
