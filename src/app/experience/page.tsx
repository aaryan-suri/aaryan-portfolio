import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import TimelineEntry from "@/components/experience/TimelineEntry";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface ExperiencePageProps {}

export const metadata: Metadata = {
  title: "Experience · Aaryan Suri",
  description: "Roles and projects across systems, infrastructure, and applied ML.",
};

export default function ExperiencePage(_: ExperiencePageProps) {
  return (
    <>
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h1>
        <p className="max-w-[860px] text-sm text-[color:var(--text-secondary)]">
          A short timeline focused on roles where I shipped infrastructure and production-ready features.
        </p>
      </header>

      <div className="section-rule my-8" aria-hidden />

      <div className="mt-2 space-y-4">
        {experience.map((e, idx) => (
          <AnimatedSection key={e.id} delayMs={idx * 90}>
            <TimelineEntry entry={e} />
          </AnimatedSection>
        ))}
      </div>

      <nav
        aria-label="Related pages"
        className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-[color:var(--border)] pt-8 text-sm"
      >
        <Link href="/projects" className="link-muted focus-ring rounded-sm">
          View projects
        </Link>
        <Link href="/about" className="link-muted focus-ring rounded-sm">
          About
        </Link>
        <Link href="/" className="link-muted focus-ring rounded-sm">
          Home
        </Link>
      </nav>
    </>
  );
}

