import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/landingCopy";

export function Hero() {
  const { hero, cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:32px_32px]" />
      
      <div className="container-premium relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-balance mb-6">
            {hero.h1}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 text-balance max-w-3xl mx-auto mb-6">
            {hero.subheadline}
          </p>

          <p className="text-lg text-gray-700 font-medium mb-3">
            {hero.forWho}
          </p>

          <p className="text-sm text-gray-500 mb-12">
            {hero.signature}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {hero.highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white border border-gray-200/80 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[200px] h-12 text-base shadow-soft hover:shadow-medium">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {cta.label}
              </a>
            </Button>
            
            <p className="text-xs text-gray-500 text-center sm:text-left max-w-xs">
              {cta.helper}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
