export interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2 py-1 text-[11px] text-[color:var(--text-secondary)] transition-colors duration-200">
      {label}
    </span>
  );
}

