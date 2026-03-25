/**
 * Canonical site URL for metadata, OG tags, and sitemap.
 * Set `NEXT_PUBLIC_SITE_URL` in Vercel (e.g. https://yourdomain.com) for production.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://aaryan-portfolio-blue.vercel.app";
}
