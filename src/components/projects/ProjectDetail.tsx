import Link from "next/link";
import { type Project } from "@/data/projects";
import TechBadge from "@/components/projects/TechBadge";

export interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="mt-2">
      {project.status ? (
        <div className="mb-4">
          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
            {project.status}
          </span>
        </div>
      ) : null}

      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[820px]">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 text-sm text-[color:var(--text-secondary)]">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary focus-ring px-4 py-2"
            >
              {project.externalLabel ?? "Live →"}
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline focus-ring px-4 py-2"
            >
              {project.githubLabel ?? "GitHub →"}
            </a>
          ) : null}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight">Summary</h2>
        <p className="mt-3 max-w-[820px] text-sm leading-relaxed text-[color:var(--text-primary)]">
          {project.whatItDoes}
        </p>
      </section>

      {project.caseStudyParagraphs?.length ? (
        <section className="mt-10" aria-labelledby="case-study-heading">
          <h2 id="case-study-heading" className="text-lg font-semibold tracking-tight">
            Notes
          </h2>
          <div className="mt-4 max-w-[820px] space-y-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            {project.caseStudyParagraphs.map((para, idx) => (
              <p key={`${project.slug}-cs-${idx}`} className="text-[color:var(--text-primary)]">
                {para}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {project.externalUrl ? (
        <aside
          className="surface-quiet mt-10 max-w-[820px] rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6"
          aria-label="Live product link"
        >
          <p className="text-sm font-medium text-[color:var(--text-primary)]">See it live</p>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
            Opens in a new tab:{" "}
            <span className="mono text-[color:var(--text-primary)]">{project.externalUrl}</span>
          </p>
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary focus-ring mt-4 inline-flex px-4 py-2"
          >
            {project.externalLabel ?? "Open site →"}
          </a>
        </aside>
      ) : null}

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">What I worked on</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--text-secondary)]">
          {project.highlights.map((h) => (
            <li key={h} className="text-[color:var(--text-primary)]">
              {h}
            </li>
          ))}
        </ul>
      </section>

      {project.impact?.length ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight">Impact</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.impact.map((i) => (
              <TechBadge key={i} label={i} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </section>

      <nav
        aria-label="Project navigation"
        className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-[color:var(--border)] pt-8"
      >
        <Link href="/projects" className="link-muted focus-ring rounded-sm">
          ← All projects
        </Link>
        <Link href="/" className="link-muted focus-ring rounded-sm">
          Home
        </Link>
        <Link href="/experience" className="link-muted focus-ring rounded-sm">
          Experience
        </Link>
      </nav>
    </article>
  );
}

