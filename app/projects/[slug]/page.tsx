import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import { FadeIn } from "../../../components/motion/FadeIn";
import { projects } from "../../../data/projects";
import { BsLightbulb } from "react-icons/bs";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

const featureIcons = ["⚡", "👥", "🚀", "🛡️", "🗄️", "🔗"];

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-cyan-400">
            <FiArrowLeft size={14} /> Back to projects
          </Link>

          {/* Header Title & Actions */}
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
                {project.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-800 px-3 py-1 font-mono text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              ) : null}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FiGithub size={16} /> View Code
              </a>
            </div>
          </div>

          {/* Hero Image Preview */}
          {project.heroImage ? (
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
                style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.15), transparent)" }}
              />
              <Image src={project.heroImage} alt={`${project.title} preview`} fill className="object-cover" />
            </div>
          ) : null}

          {/* Two-Column Grid Content */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            
            {/* Left Column: Challenge & Features */}
            <div className="space-y-8">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/20 p-8">
                <h2 className="flex items-center gap-3 text-xl font-bold text-white">
                  <BsLightbulb className="text-cyan-400" size={22} /> The Challenge &amp; Solution
                </h2>
                <div className="mt-5 space-y-4 leading-7 text-slate-400">
                  <p>{project.problem}</p>
                  <p>{project.approach}</p>
                </div>
              </div>

              {project.features && project.features.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className={`rounded-xl border border-slate-800 bg-slate-900/40 p-6 ${
                        project.features!.length % 2 === 1 && index === project.features!.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span className="text-xl text-emerald-400">{featureIcons[index % featureIcons.length]}</span>
                      <h3 className="mt-3 text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                  <h2 className="text-lg font-semibold text-white">What I built</h2>
                  <p className="mt-2 leading-7 text-slate-400">{project.description}</p>
                </div>
              )}
            </div>

            {/* Right Column: Stack Info & Terminal Code Snippet */}
            <div className="space-y-6">
              {project.specs && project.specs.length > 0 ? (
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-cyan-950/10">
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Stack Architecture</h2>
                  <ul className="mt-5 space-y-3.5">
                    {project.specs.map((spec) => (
                      <li key={spec.label} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="font-semibold text-slate-400">{spec.label}:</span>
                        <span className="font-mono text-slate-200">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.codeSnippet ? (
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 shadow-2xl">
                  {/* Mac Shell Window Header */}
                  <div className="flex items-center gap-1.5 border-b border-slate-800/80 bg-slate-900/40 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500">deploy.sh</span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-slate-300 selection:bg-cyan-500/20">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              ) : null}
            </div>
          </div>

          {/* Technical Deep Dive Section */}
          {project.deepDive && project.deepDive.length > 0 ? (
            <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/20 p-8">
              <h2 className="flex items-center gap-3 text-xl font-bold text-white">
                <FiLayers className="text-cyan-400" size={22} /> Technical Deep Dive
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {project.deepDive.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <p className="text-sm leading-6 text-slate-400">{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Pagination Navigation */}
          {(prevProject || nextProject) && (
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="group">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">Previous</p>
                  <p className="mt-1 text-sm font-medium text-slate-300 transition group-hover:text-cyan-400">{prevProject.title}</p>
                </Link>
              ) : (
                <span />
              )}
              {nextProject ? (
                <Link href={`/projects/${nextProject.slug}`} className="group text-right">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">Next</p>
                  <p className="mt-1 text-sm font-medium text-slate-300 transition group-hover:text-cyan-400">{nextProject.title}</p>
                </Link>
              ) : (
                <span />
              )}
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}