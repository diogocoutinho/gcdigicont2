"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Plans from "@/components/Plans";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* Skip Link para Acessibilidade - WCAG 2.1 */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-secondary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      >
        Pular para o conteúdo principal
      </a>

      <Header />
      <main id="conteudo-principal" className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Services />
        <Plans />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
