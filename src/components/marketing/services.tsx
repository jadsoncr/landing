import { landingCopy } from "@/lib/landingCopy";

export function Services() {
  const { services } = landingCopy;

  return (
    <section id="servicos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {services.title}
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            {services.intro}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-1">
          {services.items.map((service: { title: string; desc: string; highlighted?: boolean }, index: number) => {
            const isCore = service.highlighted; // CS/CX e Governança
            return (
              <div
                key={index}
                className={`py-6 ${
                  isCore
                    ? 'border-l-4 border-blue-600 pl-8 bg-blue-50/50'
                    : 'border-l-2 border-gray-200 pl-8'
                }`}
              >
                <h3 className={`mb-2 ${
                  isCore 
                    ? 'text-lg font-bold text-blue-900' 
                    : 'text-sm font-medium text-gray-700'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${
                  isCore ? 'text-base text-gray-900' : 'text-sm text-gray-600'
                }`}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
