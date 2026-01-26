"use client";

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useState, Fragment } from "react";
import ScrollReveal from "./ScrollReveal";
import { m, AnimatePresence } from "framer-motion";

type Category = {
  name: string;
  features: {
    label: string;
    values: (boolean | string)[];
    note?: string;
  }[];
};

const plans = [
  {
    name: "MEI",
    description: "Micro Empreendedor Individual",
  },
  {
    name: "Simples Nacional",
    description: "Empresas do Simples Nacional",
  },
  {
    name: "Lucro Presumido",
    description: "Empresas de Lucro Presumido",
  },
  {
    name: "Construção Civil",
    description: "Empresas da Construção Civil",
  },
];

const categories: Category[] = [
  {
    name: "Processos Iniciais",
    features: [
      {
        label:
          "Contabilidade Completa: Todas as obrigações Contábeis e Legais com a Receita Federal, Estadual e Municipal",
        values: [true, true, true, true],
      },
    ],
  },
  {
    name: "Folha de Pagamento",
    features: [
      {
        label: "Pró Labore dos Sócios / Folha de Pagamento",
        values: ["", "Até 2*", "Até 2*", "Até 2*"],
        note: "2 Sócios ou 1 Sócio e 1 Funcionário - Acima disso será cobrado R$ 29,90 por integrante extra",
      },
    ],
  },
  {
    name: "Processos de Abertura",
    features: [
      {
        label: "Processo de Abertura Grátis",
        values: [true, true, true, true],
        note: " Realizamos o processo de abertura gratuitamente, você paga apenas as taxas do governo e realiza os protocolos físicos. Indicamos o melhor regime tributário e atividades e você recebe a documentação de abertura via Correios ou WhatsApp dependendo do Município. A abertura sem sair de casa está disponível em Consulta Cidades que Atendemos abaixo. (Gratuidade para contrato de planos mínimo de 24 meses)",
      },
    ],
  },
  {
    name: "Faturamento",
    features: [
      {
        label: "Faturamento",
        values: [
          "Ideal até R$ 6.750,00 mês",
          "Ideal até R$ 50.000,00 mês*",
          "Ideal até R$ 50.000,00 mês*",
          "Ideal até R$ 50.000,00 mês*",
        ],
        note: "* valores acima consulte um consultor pelos canais de Contato",
      },
    ],
  },
  {
    name: "Pessoa Física",
    features: [
      {
        label: "Serviços Pessoa Física",
        values: [
          "Consultar tabela de Serviços abaixo",
          "Consultar tabela de Serviços abaixo",
          "Consultar tabela de Serviços abaixo",
          "Consultar tabela de Serviços abaixo",
        ],
      },
    ],
  },
];

const additionalServices = [
  { name: "IRPF (Imposto de renda pessoa física)" },
  { name: "Alteração Contratual (EI e LTDA)" },
  { name: "Alteração de Natureza Jurídica" },
  { name: "Preenchimento de Alvará" },
  { name: "Baixa MEI" },
  { name: "Taxa de Reprocessamento (em qualquer alteração ou constituição)" },
  { name: "Ativação de Inscrição Estadual" },
  { name: "Baixa empresa Lucro Presumido" },
  { name: "Baixa empresa Simples Nacional" },
  { name: "Declaração de Faturamento" },
  { name: "Autenticação de Livros na Junta" },
  { name: "Reemissão de Guias (impostos e outros)" },
  { name: "Formulários Diversos (bancos, fornecedores, etc)" },
  { name: "Parcelamento de Impostos" },
  { name: "Rescisão e Admissão de Funcionários" },
  { name: "Verificação de Pendências" },
  { name: "Migração de MEI para ME" },
  { name: "Retificação (DAS)" },
  { name: "Retificação de impostos" },
  { name: "Registro de marca" },
  { name: "LTCAT" },
  { name: "Certificado digital PF" },
  { name: "Certificado digital PJ" },
];

function renderCell(value: boolean | string | undefined) {
  if (value === true)
    return <FaCheck className="mx-auto text-secondary w-5 h-5" />;
  if (value === false)
    return <FaTimes className="mx-auto text-gray-300 w-5 h-5" />;
  return (
    <span className="block text-center text-sm text-gray-700">{value}</span>
  );
}

function FeatureLabelWithNote({
  label,
  note,
}: {
  label: string;
  note?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <span className="flex items-center gap-1 relative">
      {label}
      {note && (
        <span
          className="ml-1 text-secondary cursor-pointer relative"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <FaInfoCircle className="inline-block w-4 h-4 align-middle" />
          {show && (
            <span className="absolute left-6 top-1/2 z-50 -translate-y-1/2 bg-gray-900 text-white text-sm rounded px-3 py-2 shadow-lg max-w-xs whitespace-normal break-words min-w-80">
              {note}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export default function Plans() {
  const [showAdditional, setShowAdditional] = useState(false);
  const cidades = [
    "Belo Horizonte",
    "Contagem",
    "Betim",
    "Ibirité",
    "Ribeirão das Neves",
    "Igarapé",
    "Bom Despacho"
  ];

  return (
    <section
      id="planos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-light mb-4">
              Conheça nossos <span className="text-secondary">Planos</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="min-w-[900px] w-full bg-white rounded-2xl shadow-xl overflow-hidden border-collaspe">
              <thead>
                <tr>
                  <th className="w-64 bg-gray-50 border-b border-gray-100 p-4"></th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="text-center px-6 py-8 align-bottom border-b border-r last:border-r-0 border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-xl font-bold text-light mb-2">
                        {plan.name}
                      </div>
                      <div className="text-sm text-gray-500 mb-6 min-h-[40px]">
                        {plan.description}
                      </div>
                      <m.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 bg-secondary text-white shadow-md hover:shadow-lg hover:bg-secondary/90"
                      >
                        Contratar
                      </m.button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <Fragment key={cat.name}>
                    <tr key={cat.name + "-cat"}>
                      <td
                        colSpan={plans.length + 1}
                        className="bg-gray-50/80 text-left px-6 py-4 font-bold text-light text-base border-t border-b border-gray-100 backdrop-blur-sm"
                      >
                        {cat.name}
                      </td>
                    </tr>
                    {cat.features.map((feature, idx) => (
                      <tr
                        key={feature.label}
                        id={idx.toString()}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group"
                      >
                        <td className="text-left px-6 py-4 text-gray-700 text-sm font-medium border-r border-gray-100">
                          <FeatureLabelWithNote
                            label={feature.label}
                            note={feature.note}
                          />
                        </td>
                        {feature.values.map((value, i) => (
                          <td key={i} className="px-6 py-4 border-r border-gray-100 last:border-0 text-center">
                            {renderCell(value)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Serviços adicionais colapsável */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAdditional(!showAdditional)}
              className="group inline-flex items-center text-2xl font-bold text-light mb-4 focus:outline-none hover:text-secondary transition-colors"
            >
              Serviços Adicionais
              <span className={`ml-3 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-lg transition-transform duration-300 ${showAdditional ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {showAdditional && (
                <m.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
                    <div className="bg-secondary/5 p-6 border-b border-gray-100">
                      <p className="text-gray-600">Consulte valores para serviços avulsos</p>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
                      {additionalServices.map((service, index) => (
                        <div key={index} className="flex items-center py-2 border-b border-gray-50 hover:bg-gray-50 px-2 rounded-lg transition-colors group">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors shrink-0 mr-3" />
                          <span className="text-sm font-medium text-gray-700">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Cidades atendidas */}
        <ScrollReveal delay={0.6} width="100%">
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-light mb-8 relative inline-block group">
              Cidades Atendidas
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {cidades.map((cidade) => (
                <m.li
                  key={cidade}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm text-gray-700 font-medium cursor-default hover:border-secondary hover:text-secondary transition-colors"
                >
                  {cidade}
                </m.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
