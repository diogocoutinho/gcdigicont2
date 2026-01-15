"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative w-full flex justify-center items-center group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.png"
                  alt="Equipe GCDIGICONT"
                  width={600}
                  height={750} // 4:5 aspect ratio roughly
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-light mb-6">
                Quem <span className="text-secondary">Somos</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprometida com a excelência no atendimento e satisfação de
                nossos clientes, a GCDIGICONT coloca a expertise na área contábil
                a disposição da sua empresa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-light mb-2">
                    Missão
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Oferecer soluções contábeis inovadoras e personalizadas que
                    contribuam para o sucesso e crescimento dos nossos clientes.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-light mb-2">Visão</h3>
                  <p className="text-gray-600 text-sm">
                    Ser referência em contabilidade digital, reconhecida pela
                    excelência no atendimento e inovação em soluções contábeis.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} width="100%">
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-5xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-lg text-gray-600 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-lg text-gray-600 font-medium">Digital</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
