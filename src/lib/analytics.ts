// Medição com consentimento (LGPD): o Google Analytics só é carregado depois
// que o visitante aceita os cookies no aviso. Antes disso nenhum script de
// medição é baixado e nenhum evento é enviado.
import { GA_DESTINATIONS, GA_TAG_ID } from "@/data/site";

export type ConsentValue = "granted" | "denied";

const CONSENT_KEY = "gc-cookie-consent";
const CONSENT_EVENT = "gc-consent-change";
const OPEN_BANNER_EVENT = "gc-open-cookie-banner";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function getConsent(): ConsentValue | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // navegação privada / armazenamento bloqueado: vale só para esta visita
  }
  if (value === "granted") {
    loadAnalytics();
  } else {
    disableAnalytics();
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Reabre o aviso de cookies (link na Política de Privacidade). */
export function openCookieBanner() {
  window.dispatchEvent(new CustomEvent(OPEN_BANNER_EVENT));
}

export const consentEvents = { CONSENT_EVENT, OPEN_BANNER_EVENT };

let loaded = false;

export function loadAnalytics() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  // Desfaz um eventual opt-out anterior nesta mesma visita.
  for (const id of GA_DESTINATIONS) (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_TAG_ID);

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`;
  document.head.appendChild(s);
}

function disableAnalytics() {
  for (const id of GA_DESTINATIONS) (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
  // Remove os cookies _ga* do domínio, caso existam de um aceite anterior.
  try {
    const host = window.location.hostname.replace(/^www\./, "");
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name.startsWith("_ga")) {
        for (const domain of ["", `; domain=.${host}`, `; domain=${host}`]) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
        }
      }
    });
  } catch {
    // ignora
  }
}

const lastSent = new Map<string, number>();

/**
 * Envia um evento ao GA4 somente se houver consentimento.
 * Ignora repetições idênticas em menos de 1,5 s (clique duplo, re-render),
 * para não haver disparo duplicado.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || getConsent() !== "granted") return;
  const key = `${name}|${JSON.stringify(params)}`;
  const now = Date.now();
  if (now - (lastSent.get(key) ?? 0) < 1500) return;
  lastSent.set(key, now);
  loadAnalytics();
  window.gtag?.("event", name, params);
}
