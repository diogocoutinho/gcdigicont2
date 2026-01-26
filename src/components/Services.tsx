"use client";

import {
  FaCalculator,
  FaUserTie,
  FaUsers,
  FaFileInvoiceDollar,
  FaBuilding,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { m } from "framer-motion";

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
    <section id="servicos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
              Nossos <span className="text-secondary">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em contabilidade digital para sua
              empresa crescer com segurança e eficiência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} width="100%">
              <m.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:shadow-2xl hover:shadow-secondary/5 hover:border-secondary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-light mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </m.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} width="100%">
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform">
              <div className="p-3 bg-green-100 text-green-600 rounded-full mb-4 sm:mb-0 sm:mr-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-light mb-1">
                  Atendimento Exclusivo
                </h4>
                <p className="text-gray-600">
                  Disponível por e-mail, telefone ou WhatsApp. Fale diretamente com seu contador.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
