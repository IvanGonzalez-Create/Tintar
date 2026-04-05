import {
  Printer,
  Laptop,
  PenTool,
  Headset,
  Truck,
  Building2,
  Wrench,
} from "lucide-react";

export const Servicios = () => {
  const irAContacto = () => {
    const card = document.getElementById("contacto-servicio-tecnico");
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const verificar = () => {
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;

      const visible = rect.top < vh * 0.85 && rect.bottom > vh * 0.2;

      if (visible) {
        window.removeEventListener("scroll", verificar);

        setTimeout(() => {
          card.classList.remove("contacto-destacado");
          void card.offsetWidth;
          card.classList.add("contacto-destacado");

          window.setTimeout(() => {
            card.classList.remove("contacto-destacado");
          }, 1000);
        }, 120);
      }
    };

    window.addEventListener("scroll", verificar);
    verificar();
  };

  return (
    <section id="Servicios" className="bg-gray-50 px-4 sm:px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* TÍTULO */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Soluciones integrales en impresión, tecnología y abastecimiento para
            empresas, oficinas y particulares.
          </p>
        </div>

        {/* BLOQUE DESTACADO */}
        <a
          href="/alquiler"
          target="_blank"
          rel="noreferrer"
          className="group mb-12 block rounded-3xl bg-gradient-to-r from-[#6B0F1A] to-[#8B1E2D] p-6 sm:p-8 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                <Building2 size={14} />
                Solución destacada
              </div>

              <h3 className="mb-3 text-xl font-bold sm:text-2xl md:text-3xl">
                Alquiler empresarial de equipos
              </h3>

              <p className="text-sm text-white/90 md:text-base">
                Optimizá costos, mejorá la productividad y equipá tu empresa con
                soluciones de impresión adaptadas a tus necesidades.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#6B0F1A] transition group-hover:scale-[1.05] group-hover:shadow-md">
                Ver más →
              </span>
            </div>
          </div>
        </a>

        {/* SERVICIO TÉCNICO */}
        <div className="mb-6 rounded-2xl border border-[#6B0F1A]/20 bg-gradient-to-br from-red-50 to-white p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-xl bg-[#6B0F1A]/10 p-3 text-[#6B0F1A]">
                <Wrench size={22} />
              </div>

              <h4 className="mb-2 text-lg sm:text-xl font-semibold text-gray-800">
                Servicio técnico y mantenimiento
              </h4>

              <p className="text-sm leading-6 text-gray-600 md:text-base">
                Realizamos diagnóstico, reparación y mantenimiento de impresoras
                y equipos tecnológicos, con atención orientada a reducir tiempos
                de inactividad y encontrar una solución rápida según cada caso.
              </p>

              <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
                <p className="mb-2 text-sm font-semibold text-gray-800">
                  Para una atención más ágil, necesitamos:
                </p>

                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• Marca del equipo</li>
                  <li>• Modelo</li>
                  <li>• Descripción del problema que presenta</li>
                </ul>
              </div>
            </div>

            <div className="shrink-0 self-start">
              <button
                type="button"
                onClick={irAContacto}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#6B0F1A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A1C25]"
              >
                Consultar servicio técnico
              </button>
            </div>
          </div>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Printer size={22} className="mb-4 text-[#6B0F1A]" />
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Insumos de impresión
            </h4>
            <p className="text-sm text-gray-600">
              Tóner, cartuchos y tintas originales y alternativas.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Laptop size={22} className="mb-4 text-[#6B0F1A]" />
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Tecnología
            </h4>
            <p className="text-sm text-gray-600">
              Equipamiento para empresas, oficinas y hogares.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <PenTool size={22} className="mb-4 text-[#6B0F1A]" />
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Librería
            </h4>
            <p className="text-sm text-gray-600">
              Artículos esenciales para oficina y uso diario.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Headset size={22} className="mb-4 text-[#6B0F1A]" />
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Asesoramiento
            </h4>
            <p className="text-sm text-gray-600">
              Te ayudamos a elegir la mejor opción.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Truck size={22} className="mb-4 text-[#6B0F1A]" />
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Entregas rápidas
            </h4>
            <p className="text-sm text-gray-600">
              Envíos eficientes en tiempo y forma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};