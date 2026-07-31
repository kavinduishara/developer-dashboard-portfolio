interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export function TimelineItem({ title, subtitle, dateRange, location, bullets, tech }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-4 border-cyan-500 bg-white dark:bg-slate-950" />
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">{subtitle}</p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <p>{dateRange}</p>
            <p>{location}</p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
