"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>

          <div className="prose max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700 mb-4">
                Ao acessar e utilizar os serviços da GCDIGICONT, você concorda
                com estes termos e condições. Se você não concordar com qualquer
                parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="text-gray-700 mb-4">
                A GCDIGICONT oferece serviços contábeis digitais, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contabilidade geral</li>
                <li>Consultoria financeira</li>
                <li>Gestão de folha de pagamento</li>
                <li>Assessoria fiscal</li>
                <li>Legalização de empresas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Responsabilidades do Cliente
              </h2>
              <p className="text-gray-700 mb-4">O cliente se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>
                  Manter a confidencialidade de suas credenciais de acesso
                </li>
                <li>Pagar os serviços contratados em dia</li>
                <li>Comunicar alterações relevantes em sua situação</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Responsabilidades da GCDIGICONT
              </h2>
              <p className="text-gray-700 mb-4">Nós nos comprometemos a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Prestar serviços com qualidade e profissionalismo</li>
                <li>Manter a confidencialidade dos dados do cliente</li>
                <li>Atualizar regularmente nossos serviços</li>
                <li>Fornecer suporte adequado aos clientes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Pagamentos e Reembolsos
              </h2>
              <p className="text-gray-700 mb-4">
                Os valores dos serviços serão cobrados conforme acordado no
                contrato. Em caso de cancelamento, as políticas de reembolso
                serão aplicadas conforme as condições contratuais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Propriedade Intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                Todo o conteúdo e materiais disponibilizados pela GCDIGICONT são
                protegidos por direitos autorais e propriedade intelectual. O
                uso não autorizado é proibido.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-700 mb-4">
                A GCDIGICONT não será responsável por danos indiretos,
                incidentais, especiais ou consequenciais resultantes do uso ou
                impossibilidade de uso dos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Alterações nos Termos
              </h2>
              <p className="text-gray-700 mb-4">
                Reservamos o direito de modificar estes termos a qualquer
                momento. Alterações significativas serão comunicadas aos
                clientes através dos canais oficiais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Lei Aplicável
              </h2>
              <p className="text-gray-700 mb-4">
                Estes termos são regidos pelas leis brasileiras. Qualquer
                disputa será resolvida no foro da comarca de São Paulo.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
