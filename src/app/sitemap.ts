import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/experience",
    "/about",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
