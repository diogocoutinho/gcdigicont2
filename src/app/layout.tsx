import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e2b3a",
};

export const metadata: Metadata = {
  title: {
    default: "GCDIGICONT - Contabilidade Digital em Belo Horizonte",
    template: "%s | GCDIGICONT",
  },
  description:
    "Contabilidade digital em Belo Horizonte e região. Serviços contábeis para MEI, Simples Nacional, Lucro Presumido e Construção Civil. Consultoria, folha de pagamento, fiscal e legalização. Atendemos BH, Contagem, Betim, Ibirité, Ribeirão das Neves e Igarapé.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "GCDigiCont",
    statusBarStyle: "default",
    capable: true,
  },
  authors: [{ name: "GCDIGICONT", url: "https://gcdigicont.com.br" }],
  creator: "GCDIGICONT",
  publisher: "GCDIGICONT",
  category: "Contabilidade",
  classification: "Serviços Contábeis",
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Belo Horizonte",
    "geo.position": "-19.9167;-43.9345",
    ICBM: "-19.9167, -43.9345",
    "revisit-after": "7 days",
    rating: "general",
    "format-detection": "telephone=yes",
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
    title: "GCDIGICONT - Contabilidade Digital em Belo Horizonte",
    description:
      "Contabilidade digital em BH e região. Serviços para MEI, Simples Nacional, Lucro Presumido. Consultoria, folha de pagamento e legalização de empresas.",
    url: "https://gcdigicont.com.br",
    siteName: "GCDIGICONT",
    locale: "pt_BR",
    type: "website",
    countryName: "Brazil",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GCDIGICONT - Contabilidade Digital em Belo Horizonte - Serviços Contábeis",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://gcdigicont.com.br",
    languages: {
      "pt-BR": "https://gcdigicont.com.br",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@gcdigicont",
    creator: "@gcdigicont",
    title: "GCDIGICONT - Contabilidade Digital em Belo Horizonte",
    description:
      "Contabilidade digital em BH e região. Serviços para MEI, Simples Nacional, Lucro Presumido. Consultoria e legalização.",
    images: {
      url: "/og-image.png",
      alt: "GCDIGICONT - Contabilidade Digital em Belo Horizonte",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione os códigos de verificação após configurar as plataformas
    // google: "seu-codigo-google-search-console",
    // yandex: "seu-codigo-yandex",
    // yahoo: "seu-codigo-yahoo",
    other: {
      // "msvalidate.01": "seu-codigo-bing-webmaster",
    },
  },
};

// Função para sanitizar JSON-LD e prevenir XSS
function sanitizeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema LocalBusiness (principal - para SEO local)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://gcdigicont.com.br/#organization",
    name: "GCDIGICONT - Contabilidade Digital",
    alternateName: "GC DigiCont",
    description:
      "Soluções contábeis digitais para empresas: contabilidade, consultoria, folha de pagamento, fiscal e legalização. Atendemos Belo Horizonte e região metropolitana.",
    url: "https://gcdigicont.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://gcdigicont.com.br/logo-dark.png",
      width: 512,
      height: 512,
    },
    image: [
      "https://gcdigicont.com.br/og-image.png",
      "https://gcdigicont.com.br/about.webp",
    ],
    telephone: "+55-31-98752-9716",
    email: "contato@gcdigicont.com.br",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Boleto, Pix, Transferência Bancária",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9167,
      longitude: -43.9345,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Belo Horizonte",
        containedInPlace: {
          "@type": "State",
          name: "Minas Gerais",
          containedInPlace: {
            "@type": "Country",
            name: "Brasil",
          },
        },
      },
      { "@type": "City", name: "Contagem" },
      { "@type": "City", name: "Betim" },
      { "@type": "City", name: "Ibirité" },
      { "@type": "City", name: "Ribeirão das Neves" },
      { "@type": "City", name: "Igarapé" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    serviceType: [
      "Contabilidade Digital",
      "Consultoria Contábil",
      "Folha de Pagamento",
      "Serviços Fiscais",
      "Legalização de Empresas",
      "Abertura de Empresa",
      "Planejamento Tributário",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planos de Serviços Contábeis",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para MEI",
            description:
              "Serviços contábeis completos para Microempreendedores Individuais",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Simples Nacional",
            description:
              "Gestão contábil completa para empresas do Simples Nacional",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Lucro Presumido",
            description:
              "Serviços contábeis especializados para empresas tributadas pelo Lucro Presumido",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para Construção Civil",
            description:
              "Contabilidade especializada para construtoras e empresas de construção civil",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/gcdigicont",
      "https://www.instagram.com/gcdigicont",
      "https://www.linkedin.com/company/gcdigicont",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-31-98752-9716",
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
  };

  // Schema WebSite (para SEO do site)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gcdigicont.com.br/#website",
    url: "https://gcdigicont.com.br",
    name: "GCDIGICONT - Contabilidade Digital",
    description: "Soluções contábeis digitais para empresas em BH e região.",
    publisher: {
      "@id": "https://gcdigicont.com.br/#organization",
    },
    inLanguage: "pt-BR",
  };

  // Schema Organization (complementar)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://gcdigicont.com.br/#organization",
    name: "GCDIGICONT",
    legalName: "GC DigiCont Contabilidade Digital",
    url: "https://gcdigicont.com.br",
    logo: "https://gcdigicont.com.br/logo-dark.png",
    foundingDate: "2014",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    slogan: "Contabilidade Digital para o Sucesso do seu Negócio",
    knowsAbout: [
      "Contabilidade",
      "Consultoria Empresarial",
      "Planejamento Tributário",
      "Simples Nacional",
      "MEI",
      "Lucro Presumido",
      "Construção Civil",
    ],
    sameAs: [
      "https://www.facebook.com/gcdigicont",
      "https://www.instagram.com/gcdigicont",
      "https://www.linkedin.com/company/gcdigicont",
    ],
  };

  // Schema BreadcrumbList (navegação)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gcdigicont.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre",
        item: "https://gcdigicont.com.br/#sobre",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Serviços",
        item: "https://gcdigicont.com.br/#servicos",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Planos",
        item: "https://gcdigicont.com.br/#planos",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contato",
        item: "https://gcdigicont.com.br/#contato",
      },
    ],
  };

  // Schema FAQPage (perguntas frequentes - melhora visibilidade em rich snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais serviços de contabilidade a GCDIGICONT oferece?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A GCDIGICONT oferece serviços completos de contabilidade digital, incluindo: contabilidade geral, consultoria contábil, gestão de folha de pagamento, serviços fiscais, legalização de empresas, abertura de CNPJ e planejamento tributário. Atendemos MEI, Simples Nacional, Lucro Presumido e empresas de Construção Civil.",
        },
      },
      {
        "@type": "Question",
        name: "Quais cidades a GCDIGICONT atende?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A GCDIGICONT atende empresas em Belo Horizonte e toda a região metropolitana, incluindo Contagem, Betim, Ibirité, Ribeirão das Neves e Igarapé. Por ser uma contabilidade digital, também atendemos clientes de outras localidades de forma remota.",
        },
      },
      {
        "@type": "Question",
        name: "Qual é o diferencial de uma contabilidade digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A contabilidade digital oferece praticidade e eficiência através de processos 100% online. Você tem acesso a relatórios em tempo real, comunicação ágil via WhatsApp, economia de tempo com envio digital de documentos, e suporte especializado sem precisar sair de casa ou do escritório.",
        },
      },
      {
        "@type": "Question",
        name: "A GCDIGICONT ajuda na abertura de empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! A GCDIGICONT oferece serviço completo de legalização e abertura de empresas, incluindo registro na Junta Comercial, obtenção de CNPJ, inscrição estadual e municipal, alvará de funcionamento e orientação sobre o melhor regime tributário para o seu negócio.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os planos de contabilidade disponíveis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A GCDIGICONT oferece 4 planos principais: Plano MEI (para Microempreendedores Individuais), Plano Simples Nacional (para empresas optantes pelo Simples), Plano Lucro Presumido (para empresas deste regime tributário) e Plano Construção Civil (especializado para construtoras e empresas do setor).",
        },
      },
      {
        "@type": "Question",
        name: "Como entrar em contato com a GCDIGICONT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você pode entrar em contato conosco pelo WhatsApp (31) 98752-9716, pelo email contato@gcdigicont.com.br ou através do formulário de contato em nosso site. Nossa equipe está disponível de segunda a sexta, das 8h às 18h.",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="GCDigiCont" />
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        {/* Schema LocalBusiness/AccountingService - Principal para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: sanitizeJsonLd(localBusinessSchema),
          }}
        />
        {/* Schema WebSite - Para SEO do site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(websiteSchema) }}
        />
        {/* Schema Organization - Informações da empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: sanitizeJsonLd(organizationSchema),
          }}
        />
        {/* Schema BreadcrumbList - Navegação estruturada */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(breadcrumbSchema) }}
        />
        {/* Schema FAQPage - Perguntas frequentes para rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(faqSchema) }}
        />
        {children}
        <GoogleAnalytics gaId="G-YKE4ERKDJP" />
      </body>
    </html>
  );
}
