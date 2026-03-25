import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export interface FooterProps {}

export default function Footer(_: FooterProps) {
  return (
    <footer className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-10">
      <div className="flex flex-col gap-3 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[color:var(--text-secondary)]">
          © {new Date().getFullYear()} Aaryan Suri
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link
            href="/"
            className="focus-ring rounded-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="focus-ring rounded-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="focus-ring rounded-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            Experience
          </Link>
          <Link
            href="/about"
            className="focus-ring rounded-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            About
          </Link>
          {profile.resumeHref ? (
            <a
              href={profile.resumeHref}
              download
              className="focus-ring rounded-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {profile.githubUrl ? (
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)]"
          >
            <ExternalLink size={18} />
          </a>
        ) : null}

        {profile.linkedInUrl ? (
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)]"
          >
            <span className="text-[12px] font-semibold leading-none">in</span>
          </a>
        ) : null}

        {profile.email ? (
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)]"
          >
            <Mail size={18} />
          </a>
        ) : null}
      </div>
    </footer>
  );
}

