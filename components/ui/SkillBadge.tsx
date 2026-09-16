import type { LucideIcon } from "lucide-react";

type SkillBadgeProps = {
  label: string;
  icon?: LucideIcon;
};

export function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 font-mono text-sm text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-300">
      {Icon && (
        <Icon
          size={15}
          strokeWidth={1.8}
          className="text-cyan-400"
          aria-hidden="true"
        />
      )}

      <span>{label}</span>
    </span>
  );
}