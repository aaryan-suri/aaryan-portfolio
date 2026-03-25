import { proofPoints } from "@/data/proof";

export interface ProofStripProps {
  className?: string;
}

export default function ProofStrip({ className = "" }: ProofStripProps) {
  return (
    <ul
      className={[
        "flex flex-col divide-y divide-[color:var(--border)] rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/85 sm:flex-row sm:divide-x sm:divide-y-0",
        className,
      ].join(" ")}
    >
      {proofPoints.map((p) => (
        <li key={p.label} className="min-w-0 flex-1 px-4 py-4 sm:px-5 sm:py-5">
          <p className="mono text-[10px] font-medium uppercase tracking-wider text-[color:var(--text-secondary)]">
            {p.label}
          </p>
          {p.href ? (
            <a
              href={p.href}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noreferrer" : undefined}
              className="link-muted mt-2 block text-sm font-semibold text-[color:var(--text-primary)]"
            >
              {p.value}
            </a>
          ) : (
            <p className="mt-2 text-sm font-semibold leading-snug text-[color:var(--text-primary)]">
              {p.value}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
