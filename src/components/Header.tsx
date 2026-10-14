"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { smoothScroll } from "@/utils/smoothScroll";
import { m, AnimatePresence } from "framer-motion";
import { CLIENT_AREA_URL } from "@/data/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // Rolagem pedida pelo menu móvel: só acontece depois que o menu termina de
  // fechar, porque a animação de fechamento do framer-motion restaurava a
  // posição da página e cancelava a rolagem (os links do menu móvel não
  // levavam a lugar nenhum).
  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname !== "/") {
      window.location.assign(`/#${targetId}`);
      return;
    }

    if (isMenuOpen) {
      pendingScroll.current = targetId;
      setIsMenuOpen(false);
      return;
    }

    smoothScroll(targetId);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      handleScroll(e, targetId);
    } else {
      window.location.assign(`/#${targetId}`);
    }
  };

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen || !isHomePage ? "glass-strong shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 relative z-50">
              <Image
                src="/logo-dark.png"
                alt="GCDIGICONT Logo"
                width={220}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <a
              href="#sobre"
              onClick={(e) => handleNavigation(e, "sobre")}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavigation(e, "servicos")}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
            >
              Serviços
            </a>
            <a
              href="#planos"
              onClick={(e) => handleNavigation(e, "planos")}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
            >
              Planos
            </a>
            <a
              href="#parceiros"
              onClick={(e) => handleNavigation(e, "parceiros")}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
            >
              Parceiros
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavigation(e, "contato")}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
            >
              Contato
            </a>
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={CLIENT_AREA_URL}
                className="text-primary text-center bg-secondary hover:bg-white hover:text-secondary shadow-lg py-2.5 px-6 rounded-lg font-bold text-sm transition-all duration-300 border-2 border-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Área do Cliente
              </Link>
            </m.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingScroll.current) {
            smoothScroll(pendingScroll.current);
            pendingScroll.current = null;
          }
        }}
      >
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="menu-mobile"
            className="sm:hidden glass-strong border-t border-white/10"
          >
            <div className="pt-2 pb-6 space-y-1 px-4">
              <a
                href="#sobre"
                onClick={(e) => handleNavigation(e, "sobre")}
                className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleNavigation(e, "servicos")}
                className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                Serviços
              </a>
              <a
                href="#planos"
                onClick={(e) => handleNavigation(e, "planos")}
                className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                Planos
              </a>
              <a
                href="#parceiros"
                onClick={(e) => handleNavigation(e, "parceiros")}
                className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                Parceiros
              </a>
              <a
                href="#contato"
                onClick={(e) => handleNavigation(e, "contato")}
                className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md"
              >
                Contato
              </a>
              <div className="pt-4">
                <Link
                  href={CLIENT_AREA_URL}
                  className="block w-full text-center text-primary bg-secondary hover:bg-secondary/90 py-3 px-6 rounded-lg font-bold text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Área do Cliente
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
