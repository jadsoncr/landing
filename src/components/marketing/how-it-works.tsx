import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como funciona a governança mensal de CMV e operação
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ciclo contínuo de monitoramento, análise e decisão baseada em indicadores objetivos. 
            O valor está na governança mensal, não apenas na implantação pontual.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <ol className="space-y-8">
            <li>
              <Card className="relative border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Diagnóstico integrado (pago)
                      </CardTitle>
                      <p className="mt-2 text-gray-700">
                        Mapeamento de perdas operacionais e financeiras para priorizar o que corrige margem primeiro. 
                        Base objetiva para decisão sobre onde atacar com governança contínua.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-14">
                    <p className="text-sm font-semibold text-gray-900">Entregáveis:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Mapa de perdas (CMV e operação com quantificação)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Estimativa de impacto financeiro de cada perda identificada</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Prioridades do próximo ciclo (o que atacar primeiro)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card className="relative border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Implantação mínima e controlada
                      </CardTitle>
                      <p className="mt-2 text-gray-700">
                        Criação de visibilidade e rotina operacional sem complexidade desnecessária. 
                        Foco em indicadores essenciais, regras e alertas para manter controle desde o início.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-14">
                    <p className="text-sm font-semibold text-gray-900">Entregáveis:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Indicadores essenciais configurados (painel executivo de CMV e operação)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Regras e rotinas operacionais padronizadas</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Alertas de desvio de custo, margem e processos</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card className="relative border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Operação mensal (governança contínua)
                      </CardTitle>
                      <p className="mt-2 text-gray-700">
                        Manutenção de controle mensal, correção de desvios e sustentação de previsibilidade. 
                        Ciclo contínuo de análise, ajuste e decisão para manter margem sob controle.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-14">
                    <p className="text-sm font-semibold text-gray-900">Entregáveis:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Relatório mensal objetivo (variação de custos, perdas e conformidade)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Plano de ação do próximo ciclo (ajustes de operação e precificação)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>Revisão e ajuste de parâmetros (custo, margem, processos)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </li>
          </ol>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-center text-lg font-semibold text-gray-900">
            Ciclo mensal de governança
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-700">
            <span className="rounded-md bg-white px-3 py-2 shadow-sm">Monitorar</span>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm">Alertar</span>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm">Ajustar</span>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm">Reportar</span>
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded-md bg-white px-3 py-2 shadow-sm">Decidir</span>
          </div>
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
