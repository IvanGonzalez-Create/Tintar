export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden text-white sm:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/Video de fondo Hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
 

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-4xl">
            Soluciones empresariales en insumos, alquiler y servicio técnico
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base md:text-lg">
            Insumos de impresión, tecnología y mantenimiento técnico con
            atención personalizada para empresas y particulares.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="#productos"
            className="inline-flex w-full max-w-[280px] items-center justify-center rounded-xl bg-[#6B0F1A] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#7A1C25] sm:w-auto sm:min-w-[190px]"
          >
            Ver productos
          </a>

          <a
            href="/alquiler"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full max-w-[280px] items-center justify-center rounded-xl border border-white/90 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto sm:min-w-[190px]"
          >
            Solicitar impresora
          </a>

          <a
            href="#servicioTecnico"
            className="inline-flex w-full max-w-[280px] items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/15 sm:w-auto sm:min-w-[190px]"
          >
            Servicio técnico
          </a>
        </div>
      </div>
    </section>
  );
}