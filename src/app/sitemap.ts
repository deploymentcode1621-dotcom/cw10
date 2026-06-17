import type { MetadataRoute } from "next";

const BASE_URL = "https://ashwinineurocarecenterlatur.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/doctors`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/facilities`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/testimonials`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE_URL}/emergency`, changeFrequency: "yearly" as const, priority: 1.0 },
    { url: `${BASE_URL}/appointment`, changeFrequency: "yearly" as const, priority: 0.9 },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}
