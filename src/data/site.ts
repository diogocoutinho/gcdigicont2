// Fonte única dos dados do site. Usada pelos componentes visíveis e pelos
// arquivos para buscadores e IA (JSON-LD, sitemap, robots, llms.txt), para que
// tudo fique sempre igual ao que o visitante vê.

export const SITE_URL = "https://gcdigicont.com.br";
export const SITE_NAME = "GCDIGICONT";
export const SITE_LEGAL_NAME = "GCDIGICONT - Contabilidade Digital";

// Data da última alteração relevante de conteúdo (usada no sitemap).
export const CONTENT_UPDATED_AT = "2026-10-13";

export const SITE_TITLE =
  "GCDIGICONT - Contabilidade Digital para o Sucesso do seu Negócio";
export const SITE_DESCRIPTION =
  "Abra sua empresa sem burocracia com a GCDIGICONT. Contabilidade digital completa para empresas em BH e região. Consultoria, fiscal, folha e legalização. Fale com um especialista!";
export const SITE_SUMMARY =
  "Soluções contábeis modernas e personalizadas para empresas que buscam crescimento, eficiência e tranquilidade fiscal.";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1199,
  height: 632,
  alt: "GCDIGICONT - Contabilidade Digital",
};

export const GA_MEASUREMENT_ID = "G-YKE4ERKDJP";

export const contact = {
  email: "contato@gcdigicont.com.br",
  whatsappComercial: {
    label: "WhatsApp Comercial",
    display: "+55 (31) 99360-2476",
    e164: "+5531993602476",
    waNumber: "5531993602476",
  },
  whatsappSuporte: {
    label: "WhatsApp Suporte",
    display: "+55 (31) 98752-9716",
    e164: "+5531987529716",
    waNumber: "5531987529716",
  },
};

export const whatsappLink = (waNumber: string, text?: string) =>
  `https://wa.me/${waNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const CLIENT_AREA_URL = "https://econtador.alterdata.com.br/";

export const socialLinks = {
  instagram: "https://www.instagram.com/gcdigicont",
  facebook: "https://www.facebook.com/gcdigicont",
  // LinkedIn removido em out/2026 a pedido do Diogo (a página respondia 404).
};

export const services = [
  {
    title: "Contabilidade",
    description:
      "Informações contábeis que auxiliam as tomadas de decisões da sua empresa de forma personalizada e dinâmica. Incluindo balancetes mensais, balanço patrimonial e demonstração de resultado do exercício.",
  },
  {
    title: "Consultoria",
    description:
      "Planejamento tributário especializado, restituição e compensação de impostos, além de defesa administrativa de autos de infração e regularidade fiscal.",
  },
  {
    title: "Folha de Pagamento",
    description:
      "Gestão completa da folha de pagamento, incluindo registros dos profissionais, elaboração de informações para o Ministério do Trabalho e assessoria trabalhista e previdenciária.",
  },
  {
    title: "Fiscal",
    description:
      "Apuração de impostos e elaborações de declarações acessórias com precisão e pontualidade.",
  },
  {
    title: "Legalização",
    description:
      "Constituição e distrato de sociedades, registros de livros societários fiscais e contábeis, e regularização de situação fiscal junto aos órgãos federais, estaduais e municipais.",
  },
];

export const plans = [
  { name: "MEI", description: "Micro Empreendedor Individual" },
  { name: "Simples Nacional", description: "Empresas do Simples Nacional" },
  { name: "Lucro Presumido", description: "Empresas de Lucro Presumido" },
  { name: "Construção Civil", description: "Empresas da Construção Civil" },
];

export type PlanCategory = {
  name: string;
  features: {
    label: string;
    values: (boolean | string)[];
    note?: string;
  }[];
};

export const planCategories: PlanCategory[] = [
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

export const additionalServices = [
  "IRPF (Imposto de renda pessoa física)",
  "Alteração Contratual (EI e LTDA)",
  "Alteração de Natureza Jurídica",
  "Preenchimento de Alvará",
  "Baixa MEI",
  "Taxa de Reprocessamento (em qualquer alteração ou constituição)",
  "Ativação de Inscrição Estadual",
  "Baixa empresa Lucro Presumido",
  "Baixa empresa Simples Nacional",
  "Declaração de Faturamento",
  "Autenticação de Livros na Junta",
  "Reemissão de Guias (impostos e outros)",
  "Formulários Diversos (bancos, fornecedores, etc)",
  "Parcelamento de Impostos",
  "Rescisão e Admissão de Funcionários",
  "Verificação de Pendências",
  "Migração de MEI para ME",
  "Retificação (DAS)",
  "Retificação de impostos",
  "Registro de marca",
  "LTCAT",
  "Certificado digital PF",
  "Certificado digital PJ",
];

export const citiesServed = [
  "Belo Horizonte",
  "Contagem",
  "Betim",
  "Ibirité",
  "Ribeirão das Neves",
  "Igarapé",
  "Bom Despacho",
];

export const pages = [
  {
    path: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    path: "/privacidade/",
    title: "Política de Privacidade - GCDIGICONT",
    description:
      "Política de Privacidade da GCDIGICONT. Saiba como coletamos, usamos e protegemos suas informações pessoais conforme a LGPD.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/termos/",
    title: "Termos de Uso - GCDIGICONT",
    description:
      "Termos e Condições de Uso dos serviços da GCDIGICONT. Conheça as regras e diretrizes para utilização dos nossos serviços contábeis.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];
