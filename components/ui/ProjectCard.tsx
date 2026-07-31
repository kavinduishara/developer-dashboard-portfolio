import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  dateRange: string;
  shortDescription: string;
  stack: string[];
  githubUrl: string;
  slug: string;
}

export function ProjectCard({ title, dateRange, shortDescription, stack, githubUrl, slug }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-500/40 hover:bg-slate-900/70">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Link href={`/projects/${slug}`} aria-label={`View ${title} details`} className="text-slate-500 transition group-hover:text-cyan-400">
          <FiArrowUpRight size={18} />
        </Link>
      </div>
      <p className="mt-1 font-mono text-xs text-slate-500">{dateRange}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-md bg-slate-950 px-2 py-1 font-mono text-xs text-cyan-400">
            {item}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
      >
        <FiGithub size={16} /> View source
      </a>
    </div>
  );
}