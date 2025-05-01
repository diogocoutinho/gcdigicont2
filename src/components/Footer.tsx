"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { smoothScroll } from "@/utils/smoothScroll";

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
    <footer className="bg-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-dark.png"
              alt="GCDIGICONT Logo"
              width={280}
              height={280}
              className="mb-6"
            />
            <p className="text-gray-100">
              Soluções contábeis digitais para o sucesso do seu negócio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavigation(e, "servicos")}
                  className="text-gray-100 hover:text-secondary cursor-pointer"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavigation(e, "sobre")}
                  className="text-gray-100 hover:text-secondary cursor-pointer"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavigation(e, "contato")}
                  className="text-gray-100 hover:text-secondary cursor-pointer"
                >
                  Contato
                </a>
              </li>
              <li>
                <Link
                  href="/area-cliente"
                  className="text-gray-100 hover:text-secondary"
                >
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-100">Contabilidade</li>
              <li className="text-gray-100">Consultoria</li>
              <li className="text-gray-100">Folha de Pagamento</li>
              <li className="text-gray-100">Fiscal</li>
              <li className="text-gray-100">Legalização</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-secondary"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-secondary"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-secondary"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-100 text-sm">
              © {new Date().getFullYear()} GCDIGICONT. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacidade"
                className="text-gray-100 hover:text-secondary text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-100 hover:text-secondary text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
