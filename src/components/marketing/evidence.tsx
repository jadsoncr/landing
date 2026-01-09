import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/landingCopy";

export function Evidence() {
  const { authority, benefits, closing, cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Authority Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {authority.title}
          </h2>
          <div className="mt-8 space-y-4">
            {authority.items.map((item, index) => (
              <p key={index} className="text-lg text-gray-700">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto max-w-3xl mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {benefits.title}
          </h3>
          <ul className="space-y-4">
            {benefits.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic text-center">
            {benefits.disclaimer}
          </p>
        </div>

        {/* Closing Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-semibold text-gray-900 mb-8">
            {closing.anchor}
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {closing.finalTitle}
          </h3>
          
          <p className="text-lg text-gray-600 mb-8">
            {closing.finalText}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <Button asChild size="lg">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {cta.label}
              </a>
            </Button>
            <p className="text-sm text-gray-500">
              {cta.helper}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Retrabalho e falhas operacionais:</strong> identificação 
                    e redução de retrabalho reduz custo operacional e protege margem do serviço
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Estabilidade de processos:</strong> governança contínua 
                    reduz variação de custo e mantém previsibilidade financeira mês a mês
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-gray-900">
            Referências (seleção)
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">BMJ Open (2016)</strong> — Revisão sistemática e meta-análise sobre 
                eficácia de notificações digitais na redução de faltas em consultas médicas
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">Pan African Medical Journal (2020)</strong> — Revisão sobre 
                estratégias de lembretes e impacto em taxa de comparecimento em clínicas
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">International Journal of Hospitality Management (2018)</strong> — 
                Estudo sobre custos operacionais, controle de insumos e impacto na lucratividade de restaurantes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">Food Waste in Foodservice (2021)</strong> — Revisão sobre 
                impactos econômicos e operacionais do desperdício de alimentos no setor de alimentação
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">Journal of Medical Systems (2023)</strong> — Análise de no-show 
                e impacto em produtividade e receita de clínicas e serviços de saúde
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              <span>
                <strong className="font-medium text-gray-900">ScienceDirect — Operations Research Perspectives (2019)</strong> — 
                Modelagem de controle de custos operacionais e otimização de margem em serviços recorrentes
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#diagnostico">
              Agendar diagnóstico
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a 
              href="https://wa.me/5521988551085?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20governança%20de%20CMV" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
