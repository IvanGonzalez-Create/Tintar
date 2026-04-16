import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SobreNosotros = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <section id="sobre-nosotros" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-[#6B0F1A] sm:text-base">
          Más que proveedores, somos aliados de tu negocio.
        </p>

        <button
          onClick={() => setAbierto(!abierto)}
          className=" cursor-pointer group mt-6 flex w-full items-center justify-between gap-4 rounded-2xl border border-[#6B0F1A]/30 bg-white px-4 py-4 text-left shadow-sm transition-all duration-300 hover:bg-[#6B0F1A]/5 sm:px-6 sm:py-5"
        >
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B0F1A] sm:text-xs">
              Quiénes somos
            </p>
            <h2 className="mt-1 text-base font-semibold text-gray-800 sm:text-lg">
              Conocé nuestra trayectoria
            </h2>
          </div>

          <ChevronDown
            className={`h-6 w-6 shrink-0 text-[#6B0F1A] transition-all duration-300 ${
              abierto ? "rotate-0 scale-100" : "rotate-180 scale-110"
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            abierto ? "mt-6 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-200 p-5 text-sm leading-7 text-gray-600 shadow-sm sm:p-6 sm:text-base sm:leading-8">
            <p>
              Somos una empresa con más de 25 años de trayectoria en el mercado
              de soluciones de impresión, acompañando a empresas y profesionales
              que necesitan eficiencia, continuidad operativa y control de
              costos.
            </p>

            <p className="mt-4">
              Nos especializamos en la provisión de insumos originales y
              alternativos, papelería, servicio técnico especializado y alquiler
              de impresoras bajo modalidad de costo por copia.
            </p>

            <p className="mt-4">
              A lo largo de estos años, entendimos que imprimir no es solo un
              gasto, sino una parte clave del funcionamiento de cada negocio.
              Por eso, nuestro enfoque está puesto en brindar soluciones
              integrales, optimizando recursos y garantizando resultados.
            </p>

            <p className="mt-4">
              Trabajamos con compromiso, rapidez y asesoramiento personalizado,
              convirtiéndonos en un socio estratégico para cada cliente.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
              <div className="rounded-xl bg-[#6B0F1A]/5 px-3 py-4">
                <p className="text-base font-semibold text-[#6B0F1A] sm:text-lg">
                  +25 años
                </p>
                <p className="text-[11px] text-gray-500 sm:text-xs">
                  de experiencia
                </p>
              </div>

              <div className="rounded-xl bg-[#6B0F1A]/5 px-3 py-4">
                <p className="text-base font-semibold text-[#6B0F1A] sm:text-lg">
                  Atención
                </p>
                <p className="text-[11px] text-gray-500 sm:text-xs">
                  personalizada
                </p>
              </div>

              <div className="rounded-xl bg-[#6B0F1A]/5 px-3 py-4">
                <p className="text-base font-semibold text-[#6B0F1A] sm:text-lg">
                  Soluciones
                </p>
                <p className="text-[11px] text-gray-500 sm:text-xs">
                  integrales
                </p>
              </div>

              <div className="rounded-xl bg-[#6B0F1A]/5 px-3 py-4">
                <p className="text-base font-semibold text-[#6B0F1A] sm:text-lg">
                  Respuesta
                </p>
                <p className="text-[11px] text-gray-500 sm:text-xs">
                  rápida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};