import { FadeIn } from "../motion/FadeIn";
import { StaggerContainer } from "../motion/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillBadge } from "../ui/SkillBadge";
import { skillGroups } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <SectionHeading eyebrow="Skills" title="Tools, languages, and workflows I use every day" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <StaggerContainer className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item}>
                    <SkillBadge label={item} />
                  </div>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
