import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-premium py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Governança CMV
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Governança mensal de CMV e operação para restaurantes, clínicas e serviços recorrentes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Governança de CMV
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Processos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Gestão de Perdas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Segmentos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/segmentos/restaurantes"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Restaurantes e Bares
                </Link>
              </li>
              <li>
                <Link
                  href="/segmentos/clinicas"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Clínicas e Consultórios
                </Link>
              </li>
              <li>
                <Link
                  href="/segmentos/servicos-recorrentes"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Serviços Recorrentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5521988551085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  WhatsApp: (21) 98855-1085
                </a>
              </li>
              <li>
                <Link
                  href="#diagnostico"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Agendar diagnóstico
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Governança CMV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
