import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { landingCopy } from "@/lib/landingCopy";

type Segment = {
  slug: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function getSegments(): Segment[] {
  // Prefer: landingCopy.segments (se você tiver definido)
  const anyCopy = landingCopy as unknown as { segments?: Segment[] };
  if (Array.isArray(anyCopy.segments) && anyCopy.segments.length > 0) {
    return anyCopy.segments;
  }

  // Fallback: garante build mesmo se o copy ainda não existir
  return [
    {
      slug: "restaurantes",
      title: "Restaurantes",
      subtitle: "Controle de CMV e margem com governança prática.",
      bullets: [
        "Ficha técnica e precificação confiável",
        "Rotina de compras e perdas sob controle",
        "Acompanhamento mensal e ajustes rápidos",
      ],
      primaryCta: {
        label: "Ver página do segmento",
        href: "/segmentos/restaurantes",
      },
      secondaryCta: { label: "Agendar diagnóstico", href: "#diagnostico" },
    },
    {
      slug: "varejo",
      title: "Varejo",
      subtitle: "Gestão de custos e processos para previsibilidade.",
      bullets: [
        "Padronização e rotinas",
        "Indicadores simples",
        "Redução de retrabalho",
      ],
      primaryCta: { label: "Agendar diagnóstico", href: "#diagnostico" },
      secondaryCta: { label: "Falar no WhatsApp", href: "/#contato" },
    },
  ];
}

export function SegmentsNew() {
  const segments = getSegments();

  return (
    <section id="segmentos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Segmentos atendidos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções adaptadas ao seu contexto — com o mesmo método: clareza,
            rotina e governança.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2">
          {segments.map((s) => (
            <Card key={s.slug} className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {s.title}
                </CardTitle>
                {s.subtitle ? (
                  <p className="mt-1 text-sm text-gray-600">{s.subtitle}</p>
                ) : null}
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={s.primaryCta.href}>{s.primaryCta.label}</Link>
                  </Button>

                  {s.secondaryCta ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <Link href={s.secondaryCta.href}>
                        {s.secondaryCta.label}
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
