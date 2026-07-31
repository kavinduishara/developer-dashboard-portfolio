import { FadeIn } from "../motion/FadeIn";
import { StaggerContainer } from "../motion/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <FadeIn className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <SectionHeading eyebrow="Projects" title="Selected builds that blend product thinking with engineering craft" />
        <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                title={project.title}
                dateRange={project.dateRange}
                shortDescription={project.shortDescription}
                stack={project.stack}
                githubUrl={project.githubUrl}
                slug={project.slug}
              />
            </div>
          ))}
        </StaggerContainer>
      </FadeIn>
    </section>
  );
}
