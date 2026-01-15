"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { smoothScroll } from "@/utils/smoothScroll";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const pathname = usePathname();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      smoothScroll(targetId);
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1a202c] to-[#0e2b3a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="bg-white p-2 rounded-lg inline-block mb-6 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="GCDIGICONT Logo"
                  width={200}
                  height={200}
                  className="w-48 h-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Soluções contábeis digitais modernas e personalizadas para impulsionar o sucesso do seu negócio com eficiência e segurança.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Links Rápidos</h3>
              <ul className="space-y-3">
                {[
                  { label: "Serviços", id: "servicos" },
                  { label: "Planos", id: "planos" },
                  { label: "Sobre Nós", id: "sobre" },
                  { label: "Parceiros", id: "parceiros" },
                  { label: "Contato", id: "contato" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavigation(e, link.id)}
                      className="text-gray-300 hover:text-secondary transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="https://econtador.alterdata.com.br/"
                    target="_blank"
                    className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    Área do Cliente
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Especialidades</h3>
              <ul className="space-y-3">
                {[
                  "Contabilidade Digital",
                  "Consultoria Empresarial",
                  "Gestão de Folha",
                  "Planejamento Fiscal",
                  "Legalização de Empresas"
                ].map((item) => (
                  <li key={item} className="text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Conecte-se</h3>
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/gcdigicont" },
                  { icon: FaFacebook, href: "https://www.facebook.com/gcdigicont" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/gcdigicont" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-400 mb-1">Precisa de ajuda?</p>
                <div className="font-bold text-secondary text-lg">
                  (31) 98752-9716
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GCDIGICONT. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-white/5 pt-4">
            <p className="text-gray-500 text-xs flex justify-center items-center gap-1 flex-wrap">
              Desenvolvido por{" "}
              <a
                href="https://easydevsolucoes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 font-medium"
              >
                EasyDev Soluções
              </a>
              {" "}através de{" "}
              <a
                href="https://diogocoutinho.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 font-medium"
              >
                Diogo Coutinho
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
