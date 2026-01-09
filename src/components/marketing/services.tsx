import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      title: "Governança de CMV e Margem Operacional",
      description: "Apuração mensal de custo real por contrato, baseada em consumo efetivo. Comparação com margem projetada e identificação objetiva de variações.",
    },
    {
      title: "Governança de Processos de Serviço",
      description: "Padronização de processos operacionais com registro de conformidade. Rastreamento de execução por equipe, unidade e contrato.",
    },
    {
      title: "Gestão de Perdas Operacionais (Receita Invisível)",
      description: "Identificação e quantificação de desperdícios, retrabalho e falhas operacionais. Mensuração mensal de receita não realizada por ineficiência.",
    },
    {
      title: "Monitoramento e Alertas de Desvio",
      description: "Acompanhamento de indicadores operacionais e financeiros durante o mês. Alertas quando custos ou processos fogem do padrão esperado.",
    },
  ];

  const deliverables = [
    {
      title: "Painel executivo de CMV e operação",
      description: "visão consolidada de custos, margens e indicadores por contrato",
    },
    {
      title: "Alertas de desvio de custo e margem",
      description: "notificações durante o mês quando processos ou custos fogem do padrão",
    },
    {
      title: "Relatório mensal objetivo",
      description: "análise detalhada de variação de custos, perdas e conformidade operacional",
    },
    {
      title: "Plano de ação do próximo ciclo",
      description: "recomendações específicas para ajustar operação e precificação",
    },
  ];

  return (
    <Section
      id="servicos"
      title="Serviços de governança operacional e CMV"
      subtitle="Operação contínua mensal de controle de margem, custo real e processos. Dados objetivos para decisão, ajuste de precificação e melhoria operacional."
      background="white"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {services.map((service, index) => (
          <div key={index} className="card-premium p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl rounded-lg border border-gray-200 bg-gray-50 p-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Entregáveis mensais
        </h3>
        <ul className="mt-6 space-y-3">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <svg className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">{item.title}:</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="#diagnostico">
            Agendar diagnóstico gratuito
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
    </Section>
  );
}
