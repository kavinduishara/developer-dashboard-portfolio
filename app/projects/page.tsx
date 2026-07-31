import Link from "next/link";
import { FadeIn } from "../../components/motion/FadeIn";
import { projects } from "../../data/projects";
import { SectionHeading } from "../../components/ui/SectionHeading";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Projects" title="A curated archive of full-stack builds" description="Each project reflects a blend of product thinking, engineering execution, and modern delivery practices." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.dateRange}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200">{item}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400">
                  Open case study →
                </Link>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
