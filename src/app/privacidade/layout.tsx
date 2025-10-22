import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - GCDIGICONT",
  description:
    "Política de Privacidade da GCDIGICONT. Saiba como coletamos, usamos e protegemos suas informações pessoais conforme a LGPD.",
  robots: "index, follow",
  openGraph: {
    title: "Política de Privacidade - GCDIGICONT",
    description:
      "Política de Privacidade da GCDIGICONT. Proteção e segurança dos seus dados.",
    url: "https://gcdigicont.com.br/privacidade",
    type: "website",
  },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
