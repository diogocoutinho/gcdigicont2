"use client";

import Image from "next/image";

export default function Partners() {
  return (
    <section id="parceiros" className="py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com empresas que compartilham nossos valores de inovação
            e excelência.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <a
            href="https://easydevsolucoes.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition-transform"
            title="EasyDev Soluções"
          >
            <Image
              src="https://easydevsolucoes.github.io/company/logoEasyDev.png"
              alt="EasyDev Soluções"
              width={280}
              height={280}
              className="object-contain h-36 w-auto"
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
