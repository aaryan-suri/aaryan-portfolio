import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CurrentlyBlock from "@/components/home/CurrentlyBlock";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Download, ExternalLink, ArrowRight } from "lucide-react";
import MagneticHover from "@/components/ui/MagneticHover";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export interface HomePageProps {}

export default function HomePage(_: HomePageProps) {
  return (
    <>
      <AnimatedSection delayMs={0}>
        <section className="surface-quiet relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-90 [background-image:linear-gradient(to_right,rgba(59,130,246,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(65%_65%_at_30%_20%,black,transparent)]" />

          <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
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
                    className="btn-primary focus-ring"
                  >
                    <Download size={16} />
                    Resume (PDF)
                  </a>
                </MagneticHover>
              ) : null}

              <MagneticHover className="inline-flex" strengthPx={12}>
                <Link href="/projects" className="btn-outline focus-ring">
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
                    className="btn-outline focus-ring px-3 py-2"
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
                    className="btn-outline focus-ring px-3 py-2"
                  >
                    <span className="text-[12px] font-semibold leading-none">in</span>
                    LinkedIn
                  </a>
                </MagneticHover>
              ) : null}

              {profile.email ? (
                <MagneticHover className="inline-flex" strengthPx={12}>
                  <span className="inline-flex">
                    <CopyEmailButton email={profile.email} variant="button" label="Copy email" />
                  </span>
                </MagneticHover>
              ) : null}
            </div>
            </div>

            <aside className="mx-auto w-full max-w-[320px] lg:mx-0">
              <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-2 shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--accent)_70%,transparent)]">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_45%,color-mix(in_oklab,var(--accent-2)_24%,transparent))]" />
                <Image
                  src="/headshot.png"
                  alt="Aaryan Suri headshot"
                  width={640}
                  height={800}
                  priority
                  className="relative h-auto w-full rounded-xl object-cover"
                />
              </div>
              <p className="mono mt-3 text-center text-[11px] tracking-wide text-[color:var(--text-secondary)] lg:text-left">
                QUEST Honors · UMD 2028
              </p>
            </aside>
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

