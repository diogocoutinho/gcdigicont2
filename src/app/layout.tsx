import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import FramerMotionProvider from "@/components/FramerMotionProvider";
import CookieConsent from "@/components/CookieConsent";
import { SITE_NAME, SITE_URL } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { jsonLd, organizationGraph } from "@/lib/structuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e2b3a",
};

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
  robots: { index: true, follow: true },
  authors: [{ name: SITE_NAME }],
  applicationName: SITE_NAME,
  referrer: "strict-origin-when-cross-origin",
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationGraph()) }}
        />
        <FramerMotionProvider>
          {children}
        </FramerMotionProvider>
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
