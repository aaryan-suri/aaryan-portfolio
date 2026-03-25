"use client";

import { useReducedMotion } from "framer-motion";
import { focusAreaLabels } from "@/data/focusAreas";

function Chip({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-2.5 py-1.5 text-[11px] text-[color:var(--text-secondary)]">
      {children}
    </span>
  );
}

export default function FocusAreasMarquee() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap gap-2" aria-label="Focus areas and interests">
        {focusAreaLabels.map((label) => (
          <Chip key={label}>{label}</Chip>
        ))}
      </div>
    );
  }

  const loop = [...focusAreaLabels, ...focusAreaLabels];

  return (
    <div
      className="focus-marquee-clip -mx-1 py-1"
      role="region"
      aria-label="Focus areas and interests (animated strip)"
    >
      <div className="focus-marquee-track">
        {loop.map((label, i) => (
          <Chip key={`${label}-${i}`}>{label}</Chip>
        ))}
      </div>
    </div>
  );
}
