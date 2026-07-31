import { SectionHeading } from "../ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] via-slate-900/40 to-transparent p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="research"
              command="./run --thesis"
              title="QoS Aware Distributed Query Processing System"
              description="A flagship research direction focused on distributed SQL processing, performance budgets, and intelligent execution strategies."
            />
            <p className="mt-6 text-base leading-7 text-slate-400">
              Designing a distributed SQL processing topology with machine learning-based execution
              optimizations to improve performance budgets while securing cluster availability
              benchmarks across multi-instance environments.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Docker", "Machine Learning", "GCP"].map((item) => (
                <span key={item} className="rounded-md bg-slate-900 px-2 py-1 font-mono text-xs text-cyan-400">
                  {item}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/kavinduishara/final_year_research"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              View research repository →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}