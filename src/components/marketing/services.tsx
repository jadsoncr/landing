import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/landingCopy";

export function Services() {
  const { services, cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <Section
      id="servicos"
      title={services.title}
      subtitle={services.intro}
      background="white"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.items.map((service, index) => (
          <div key={index} className="card-premium p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {cta.label}
          </a>
        </Button>
        
        <p className="text-sm text-gray-500 text-center sm:text-left max-w-md">
          {cta.helper}
        </p>
      </div>
    </Section>
  );
}
