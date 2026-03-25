import { type ExperienceEntry } from "@/data/experience";

export interface TimelineEntryProps {
  entry: ExperienceEntry;
}

export default function TimelineEntry({ entry }: TimelineEntryProps) {
  const bullets = entry.bullets ?? [];
  const featured = Boolean(entry.featured);

  const articleClass = [
    "relative rounded-xl border bg-[color:var(--bg-secondary)] p-5 sm:p-6 transition-[box-shadow,border-color] duration-300",
    featured
      ? "border-[color:color-mix(in_oklab,var(--accent)_42%,var(--border))] shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_28%,transparent),0_12px_40px_-20px_color-mix(in_oklab,var(--accent)_35%,transparent)]"
      : "surface-quiet border-[color:var(--border)]",
  ].join(" ");

  return (
    <article
      className={articleClass}
      aria-label={featured ? `${entry.title} at ${entry.org} (highlighted)` : undefined}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {entry.title} · {entry.org}
          </h3>
          {featured ? (
            <p className="mono mt-1 text-[10px] font-medium uppercase tracking-wider text-[color:var(--accent)]">
              Upcoming
            </p>
          ) : null}
          <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{entry.dateRange}</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <span
            className={[
              "rounded-full border px-3 py-1 text-xs",
              featured
                ? "border-[color:color-mix(in_oklab,var(--accent)_40%,var(--border))] bg-[color:color-mix(in_oklab,var(--accent)_12%,var(--bg-elevated))] text-[color:var(--text-primary)]"
                : "border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)]",
            ].join(" ")}
          >
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

