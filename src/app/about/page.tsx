import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { coursework } from "@/data/coursework";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface AboutPageProps {}

export const metadata: Metadata = {
  title: "About · Aaryan Suri",
  description: "Systems + applied ML. A portfolio built to ship real engineering work.",
};

export default function AboutPage(_: AboutPageProps) {
  return (
    <>
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
        <div className="max-w-[860px] space-y-3 text-sm text-[color:var(--text-secondary)]">
          {profile.intro.map((line) => (
            <p key={line} className="text-[color:var(--text-primary)]">
              {line}
            </p>
          ))}
          <p>
            Outside of coursework and projects, I like systems programming, quantitative finance, and sports
            analytics. For downtime: traveling when I can, powerlifting, and listening to EDM (especially live
            sets).
          </p>
        </div>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AnimatedSection delayMs={0}>
          <div className="surface-quiet h-full rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">Coursework (selected)</h2>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-secondary)]">
              {coursework.map((c) => (
                <li key={c.code} className="border-b border-[color:var(--border)] pb-3 last:border-0 last:pb-0">
                  <span className="font-medium text-[color:var(--text-primary)]">{c.code}</span>
                  <span className="text-[color:var(--text-secondary)]"> · </span>
                  <span className="text-[color:var(--text-primary)]">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delayMs={120}>
          <div className="surface-quiet h-full rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">Outside of code</h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-secondary)]">
              <li className="text-[color:var(--text-primary)]">Traveling (when schedules line up)</li>
              <li className="text-[color:var(--text-primary)]">Powerlifting</li>
              <li className="text-[color:var(--text-primary)]">EDM and live shows</li>
              <li className="text-[color:var(--text-primary)]">Fantasy basketball and sports analytics</li>
              <li className="text-[color:var(--text-primary)]">Food around College Park</li>
            </ul>
          </div>
        </AnimatedSection>
      </section>

      <nav
        aria-label="Site sections"
        className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-[color:var(--border)] pt-8 text-sm"
      >
        <Link href="/projects" className="link-muted focus-ring rounded-sm">
          Projects
        </Link>
        <Link href="/experience" className="link-muted focus-ring rounded-sm">
          Experience
        </Link>
        <Link href="/" className="link-muted focus-ring rounded-sm">
          Home
        </Link>
      </nav>
    </>
  );
}
