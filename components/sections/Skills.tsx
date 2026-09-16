"use client"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeading } from "../ui/SectionHeading";
import { SkillBadge } from "../ui/SkillBadge";
import { skillGroups } from "../../data/skills";

const ROTATION_INTERVAL = 5000;

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeGroup = skillGroups[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % skillGroups.length;
      });
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const selectGroup = (index: number) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? skillGroups.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % skillGroups.length,
    );
  };

  const GroupIcon = activeGroup.icon;

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="skills"
          command="--list"
          title="Tools, languages, and workflows I use every day"
        />

        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Skill categories"
            >
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={group.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`skill-panel-${index}`}
                    id={`skill-tab-${index}`}
                    onClick={() => selectGroup(index)}
                    className={[
                      "inline-flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-sm transition-all",
                      isActive
                        ? "border-cyan-400/70 bg-cyan-400/10 text-cyan-300"
                        : "border-slate-800 bg-slate-900/50 text-slate-500 hover:border-slate-600 hover:text-slate-300",
                    ].join(" ")}
                  >
                    <Icon size={15} aria-hidden="true" />
                    <span>{group.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous skill group"
                className="rounded-lg border border-slate-800 p-2 text-slate-400 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <ChevronLeft size={17} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Show next skill group"
                className="rounded-lg border border-slate-800 p-2 text-slate-400 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <ChevronRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="mt-6 min-h-40 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6"
            role="tabpanel"
            id={`skill-panel-${activeIndex}`}
            aria-labelledby={`skill-tab-${activeIndex}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <GroupIcon
                    size={22}
                    className="text-cyan-400"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
                      category
                    </p>
                    <h3 className="font-mono text-lg text-slate-200">
                      {activeGroup.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeGroup.items.map((item) => (
                    <SkillBadge
                      key={item.name}
                      label={item.name}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {skillGroups.map((group, index) => (
              <button
                key={group.title}
                type="button"
                aria-label={`Show ${group.title}`}
                aria-current={activeIndex === index}
                onClick={() => selectGroup(index)}
                className={[
                  "h-1.5 rounded-full transition-all",
                  activeIndex === index
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-slate-700 hover:bg-slate-500",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}