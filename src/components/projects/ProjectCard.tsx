import Link from "next/link";
import { type Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  const badge = project.status ? project.status : project.externalUrl ? "Live" : undefined;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)]",
        "transition-transform duration-300 hover:-translate-y-0.5",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,var(--accent-subtle),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              className={[
                featured ? "text-lg font-semibold" : "text-base font-semibold",
                "text-[color:var(--text-primary)]",
              ].join(" ")}
            >
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            </h2>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{project.role}</p>
          </div>

          {badge ? (
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2 py-1 text-[10px] text-[color:var(--text-secondary)]">
              {badge}
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-primary)]">
          {project.whatItDoes}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)]">
              +{project.stack.length - 4}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-sm">
          <div className="text-[color:var(--text-secondary)]">Details & highlights →</div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 py-2 text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

