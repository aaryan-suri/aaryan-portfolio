import { type Profile } from "@/data/profile";

export interface CurrentlyBlockProps {
  profile: Profile;
}

export default function CurrentlyBlock({ profile }: CurrentlyBlockProps) {
  return (
    <section className="mt-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight">Currently</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {profile.currently.map((item) => (
          <li key={item} className="text-sm text-[color:var(--text-secondary)]">
            <span className="text-[color:var(--text-primary)]">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

