import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCDIGICONT - Contabilidade Digital",
  description:
    "Serviços contábeis digitais para sua empresa. Contabilidade, consultoria, folha de pagamento, fiscal e legalização.",
  metadataBase: new URL("https://gcdigicont.com.br"),
  openGraph: {
    title: "GCDIGICONT - Contabilidade Digital",
    description:
      "Serviços contábeis digitais para sua empresa. Contabilidade, consultoria, folha de pagamento, fiscal e legalização.",
    url: "https://gcdigicont.com.br",
    siteName: "GCDIGICONT",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
