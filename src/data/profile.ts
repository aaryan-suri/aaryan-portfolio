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
  tagline: "I build systems that ship.",
  intro: [
    "I’m a sophomore Computer Engineering student at the University of Maryland (QUEST Honors).",
    "I focus on infrastructure + product engineering, with a bias toward real systems and applied ML.",
  ],
  currently: ["Interning at Capital One", "Building AIE", "Studying DSA"],
  resumeHref: "/resume.pdf",
  githubUrl: "https://github.com/aaryan-suri",
  linkedInUrl: "https://www.linkedin.com/in/aaryan-suri/",
  email: "aaryansuri2013@gmail.com",
};

