import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ServiceCTA from "@/components/ServiceCTA";
import { citiesServed, serviceBySlug, services } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { jsonLd, pageGraph } from "@/lib/structuredData";

// Uma página estática por serviço de `services` (src/data/site.ts).
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`/servicos/${slug}/`);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(pageGraph(`/servicos/${slug}/`)) }}
      />
      <Header />

      {/* Topo */}
      <section className="relative bg-background pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-white space-y-6 text-center sm:text-left">
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white underline-offset-4 hover:underline">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#servicos" className="hover:text-white underline-offset-4 hover:underline">
                    Serviços
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-secondary font-medium">
                  {service.title}
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              {service.description}
            </p>
            <div className="pt-2">
              <ServiceCTA slug={service.slug} title={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* O que inclui */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4 text-center">
              O que o serviço inclui
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.details.map((d) => (
                <div
                  key={d.title}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-light mb-3">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-light mb-6">
                Para quem é
              </h2>
              <ul className="space-y-4">
                {service.audience.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-gray-700 text-lg">
                    <FaCheck className="w-5 h-5 text-secondary mt-1 shrink-0" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Atendemos {citiesServed.slice(0, -1).join(", ")} e{" "}
                {citiesServed[citiesServed.length - 1]} (MG), por e-mail, telefone
                ou WhatsApp, direto com o seu contador.
              </p>
            </div>
            {service.relatedExtras.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-light mb-6">
                  Serviços avulsos
                </h2>
                <p className="text-gray-600 mb-6">
                  Também disponíveis separadamente (consulte valores):
                </p>
                <ul className="flex flex-wrap gap-3">
                  {service.relatedExtras.map((x) => (
                    <li
                      key={x}
                      className="bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-gray-700 font-medium text-sm"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-light mb-6 text-center sm:text-left">
              Outros serviços
            </h2>
            <ul className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/servicos/${o.slug}/`}
                    className="inline-block bg-gray-50 border border-gray-200 rounded-full px-5 py-2 text-light font-semibold hover:border-secondary hover:bg-white transition-colors"
                  >
                    {o.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#planos"
                  className="inline-block bg-gray-50 border border-gray-200 rounded-full px-5 py-2 text-light font-semibold hover:border-secondary hover:bg-white transition-colors"
                >
                  Ver planos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
