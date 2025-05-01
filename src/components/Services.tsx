"use client";

import {
  FaCalculator,
  FaUserTie,
  FaUsers,
  FaFileInvoiceDollar,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    title: "Contabilidade",
    description:
      "Informações contábeis que auxiliam as tomadas de decisões da sua empresa de forma personalizada e dinâmica. Incluindo balancetes mensais, balanço patrimonial e demonstração de resultado do exercício.",
    icon: FaCalculator,
  },
  {
    title: "Consultoria",
    description:
      "Planejamento tributário especializado, restituição e compensação de impostos, além de defesa administrativa de autos de infração e regularidade fiscal.",
    icon: FaUserTie,
  },
  {
    title: "Folha de Pagamento",
    description:
      "Gestão completa da folha de pagamento, incluindo registros dos profissionais, elaboração de informações para o Ministério do Trabalho e assessoria trabalhista e previdenciária.",
    icon: FaUsers,
  },
  {
    title: "Fiscal",
    description:
      "Apuração de impostos e elaborações de declarações acessórias com precisão e pontualidade.",
    icon: FaFileInvoiceDollar,
  },
  {
    title: "Legalização",
    description:
      "Constituição e distrato de sociedades, registros de livros societários fiscais e contábeis, e regularização de situação fiscal junto aos órgãos federais, estaduais e municipais.",
    icon: FaBuilding,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em contabilidade digital para sua
            empresa crescer com segurança e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary mb-4">
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-light mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-6 bg-white rounded-lg shadow-lg">
            <span className="text-lg font-medium text-light mr-4">
              Atendimento exclusivo e personalizado
            </span>
            <span className="text-secondary">
              Disponível por e-mail, telefone ou WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
