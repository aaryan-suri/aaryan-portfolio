import Link from "next/link";
import { profile } from "@/data/profile";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CurrentlyBlock from "@/components/home/CurrentlyBlock";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Download, ExternalLink, Mail, ArrowRight } from "lucide-react";
import MagneticHover from "@/components/ui/MagneticHover";

export interface HomePageProps {}

export default function HomePage(_: HomePageProps) {
  return (
    <>
      <AnimatedSection delayMs={0}>
        <section className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(to_right,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(60%_60%_at_20%_10%,black,transparent)]" />

          <div className="relative max-w-[760px]">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-[color:var(--text-secondary)] sm:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-6 space-y-2 text-sm leading-relaxed sm:text-[15px]">
              {profile.intro.map((line) => (
                <p key={line} className="text-[color:var(--text-primary)]">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3">
              <div className="mono text-xs text-[color:var(--text-secondary)]">
                focus_areas:
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {["Systems", "NLP pipelines", "Quant + analytics"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {profile.resumeHref ? (
                <MagneticHover className="inline-flex" strengthPx={12}>
                  <a
                    href={profile.resumeHref}
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-2 text-sm text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                  >
                    <Download size={16} />
                    Resume (PDF)
                  </a>
                </MagneticHover>
              ) : null}

              <MagneticHover className="inline-flex" strengthPx={12}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-4 py-2 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                >
                  View projects <ArrowRight size={16} />
                </Link>
              </MagneticHover>

              {profile.githubUrl ? (
                <MagneticHover className="inline-flex" strengthPx={12}>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 py-2 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                  >
                    <ExternalLink size={16} />
                    GitHub
                  </a>
                </MagneticHover>
              ) : null}

              {profile.linkedInUrl ? (
                <MagneticHover className="inline-flex" strengthPx={12}>
                  <a
                    href={profile.linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 py-2 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                  >
                    <span className="text-[12px] font-semibold leading-none">in</span>
                    LinkedIn
                  </a>
                </MagneticHover>
              ) : null}

              {profile.email ? (
                <MagneticHover className="inline-flex" strengthPx={12}>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-3 py-2 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </MagneticHover>
              ) : null}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delayMs={70}>
        <FeaturedProjects count={3} />
      </AnimatedSection>
      <AnimatedSection delayMs={140}>
        <CurrentlyBlock profile={profile} />
      </AnimatedSection>
    </>
  );
}

