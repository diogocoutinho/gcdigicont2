"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_BUTTON_NUMBER;
    const message =
      "Olá, gostaria de saber mais sobre os serviços da GCDIGICONT!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl group flex items-center justify-center"
      aria-label="Entrar em contato via WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden"></span>
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
        Fale Conosco
      </span>
    </button>
  );
}
