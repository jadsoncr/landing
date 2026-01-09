"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Governança CMV
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#servicos"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#segmentos"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Segmentos
              </Link>
              <Link
                href="#como-funciona"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Como funciona
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <a
                href="https://wa.me/5521988551085"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild size="sm">
              <Link href="#diagnostico">Agendar diagnóstico</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
