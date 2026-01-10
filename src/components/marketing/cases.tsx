export function Cases() {
  const cases = [
    {
      title: "MetrôRio — GIRO",
      subtitle: "Arquitetura corporativa de serviços em ambiente regulado",
      body: "Desenho da arquitetura do GIRO, sistema corporativo de serviços e relacionamento com o cliente, integrando atendimento, processos, dados e canais digitais em operação metroviária altamente regulada. Estruturação de fluxos, governança e modelo de serviços, com integração aos sistemas de bilhetagem e ao contexto regulatório, reduzindo fricção operacional e aumentando previsibilidade. Beneficio adicional: digitalização do modelo de serviços da companhia, consolidando canais e dados em uma base operacional única para decisão e escala.",
      impact: [
        "Maior previsibilidade operacional",
        "Redução de fricção em jornadas críticas",
        "Governança clara entre canais, dados e decisão",
        "Digitalização estruturada da operação de serviços",
      ],
    },
    {
      title: "Rede D'Or",
      subtitle: "Arquitetura operacional de atendimento em saúde",
      body: "Estruturação e liderança de uma célula diferenciada de atendimento, com foco na jornada do paciente, eficiência operacional e sustentabilidade do negócio em ambiente hospitalar altamente regulado. Desenho do modelo operacional e integração entre atendimento, regulação, prestadores médicos e áreas internas, alinhando fluxos de serviço e processos assistenciais.",
      impact: [
        "Redução de atrito entre áreas",
        "Maior eficiência na jornada do paciente",
        "Sustentação operacional em contexto regulado",
      ],
    },
    {
      title: "GRU Airport",
      subtitle: "Arquitetura de atendimento em ambiente aeroportuário crítico",
      body: "Desenho e implantação da arquitetura de atendimento e autoatendimento em ambiente aeroportuário de alta criticidade, envolvendo BID, definição do modelo operacional e implantação junto a fornecedores. Estruturação de fluxos internos, digitalização de processos, automação de URA e implantação de consulta de voos via QR Code, reduzindo dependência de canais tradicionais.",
      impact: [
        "Redução de custo operacional",
        "Menor fricção no atendimento ao passageiro",
        "Maior resiliência operacional em picos de demanda",
      ],
    },
    {
      title: "Mundo Leilão",
      subtitle: "Reestruturação integrada de CS, Atendimento e Jurídico",
      body: "Projeto de 3 meses com foco na reestruturação integrada de Customer Success, Atendimento e Jurídico em operação digital com alto volume de conflitos operacionais. Desenho de processos ponta a ponta, definição clara de responsabilidades e criação de fluxos integrados entre áreas.",
      impact: [
        "Redução superior a 30% no churn",
        "Maior previsibilidade entre CS, Atendimento e Jurídico",
        "Eliminação de retrabalho e conflitos operacionais",
      ],
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600 mb-4">
                {item.subtitle}
              </p>

              {/* IMPACTO PRIMEIRO */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Impacto</p>
                <ul className="space-y-1.5">
                  {item.impact.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-blue-900 font-medium flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTEXTO (COLAPSADO) */}
              <details className="text-sm text-gray-600">
                <summary className="cursor-pointer font-medium hover:text-gray-900">Ver contexto do projeto</summary>
                <div className="mt-4 pl-4 border-l-2 border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
