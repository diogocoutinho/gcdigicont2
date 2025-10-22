"use client";

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useState, Fragment } from "react";

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
    // price: 80,
    description: "Micro Empreendedor Individual",
  },
  {
    name: "Simples Nacional",
    // price: 120,
    description: "Empresas do Simples Nacional",
  },
  {
    name: "Lucro Presumido",
    // price: 210,
    description: "Empresas de Lucro Presumido",
  },
  {
    name: "Construção Civil",
    // price: 210,
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
      }
      
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
  { name: "IRPF (Imposto de renda pessoa física)", price: 229 },
  { name: "Alteração Contratual (EI e LTDA)", price: "1250 + taxas" },
  { name: "Alteração de Natureza Jurídica", price: 1339 },
  { name: "Preenchimento de Alvará", price: 399 },
  { name: "Baixa MEI", price: 209 },
  {
    name: "Taxa de Reprocessamento (em qualquer alteração ou constituição)",
    price: 299.9,
  },
  { name: "Ativação de Inscrição Estadual", price: 209 },
  { name: "Baixa empresa Lucro Presumido", price: 1259 },
  { name: "Baixa empresa Simples Nacional", price: 1259 },
  { name: "Declaração de Faturamento", price: 49 },
  { name: "Autenticação de Livros na Junta", price: 349 },
  { name: "Reemissão de Guias (impostos e outros)", price: 49.9 },
  { name: "Formulários Diversos (bancos, fornecedores, etc)", price: 69 },
  { name: "Parcelamento de Impostos", price: 209 },
  { name: "Rescisão e Admissão de Funcionários", price: 109 },
  { name: "Verificação de Pendências", price: 209 },
  { name: "Migração de MEI para ME", price: 1399 },
  { name: "Retificação (DAS)", price: 69.9 },
  { name: "Retificação de impostos", price: 79.9 },
  { name: "Registro de marca", price: 997 },
  { name: "LTCAT", price: 699.9 },
  { name: "Certificado digital PF", price: 150 },
  { name: "Certificado digital PJ", price: 250 },
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
  ];
  return (
    <section
      id="planos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-light mb-4">
            Conheça nossos planos.
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full bg-white rounded-2xl shadow-lg">
            <thead>
              <tr>
                <th className="w-64"></th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="text-center px-6 py-6 align-bottom border-b-2 border-gray-100 hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-light mb-1 hover:text-secondary transition-colors duration-300">
                      {plan.name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2 hover:text-gray-700 transition-colors duration-300">
                      {plan.description}
                    </div>
                    {/*<div className="text-3xl font-bold text-secondary mb-1 hover:text-secondary/80 transition-colors duration-300">*/}
                    {/*  R$ {plan.price}*/}
                    {/*</div>*/}
                    {/*<div className="text-xs text-gray-400 mb-4 hover:text-gray-500 transition-colors duration-300">*/}
                    {/*  /mês*/}
                    {/*</div>*/}
                    <button className="w-full py-2 px-4 rounded-lg font-semibold text-base transition-all duration-300 bg-secondary text-white hover:bg-secondary/90 hover:scale-105 hover:shadow-lg">
                      Contratar
                    </button>
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
                      className="bg-gray-50 text-left px-6 py-3 font-bold text-light text-base border-t border-b border-gray-100"
                    >
                      {cat.name}
                    </td>
                  </tr>
                  {cat.features.map((feature, idx) => (
                    <tr
                      key={feature.label}
                      id={idx.toString()}
                      className="border-b border-gray-100"
                    >
                      <td className="text-left px-6 py-3 text-gray-700 text-sm font-medium">
                        <FeatureLabelWithNote
                          label={feature.label}
                          note={feature.note}
                        />
                      </td>
                      {feature.values.map((value, i) => (
                        <td key={i} className="px-6 py-3">
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
        {/* Serviços adicionais colapsável */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="inline-flex items-center text-2xl font-bold text-light mb-4 focus:outline-none"
          >
            Serviços Adicionais
            <span className="ml-2 text-light">
              {showAdditional ? "−" : "+"}
            </span>
          </button>
          {showAdditional && (
            <div className="overflow-x-auto mt-4 max-w-3xl mx-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                      Serviço
                    </th>
                    {/*<th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase">*/}
                    {/*  Preço (R$)*/}
                    {/*</th>*/}
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map((service, index) => (
                    <tr
                      key={service.name}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {service.name}
                      </td>
                      {/*<td className="px-6 py-4 text-sm text-gray-900 text-right">*/}
                      {/*  {typeof service.price === "number"*/}
                      {/*    ? `R$ ${service.price.toFixed(2)}`*/}
                      {/*    : service.price}*/}
                      {/*</td>*/}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Cidades atendidas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-light mb-8 relative inline-block group">
            Cidades Atendidas
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg">
            {cidades.map((cidade) => (
              <li
                key={cidade}
                className="bg-gray-100 rounded-full px-5 py-2 shadow-sm hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
              >
                {cidade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
