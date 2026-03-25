import type { Metadata } from "next";
import { profile } from "@/data/profile";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface AboutPageProps {}

export const metadata: Metadata = {
  title: "About — Aaryan Suri",
  description: "Systems + applied ML. A portfolio built to ship real engineering work.",
};

export default function AboutPage(_: AboutPageProps) {
  return (
    <>
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
        <p className="max-w-[860px] text-sm text-[color:var(--text-secondary)]">
          {profile.intro[0]} I’m interested in systems programming, NLP, and quantitative finance.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatedSection delayMs={0}>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Coursework (selected)
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-secondary)]">
              <li className="text-[color:var(--text-primary)]">CMSC216</li>
              <li className="text-[color:var(--text-primary)]">ENEE244</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delayMs={120}>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Outside of code
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-secondary)]">
              <li className="text-[color:var(--text-primary)]">
                Fantasy basketball + sports analytics
              </li>
              <li className="text-[color:var(--text-primary)]">
                Food around College Park
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

