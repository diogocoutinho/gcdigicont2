"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5531993602476";
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco
      </span>
    </button>
  );
}
