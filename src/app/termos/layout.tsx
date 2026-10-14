import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { jsonLd, pageGraph } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata("/termos/");

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageGraph("/termos/")) }}
      />
      {children}
    </>
  );
}
