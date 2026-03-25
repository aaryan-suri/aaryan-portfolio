"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

export interface CopyEmailButtonProps {
  email: string;
  /** Full-width button with label (hero). */
  variant?: "button" | "icon";
  className?: string;
  label?: string;
}

export default function CopyEmailButton({
  email,
  variant = "button",
  className = "",
  label = "Email",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 2200);
      } catch {
        setCopied(false);
      }
    }
  }, [email]);

  if (variant === "icon") {
    return (
      <>
        <button
          type="button"
          onClick={() => void copy()}
          aria-label={copied ? "Email copied" : `Copy email ${email} to clipboard`}
          className={`focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-secondary)] text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)] ${className}`}
        >
          {copied ? <Check size={18} aria-hidden /> : <Mail size={18} aria-hidden />}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? `Copied ${email} to clipboard` : ""}
        </span>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void copy()}
        className={`btn-outline focus-ring inline-flex items-center gap-2 px-3 py-2 ${className}`}
      >
        {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        {copied ? "Copied" : label}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? `Copied ${email} to clipboard` : ""}
      </span>
    </>
  );
}
