import { FadeIn } from "../motion/FadeIn";
import { softSkills } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutProps {
  summary: string;
}

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="About" title="Building thoughtful products across the stack" description="I create reliable, polished solutions that blend product thinking with engineering discipline." />
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">{summary}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <SectionHeading eyebrow="Soft skills" title="Strong collaboration, clear thinking, steady growth" />
          <div className="mt-6 grid gap-4">
            {softSkills.map((skill) => (
              <div key={skill.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{skill.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
