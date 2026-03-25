export interface Profile {
  name: string;
  tagline: string;
  intro: string[];
  resumeHref?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  email?: string;
}

export const profile: Profile = {
  name: "Aaryan Suri",
  tagline:
    "Most of my work sits where data pipelines, AWS, and web UIs meet: reliability and cost both have to be boring in a good way.",
  intro: [
    "Computer Engineering @ UMD (QUEST Honors). Incoming Analyst Intern @ Capital One (Summer 2026).",
    "Recent projects: student housing aggregation at housing.dbknews.com, an AWS cost pass that landed around ~14% savings for The Diamondback, PostPilot for student orgs, and a multi-stage NLP pipeline (AIE) for argument structure from online discussions.",
  ],
  resumeHref: "/resume.pdf",
  githubUrl: "https://github.com/aaryan-suri",
  linkedInUrl: "https://www.linkedin.com/in/aaryan-suri/",
  email: "aaryansuri2013@gmail.com",
};
