import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "../../../components/motion/FadeIn";
import { projects } from "../../../data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">Case Study</p>
          <h1 className="mt-3 text-4xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.dateRange}</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Problem</h2>
                <p className="mt-2 leading-8 text-slate-600 dark:text-slate-300">{project.problem}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Approach</h2>
                <p className="mt-2 leading-8 text-slate-600 dark:text-slate-300">{project.approach}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">What I built</h2>
                <p className="mt-2 leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h2 className="text-xl font-semibold">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">{item}</span>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold">Links</h2>
                <div className="mt-4 space-y-3">
                  {project.links?.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-cyan-600 transition hover:border-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-400">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/projects" className="mt-10 inline-flex font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400">
            ← Back to all projects
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
