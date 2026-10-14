import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL, pages } from "@/data/site";

/** Metadados completos (título, descrição, canonical, Open Graph, Twitter) de uma página. */
export function pageMetadata(path: string): Metadata {
  const page = pages.find((p) => p.path === path) ?? pages[0];
  const url = `${SITE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE.url],
    },
  };
}
