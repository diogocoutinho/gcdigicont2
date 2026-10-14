// Dados estruturados (schema.org / JSON-LD) gerados a partir de src/data/site.ts,
// coerentes com o que está visível no site. Não inclui endereço, CNPJ, horário
// de atendimento nem avaliações, porque o site não os publica.
import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
  contact,
  services,
  plans,
  citiesServed,
  pages,
} from "@/data/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationGraph() {
  return [
    {
      "@type": "AccountingService",
      "@id": ORG_ID,
      name: SITE_NAME,
      // "Gleiber & Castro" é o nome que aparece no logotipo do site.
      alternateName: [SITE_LEGAL_NAME, "Gleiber & Castro Contabilidade Digital"],
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-dark.png`,
        width: 400,
        height: 89,
      },
      image: `${SITE_URL}${OG_IMAGE.url}`,
      email: contact.email,
      telephone: contact.whatsappComercial.e164,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          name: contact.whatsappComercial.label,
          telephone: contact.whatsappComercial.e164,
          email: contact.email,
          availableLanguage: "pt-BR",
          areaServed: "BR",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          name: contact.whatsappSuporte.label,
          telephone: contact.whatsappSuporte.e164,
          availableLanguage: "pt-BR",
          areaServed: "BR",
        },
      ],
      areaServed: citiesServed.map((name) => ({
        "@type": "City",
        name,
        containedInPlace: { "@type": "State", name: "Minas Gerais" },
      })),
      knowsAbout: services.map((s) => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços e planos contábeis",
        itemListElement: [
          ...services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              provider: { "@id": ORG_ID },
            },
          })),
          ...plans.map((p) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `Plano ${p.name}`,
              description: `Contabilidade completa para ${p.description}`,
              provider: { "@id": ORG_ID },
            },
          })),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
  ];
}

export function pageGraph(path: string) {
  const page = pages.find((p) => p.path === path) ?? pages[0];
  const url = `${SITE_URL}${page.path}`;
  const nodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: `${SITE_URL}${OG_IMAGE.url}`,
      ...(page.path !== "/" && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    },
  ];
  if (page.path !== "/") {
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.title.split(" - ")[0], item: url },
      ],
    });
  }
  return nodes;
}

export function jsonLd(nodes: Record<string, unknown>[]) {
  // Escapa "<" para impedir fechamento antecipado da tag <script>.
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(
    /</g,
    "\\u003c"
  );
}
