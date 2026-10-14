"use client";

import { FaWhatsapp } from "react-icons/fa";
import { m } from "framer-motion";
import { contact, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { smoothScroll } from "@/utils/smoothScroll";

// Chamadas das páginas de serviço: WhatsApp Comercial (evento whatsapp_click)
// e o formulário de contato da própria página (que dispara generate_lead).
export default function ServiceCTA({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
      <m.a
        href={whatsappLink(
          contact.whatsappComercial.waNumber,
          `Olá, gostaria de saber mais sobre o serviço de ${title} da GCDIGICONT!`
        )}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("whatsapp_click", {
            link_location: "pagina_servico",
            whatsapp_line: "comercial",
            service: slug,
          })
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-secondary text-background px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-secondary/30 transition-all text-center inline-flex items-center justify-center gap-2"
      >
        <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
        Falar no WhatsApp
      </m.a>
      <m.a
        href="#contato"
        onClick={(e) => {
          e.preventDefault();
          smoothScroll("contato");
        }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.95 }}
        className="glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center"
      >
        Enviar mensagem
      </m.a>
    </div>
  );
}
