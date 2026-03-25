export interface Project {
  slug: string;
  name: string;
  role: string;
  stack: string[];
  whatItDoes: string;
  /** Extra narrative shown only on the project detail page (case study). */
  caseStudyParagraphs?: string[];
  highlights: string[];
  impact?: string[];
  externalUrl?: string | null;
  /** Label for the primary external CTA (opens in a new tab). */
  externalLabel?: string;
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
    externalLabel: "Open housing.dbknews.com →",
    stack: [
      "Python",
      "PostgreSQL",
      "AWS (Lambda, S3, RDS)",
      "React",
      "Web Scraping (BeautifulSoup / Selenium)",
    ],
    whatItDoes:
      "A live student-facing site that aggregates off-campus housing near UMD with filters, comparisons, and historical price context.",
    caseStudyParagraphs: [
      "This project is the public product at housing.dbknews.com: a dedicated apartment finder built for The Diamondback’s audience—UMD students navigating off-campus housing in a market that’s noisy, fast-moving, and easy to get wrong.",
      "On the backend, I designed the database schema and ETL pipeline and built the scraping engine that keeps listings fresh. On the frontend, I contributed to the React UI that makes search, filtering, and comparison feel fast and trustworthy.",
      "It’s a full-stack shipping exercise: reliable data ingestion, cost-aware cloud infrastructure, and a clean interface students actually use when rent season hits.",
    ],
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
    caseStudyParagraphs: [
      "Online arguments repeat the same moves: claims, pushback, agreement, and tangent threads. I wanted a pipeline that could ingest raw threads and summarize that structure without hand-labeling every sentence.",
      "The stack alternates between a heavier path (transformer embeddings + HDBSCAN) and a lighter fallback (TF–IDF + KMeans) when data or compute is tight. FastAPI wraps the stages so I can experiment with one module at a time.",
      "It is still in progress: the graph export and evaluation against labeled samples are the next checkpoints. Code and iteration notes live on my GitHub profile while the repo for this project stabilizes.",
    ],
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
    externalUrl: "https://www.postpilot.company/",
    externalLabel: "Visit PostPilot →",
    githubUrl: "https://github.com/aaryan-suri/postpilot",
    stack: ["React", "Next.js", "Google Calendar API", "Node.js"],
    whatItDoes:
      "AI-assisted social media for student orgs—calendar-aware scheduling and publishing so clubs stay visible without living inside Instagram.",
    caseStudyParagraphs: [
      "We kept seeing campus recruitment and club visibility lag behind how students actually discover communities: social feeds move fast, but most orgs still run posting as a manual side task.",
      "PostPilot is our answer—streamlined workflows for college clubs so content stays consistent, on-brand, and tied to real events (Google Calendar integration, scheduling, and automation).",
      "The public face of the product lives at postpilot.company; the repo captures the implementation details for recruiters who want to see how it’s built.",
    ],
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
    caseStudyParagraphs: [
      "Fantasy basketball turns into a weekly optimization problem: injuries, minutes, and back-to-backs change who you should start. I built a small Python codebase around ESPN’s API so I could answer “who sits?” and “who to grab on waivers?” without re-deriving the math every Sunday.",
      "The project is split into modules—lineups, waivers, and a simple analytics layer—so I can rerun one piece when the API shape shifts. It is built for one league first, not for commercial scale.",
      "It is deliberately unglamorous systems work: parsing messy payloads, caching what ESPN returns, and keeping the optimizer’s constraints readable. I still run it in my own league.",
    ],
    highlights: [
      "Multi-module architecture (lineup optimizer, waiver analyzer, analytics dashboard).",
      "Shipped for production use in my own league (“suri tuff”).",
    ],
  },
  {
    slug: "aws-cost-optimization-the-diamondback",
    name: "AWS Cost Optimization — The Diamondback",
    role: "Infrastructure lead @ The Diamondback",
    stack: ["AWS"],
    whatItDoes:
      "Led a systematic audit and optimization of The Diamondback's AWS infrastructure.",
    caseStudyParagraphs: [
      "The newsroom’s AWS bill had grown in layers—older instances, storage that nobody had revisited, and patterns that made sense at launch but not a year later. I treated it like an inventory: map accounts, trace spend, then change what was safe to change.",
      "The work was mostly rightsizing, deleting unused resources, and tightening deployment paths so new code did not default to overspecified boxes. Nothing magical—just disciplined cleanup with before/after numbers.",
      "We landed around a ~14% reduction on the footprint I measured; the specifics stay internal, but the lesson is the same as in class projects: cost is a feature of the architecture, not an afterthought.",
    ],
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

