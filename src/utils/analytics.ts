// Utilitário para rastreamento de eventos do Google Analytics 4
// Documentação: https://developers.google.com/analytics/devguides/collection/ga4/events

declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Rastreia um evento personalizado no GA4
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/**
 * Eventos pré-definidos para o site GCDIGICONT
 */
export const analytics = {
  // Clique no botão de WhatsApp
  whatsappClick: () => {
    trackEvent("whatsapp_click", {
      event_category: "engagement",
      event_label: "WhatsApp Button",
    });
  },

  // Clique no CTA "Fale Conosco"
  ctaClick: (ctaName: string, location: string) => {
    trackEvent("cta_click", {
      event_category: "engagement",
      event_label: ctaName,
      cta_location: location,
    });
  },

  // Envio do formulário de contato
  formSubmit: (success: boolean) => {
    trackEvent("contact_form_submit", {
      event_category: "conversion",
      event_label: success ? "success" : "error",
    });
  },

  // Início do preenchimento do formulário
  formStart: () => {
    trackEvent("contact_form_start", {
      event_category: "engagement",
      event_label: "Form Started",
    });
  },

  // Clique em link de telefone
  phoneClick: () => {
    trackEvent("phone_click", {
      event_category: "engagement",
      event_label: "Phone Number",
    });
  },

  // Clique em link de email
  emailClick: () => {
    trackEvent("email_click", {
      event_category: "engagement",
      event_label: "Email Link",
    });
  },

  // Visualização de seção (scroll tracking)
  sectionView: (sectionName: string) => {
    trackEvent("section_view", {
      event_category: "engagement",
      event_label: sectionName,
    });
  },

  // Clique em plano específico
  planClick: (planName: string) => {
    trackEvent("plan_click", {
      event_category: "engagement",
      event_label: planName,
    });
  },

  // Clique em serviço específico
  serviceClick: (serviceName: string) => {
    trackEvent("service_click", {
      event_category: "engagement",
      event_label: serviceName,
    });
  },

  // Clique em rede social
  socialClick: (platform: string) => {
    trackEvent("social_click", {
      event_category: "engagement",
      event_label: platform,
    });
  },

  // Clique em "Área do Cliente"
  clientAreaClick: () => {
    trackEvent("client_area_click", {
      event_category: "engagement",
      event_label: "Client Portal",
    });
  },
};
