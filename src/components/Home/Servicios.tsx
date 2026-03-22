import { Link } from "react-router-dom";
import {
  Printer,
  Laptop,
  PenTool,
  Headset,
  Truck,
  Building2,
} from "lucide-react";

export const Servicios = () => {
  return (
    <section id="Servicios" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* TÍTULO */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-gray-600">
            Soluciones integrales en impresión, tecnología y abastecimiento para
            empresas, oficinas y particulares.
          </p>
        </div>

        {/* BLOQUE DESTACADO */}
        <Link
          to="/alquiler"
          className="group mb-12 block rounded-3xl bg-gradient-to-r from-[#6B0F1A] to-[#8B1E2D] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                <Building2 size={14} />
                Solución destacada
              </div>

              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                Alquiler empresarial de equipos
              </h3>

              <p className="text-sm text-white/90 md:text-base">
                Optimizá costos, mejorá la productividad y equipá tu empresa con
                soluciones de impresión adaptadas a tus necesidades.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#6B0F1A] transition group-hover:scale-[1.02]">
                Ver más →
              </span>
            </div>
          </div>
        </Link>

        {/* GRID DE SERVICIOS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-[#6B0F1A]">
              <Printer size={22} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Insumos de impresión
            </h4>
            <p className="text-sm leading-6 text-gray-600">
              Tóner, cartuchos y tintas originales y alternativas para distintos
              modelos y necesidades.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-[#6B0F1A]">
              <Laptop size={22} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Tecnología
            </h4>
            <p className="text-sm leading-6 text-gray-600">
              Equipamiento tecnológico para empresas, oficinas y hogares, con
              opciones funcionales y actualizadas.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-[#6B0F1A]">
              <PenTool size={22} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Librería
            </h4>
            <p className="text-sm leading-6 text-gray-600">
              Artículos esenciales para oficina, estudio y uso diario, con
              soluciones prácticas para cada espacio de trabajo.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-[#6B0F1A]">
              <Headset size={22} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Asesoramiento personalizado
            </h4>
            <p className="text-sm leading-6 text-gray-600">
              Te ayudamos a encontrar la mejor opción según tu necesidad, con
              atención cercana y acompañamiento comercial.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-[#6B0F1A]">
              <Truck size={22} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-800">
              Entregas rápidas
            </h4>
            <p className="text-sm leading-6 text-gray-600">
              Gestión ágil de pedidos y envíos eficientes para que recibas tus
              productos en tiempo y forma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};