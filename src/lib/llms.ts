// Gera /llms.txt e /llms-full.txt a partir de src/data/site.ts, para que os
// arquivos lidos por buscadores de IA nunca fiquem diferentes do site.
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_SUMMARY,
  CLIENT_AREA_URL,
  contact,
  services,
  plans,
  planCategories,
  additionalServices,
  citiesServed,
  pages,
} from "@/data/site";

function header() {
  return [
    `# ${SITE_NAME} - Contabilidade Digital`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    SITE_SUMMARY,
    "",
  ];
}

function contactLines() {
  return [
    "## Contato",
    "",
    `- E-mail: ${contact.email}`,
    `- ${contact.whatsappComercial.label}: ${contact.whatsappComercial.display} (https://wa.me/${contact.whatsappComercial.waNumber})`,
    `- ${contact.whatsappSuporte.label}: ${contact.whatsappSuporte.display} (https://wa.me/${contact.whatsappSuporte.waNumber})`,
    `- Formulário de contato: ${SITE_URL}/#contato`,
    `- Área do Cliente: ${CLIENT_AREA_URL}`,
    "",
  ];
}

export function llmsTxt() {
  return [
    ...header(),
    "## Páginas",
    "",
    ...pages.map((p) => `- [${p.title}](${SITE_URL}${p.path}): ${p.description}`),
    `- [Conteúdo completo em texto](${SITE_URL}/llms-full.txt): serviços, planos, serviços avulsos e cidades atendidas`,
    "",
    "## Serviços",
    "",
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    "",
    "## Planos",
    "",
    ...plans.map((p) => `- ${p.name}: ${p.description}`),
    "",
    "## Cidades atendidas",
    "",
    citiesServed.join(", ") + " (Minas Gerais).",
    "",
    ...contactLines(),
  ].join("\n");
}

function cell(v: boolean | string) {
  if (v === true) return "incluído";
  if (v === false) return "não incluído";
  return v.trim() === "" ? "não se aplica" : v;
}

export function llmsFullTxt() {
  const planSections = plans.flatMap((plan, i) => [
    `### Plano ${plan.name}`,
    "",
    `Para: ${plan.description}.`,
    "",
    ...planCategories.flatMap((cat) =>
      cat.features.map((f) => `- ${cat.name} - ${f.label}: ${cell(f.values[i])}`)
    ),
    "",
  ]);
  const notes = planCategories.flatMap((cat) =>
    cat.features.filter((f) => f.note).map((f) => `- ${f.label}: ${f.note!.trim()}`)
  );
  return [
    ...header(),
    `Site: ${SITE_URL}/`,
    "",
    "## Serviços",
    "",
    ...services.flatMap((s) => [`### ${s.title}`, "", s.description, ""]),
    "Atendimento exclusivo: disponível por e-mail, telefone ou WhatsApp. Fale diretamente com seu contador.",
    "",
    "## Planos",
    "",
    "Os valores dos planos não são publicados no site; consulte pelos canais de contato.",
    "",
    ...planSections,
    "### Observações dos planos",
    "",
    ...notes,
    "",
    "## Serviços adicionais (avulsos, consulte valores)",
    "",
    ...additionalServices.map((s) => `- ${s}`),
    "",
    "## Cidades atendidas",
    "",
    ...citiesServed.map((c) => `- ${c} (MG)`),
    "",
    ...contactLines(),
    "## Páginas",
    "",
    ...pages.map((p) => `- ${SITE_URL}${p.path}: ${p.title}`),
    "",
  ].join("\n");
}
