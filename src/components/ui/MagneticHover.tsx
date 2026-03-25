"use client";

import { type ReactNode, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export interface MagneticHoverProps {
  children: ReactNode;
  strengthPx?: number;
  className?: string;
}

export default function MagneticHover({
  children,
  strengthPx = 14,
  className,
}: MagneticHoverProps) {
  const reducedMotion = useReducedMotion();
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  return (
    <span
      className={className}
      ref={(node) => {
        targetRef.current = node;
      }}
      onPointerMove={(e) => {
        if (reducedMotion || !enabled) return;
        const el = targetRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const x = Math.max(-rect.width / 2, Math.min(rect.width / 2, dx));
        const y = Math.max(-rect.height / 2, Math.min(rect.height / 2, dy));

        const tx = (x / rect.width) * strengthPx;
        const ty = (y / rect.height) * strengthPx;

        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(
            2,
          )}px, 0px)`;
        });
      }}
      onPointerLeave={() => {
        if (reducedMotion || !enabled) return;
        const el = targetRef.current;
        if (!el) return;
        el.style.transform = "translate3d(0px, 0px, 0px)";
        setEnabled(true);
      }}
      onPointerDown={() => setEnabled(false)}
    >
      {children}
    </span>
  );
}

