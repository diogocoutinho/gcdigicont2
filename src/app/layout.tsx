import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCDIGICONT - Contabilidade Digital",
  description:
    "Soluções contábeis digitais para empresas: contabilidade, consultoria, folha de pagamento, fiscal e legalização. Atendemos Belo Horizonte, Contagem, Betim, Ibirité, Ribeirão das Neves, Igarapé.",
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
        url: "/logo-dark.png",
        width: 600,
        height: 315,
        alt: "GCDIGICONT Logo",
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
    images: ["/logo-dark.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-SY4G9E0XZY" />
      </body>
    </html>
  );
}
