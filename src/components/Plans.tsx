"use client";

import { FaCheck, FaTimes } from "react-icons/fa";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Básico",
    price: 299,
    description: "Ideal para pequenos negócios que estão começando",
    features: [
      "Declaração de Imposto de Renda",
      "Escrituração Contábil",
      "Emissão de Notas Fiscais",
      "Relatórios Mensais",
      "Suporte por E-mail",
    ],
    notIncluded: [
      "Consultoria Personalizada",
      "Gestão de Folha de Pagamento",
      "Auditoria Contábil",
    ],
  },
  {
    name: "Profissional",
    price: 599,
    description: "Perfeito para empresas em crescimento",
    popular: true,
    features: [
      "Todas as funcionalidades do Plano Básico",
      "Consultoria Personalizada",
      "Gestão de Folha de Pagamento",
      "Relatórios Personalizados",
      "Suporte Prioritário",
      "Treinamentos Online",
    ],
    notIncluded: ["Auditoria Contábil", "Consultoria Jurídica"],
  },
  {
    name: "Empresarial",
    price: 999,
    description: "Solução completa para empresas estabelecidas",
    features: [
      "Todas as funcionalidades do Plano Profissional",
      "Auditoria Contábil",
      "Consultoria Jurídica",
      "Gestão de Patrimônio",
      "Suporte 24/7",
      "Treinamentos Presenciais",
    ],
    notIncluded: [],
  },
];

export default function Plans() {
  return (
    <section
      id="planos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-light mb-6">
            Nossos Planos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Escolha o plano ideal para o seu negócio e comece a transformar sua
            contabilidade hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Mais Popular
                </div>
              )}
              <div className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-light mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-lg">{plan.description}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      R$ {plan.price}
                    </span>
                    <span className="text-gray-500 text-lg ml-2">/mês</span>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Inclui:
                  </h4>
                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <FaCheck className="w-4 h-4 text-light" />
                        </div>
                        <span className="text-gray-600 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="space-y-6 mb-10">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Não inclui:
                    </h4>
                    <div className="space-y-4">
                      {plan.notIncluded.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start space-x-4"
                        >
                          <div className="bg-gray-100 p-1.5 rounded-full">
                            <FaTimes className="w-4 h-4 text-gray-400" />
                          </div>
                          <span className="text-gray-400 text-lg">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-primary/20"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300"
                  }`}
                >
                  Contratar Plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
