import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso - GCDIGICONT",
  description:
    "Termos e Condições de Uso dos serviços da GCDIGICONT. Conheça as regras e diretrizes para utilização dos nossos serviços contábeis.",
  robots: "index, follow",
  openGraph: {
    title: "Termos de Uso - GCDIGICONT",
    description:
      "Termos e Condições de Uso dos serviços contábeis da GCDIGICONT.",
    url: "https://gcdigicont.com.br/termos",
    type: "website",
  },
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
