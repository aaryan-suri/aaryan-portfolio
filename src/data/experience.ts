export interface ExperienceEntry {
  id: string;
  title: string;
  org: string;
  dateRange: string;
  bullets?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "capital-one-aeip-2026",
    org: "Capital One",
    title: "Analyst Engineering Intern (AEIP)",
    dateRange: "Summer 2026",
    bullets: [],
  },
  {
    id: "photon-it-consulting-2025",
    org: "Photon",
    title: "Intern (Digital Transformation / IT Consulting)",
    dateRange: "Summer 2025",
    bullets: [],
  },
  {
    id: "diamondback-infra",
    org: "The Diamondback",
    title: "Infrastructure & Developer Contributor",
    dateRange: "Ongoing",
    bullets: [],
  },
  {
    id: "quest-umd",
    org: "QUEST Honors Program",
    title: "University of Maryland",
    dateRange: "Ongoing",
    bullets: [],
  },
];

