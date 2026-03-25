import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(145deg, #0a0a0b 0%, #111113 45%, #0f1729 100%)",
          color: "#f0f0f0",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8a8a8a",
            }}
          >
            Computer Engineering · UMD · QUEST
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Aaryan Suri
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", maxWidth: 820, lineHeight: 1.35 }}>
            I build systems that ship — infrastructure, data pipelines, and products used in production.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <span>Live products · Infra · Applied ML</span>
          <span style={{ color: "#3b82f6", fontWeight: 600 }}>Portfolio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
