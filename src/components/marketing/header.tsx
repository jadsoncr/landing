"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { landingCopy } from "@/lib/landingCopy";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/80 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Left side: Logo + Brand + Nav */}
          <div className="flex items-center gap-3 sm:gap-8 min-w-0">
            {/* Logo + Brand - Responsive text visibility */}
            <Link 
              href="/" 
              className="flex items-center gap-2 min-w-0 shrink-0"
              aria-label="Jadson Campos - Página inicial"
            >
              {/* Logo - sempre visível em desktop, escondida apenas em mobile muito pequeno */}
              <img 
                src="/logo.svg" 
                alt="Logo Jadson Campos" 
                className="h-10 sm:h-12 w-auto flex-shrink-0"
              />
              {/* Nome completo sempre visível */}
              <span className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
                Jadson Campos
              </span>
            </Link>

            {/* Desktop navigation - hidden on mobile/tablet */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#servicos"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
              >
                Soluções
              </a>
              <a
                href="#segmentos"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
              >
                Segmentos
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
              >
                Como funciona
              </a>
            </nav>
          </div>

          {/* Right side: WhatsApp + CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp - Icon only on mobile, full button on >= 640px */}
            <Button 
              asChild 
              variant="ghost" 
              size="sm" 
              className="hidden xs:flex sm:inline-flex"
              aria-label="Contato via WhatsApp"
            >
              <a
                href={`https://wa.me/${cta.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {/* Text hidden on < 640px */}
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>

            {/* Primary CTA - Always visible, text responsive */}
            <Button asChild size="sm" className="text-xs sm:text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap"
              >
                {/* Shorter text on mobile */}
                <span className="inline sm:hidden">Agendar</span>
                <span className="hidden sm:inline">Agendar diagnóstico</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
