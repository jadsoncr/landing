import { landingCopy } from "@/lib/landingCopy";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { cta } = landingCopy;

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
            
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Soluções</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#servicos"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  >
                    Diagnóstico orientado a dados
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  >
                    Automação inteligente
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  >
                    Governança operacional
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Portfólio</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <a
                  href="https://broai-omega.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded inline-block"
                >
                  BRO.AI
                </a>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Controle de gastos, CMV real e automação inteligente.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Interpreta dados do negócio e sugere ações práticas para melhorar margem e previsibilidade.
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="https://duus.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded inline-block"
                >
                  DUUS
                </a>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clareza emocional aplicada à tomada de decisão.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Ajuda a transformar percepções difusas em decisões mais conscientes e eficazes.
                </p>
              </div>
            </div>
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
            <p className="mt-4 text-sm text-gray-500">
              Operações intensivas em atendimento, recorrência, custo e regulação.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jadsoncampos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
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
