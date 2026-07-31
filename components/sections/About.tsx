import Image from "next/image";
import { FadeIn } from "../motion/FadeIn";
import { softSkills } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutProps {
  summary: string;
}

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <FadeIn>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Engineering with <span className="text-cyan-400">Precision.</span>
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{summary}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800">
          <Image
            src="/images/profile-workspace.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <SectionHeading eyebrow="about" command="whoami" title="Strong collaboration, clear thinking, steady growth" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((skill) => (
            <div key={skill.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="text-2xl">{skill.icon}</div>
              <h4 className="mt-3 font-semibold text-white">{skill.title}</h4>
              <p className="mt-1 text-sm leading-6 text-slate-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}