import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <div className="mb-6">
        <Link href="/projects" className="link-muted focus-ring inline-block rounded-sm text-sm">
          ← Back to projects
        </Link>
      </div>
      <ProjectDetail project={project} />
    </>
  );
}
