import { SectionHeading } from "../ui/SectionHeading";
import { education } from "../../data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="education" command="cat transcript.log" title="Formal foundation in engineering and systems thinking" />
        <div className="mt-10 space-y-6">
          {education.map((entry) => (
            <div key={entry.school} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{entry.school}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-400">{entry.degree}</p>
                </div>
                <div className="font-mono text-xs text-slate-500">
                  <p>{entry.period}</p>
                  <p>{entry.location}</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">Relevant coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.coursework.map((course) => (
                    <span key={course} className="rounded-md bg-slate-950 px-2.5 py-1 text-sm text-slate-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}