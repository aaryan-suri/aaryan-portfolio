import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";

export interface ProjectsPageProps {}

export default function ProjectsPage(_: ProjectsPageProps) {
  return (
    <>
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
        <p className="max-w-[860px] text-sm text-[color:var(--text-secondary)]">
          Infrastructure, product engineering, and applied ML systems—organized by what I built and the decisions behind it.
        </p>
      </header>

      <div className="section-rule my-8" aria-hidden />

      <ProjectGrid projects={projects} />
    </>
  );
}

