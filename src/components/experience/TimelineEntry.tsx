import { type ExperienceEntry } from "@/data/experience";

export interface TimelineEntryProps {
  entry: ExperienceEntry;
}

export default function TimelineEntry({ entry }: TimelineEntryProps) {
  const bullets = entry.bullets ?? [];

  return (
    <article className="surface-quiet relative rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {entry.title} · {entry.org}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{entry.dateRange}</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
            {entry.dateRange}
          </span>
        </div>
      </div>

      {bullets.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[color:var(--text-secondary)]">
          {bullets.map((b) => (
            <li key={b} className="text-[color:var(--text-primary)]">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

