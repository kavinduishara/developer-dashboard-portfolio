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
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">
          {title} <span className="font-normal text-slate-500">@ {subtitle}</span>
        </h3>
        <p className="font-mono text-xs text-slate-500">{dateRange}</p>
      </div>
      <p className="mt-1 font-mono text-xs text-slate-600">{location}</p>
      <ul className="mt-3 space-y-1.5">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-6 text-slate-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-md bg-slate-900/80 px-2 py-1 font-mono text-xs text-cyan-400">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}