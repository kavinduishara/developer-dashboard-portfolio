interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
