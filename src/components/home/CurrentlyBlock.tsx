import Link from "next/link";
import { type Profile } from "@/data/profile";

export interface CurrentlyBlockProps {
  profile: Profile;
}

export default function CurrentlyBlock({ profile }: CurrentlyBlockProps) {
  return (
    <section className="surface-quiet mt-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight">Currently</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {profile.currently.map((item) => (
          <li key={item} className="text-sm text-[color:var(--text-secondary)]">
            <span className="text-[color:var(--text-primary)]">{item}</span>
          </li>
        ))}
      </ul>
      <nav
        aria-label="Explore more"
        className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[color:var(--border)] pt-4 text-sm"
      >
        <Link href="/experience" className="link-muted focus-ring rounded-sm">
          Experience timeline
        </Link>
        <Link href="/about" className="link-muted focus-ring rounded-sm">
          About
        </Link>
        <Link href="/projects" className="link-muted focus-ring rounded-sm">
          All projects
        </Link>
      </nav>
    </section>
  );
}

