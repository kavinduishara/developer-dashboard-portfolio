import { FadeIn } from "../motion/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24">
      <FadeIn className="overflow-hidden rounded-[1.75rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white to-fuchsia-500/10 p-8 shadow-sm backdrop-blur dark:border-cyan-500/20 dark:from-cyan-500/10 dark:via-slate-900 dark:to-fuchsia-500/10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Research" title="QoS Aware Distributed Query Processing System" description="A flagship research direction focused on distributed SQL processing, performance budgets, and intelligent execution strategies." />
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              I’m designing a distributed SQL processing topology with machine learning-based execution optimizations to improve performance budgets while securing cluster availability benchmarks across multi-instance environments.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'Docker', 'Machine Learning', 'GCP'].map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <a href="https://github.com/kavinduishara/final_year_research" target="_blank" rel="noreferrer" className="mt-6 inline-flex font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400">
              View research repository →
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
