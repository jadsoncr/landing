import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Evidence() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Evidências: por que governança de CMV e operação protege margem e capacidade
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            O impacto vem de reduzir variação de custo, desperdício operacional, no-show e decisões 
            sem base em custo real. Não prometemos aumento de faturamento, mas controle objetivo de margem.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Restaurantes e Bares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">CMV e Prime Cost:</strong> controle de custo de matéria-prima 
                    e mão de obra direta é o principal determinante de margem operacional sustentável
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Desperdício operacional:</strong> perdas de alimentos e insumos 
                    representam impacto direto na margem, com evidências consolidadas sobre volume e custo evitável
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Precificação baseada em custo real:</strong> margem projetada 
                    só se confirma quando há rastreabilidade de consumo efetivo e ajuste contínuo
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Clínicas e Consultórios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Custo por procedimento:</strong> controle de materiais, 
                    medicamentos e mão de obra define rentabilidade real de cada serviço e convênio
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">No-show e capacidade:</strong> revisões indicam que notificações 
                    e gestão de agenda reduzem faltas, aumentando aproveitamento de capacidade instalada
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Produtividade operacional:</strong> ocupação de agenda e 
                    conformidade de processos impactam receita efetiva e margem por hora trabalhada
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Serviços Recorrentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Margem por contrato:</strong> controle de custo recorrente 
                    e rastreamento de consumo efetivo mantém margem dentro do projetado
                  </span>
                </li>
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
