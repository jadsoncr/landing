import { Section } from "@/components/marketing/section";

export function Problems() {
  const problems = [
    {
      title: "CMV não bate com o caixa",
      items: [
        "Custo real mensal sempre acima do projetado sem clareza sobre qual contrato ou produto pesa mais",
        "Margem estimada na proposta comercial não se confirma no fechamento mensal",
        "Falta de rastreabilidade do consumo efetivo de matéria-prima por cliente ou unidade",
      ],
    },
    {
      title: "Desperdício não monitorado",
      items: [
        "Insumos descartados ou vencidos sem registro formal de perda ou causa raiz",
        "Falta de controle de porcionamento e receitas padronizadas por produto ou serviço",
        "Desperdício operacional invisível que corrói margem mês a mês sem identificação",
      ],
    },
    {
      title: "Estoque some ou encalha",
      items: [
        "Ruptura de estoque que atrasa operação ou gera compra emergencial mais cara",
        "Excesso de estoque encalhado por previsão desalinhada com consumo real",
        "Falta de visibilidade sobre giro de estoque e ponto de reposição ideal por item",
      ],
    },
    {
      title: "Precificação sem base em custo real",
      items: [
        "Contratos renovados ou reajustados com base em estimativa, sem dados concretos de custo",
        "Dificuldade em separar custos fixos e variáveis por contrato ou unidade de negócio",
        "Margem teórica não se confirma na prática, mas ajustes são feitos sem diagnóstico preciso",
      ],
    },
    {
      title: "Processos operacionais sem dono",
      items: [
        "Retrabalho constante porque padrões não estão documentados ou não são seguidos",
        "Equipe executa cada operação de forma diferente sem critério claro de conformidade",
        "Falhas operacionais geram custo extra, mas não há registro ou responsabilização",
      ],
    },
    {
      title: "Decisão tardia por falta de indicadores",
      items: [
        "Problemas identificados apenas no fechamento mensal, quando já impactaram resultado",
        "Falta de alertas em tempo real sobre desvios de custo ou processos fora do padrão",
        "Relatórios genéricos que não permitem ação corretiva rápida ou previsibilidade financeira",
      ],
    },
  ];

  return (
    <Section
      title="Onde a margem se perde no dia a dia"
      subtitle="CMV real acima do projetado, desperdício invisível, ruptura ou excesso de estoque, 
        falhas operacionais não rastreadas e decisões tardias por falta de dados."
      background="gray"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="card-premium p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {problem.title}
            </h3>
            <ul className="space-y-3">
              {problem.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

