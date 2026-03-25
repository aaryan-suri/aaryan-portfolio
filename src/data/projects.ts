export interface Project {
  slug: string;
  name: string;
  role: string;
  stack: string[];
  whatItDoes: string;
  highlights: string[];
  impact?: string[];
  externalUrl?: string | null;
  githubUrl?: string | null;
  /** When `githubUrl` is a profile or org page, use a clearer CTA label. */
  githubLabel?: string;
  status?: string | null;
}

export const projects: Project[] = [
  {
    slug: "diamondback-apartment-finder",
    name: "Diamondback Apartment Finder",
    role: "Infrastructure & Product Engineer @ The Diamondback",
    externalUrl: "https://housing.dbknews.com",
    stack: [
      "Python",
      "PostgreSQL",
      "AWS (Lambda, S3, RDS)",
      "React",
      "Web Scraping (BeautifulSoup / Selenium)",
    ],
    whatItDoes:
      "Aggregates off-campus housing listings for UMD students with historical price tracking, filtering, and comparison tools.",
    highlights: [
      "Designed the database schema and ETL pipeline.",
      "Built the web scraping engine.",
      "Contributed to the React frontend.",
      "Used as a project showcase in a Marshall Wace interview (advanced past phone screen).",
    ],
  },
  {
    slug: "argument-intelligence-engine-aie",
    name: "Argument Intelligence Engine (AIE)",
    role: "Solo developer",
    stack: [
      "Python",
      "FastAPI",
      "HuggingFace Transformers",
      "HDBSCAN",
      "TF-IDF",
      "KMeans",
      "spaCy / NLTK",
    ],
    whatItDoes:
      "A multi-stage NLP pipeline that ingests online discussions (Reddit, forums) and maps them into structured argument graphs—extracting claims, identifying stances, clustering arguments, and visualizing debate structure.",
    highlights: [
      "Dual-mode pipeline (HuggingFace/HDBSCAN mode vs. lightweight TF-IDF/KMeans fallback).",
      "Designed for scale and modularity.",
    ],
    status: "In progress",
    githubUrl: "https://github.com/aaryan-suri",
    githubLabel: "GitHub profile →",
  },
  {
    slug: "postpilot",
    name: "PostPilot",
    role: "Lead developer",
    githubUrl: "https://github.com/aaryan-suri/postpilot",
    stack: ["React", "Next.js", "Google Calendar API", "Node.js"],
    whatItDoes:
      "Social media automation tool for student organizations that connects to Google Calendar to schedule and auto-publish posts across platforms.",
    highlights: [
      "Built for real student org use cases.",
      "Full auth flow.",
      "Calendar integration + scheduling engine.",
    ],
  },
  {
    slug: "espn-fantasy-basketball-bot",
    name: "ESPN Fantasy Basketball Bot",
    role: "Solo developer",
    stack: ["Python (multi-module)", "ESPN API", "Pandas"],
    whatItDoes:
      "Automated lineup optimization, waiver wire analysis, and points analytics dashboard for ESPN fantasy basketball leagues.",
    highlights: [
      "Multi-module architecture (lineup optimizer, waiver analyzer, analytics dashboard).",
      "Used competitively in his own league (“suri tuff”).",
    ],
  },
  {
    slug: "aws-cost-optimization-the-diamondback",
    name: "AWS Cost Optimization — The Diamondback",
    role: "Infrastructure lead @ The Diamondback",
    stack: ["AWS"],
    whatItDoes:
      "Led a systematic audit and optimization of The Diamondback's AWS infrastructure.",
    highlights: [
      "Achieved ~14% cost reduction.",
      "Rightsized instances and cleaned unused resources.",
      "Restructured deployment architecture.",
    ],
    impact: ["~14% AWS cost reduction"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

