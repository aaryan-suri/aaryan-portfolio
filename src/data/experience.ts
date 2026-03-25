export interface ExperienceEntry {
  id: string;
  title: string;
  org: string;
  dateRange: string;
  bullets?: string[];
  /** Most recent / primary role: stronger border and glow on the timeline card. */
  featured?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id: "capital-one-analyst-2026",
    org: "Capital One",
    title: "Incoming Analyst Intern",
    dateRange: "Summer 2026",
    bullets: [],
    featured: true,
  },
  {
    id: "diamondback-sdl",
    org: "The Diamondback",
    title: "Software Development Lead",
    dateRange: "Ongoing",
    bullets: [],
  },
  {
    id: "photon-swe-2025",
    org: "Photon",
    title: "Software Engineering Intern",
    dateRange: "Summer 2025",
    bullets: [],
  },
  {
    id: "snap-finance-swe-2025",
    org: "Snap Finance",
    title: "Software Engineering Intern",
    dateRange: "Summer 2025",
    bullets: [],
  },
];

