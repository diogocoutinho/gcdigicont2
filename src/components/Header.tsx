"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { smoothScroll } from "@/utils/smoothScroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    smoothScroll(targetId);
    setIsMenuOpen(false);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      handleScroll(e, targetId);
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="GCDIGICONT Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <a
              href="#sobre"
              onClick={(e) => handleNavigation(e, "sobre")}
              className="text-light hover:text-secondary transition-colors cursor-pointer"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavigation(e, "servicos")}
              className="text-light hover:text-secondary transition-colors cursor-pointer"
            >
              Serviços
            </a>
            <a
              href="#planos"
              onClick={(e) => handleNavigation(e, "planos")}
              className="text-light hover:text-secondary transition-colors cursor-pointer"
            >
              Planos
            </a>
            <a
              href="#parceiros"
              onClick={(e) => handleNavigation(e, "parceiros")}
              className="text-light hover:text-secondary transition-colors cursor-pointer"
            >
              Parceiros
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavigation(e, "contato")}
              className="text-light hover:text-secondary transition-colors cursor-pointer"
            >
              Contato
            </a>
            <Link
              href="https://econtador.alterdata.com.br/"
              className="text-primary text-center hover:text-secondary transition-colors cursor-pointer bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
              target="_blank"
            >
              Área do Cliente
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
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
                  className="block h-6 w-6"
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
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#sobre"
            onClick={(e) => handleNavigation(e, "sobre")}
            className="block px-3 py-2 text-light hover:text-secondary cursor-pointer"
          >
            Sobre Nós
          </a>
          <a
            href="#servicos"
            onClick={(e) => handleNavigation(e, "servicos")}
            className="block px-3 py-2 text-light hover:text-secondary cursor-pointer"
          >
            Serviços
          </a>
          <a
            href="#planos"
            onClick={(e) => handleNavigation(e, "planos")}
            className="block px-3 py-2 text-light hover:text-secondary cursor-pointer"
          >
            Planos
          </a>
          <a
            href="#parceiros"
            onClick={(e) => handleNavigation(e, "parceiros")}
            className="block px-3 py-2 text-light hover:text-secondary cursor-pointer"
          >
            Parceiros
          </a>
          <a
            href="#contato"
            onClick={(e) => handleNavigation(e, "contato")}
            className="block px-3 py-2 text-light hover:text-secondary cursor-pointer"
          >
            Contato
          </a>
          <Link
            href="https://econtador.alterdata.com.br/"
            className="flex justify-center m-2 text-primary text-center hover:text-secondary transition-colors cursor-pointer bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(false)}
            target="_blank"
          >
            Área do Cliente
          </Link>
        </div>
      </div>
    </header>
  );
}
