import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/landingCopy";

export function Segments() {
  const { segments, cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section id="segmentos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {segments.title}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Reconheça se sua operação se encaixa. Exemplos detalhados aparecem mais adiante.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          {segments.items.map((segment, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {segment.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{segment.desc}</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                  <span>
                    {index === 0 && "Fichas técnicas confiáveis e controle de perdas"}
                    {index === 1 && "Gestão de agenda e redução de no-show"}
                    {index === 2 && "Padronização de jornadas e redução de retrabalho"}
                    {index === 3 && "Processos replicáveis e controle de SLAs"}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                  <span>
                    {index === 0 && "Indicadores mensais para decisão sobre cardápio e preço"}
                    {index === 1 && "Custo por procedimento e produtividade de agenda"}
                    {index === 2 && "Indicadores acionáveis e governança contínua"}
                    {index === 3 && "Margens previsíveis e automação pragmática"}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="default">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Agendar diagnóstico
            </a>
          </Button>
          <p className="mt-3 text-sm text-gray-500">
            15 minutos · clareza imediata sobre onde sua operação está perdendo
          </p>
        </div>
      </div>
    </section>
  );
}
