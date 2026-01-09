import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Segments() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluções por segmento: restaurantes, clínicas e serviços recorrentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Governança de CMV, margem, desperdício, estoque, custos por procedimento, agenda, 
            eficiência operacional e indicadores de decisão para cada segmento.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <Tabs defaultValue="restaurantes" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="restaurantes">Restaurantes e Bares</TabsTrigger>
              <TabsTrigger value="clinicas">Clínicas e Consultórios</TabsTrigger>
              <TabsTrigger value="servicos">Serviços Recorrentes</TabsTrigger>
            </TabsList>

            <TabsContent value="restaurantes" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Restaurantes e Bares
                  </CardTitle>
                  <p className="mt-2 text-gray-700">
                    CMV real, desperdício, estoque e margem por item e linha de produto. 
                    Controle mensal para decisão sobre compras, precificação e cardápio.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">O que governamos</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>CMV real (compras vs consumo efetivo por item e linha)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Ficha técnica padronizada e variações de custo de insumo</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Estoque (ruptura e excesso, giro e reposição)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Desperdício e perdas operacionais por categoria</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Precificação baseada em custo real e margem esperada</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Rotina de decisão mensal (compras, preço e cardápio)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">KPIs acompanhados</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>CMV real e variação mês a mês</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Margem operacional por item e linha</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Desperdício (% e R$) por categoria</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Ruptura e excesso de estoque</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Custo por item e linha de produto</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>Perdas por processo operacional</span>
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
