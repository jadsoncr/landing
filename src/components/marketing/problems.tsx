import { landingCopy } from "@/lib/landingCopy";

export function Problems() {
  const { problems } = landingCopy;

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {problems.title}
          </h2>
        </div>

        <p className="mx-auto max-w-3xl text-center text-base text-gray-600 mb-16">
          {problems.guide}
        </p>

        <div className="mx-auto max-w-4xl space-y-6">
          {/* RESTRIÇÃO ÂNCORA */}
          <div className="border-l-4 border-blue-600 bg-white pl-8 pr-8 py-8 shadow-sm">
            <p className="text-xl font-bold text-gray-900 leading-relaxed mb-2">
              {problems.items[0].text}
            </p>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              {problems.items[0].category}
            </p>
          </div>

          {/* RESTRIÇÕES DE APOIO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.items.slice(1, 3).map((item: { category: string; text: string }, index: number) => (
              <div key={index} className="border-l-4 border-gray-300 bg-white pl-6 pr-6 py-5">
                <p className="text-sm text-gray-900 leading-relaxed font-medium mb-2">{item.text}</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

