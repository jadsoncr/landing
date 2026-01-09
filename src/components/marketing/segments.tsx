import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/landingCopy";

export function Segments() {
  const { segments, cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {segments.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções adaptadas para cada contexto operacional: volume, margens, processos e controles específicos.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2">
          {segments.items.map((segment, index) => (
            <Card key={index} className="card-premium">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {segment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{segment.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <Button asChild size="lg">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {cta.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#diagnostico">
                        Agendar diagnóstico
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                      <Link href="/segmentos/restaurantes">
                        Ver página do segmento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clinicas" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Clínicas e Consultórios
                  </CardTitle>
                  <p className="mt-2 text-gray-700">
                    Custos por procedimento, gestão de agenda, ocupação e eficiência operacional. 
                    Controle mensal para decisão sobre precificação e produtividade.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">O que governamos</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Custos e insumos por procedimento (materiais, medicamentos, mão de obra)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Padronização operacional do atendimento e agenda</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Confirmação e redução de no-show</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Produtividade (capacidade vs demanda por especialidade)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Precificação e rentabilidade por serviço e convênio</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Rotinas mensais de decisão (ajuste de capacidade, serviços e preço)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">KPIs acompanhados</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Custo por procedimento e especialidade</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Taxa de ocupação de agenda</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>% de no-show por especialidade</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Receita por agenda (capacidade aproveitada)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Produtividade por turno e equipe</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Variação de custo e margem por serviço</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#diagnostico">
                        Agendar diagnóstico
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                      <Link href="/segmentos/clinicas">
                        Ver página do segmento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="servicos" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Serviços Recorrentes
                  </CardTitle>
                  <p className="mt-2 text-gray-700">
                    Previsibilidade de margem e eficiência de execução. Controle de custos recorrentes, 
                    processos e SLAs para decisão mensal sobre operação e precificação.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">O que governamos</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Custos recorrentes e rentabilidade do serviço por contrato</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Processos de execução e entrega padronizados</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Padronização e redução de retrabalho operacional</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>SLAs internos e controle de falhas por processo</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Indicadores acionáveis para decisão mensal objetiva</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Ciclo contínuo de melhoria operacional</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">KPIs acompanhados</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Margem do serviço por contrato</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Retrabalho (volume e causa raiz identificada)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Tempo de execução e entrega por processo</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Falhas por processo e conformidade de SLA</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Custo operacional por cliente ou entrega</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Estabilidade do processo (desvios e variações)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#diagnostico">
                        Agendar diagnóstico
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                      <Link href="/segmentos/servicos-recorrentes">
                        Ver página do segmento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-base text-gray-700">
            Escolha o segmento e agende um diagnóstico para mapear perdas e prioridades do próximo ciclo.
          </p>
        </div>
      </div>
    </section>
  );
}
