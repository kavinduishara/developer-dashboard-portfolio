interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-700 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 dark:text-cyan-200">
      {label}
    </span>
  );
}
