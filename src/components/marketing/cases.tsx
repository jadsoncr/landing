export function Cases() {
  const cases = [
    {
      title: "MetrôRio — GIRO",
      context: "Operação regulada, necessidade de rastreabilidade e governança",
      structured: "Atendimento + padronização + modelo orientado a dados (serviços web)",
      impact: "Redução > 3x nas reclamações ao regulador (AGETRANSP)",
    },
    {
      title: "GRU Airport",
      context: "Ambiente crítico, ANAC, alta pressão de jornada do passageiro",
      structured: "Operação do zero + canais + automação de informação/URA",
      impact: "NPS consistente > 9",
    },
    {
      title: "Rede D'Or",
      context: "Saúde, alta complexidade e previsibilidade operacional",
      structured: "Célula + processos + implantação/customização de ferramentas",
      impact: "Ganho consistente de eficiência operacional",
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

        <div className="mx-auto max-w-4xl space-y-8">
          {cases.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6 pr-4 py-5 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <div className="space-y-2 text-base">
                <div>
                  <span className="font-semibold text-gray-900">Contexto:</span>{" "}
                  <span className="text-gray-700">{item.context}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">O que foi estruturado:</span>{" "}
                  <span className="text-gray-700">{item.structured}</span>
                </div>
                <div>
                  <span className="font-semibold text-blue-900">Impacto:</span>{" "}
                  <span className="text-blue-900 font-medium">{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
