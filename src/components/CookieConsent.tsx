"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  consentEvents,
  getConsent,
  loadAnalytics,
  setConsent,
} from "@/lib/analytics";

// Aviso de cookies discreto, nas cores do site. Só aparece no navegador
// (não faz parte do HTML estático), então não desloca o layout.
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const current = getConsent();
    if (current === "granted") loadAnalytics();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura única do armazenamento local após montar
    if (current === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(consentEvents.OPEN_BANNER_EVENT, reopen);
    return () =>
      window.removeEventListener(consentEvents.OPEN_BANNER_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed z-[60] bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-background text-white border border-white/10 rounded-xl shadow-2xl p-4 text-sm"
    >
      <p className="text-gray-200 leading-relaxed">
        Usamos cookies de análise (Google Analytics) para entender como o site
        é usado, somente com a sua permissão. Saiba mais na{" "}
        <Link
          href="/privacidade/"
          className="text-secondary underline hover:text-white"
        >
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-3 justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-4 py-2 rounded-lg border border-white/30 text-gray-100 hover:bg-white/10 transition-colors"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-4 py-2 rounded-lg bg-secondary text-background font-bold hover:bg-white transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
