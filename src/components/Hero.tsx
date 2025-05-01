"use client";

import Image from "next/image";
import { smoothScroll } from "@/utils/smoothScroll";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Profissionais GCDIGICONT"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-white space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Contabilidade Digital para o{" "}
                <span className="text-secondary">Sucesso</span> do seu Negócio
              </h1>
              <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto">
                Soluções contábeis modernas e personalizadas para empresas que
                buscam crescimento e eficiência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="#contato"
                onClick={(e) => handleScroll(e, "contato")}
                className="btn-secondary inline-block text-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-secondary/90 hover:scale-105 transform shadow-lg hover:shadow-secondary/20"
              >
                Fale Conosco
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleScroll(e, "servicos")}
                className="btn-primary bg-white/10 inline-block text-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-white/20 hover:scale-105 transform shadow-lg hover:shadow-white/10"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="pt-12">
              <p className="text-gray-200 mb-6 text-base font-medium text-center">
                Confie em quem entende:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10 border border-white/10">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    +500
                  </div>
                  <div className="text-xs text-gray-200 font-medium">
                    Clientes Atendidos
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10 border border-white/10">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    15+
                  </div>
                  <div className="text-xs text-gray-200 font-medium">
                    Anos de Experiência
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10 border border-white/10">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-200 font-medium">
                    Digital
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent z-10" />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </section>
  );
}
