import { StaggerContainer } from "../motion/StaggerContainer";
import { TimelineItem } from "../ui/TimelineItem";
import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="experience" command="log --graph" title="A growing track record in product-focused engineering" />
        <div className="relative mt-12">
          <div className="absolute left-1.5 top-0 h-full w-px bg-slate-800" />
          <StaggerContainer className="space-y-10">
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
      </div>
    </section>
  );
}