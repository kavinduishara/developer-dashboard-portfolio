interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** The shell command shown after the prompt, e.g. "whoami", "--list", "ls ./2024". Defaults to "run" if omitted. */
  command?: string;
}

export function SectionHeading({ eyebrow, title, description, command = "run" }: SectionHeadingProps) {
  const path = eyebrow.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-cyan-400">
        <span className="text-slate-600">~/{path}</span>
        <span className="text-slate-600"> $ </span>
        <span className="text-slate-300">{command}</span>
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}