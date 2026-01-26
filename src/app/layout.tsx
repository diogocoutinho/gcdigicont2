import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import FramerMotionProvider from "@/components/FramerMotionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e2b3a",
};

export const metadata: Metadata = {
  title: "GCDIGICONT - Contabilidade Digital para o Sucesso do seu Negócio",
  description:
    "Abra sua empresa sem burocracia com a GCDIGICONT. Contabilidade digital completa para empresas em BH e região. Consultoria, fiscal, folha e legalização. Fale com um especialista!",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "GCDigiCont",
    statusBarStyle: "default",
  },
  keywords: [
    "contabilidade digital bh",
    "abrir empresa belo horizonte",
    "contabilidade para empresas de serviço",
    "consultoria tributária",
    "gestão de folha de pagamento",
    "contabilidade mei e simples nacional",
    "legalização de empresas",
    "planejamento tributário",
    "contabilidade construção civil",
    "gcdigicont",
  ],
  metadataBase: new URL("https://gcdigicont.com.br"),
  openGraph: {
    title: "GCDIGICONT - Contabilidade Digital em BH",
    description: "Abra sua empresa sem burocracia. Contabilidade digital completa com atendimento humanizado para o seu negócio crescer.",
    url: "https://gcdigicont.com.br",
    siteName: "GCDIGICONT",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GCDIGICONT - Contabilidade Digital",
      },
    ],
  },
  alternates: {
    canonical: "https://gcdigicont.com.br",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gcdigicont",
    title: "GCDIGICONT - Contabilidade Digital",
    description: "Abra sua empresa sem burocracia. Contabilidade digital completa para o seu negócio.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  authors: [{ name: "GCDIGICONT" }],
  generator: "Next.js",
  applicationName: "GCDIGICONT",
  referrer: "origin-when-cross-origin",
  creator: "GCDIGICONT",
  publisher: "GCDIGICONT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://gcdigicont.com.br/#localbusiness",
    name: "GCDIGICONT - Contabilidade Digital",
    description: "Soluções contábeis digitais para empresas: contabilidade, consultoria, folha de pagamento, fiscal e legalização.",
    url: "https://gcdigicont.com.br",
    logo: "https://gcdigicont.com.br/logo-dark.png",
    image: "https://gcdigicont.com.br/og-image.png",
    telephone: "+5531987529716",
    email: "contato@gcdigicont.com.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9191,
      longitude: -43.9386,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Belo Horizonte",
        containedInPlace: {
          "@type": "State",
          name: "Minas Gerais"
        }
      },
      { "@type": "City", name: "Contagem" },
      { "@type": "City", name: "Betim" },
      { "@type": "City", name: "Ibirité" },
      { "@type": "City", name: "Ribeirão das Neves" },
      { "@type": "City", name: "Igarapé" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Contábeis",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para MEI",
            description: "Serviços contábeis para Microempreendedores Individuais"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Simples Nacional",
            description: "Gestão contábil para empresas do Simples Nacional"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Lucro Presumido",
            description: "Serviços contábeis para empresas tributadas pelo Lucro Presumido"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para Construção Civil",
            description: "Contabilidade especializada para empresas de construção civil"
          }
        }
      ]
    },
    sameAs: [
      "https://www.facebook.com/gcdigicont",
      "https://www.instagram.com/gcdigicont",
      "https://www.linkedin.com/company/gcdigicont",
    ]
  };

  return (
    <html lang="pt-BR">

      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FramerMotionProvider>
          {children}
        </FramerMotionProvider>
        <GoogleAnalytics gaId="G-YKE4ERKDJP" />
        <WhatsAppButton />
      </body>
    </html>
  );
}
