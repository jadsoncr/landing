export function Cases() {
  const cases = [
    {
      title: "MetrôRio — GIRO",
      context: "Estruturação do Gerenciamento Integrado de Reclamações e Ocorrências em ambiente regulado (AGETRANSP)",
      structured: "Processos padronizados · SLAs por categoria · Governança mensal de conformidade orientada a dados",
      integration: "Serviços web para integração com sistemas internos · Dashboards de acompanhamento regulatório",
      impact: "Redução superior a 3x nas reclamações ao regulador · Conformidade sustentada",
    },
    {
      title: "GRU Airport",
      context: "Implantação completa de operação de atendimento ao passageiro (operação zero) em ambiente regulado ANAC",
      structured: "Estruturação de equipe, processos e SLAs regulatórios · Gestão de Fator Q e resposta técnica ANAC",
      integration: "URA inteligente · Canais digitais (web, app, chat) · Sistemas de ticketing e CRM",
      impact: "NPS consistentemente acima de 9 · SLA regulatório cumprido · Redução de demanda humana por automação",
    },
    {
      title: "Rede D'Or",
      context: "Estruturação de célula de atendimento e backoffice para operação nacional de saúde regulada",
      structured: "Desenho de fluxos ponta a ponta · Definição de papéis e rotinas · KPIs acionáveis",
      integration: "Implantação de Salesforce · Implantação de NICE · Integração com sistemas de saúde",
      impact: "Ganho consistente de eficiência operacional após estruturação de célula e fluxos governados",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Cases resumidos
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-10">
          {cases.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-8 pr-6 py-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {item.title}
              </h3>

              {/* IMPACTO PRIMEIRO */}
              <div className="mb-6">
                <p className="text-lg font-semibold text-blue-900 leading-relaxed">
                  {item.impact}
                </p>
              </div>

              {/* CONTEXTO */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.context}
                </p>
              </div>

              {/* DETALHE (OPCIONAL) */}
              <details className="text-sm text-gray-500">
                <summary className="cursor-pointer font-medium hover:text-gray-700">Ver detalhes técnicos</summary>
                <div className="mt-4 space-y-3 pl-4 border-l-2 border-gray-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Estruturado
                    </p>
                    <p className="text-sm text-gray-700">{item.structured}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Integração
                    </p>
                    <p className="text-sm text-gray-700">{item.integration}</p>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
