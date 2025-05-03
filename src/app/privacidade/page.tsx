"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Política de Privacidade
          </h1>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-gray-700 mb-4">
                A GCDIGICONT está comprometida em proteger a privacidade e a
                segurança dos dados dos nossos clientes. Esta política de
                privacidade descreve como coletamos, usamos e protegemos suas
                informações pessoais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações da empresa</li>
                <li>
                  Dados financeiros necessários para prestação de serviços
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Prestar nossos serviços contábeis</li>
                <li>Comunicar sobre nossos serviços</li>
                <li>Melhorar nossa oferta de serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Proteção de Dados
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais
                para proteger suas informações contra acesso não autorizado,
                alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Seus Direitos
              </h2>
              <p className="text-gray-700 mb-4">Você tem o direito de:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Retirar consentimento para uso de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Contato
              </h2>
              <p className="text-gray-700 mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta
                política, entre em contato conosco através dos canais
                disponíveis em nossa página de contato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Alterações na Política
              </h2>
              <p className="text-gray-700 mb-4">
                Reservamos o direito de modificar esta política a qualquer
                momento. Alterações significativas serão comunicadas através de
                nossos canais oficiais.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
