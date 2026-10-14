"use client";

import Image from "next/image";
import { smoothScroll } from "@/utils/smoothScroll";

import { m } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HERO_INTRO } from "@/data/site";

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
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="animate-hero-zoom relative w-full h-full">
          <Image
            src="/hero-bg.webp"
            alt="Profissionais GCDIGICONT"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-white space-y-8 text-center sm:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up">
                Contabilidade Digital para o{" "}
                <span className="text-gradient drop-shadow-lg">Sucesso</span> do
                seu Negócio
              </h1>

              <ScrollReveal delay={0.2} width="100%">
                <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
                  Soluções contábeis modernas e personalizadas para empresas que
                  buscam crescimento, eficiência e tranquilidade fiscal.
                </p>
              </ScrollReveal>

              {/* Resumo: o que é, para quem e onde atende (src/data/site.ts). */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0 leading-relaxed border-l-0 sm:border-l-2 sm:border-secondary sm:pl-4">
                {HERO_INTRO}
              </p>
            </div>

            <ScrollReveal delay={0.4} width="100%">
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start pt-4">
                <m.a
                  href="#contato"
                  onClick={(e) => handleScroll(e, "contato")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-background px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-secondary/30 transition-all text-center"
                >
                  Fale Conosco
                </m.a>
                <m.a
                  href="#servicos"
                  onClick={(e) => handleScroll(e, "servicos")}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
                >
                  Nossos Serviços
                </m.a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6} width="100%">
              <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: "+500", label: "Clientes Atendidos" },
                  { value: "15+", label: "Anos de Experiência" },
                  { value: "100%", label: "Digital & Humanizado" },
                ].map((stat, index) => (
                  <m.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass p-6 rounded-xl text-center border-t border-white/20 hover:bg-white/5 transition-colors"
                  >
                    <div className="text-4xl font-bold text-secondary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </m.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />


    </section>
  );
}
