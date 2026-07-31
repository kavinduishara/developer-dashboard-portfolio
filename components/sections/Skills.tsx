import { StaggerContainer } from "../motion/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillBadge } from "../ui/SkillBadge";
import { skillGroups } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="skills" command="--list" title="Tools, languages, and workflows I use every day" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm text-slate-500"># {group.title}</h3>
              <StaggerContainer className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item}>
                    <SkillBadge label={item} />
                  </div>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}