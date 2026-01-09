import Link from "next/link";
import { landingCopy } from "@/lib/landingCopy";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { cta, hero } = landingCopy;

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-premium py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">JC</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Jadson Campos
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Arquiteto de Soluções Operacionais. Eficiência operacional com automação inteligente e governança.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Diagnóstico orientado a dados
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Automação inteligente
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Governança operacional
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Segmentos</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600">Restaurantes</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Clínicas</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Hospitais</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Serviços recorrentes</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${cta.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {cta.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Jadson Campos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
