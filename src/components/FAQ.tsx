"use client";

import { FaChevronDown } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { faq } from "@/data/site";

// Perguntas frequentes da home. Textos em src/data/site.ts (`faq`), os mesmos
// usados no JSON-LD FAQPage. As respostas ficam no HTML (abrem com clique).
export default function FAQ() {
  return (
    <section id="perguntas-frequentes" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
              Perguntas <span className="text-secondary">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <details
              key={item.question}
              className="group bg-gray-50 rounded-2xl border border-gray-100 open:bg-white open:shadow-lg open:border-secondary/20 transition-all"
              {...(index === 0 && { open: true })}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-lg font-bold text-light transition-colors [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-2xl">
                <h3>{item.question}</h3>
                <FaChevronDown
                  className="w-4 h-4 shrink-0 text-secondary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 -mt-2 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
