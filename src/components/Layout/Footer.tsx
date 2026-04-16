import { MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-8 lg:px-10">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

          {/* Marca */}
          <div className="lg:pr-8">
            <div className="mb-3">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                TINTAR
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-red-500 sm:text-sm">
                Insumos de impresión y tecnología
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              Soluciones en impresión, tecnología y artículos de oficina para
              empresas y particulares, con atención personalizada y respuesta rápida.
            </p>

            <div className="mt-4 inline-flex items-start gap-2 text-sm text-neutral-400">
              <MapPin size={16} className="mt-0.5 shrink-0 text-red-500" />
              <span>Lagorio 704, Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Navegación + Servicios juntos en mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">

          {/* Navegación */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
              Navegación
            </h4>

            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="transition hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="transition hover:text-white">
                  Productos
                </a>
              </li>
              <li>
                <a href="#Servicios" className="transition hover:text-white">
                  Servicios
                </a>
              </li>
                <li>
                <a href="#sobre-nosotros" className="transition hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/alquiler"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Alquiler empresarial
                </a>
              </li>
            </ul>
          </div>

            {/* Servicios */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                Servicios
              </h4>

              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="transition hover:text-white">
                  Insumos de impresión
                </li>
                <li className="transition hover:text-white">Tecnología</li>
                <li className="transition hover:text-white">Librería</li>
                <li className="transition hover:text-white">
                  Asesoramiento personalizado
                </li>
                <li className="transition hover:text-white">
                  Entregas rápidas
                </li>
              </ul>
            </div>

          </div>

          {/* Información */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
              Información
            </h4>

            <div className="space-y-2 text-sm text-neutral-400">
              <p>Atención personalizada para empresas y particulares.</p>
              <p>Respuesta rápida y asesoramiento comercial.</p>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 md:mt-8 md:flex-row md:items-center md:justify-between md:gap-4 md:pt-5">
          <p className="text-xs leading-5 text-neutral-500">
            © {new Date().getFullYear()} TINTAR. Todos los derechos reservados.
          </p>

          <p className="text-xs leading-5 text-neutral-500 md:text-right">
            Diseñado para brindar soluciones en impresión y equipamiento tecnológico.
          </p>
        </div>

      </div>
    </footer>
  );
};