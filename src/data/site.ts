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

/**
 * Google Analytics. O fluxo da propriedade GCDIGICONT (G-YKE4ERKDJP) está combinado na tag do Google "GCDigiCont"
 * (G-SY4G9E0XZY), e o Google só serve o gtag.js pelo ID da tag: carregar com G-YKE4ERKDJP dá 404 e nada é medido.
 * O gtag carrega e configura a tag; ela entrega os dados aos destinos configurados no Analytics.
 */
export const GA_TAG_ID = "G-SY4G9E0XZY";
/** Destinos da tag (para o opt-out por ID). */
export const GA_DESTINATIONS = [GA_TAG_ID, "G-YKE4ERKDJP"] as const;

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

// Serviços. `title` e `description` são os textos que já estavam no site.
// Os campos `slug`, `metaTitle`, `metaDescription`, `details`, `audience` e
// `relatedExtras` alimentam as páginas /servicos/<slug>/ (textos novos
// de out/2026, montados só com o que o site já diz + definições gerais;
// aguardam aprovação do cliente). `relatedExtras` usa itens exatos de
// `additionalServices`.
export type Service = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  details: { title: string; text: string }[];
  audience: string[];
  relatedExtras: string[];
};

export const services: Service[] = [
  {
    slug: "contabilidade",
    title: "Contabilidade",
    description:
      "Informações contábeis que auxiliam as tomadas de decisões da sua empresa de forma personalizada e dinâmica. Incluindo balancetes mensais, balanço patrimonial e demonstração de resultado do exercício.",
    metaTitle: "Contabilidade Digital para Empresas em BH e Região - GCDIGICONT",
    metaDescription:
      "Contabilidade digital com balancetes mensais, balanço patrimonial e DRE para MEI, Simples Nacional, Lucro Presumido e Construção Civil em BH e região.",
    details: [
      {
        title: "Balancetes mensais",
        text: "O balancete é o resumo, mês a mês, dos saldos das contas da empresa. Ele mostra como estão receitas, despesas, bens e obrigações ao longo do ano, sem esperar o fechamento.",
      },
      {
        title: "Balanço patrimonial",
        text: "Demonstração que apresenta, em uma data, o que a empresa tem (ativo), o que deve (passivo) e o patrimônio dos sócios (patrimônio líquido).",
      },
      {
        title: "Demonstração de resultado do exercício (DRE)",
        text: "Relatório que mostra se a empresa teve lucro ou prejuízo no período, a partir das receitas, custos e despesas.",
      },
      {
        title: "Obrigações contábeis e legais",
        text: "Nos planos, a contabilidade completa inclui todas as obrigações contábeis e legais com a Receita Federal, Estadual e Municipal.",
      },
    ],
    audience: [
      "Microempreendedores individuais (MEI)",
      "Empresas do Simples Nacional",
      "Empresas de Lucro Presumido",
      "Empresas da Construção Civil",
    ],
    relatedExtras: [
      "Declaração de Faturamento",
      "Autenticação de Livros na Junta",
      "Formulários Diversos (bancos, fornecedores, etc)",
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    description:
      "Planejamento tributário especializado, restituição e compensação de impostos, além de defesa administrativa de autos de infração e regularidade fiscal.",
    metaTitle: "Consultoria e Planejamento Tributário em BH - GCDIGICONT",
    metaDescription:
      "Planejamento tributário, restituição e compensação de impostos, defesa administrativa de autos de infração e regularidade fiscal. Fale com a GCDIGICONT.",
    details: [
      {
        title: "Planejamento tributário",
        text: "Análise, dentro da lei, da forma de tributação mais adequada para a empresa, como a escolha entre Simples Nacional e Lucro Presumido. Na abertura, a GCDIGICONT indica o melhor regime tributário e as atividades.",
      },
      {
        title: "Restituição e compensação de impostos",
        text: "Quando a empresa paga imposto a mais ou de forma indevida, é possível pedir a devolução (restituição) ou usar o valor para abater tributos futuros (compensação).",
      },
      {
        title: "Defesa administrativa de autos de infração",
        text: "Elaboração da defesa junto ao próprio órgão fiscal quando a empresa recebe um auto de infração, antes de qualquer discussão na Justiça.",
      },
      {
        title: "Regularidade fiscal",
        text: "Acompanhamento para manter a empresa sem pendências com o fisco, o que é necessário, por exemplo, para emitir certidões negativas.",
      },
    ],
    audience: [
      "Empresas que querem pagar os tributos no regime mais adequado",
      "Quem recebeu um auto de infração ou tem pendências com o fisco",
      "Empresas que pagaram imposto a mais e querem recuperar o valor",
    ],
    relatedExtras: [
      "Parcelamento de Impostos",
      "Verificação de Pendências",
      "Retificação de impostos",
    ],
  },
  {
    slug: "folha-de-pagamento",
    title: "Folha de Pagamento",
    description:
      "Gestão completa da folha de pagamento, incluindo registros dos profissionais, elaboração de informações para o Ministério do Trabalho e assessoria trabalhista e previdenciária.",
    metaTitle: "Folha de Pagamento e Departamento Pessoal em BH - GCDIGICONT",
    metaDescription:
      "Gestão completa da folha de pagamento: registros dos profissionais, informações para o Ministério do Trabalho e assessoria trabalhista e previdenciária.",
    details: [
      {
        title: "Gestão completa da folha",
        text: "Cálculo e organização mensal da remuneração dos funcionários e do pró-labore dos sócios. Nos planos Simples Nacional, Lucro Presumido e Construção Civil, a folha cobre até 2 integrantes (2 sócios ou 1 sócio e 1 funcionário); acima disso é cobrado R$ 29,90 por integrante extra.",
      },
      {
        title: "Registros dos profissionais",
        text: "Registro de funcionários conforme a legislação trabalhista, incluindo admissões e rescisões (disponíveis como serviço adicional).",
      },
      {
        title: "Informações para o Ministério do Trabalho",
        text: "Elaboração das informações trabalhistas que a empresa precisa prestar ao governo.",
      },
      {
        title: "Assessoria trabalhista e previdenciária",
        text: "Orientação sobre direitos e obrigações trabalhistas e sobre contribuições à Previdência Social.",
      },
    ],
    audience: [
      "Empresas com funcionários registrados",
      "Sócios que recebem pró-labore",
    ],
    relatedExtras: ["Rescisão e Admissão de Funcionários", "LTCAT"],
  },
  {
    slug: "fiscal",
    title: "Fiscal",
    description:
      "Apuração de impostos e elaborações de declarações acessórias com precisão e pontualidade.",
    metaTitle: "Contabilidade Fiscal e Apuração de Impostos em BH - GCDIGICONT",
    metaDescription:
      "Apuração de impostos e elaboração de declarações acessórias com precisão e pontualidade para empresas em BH e região. Fale com a GCDIGICONT.",
    details: [
      {
        title: "Apuração de impostos",
        text: "Cálculo dos tributos que a empresa deve pagar a cada período, de acordo com o regime tributário da empresa (MEI, Simples Nacional ou Lucro Presumido).",
      },
      {
        title: "Declarações acessórias",
        text: "Obrigações acessórias são as declarações e informações que a empresa precisa entregar ao fisco, além de pagar os impostos. A entrega fora do prazo pode gerar multa.",
      },
    ],
    audience: [
      "Microempreendedores individuais (MEI)",
      "Empresas do Simples Nacional",
      "Empresas de Lucro Presumido",
      "Empresas da Construção Civil",
    ],
    relatedExtras: [
      "Reemissão de Guias (impostos e outros)",
      "Retificação (DAS)",
      "Retificação de impostos",
      "Parcelamento de Impostos",
    ],
  },
  {
    slug: "legalizacao",
    title: "Legalização",
    description:
      "Constituição e distrato de sociedades, registros de livros societários fiscais e contábeis, e regularização de situação fiscal junto aos órgãos federais, estaduais e municipais.",
    metaTitle: "Abertura e Legalização de Empresas em BH - GCDIGICONT",
    metaDescription:
      "Abertura (constituição) e encerramento (distrato) de sociedades, registro de livros e regularização fiscal junto aos órgãos federais, estaduais e municipais.",
    details: [
      {
        title: "Constituição de sociedades (abertura)",
        text: "Processo de abertura gratuito nos planos: você paga apenas as taxas do governo e realiza os protocolos físicos. A GCDIGICONT indica o melhor regime tributário e as atividades, e você recebe a documentação de abertura via Correios ou WhatsApp, dependendo do município. A gratuidade vale para contrato de planos com mínimo de 24 meses.",
      },
      {
        title: "Distrato de sociedades (encerramento)",
        text: "O distrato é o documento que formaliza o fim da sociedade. Ele é registrado para encerrar a empresa de forma regular.",
      },
      {
        title: "Registro de livros societários, fiscais e contábeis",
        text: "Registro dos livros obrigatórios da empresa nos órgãos competentes, como a autenticação de livros na Junta Comercial.",
      },
      {
        title: "Regularização fiscal",
        text: "Regularização da situação da empresa junto aos órgãos federais, estaduais e municipais.",
      },
    ],
    audience: [
      "Quem vai abrir uma empresa",
      "Empresas que precisam alterar o contrato social ou a natureza jurídica",
      "Quem precisa encerrar uma empresa ou dar baixa no MEI",
      "Empresas com pendências junto aos órgãos públicos",
    ],
    relatedExtras: [
      "Alteração Contratual (EI e LTDA)",
      "Alteração de Natureza Jurídica",
      "Migração de MEI para ME",
      "Baixa MEI",
      "Baixa empresa Simples Nacional",
      "Baixa empresa Lucro Presumido",
      "Preenchimento de Alvará",
      "Ativação de Inscrição Estadual",
      "Registro de marca",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

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

// Resumo exibido no topo da home, logo abaixo do subtítulo (texto novo de
// out/2026, só com fatos que o site já publica; aguarda aprovação do cliente).
export const HERO_INTRO =
  "A GCDIGICONT é uma contabilidade digital que cuida da contabilidade, consultoria tributária, folha de pagamento, área fiscal e legalização de empresas. Atende MEI e empresas do Simples Nacional, do Lucro Presumido e da Construção Civil em Belo Horizonte, Contagem, Betim, Ibirité, Ribeirão das Neves, Igarapé e Bom Despacho (MG), com atendimento por e-mail, telefone ou WhatsApp, direto com o seu contador.";

// Perguntas frequentes da home (texto novo de out/2026). As respostas usam
// apenas o que o site já diz + definições gerais. Alimentam a seção visível
// e o JSON-LD FAQPage da home. Aguardam aprovação do cliente.
export const faq: { question: string; answer: string }[] = [
  {
    question: "Quais serviços a GCDIGICONT oferece?",
    answer:
      "Contabilidade (balancetes mensais, balanço patrimonial e demonstração de resultado do exercício), consultoria (planejamento tributário, restituição e compensação de impostos, defesa administrativa de autos de infração), folha de pagamento, fiscal (apuração de impostos e declarações acessórias) e legalização (abertura, distrato e regularização de empresas). Também há serviços avulsos, como IRPF, alteração contratual, baixa de empresa, certificado digital e registro de marca.",
  },
  {
    question: "Para quais tipos de empresa são os planos?",
    answer:
      "Há quatro planos: MEI (Microempreendedor Individual), Simples Nacional, Lucro Presumido e Construção Civil. Todos incluem a contabilidade completa, com as obrigações contábeis e legais com a Receita Federal, Estadual e Municipal. Os valores não são publicados no site: consulte pelo WhatsApp ou pelo formulário de contato.",
  },
  {
    question: "A abertura da empresa é gratuita?",
    answer:
      "Sim, nos planos o processo de abertura é gratuito: você paga apenas as taxas do governo e realiza os protocolos físicos. A GCDIGICONT indica o melhor regime tributário e as atividades, e você recebe a documentação via Correios ou WhatsApp, dependendo do município. A gratuidade vale para contrato de planos com mínimo de 24 meses.",
  },
  {
    question: "Em quais cidades a GCDIGICONT atende?",
    answer:
      "Belo Horizonte, Contagem, Betim, Ibirité, Ribeirão das Neves, Igarapé e Bom Despacho, em Minas Gerais.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      `O atendimento é por e-mail, telefone ou WhatsApp, falando diretamente com o seu contador. ${contact.whatsappComercial.label}: ${contact.whatsappComercial.display}. ${contact.whatsappSuporte.label}: ${contact.whatsappSuporte.display}. E-mail: ${contact.email}.`,
  },
  {
    question: "O que é a Área do Cliente?",
    answer:
      "É o acesso para clientes, pelo botão \"Área do Cliente\" no topo e no rodapé do site, que abre o portal eContador (Alterdata). Em caso de dúvida no acesso, fale com o WhatsApp Suporte.",
  },
  {
    question: "O que é MEI?",
    answer:
      "MEI é o Microempreendedor Individual, categoria criada pela Lei Complementar nº 128/2008 para formalizar pequenos negócios de forma simplificada, com os tributos pagos em valor fixo mensal por meio do DAS. O plano MEI da GCDIGICONT é indicado para faturamento de até R$ 6.750,00 por mês.",
  },
  {
    question: "Qual a diferença entre Simples Nacional e Lucro Presumido?",
    answer:
      "O Simples Nacional (Lei Complementar nº 123/2006) é um regime para micro e pequenas empresas que reúne vários tributos em uma guia única. No Lucro Presumido, o IRPJ e a CSLL são calculados sobre uma margem de lucro definida em lei conforme a atividade, e os demais tributos são apurados separadamente. Na abertura, a GCDIGICONT indica o regime mais adequado para a sua empresa.",
  },
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
  ...services.map((s) => ({
    path: `/servicos/${s.slug}/`,
    title: s.metaTitle,
    description: s.metaDescription,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  })),
];
