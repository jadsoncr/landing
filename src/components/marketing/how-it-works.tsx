export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico orientado a dados",
      desc: "Leitura de dados disponíveis, mapeamento de restrições estruturais e identificação de perdas. Entregável: diagnóstico objetivo com plano de ação.",
    },
    {
      number: "2",
      title: "Arquitetura + implantação",
      desc: "Desenho de fluxos, regras, métricas e sistemas (processo + tecnologia + operação). Execução com acompanhamento.",
    },
    {
      number: "3",
      title: "Governança contínua",
      desc: "Ciclo mensal de monitoramento, alerta, ajuste e decisão. Sustentação de previsibilidade operacional e financeira.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Método de estruturação
          </h2>
          <p className="text-base text-gray-600">
            O que acontece depois que você entra.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-1 border-l-4 border-gray-300">
          {steps.map((step, index) => (
            <div key={index} className="pl-8 py-8 border-b border-gray-200 last:border-b-0">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm font-bold text-gray-400">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-8">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-gray-600">
            Foco em resultado mensurável: custo, previsibilidade e consistência de experiência.
          </p>
        </div>
      </div>
    </section>
  );
}
