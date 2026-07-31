interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-sm text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-300">
      {label}
    </span>
  );
}