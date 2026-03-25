import Link from "next/link";
import { type Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  const badge = project.status ? project.status : project.externalUrl ? "Live" : undefined;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group block h-full rounded-xl focus-visible:outline-none"
    >
      <article
        className={[
          "surface-card relative h-full overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)]",
          "transition-transform duration-300",
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
                {project.name}
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
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)] transition-colors group-hover:border-[color:var(--accent)]"
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
            <span className="text-[color:var(--text-secondary)] transition-colors group-hover:text-[color:var(--text-primary)]">
              Open project →
            </span>
            <span className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 py-2 text-[color:var(--text-secondary)] transition-colors group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--text-primary)]">
              View
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
