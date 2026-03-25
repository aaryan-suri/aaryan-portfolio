import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface FeaturedProjectsProps {
  count?: number;
}

export default function FeaturedProjects({ count = 3 }: FeaturedProjectsProps) {
  const featured = projects.slice(0, count);

  return (
    <section aria-label="Featured projects" className="mt-12">
      <div className="section-rule mb-8" aria-hidden />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Featured work</h2>
          <p className="mt-1 max-w-[560px] text-sm text-[color:var(--text-secondary)]">
            Outcome-first summaries; each card opens a case study with stack, scope, and links to live products or repos.
          </p>
        </div>
        <Link
          href="/projects"
          className="focus-ring rounded-sm text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
        >
          See all →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured.map((p, idx) => (
          <AnimatedSection key={p.slug} delayMs={idx * 70}>
            <ProjectCard project={p} featured />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

