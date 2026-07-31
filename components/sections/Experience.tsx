import { FadeIn } from "../motion/FadeIn";
import { StaggerContainer } from "../motion/StaggerContainer";
import { TimelineItem } from "../ui/TimelineItem";
import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <SectionHeading eyebrow="Experience" title="A growing track record in product-focused engineering" />
        <div className="mt-8 relative">
          <div className="absolute left-1.5 top-0 h-full w-px bg-slate-300 dark:bg-slate-700" />
          <StaggerContainer className="space-y-6">
            {experience.map((entry) => (
              <TimelineItem
                key={entry.company}
                title={entry.role}
                subtitle={entry.company}
                dateRange={entry.dateRange}
                location={entry.location}
                bullets={entry.bullets}
                tech={entry.tech}
              />
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
}
