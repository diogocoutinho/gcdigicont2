"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contact, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

// Botão flutuante: abre o WhatsApp Comercial. O número antes vinha de uma
// variável de ambiente que não existia no deploy, e o link abria
// "wa.me/undefined" no site publicado.
const WHATSAPP_URL = whatsappLink(
  contact.whatsappComercial.waNumber,
  "Olá, gostaria de saber mais sobre os serviços da GCDIGICONT!"
);

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      link_location: "botao_flutuante",
      whatsapp_line: "comercial",
    });
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl group flex items-center justify-center"
      aria-label="Entrar em contato via WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden"></span>
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}
