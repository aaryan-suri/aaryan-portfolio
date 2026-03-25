import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

export interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project does not exist in this portfolio.",
    };
  }

  return {
    title: `${project.name} — Aaryan Suri`,
    description: project.whatItDoes,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <div className="mb-6">
        <a
          href="/projects"
          className="text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
        >
          ← Back to projects
        </a>
      </div>
      <ProjectDetail project={project} />
    </>
  );
}

