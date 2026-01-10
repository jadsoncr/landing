export function Results() {
  const results = [
    {
      metric: "NPS consistente > 9",
      context: "Governança de experiência em ambiente regulado",
      location: "GRU Airport · ANAC",
    },
    {
      metric: "Redução > 3x em reclamações regulatórias",
      context: "Estruturação orientada a dados",
      location: "MetrôRio · AGETRANSP",
    },
    {
      metric: "Ganho consistente de eficiência operacional",
      context: "Após estruturação de célula e fluxos governados",
      location: "Rede D'Or · Saúde regulada",
    },
    {
      metric: "+1.000 pessoas em operação simultânea",
      context: "Liderança e governança em escala nacional",
      location: "Contax",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {result.metric}
              </p>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {result.context}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500">
                {result.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
