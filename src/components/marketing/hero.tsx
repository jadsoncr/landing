import { landingCopy } from "@/lib/landingCopy";

export function Hero() {
  const { cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section className="relative bg-white py-24 sm:py-32 lg:py-40 pb-40 sm:pb-52 lg:pb-64">
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Layer 1: CONTEXT */}
          <p className="text-base font-medium text-gray-600 tracking-wide mb-8">
            Arquitetura Operacional · Automação Inteligente · Ciência de Dados
          </p>

          {/* Layer 2: DECISION */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10">
            Eficiência operacional para escalar com controle e previsibilidade
          </h1>
          
          {/* Layer 3: METHOD */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Com base em dados e nas necessidades do negócio, identifico restrições estruturais e lacunas operacionais e desenho soluções com automação e arquitetura operacional para reduzir custos, aumentar previsibilidade e sustentar a experiência.
          </p>

          {/* Layer 4: VALIDATION */}
          <div className="mb-8">
            <p className="text-base font-semibold text-gray-900 mb-1">
              Jadson Campos · Arquiteto de Soluções Operacionais
            </p>
            <p className="text-base text-gray-600">
              +20 anos em operações complexas · Saúde · Transporte · Serviços recorrentes · Tecnologia
            </p>
          </div>

          {/* ASSINATURA (única vez na página) */}
          <p className="text-base text-gray-600 italic mb-10 max-w-2xl mx-auto">
            "Não digitalizo burocracia. Projeto sistemas de serviço que funcionam, escalam e geram retorno mensurável para o negócio."
          </p>

          {/* Layer 5: ACTION */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-8 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Agendar diagnóstico
            </a>
            <p className="text-sm text-gray-600">
              15 minutos · clareza imediata
            </p>
          </div>

          {/* FRASE-MURO 1: desacelera leitura e ancora autoridade */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-base font-medium text-gray-900 leading-relaxed">
              Operações não falham por falta de esforço. Falham por falta de estrutura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
