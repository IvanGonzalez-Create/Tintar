import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* Marca */}
          <div className="xl:pr-8">
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-tight">TINTAR</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-red-500 mt-1">
                Insumos de impresión y tecnología
              </p>
            </div>

            <p className="text-sm leading-6 text-neutral-400 max-w-sm">
              Soluciones en impresión, tecnología y artículos de oficina para
              empresas y particulares, con atención personalizada y respuesta rápida.
            </p>

            <a
              href="https://wa.me/541136743998"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Solicitar asesoramiento
            </a>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="transition hover:text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/alquiler" className="transition hover:text-white">
                  Alquiler empresarial
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="transition hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Servicios
            </h4>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="transition hover:text-white">
                Insumos de impresión
              </li>
              <li className="transition hover:text-white">
                Tecnología
              </li>
              <li className="transition hover:text-white">
                Librería
              </li>
              <li className="transition hover:text-white">
                Asesoramiento personalizado
              </li>
              <li className="transition hover:text-white">
                Entregas rápidas
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Contacto
            </h4>

            <div className="space-y-4 text-sm text-neutral-400">
              <div>
                <p className="text-white font-medium mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/541136743998"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  +54 11 3674-3998
                </a>
              </div>

              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a
                  href="mailto:ventas.tintar@gmail.com"
                  className="transition hover:text-white break-all"
                >
                  ventas.tintar@gmail.com
                </a>
              </div>

              <div>
                <p className="text-white font-medium mb-1">Atención</p>
                <p>Lunes a sábado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} TINTAR. Todos los derechos reservados.
          </p>

          <p className="text-xs text-neutral-500">
            Diseñado para brindar soluciones en impresión y equipamiento tecnológico.
          </p>
        </div>
      </div>
    </footer>
  );
};