import { MetadataRoute } from "next";
import { CONTENT_UPDATED_AT, SITE_URL, pages } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: CONTENT_UPDATED_AT,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
