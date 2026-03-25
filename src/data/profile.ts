export interface Profile {
  name: string;
  tagline: string;
  intro: string[];
  currently: string[];
  resumeHref?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  email?: string;
}

export const profile: Profile = {
  name: "Aaryan Suri",
  tagline: "Infrastructure and full-stack products that ship to real users—not portfolio demos.",
  intro: [
    "Computer Engineering @ UMD (QUEST Honors). Incoming Analyst Engineering Intern @ Capital One (Summer 2026).",
    "Shipped work includes a live housing product (data + AWS + React), ~14% AWS cost reduction at The Diamondback, and PostPilot—calendar-aware social tooling for student orgs. Applied ML: multi-stage NLP pipeline (AIE).",
  ],
  currently: [
    "Capital One — Analyst Engineering Intern (Summer 2026)",
    "Building Argument Intelligence Engine (NLP)",
    "DSA + systems fundamentals",
  ],
  resumeHref: "/resume.pdf",
  githubUrl: "https://github.com/aaryan-suri",
  linkedInUrl: "https://www.linkedin.com/in/aaryan-suri/",
  email: "aaryansuri2013@gmail.com",
};

