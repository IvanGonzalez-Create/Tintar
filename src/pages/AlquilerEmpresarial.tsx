import { useState } from "react";
import {
  CheckCircle2,
  Printer,
  Wrench,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";



const impresoras = [
  {
    id: 1,
    nombre: "Samsung ML-2165W",
    costoPorCopia: 20.00,
    imagenes: [
      "../public/Productos/Samsung ML-2165W-1.png",
      "../public/Productos/Samsung ML-2165W-2.png",
      "../public/Productos/Samsung ML-2165W-3.png",
    ],
    descripcion:
      "Equipo compacto y confiable, ideal para oficinas y espacios de trabajo que necesitan impresión monocromática ágil y práctica.",
    caracteristicas: [
      "Impresora láser monocromática",
      "Conectividad WiFi y USB",
      "Velocidad de impresión de hasta 20 ppm",
      "Resolución de hasta 1200 dpi",
      "Incluye mantenimiento e insumos",
    ],
  },
  {
    id: 2,
    nombre: "Lexmark MX-410-DE",
    costoPorCopia: 17.00,
    imagenes: [
      "../public/Productos/Lexmark MX-410-DE-1.png",
      "../public/Productos/Lexmark MX-410-DE-2.png",
      "../public/Productos/Lexmark MX-410-DE-3.png",
    ],
    descripcion:
      "Multifunción empresarial pensada para entornos de trabajo que requieren rendimiento, velocidad y funciones completas en un solo equipo.",
    caracteristicas: [
      "Equipo multifunción monocromático",
      "Pantalla táctil inteligente",
      "Impresión automática doble faz",
      "Alta velocidad de impresión",
      "Incluye mantenimiento e insumos",
    ],
  },
  {
    id: 3,
    nombre: "Brother HL-5100DN",
    costoPorCopia: 16.66,
    imagenes: [
      "../public/Productos/Brother HL-5100DN-1.png",
      "../public/Productos/Brother HL-5100DN-2.png",
      "../public/Productos/Brother HL-5100DN-3.png",
    ],
    descripcion:
      "Solución robusta para empresas que buscan impresión rápida, conectividad de red y buen desempeño para uso intensivo.",
    caracteristicas: [
      "Impresora láser monocromática",
      "Conectividad de red Ethernet",
      "Impresión automática doble faz",
      "Alta velocidad de impresión",
      "Gran capacidad de papel",
      "Incluye mantenimiento e insumos",
    ],
  },
  {
    id: 4,
    nombre: "HP Laser MFP 137FNW",
    costoPorCopia: 24.00,
    imagenes: [
      "../public/Productos/HP Laser MFP 137FNW-1.png",
      "../public/Productos/HP Laser MFP 137FNW-2.png",
      "../public/Productos/HP Laser MFP 137FNW-3.png",
    ],
    descripcion:
      "Equipo multifunción versátil para oficinas que necesitan imprimir, copiar y escanear con conectividad simple y buen rendimiento diario.",
    caracteristicas: [
      "Equipo multifunción monocromático",
      "Conectividad WiFi y USB",
      "Funciones de impresión, copia y escaneo",
      "Diseño compacto para oficina",
      "Incluye mantenimiento e insumos",
    ],
  },
];

const generarLinkWhatsapp = (nombre: string) => {
  const mensaje = `Hola, buenos días. Quería consultar por el alquiler de ${nombre}.`;
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
};

type CarruselProps = {
  imagenes: string[];
  nombre: string;
};

function CarruselImpresora({ imagenes, nombre }: CarruselProps) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const tieneImagenes = imagenes && imagenes.length > 0;

  const irAnterior = () => {
    setIndiceActual((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  const irSiguiente = () => {
    setIndiceActual((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distancia = touchStartX - touchEndX;
    const minimoSwipe = 50;

    if (distancia > minimoSwipe) {
      irSiguiente();
    } else if (distancia < -minimoSwipe) {
      irAnterior();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!tieneImagenes) {
    return (
      <div className="flex min-h-[260px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-center sm:min-h-[320px]">
        <Printer size={40} className="text-red-500" />
        <p className="mt-3 text-sm text-neutral-400">Imagen pendiente</p>
      </div>
    );
  }



  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex min-h-[260px] items-center justify-center sm:min-h-[320px]">
          <img
            src={imagenes[indiceActual]}
            alt={`${nombre} vista ${indiceActual + 1}`}
            className="max-h-[260px] w-auto select-none object-contain transition duration-300 sm:max-h-[320px]"
            draggable={false}
          />
        </div>

        {imagenes.length > 1 && (
          <>
            <button
              type="button"
              onClick={irAnterior}
              className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 sm:inline-flex"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={irSiguiente}
              className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 sm:inline-flex"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {imagenes.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto pb-1">
          {imagenes.map((imagen, index) => {
            const activa = index === indiceActual;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setIndiceActual(index)}
                className={`shrink-0 overflow-hidden rounded-xl border transition ${
                  activa
                    ? "border-red-500 ring-2 ring-red-500/30"
                    : "border-white/10 hover:border-white/30"
                }`}
                aria-label={`Ver miniatura ${index + 1}`}
              >
                <img
                  src={imagen}
                  alt={`${nombre} miniatura ${index + 1}`}
                  className="h-16 w-16 bg-white/5 object-contain p-1 sm:h-20 sm:w-20"
                  draggable={false}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

    const numeroWhatsApp = "541136743998";

    const numeroSoporte = "541157470740";

    const generarLinkSoporte = () => {
      const mensaje =
        "Hola, buenos días. Necesito soporte técnico.\n\nMarca:\nModelo:\nProblema:";

      return `https://wa.me/${numeroSoporte}?text=${encodeURIComponent(mensaje)}`;
    };

export default function AlquilerEmpresarial() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <Printer size={20} />
            </div>
            <h2 className="text-base font-semibold">Equipos profesionales</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Impresoras confiables para oficinas, estudios y empresas con uso
              intensivo.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <Wrench size={20} />
            </div>
            <h2 className="text-base font-semibold">Soporte y mantenimiento</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Atención técnica y seguimiento para asegurar continuidad operativa.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2 xl:col-span-1">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
              <MessageCircle size={20} />
            </div>
            <h2 className="text-base font-semibold">Asesoramiento personalizado</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Te ayudamos a elegir el equipo ideal según el volumen y la
              necesidad de tu empresa.
            </p>
          </article>
        </div>

        <div className="mt-12 space-y-8">
          {impresoras.map((impresora) => (
            <article
              key={impresora.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <CarruselImpresora
                    imagenes={impresora.imagenes}
                    nombre={impresora.nombre}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                    Impresora en alquiler
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {impresora.nombre}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base">
                    {impresora.descripcion}
                  </p>

                  <div className="mt-6 space-y-3">
                    {impresora.caracteristicas.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-red-500"
                        />
                        <p className="text-sm text-neutral-300">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                      <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-500/10 px-5 py-3 border border-red-500/30 shadow-lg">
                        
                        <div className="flex flex-col leading-tight">
                          <span className="text-xs uppercase tracking-wider text-red-400">
                            Costo por copia
                          </span>
                          <span className="text-xl font-bold text-white">
                            ${impresora.costoPorCopia.toFixed(2)}
                          </span>
                        </div>

                      </div>
                    </div>

                  <a
                    href={generarLinkWhatsapp(impresora.nombre)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700 sm:w-auto sm:px-8"
                  >
                    <MessageCircle size={20} />
                    Consultar por esta impresora
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-6 text-center sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">
            ¿Necesitás ayuda para elegir el equipo ideal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
            Podemos asesorarte según el uso, el tamaño de tu oficina y el tipo
            de trabajo que realiza tu empresa.
          </p>

          <a
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              "Hola, buenos días. Quería recibir asesoramiento sobre alquiler de impresoras."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <MessageCircle size={18} />
            Solicitar asesoramiento
          </a>
        </div>
      </section>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
              Soporte técnico
            </p>

            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              ¿Ya tenés un equipo y necesitás asistencia?
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
              Contactanos para soporte técnico, revisión del equipo, mantenimiento o
              consultas relacionadas con el funcionamiento de tu impresora.
            </p>
          </div>

              <a
                href={generarLinkSoporte()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <Wrench size={18} />
                Solicitar soporte técnico
              </a>
        </div>
      </div>

      <footer className="mt-16 border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center text-center">

         
          <h3 className="text-base font-semibold tracking-wide text-white">
            TINTAR
          </h3>

       
          <p className="mt-1 text-sm text-neutral-400">
            Insumos de impresión y tecnología
          </p>

         
          <div className="mt-4 h-px w-16 bg-white/10" />

       
          <p className="mt-4 text-xs text-neutral-500">
            © {new Date().getFullYear()} TINTAR. Todos los derechos reservados.
          </p>

        </div>
      </footer>
    </main>

    



  );
}