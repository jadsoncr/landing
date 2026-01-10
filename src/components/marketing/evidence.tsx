export function Evidence() {
  const whatsappUrl = `https://wa.me/5521988551085?text=${encodeURIComponent("Olá, gostaria de agendar um diagnóstico operacional")}`;

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 sm:text-4xl lg:text-5xl">
            Se você precisa de controle e previsibilidade, o próximo passo é diagnóstico.
          </h2>

          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-10 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Agendar diagnóstico operacional
            </a>
            <p className="text-sm text-gray-600">
              Conversa objetiva · sem proposta automática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
