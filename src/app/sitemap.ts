import type { MetadataRoute } from "next";

const siteUrl = "https://kartik-agarwal.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-07-24T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
