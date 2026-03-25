import { getSiteUrl } from "@/lib/site";
import { profile } from "@/data/profile";

export interface JsonLdProps {}

/** Person + WebSite structured data for search and rich results. */
export default function JsonLd(_: JsonLdProps) {
  const url = getSiteUrl();
  const sameAs = [profile.githubUrl, profile.linkedInUrl].filter(Boolean) as string[];

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url,
    email: profile.email,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Maryland, College Park",
    },
    ...(sameAs.length ? { sameAs } : {}),
    jobTitle: "Computer Engineering Student",
    knowsAbout: ["Software engineering", "Infrastructure", "Machine learning", "Data systems"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — Portfolio`,
    url,
    description:
      "Portfolio of infrastructure, product engineering, and applied ML projects by Aaryan Suri.",
    author: { "@type": "Person", name: profile.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
