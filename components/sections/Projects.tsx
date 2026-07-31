import { StaggerContainer } from "../motion/StaggerContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="projects" command="ls ./builds" title="Selected builds that blend product thinking with engineering craft" />
        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </section>
  );
}