"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about.webp"
              alt="Equipe GCDIGICONT"
              fill
              className="object-cover absolute"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprometida com a excelência no atendimento e satisfação de
              nossos clientes, a GCDIGICONT coloca a expertise na área contábil
              a disposição da sua empresa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-light mb-2">
                  Missão
                </h3>
                <p className="text-gray-600">
                  Oferecer soluções contábeis inovadoras e personalizadas que
                  contribuam para o sucesso e crescimento dos nossos clientes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-light mb-2">Visão</h3>
                <p className="text-gray-600">
                  Ser referência em contabilidade digital, reconhecida pela
                  excelência no atendimento e inovação em soluções contábeis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">10+</div>
            <div className="text-lg text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-lg text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-lg text-gray-600">Digital</div>
          </div>
        </div>
      </div>
    </section>
  );
}
