import type { Metadata } from "next";
import { experience } from "@/data/experience";
import TimelineEntry from "@/components/experience/TimelineEntry";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface ExperiencePageProps {}

export const metadata: Metadata = {
  title: "Experience — Aaryan Suri",
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

      <div className="mt-8 space-y-4">
        {experience.map((e, idx) => (
          <AnimatedSection key={e.id} delayMs={idx * 90}>
            <TimelineEntry entry={e} />
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}

