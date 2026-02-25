import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://25microsaas.com/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: project.status === "launched" ? "weekly" : "monthly",
    priority: project.status === "launched" ? 0.9 : 0.7,
  }));

  return [
    {
      url: "https://25microsaas.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://25microsaas.com/projects",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://25microsaas.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://25microsaas.com/faq",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectEntries,
    {
      url: "https://www.daily-affirmation.today",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://chromewebstore.google.com/detail/daily-affirmations/nhhicimcipdgjckacooendaikhjhenle",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
