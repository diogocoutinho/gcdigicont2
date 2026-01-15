"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Partners() {
  return (
    <section id="parceiros" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
              Nossos <span className="text-secondary">Parceiros</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com empresas que compartilham nossos valores de inovação
              e excelência.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a
              href="https://easydevsolucoes.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100"
              title="EasyDev Soluções"
            >
              <Image
                src="https://easydevsolucoes.com.br/company/logoEasyDev.png"
                alt="EasyDev Soluções"
                width={280}
                height={280}
                className="object-contain h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
