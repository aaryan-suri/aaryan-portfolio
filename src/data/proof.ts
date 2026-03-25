/** Factual credibility signals for the home page (no invented metrics). */
export interface ProofPoint {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export const proofPoints: ProofPoint[] = [
  {
    label: "Live product",
    value: "Off-campus housing for UMD →",
    href: "https://housing.dbknews.com",
    external: true,
  },
  {
    label: "Infrastructure",
    value: "~14% AWS cost reduction @ The Diamondback",
  },
  {
    label: "Next",
    value: "Capital One · Analyst Engineering Intern · Summer 2026",
  },
];
