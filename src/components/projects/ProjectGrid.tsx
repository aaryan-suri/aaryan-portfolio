import { type Project } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
      {projects.map((p, idx) => {
        const wrapperClass =
          idx % 5 === 0
            ? "lg:col-span-2"
            : idx % 5 === 1
              ? "lg:col-span-1"
              : idx % 5 === 2
                ? "lg:col-span-2"
                : idx % 5 === 3
                  ? "lg:col-span-1"
                  : "lg:col-span-1";

        return (
          <div key={p.slug} className={wrapperClass}>
            <AnimatedSection delayMs={idx * 70}>
              <ProjectCard project={p} featured={false} />
            </AnimatedSection>
          </div>
        );
      })}
    </div>
  );
}

