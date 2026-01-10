import { landingCopy } from "@/lib/landingCopy";

export function Evidence() {
  const { cta } = landingCopy;
  const whatsappUrl = `https://wa.me/${cta.whatsappNumber}?text=${encodeURIComponent(cta.whatsappMessage)}`;

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 sm:text-4xl lg:text-5xl">
            Diagnóstico operacional orientado a dados
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Conversa inicial objetiva para mapear restrições estruturais, identificar perdas invisíveis e definir plano de ação pragmático.
          </p>

          {/* FRASE DE FECHAMENTO: conclui raciocínio */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            <p className="text-base font-medium text-gray-900 leading-relaxed">
              Se você chegou até aqui, já sabe se isso faz sentido para o seu contexto.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-10 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Agendar diagnóstico
            </a>
            <p className="text-sm text-gray-600">
              Conversa objetiva. Sem compromisso. Sem proposta automática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
