import { FadeIn } from "../motion/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { education } from "../../data/education";

export function Education() {
  return (
    <section>
      <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <SectionHeading eyebrow="Education" title="Formal foundation in engineering and systems thinking" />
        {education.map((entry) => (
          <div key={entry.school} className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{entry.school}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">{entry.degree}</p>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>{entry.period}</p>
                <p>{entry.location}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Relevant Coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.coursework.map((course) => (
                  <span key={course} className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
