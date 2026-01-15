import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e2b3a",
};

export const metadata: Metadata = {
  title: "GCDIGICONT - Contabilidade Digital",
  description:
    "Soluções contábeis digitais para empresas: contabilidade, consultoria, folha de pagamento, fiscal e legalização. Atendemos Belo Horizonte, Contagem, Betim, Ibirité, Ribeirão das Neves, Igarapé.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "GCDigiCont",
    statusBarStyle: "default",
  },
  keywords: [
    "GCDIGICONT",
    "GCDIGICONT contabilidade",
    "GCDIGICONT contabilidade digital",
    "GCDIGICONT BH",
    "GCDIGICONT Belo Horizonte",
    "GCDIGICONT Simples Nacional",
    "GCDIGICONT MEI",
    "GCDIGICONT Lucro Presumido",
    "GCDIGICONT Construção Civil",
    "GCDIGICONT consultoria",
    "GCDIGICONT folha de pagamento",
    "GCDIGICONT abrir empresa",
    "GCDIGICONT serviços contábeis",
    "contabilidade digital",
    "contabilidade BH",
    "contabilidade Belo Horizonte",
    "contabilidade Simples Nacional",
    "contabilidade MEI",
    "contabilidade Lucro Presumido",
    "contabilidade Construção Civil",
    "consultoria",
    "consultoria contábil",
    "folha de pagamento",
    "abrir empresa BH",
    "serviços contábeis",
    "contabilidade online",
    "contabilidade para MEI",
    "contabilidade para empresas",
    "contabilidade para construtoras",
    "contabilidade para prestadores de serviço",
    "contabilidade para comércio",
    "contabilidade para indústria",
    "contabilidade para startups",
    "contabilidade para profissionais liberais",
    "contabilidade para autônomos",
    "contabilidade para microempresas",
    "contabilidade para pequenas empresas",
    "contabilidade para médias empresas",
    "contabilidade para grandes empresas",
    "contabilidade para empresas de tecnologia",
    "contabilidade para empresas de serviços",
    "contabilidade para empresas de comércio",
    "contabilidade para empresas de indústria",
    "contabilidade para empresas de construção",
    "contabilidade para empresas de transporte",
    "contabilidade para empresas de alimentação",
    "contabilidade para empresas de saúde",
    "contabilidade para empresas de educação",
    "contabilidade para empresas de beleza",
    "contabilidade para empresas de moda",
    "contabilidade para empresas de gastronomia",
    "contabilidade para empresas de eventos",
    "contabilidade para empresas de marketing",
    "contabilidade para empresas de publicidade",
    "contabilidade para empresas de comunicação",
    "contabilidade para empresas de tecnologia da informação",
    "contabilidade para empresas de desenvolvimento de software",
    "contabilidade para empresas de consultoria",
    "contabilidade para empresas de assessoria",
    "contabilidade para empresas de advocacia",
    "contabilidade para empresas de arquitetura",
    "contabilidade para empresas de engenharia",
    "contabilidade para empresas de medicina",
    "contabilidade para empresas de odontologia",
    "contabilidade para empresas de psicologia",
    "contabilidade para empresas de fisioterapia",
    "contabilidade para empresas de nutrição",
    "contabilidade para empresas de educação física",
    "contabilidade para empresas de estética",
    "abertura de empresa",
    "balanco contabil",
    "balanço contábil",
    "MEI",
    "Simples Nacional",
    "Lucro Presumido",
    "Lucro Real",
    "planejamento tributario",
    "reforma tributária"
  ],
  metadataBase: new URL("https://gcdigicont.com.br"),
  openGraph: {
    title: "GCDIGICONT - Contabilidade Digital",
    description: "Soluções contábeis digitais para empresas em BH e região.",
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
    description: "Soluções contábeis digitais para empresas em BH e região.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GCDIGICONT - Contabilidade Digital",
    description:
      "Soluções contábeis digitais para empresas: contabilidade, consultoria, folha de pagamento, fiscal e legalização.",
    url: "https://gcdigicont.com.br",
    logo: "https://gcdigicont.com.br/logo-dark.png",
    image: "https://gcdigicont.com.br/og-image.png",
    telephone: "+55-31-98752-9716",
    email: "contato@gcdigicont.com.br",
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Belo Horizonte",
        containedInPlace: {
          "@type": "State",
          name: "Minas Gerais",
        },
      },
      {
        "@type": "City",
        name: "Contagem",
      },
      {
        "@type": "City",
        name: "Betim",
      },
      {
        "@type": "City",
        name: "Ibirité",
      },
      {
        "@type": "City",
        name: "Ribeirão das Neves",
      },
      {
        "@type": "City",
        name: "Igarapé",
      },
    ],
    serviceType: [
      "Contabilidade",
      "Consultoria Contábil",
      "Folha de Pagamento",
      "Serviços Fiscais",
      "Legalização de Empresas",
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
            description:
              "Serviços contábeis para Microempreendedores Individuais",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Simples Nacional",
            description: "Gestão contábil para empresas do Simples Nacional",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Lucro Presumido",
            description:
              "Serviços contábeis para empresas tributadas pelo Lucro Presumido",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para Construção Civil",
            description:
              "Contabilidade especializada para empresas de construção civil",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/gcdigicont",
      "https://www.instagram.com/gcdigicont",
      "https://www.linkedin.com/company/gcdigicont",
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="GCDigiCont" />
        <title>GCDigiCont</title>
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <GoogleAnalytics gaId="G-YKE4ERKDJP" />
        <WhatsAppButton />
      </body>
    </html>
  );
}
