import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Printer,
  Wrench,
  BadgeDollarSign,
  MessageCircle,
} from "lucide-react";

const impresoras = [
  {
    id: 1,
    nombre: "HP LaserJet Pro MFP M428fdw",
    imagen: "/impresoras/hp-m428fdw.png",
    descripcion:
      "Equipo multifunción ideal para oficinas que necesitan impresión rápida, escaneo y copia en un solo dispositivo.",
    caracteristicas: [
      "Impresión láser monocromática",
      "Multifunción: imprime, copia y escanea",
      "Conectividad Wi-Fi y red",
      "Ideal para oficinas medianas",
    ],
  },
  {
    id: 2,
    nombre: "Brother DCP-L5650DN",
    imagen: "/impresoras/brother-l5650dn.png",
    descripcion:
      "Solución confiable para entornos empresariales que requieren alto rendimiento y bajo costo operativo.",
    caracteristicas: [
      "Alta velocidad de impresión",
      "Escáner y copiadora integrados",
      "Conexión de red Ethernet",
      "Bajo costo por página",
    ],
  },
  {
    id: 3,
    nombre: 'Kyocera ECOSYS MA4500ix',
    imagen: '/impresoras/kyocera-ma4500ix.png',
    descripcion:
      "Equipo robusto pensado para empresas que buscan productividad continua y mantenimiento eficiente.",
    caracteristicas: [
      "Alto volumen de trabajo",
      "Pantalla táctil intuitiva",
      "Excelente eficiencia operativa",
      "Ideal para uso corporativo intensivo",
    ],
  },
];

export default function AlquilerEmpresarial() {
  const [indiceActual, setIndiceActual] = useState(0);

  const impresoraActual = impresoras[indiceActual];

  const irAnterior = () => {
    setIndiceActual((prev) =>
      prev === 0 ? impresoras.length - 1 : prev - 1
    );
  };

  const irSiguiente = () => {
    setIndiceActual((prev) =>
      prev === impresoras.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
            Alquiler empresarial
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Soluciones de impresión para empresas
          </h1>

          <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base">
            Equipos de impresión en alquiler con soporte, asesoramiento y una
            propuesta pensada para optimizar el trabajo diario de tu empresa.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <Printer size={20} />
            </div>
            <h2 className="text-base font-semibold">Equipos profesionales</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Impresoras confiables para oficinas, estudios y empresas con uso
              intensivo.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <Wrench size={20} />
            </div>
            <h2 className="text-base font-semibold">Soporte y mantenimiento</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Atención técnica y seguimiento para asegurar continuidad operativa.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/3 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <BadgeDollarSign size={20} />
            </div>
            <h2 className="text-base font-semibold">Mejor control de costos</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Una alternativa práctica para acceder a equipamiento sin una gran
              inversión inicial.
            </p>
          </article>
        </div>

        {/* Slider principal */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/3 p-4 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Imagen */}
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="flex min-h-[320px] items-center justify-center sm:min-h-[380px]">
                <img
                  src={impresoraActual.imagen}
                  alt={impresoraActual.nombre}
                  className="max-h-[320px] w-auto object-contain sm:max-h-[380px]"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                Impresoras en alquiler
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {impresoraActual.nombre}
              </h2>

              <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base">
                {impresoraActual.descripcion}
              </p>

              <div className="mt-6 space-y-3">
                {impresoraActual.caracteristicas.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-red-500"
                    />
                    <p className="text-sm text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>

              {/* Controles */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={irAnterior}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-red-500/40 hover:bg-white/10"
                    aria-label="Impresora anterior"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={irSiguiente}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-red-500/40 hover:bg-white/10"
                    aria-label="Siguiente impresora"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {impresoras.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setIndiceActual(index)}
                      className={`h-2.5 rounded-full transition ${
                        index === indiceActual
                          ? "w-8 bg-red-500"
                          : "w-2.5 bg-white/25 hover:bg-white/40"
                      }`}
                      aria-label={`Ir a impresora ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-6 text-center sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">
            ¿Querés recibir asesoramiento para tu empresa?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
            Te ayudamos a encontrar el equipo más adecuado según el volumen de
            trabajo y las necesidades de tu oficina.
          </p>

          <a
            href="https://wa.me/541136743998"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <MessageCircle size={18} />
            Solicitar asesoramiento
          </a>
        </div>
      </section>
    </main>
  );
}