import { Section } from "@/components/marketing/section";
import { landingCopy } from "@/lib/landingCopy";

export function Problems() {
  const { problems } = landingCopy;

  return (
    <Section
      title={problems.title}
      subtitle="Gargalos comuns que travam crescimento, aumentam custo e reduzem previsibilidade."
      background="gray"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.items.map((item, index) => (
          <div
            key={index}
            className="card-premium p-6"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

