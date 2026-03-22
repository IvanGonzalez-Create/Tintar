import { Mail, MessageCircle, Phone } from "lucide-react";
import { canales, equipoComercial } from "../../data/contacto";
import { obtenerEstadoHorario } from "../../hooks/Contacto/horarioAtencion";

export const Contacto = () => {
  const estadoHorario = obtenerEstadoHorario();

  return (
    <section id="contacto" className="scroll-mt-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
              Contacto
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Asesoramiento comercial personalizado
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
              Te ayudamos a encontrar la mejor solución en insumos de impresión,
              tecnología y artículos de oficina.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="text-xs uppercase text-neutral-500">Atención</p>
              <p className="mt-2 text-sm font-semibold text-white">
                Comercial personalizada
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="text-xs uppercase text-neutral-500">Respuesta</p>
              <p className="mt-2 text-sm font-semibold text-white">Rápida</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="text-xs uppercase text-neutral-500">Estado</p>
              <p
                className={`mt-2 text-sm font-semibold ${
                  estadoHorario.abierto ? "text-green-400" : "text-red-400"
                }`}
              >
                {estadoHorario.texto}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {canales.map((canal) => {
            const Icono = canal.icono;

            return (
              <article
                key={canal.titulo}
                className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5 transition hover:border-red-500/40 hover:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                    <Icono size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {canal.titulo}
                    </h3>

                    {canal.descripcion && (
                      <p className="mt-1 text-xs text-neutral-400">
                        {canal.descripcion}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  {canal.href !== "#" ? (
                    <a
                      href={canal.href}
                      target={canal.href.startsWith("https") ? "_blank" : undefined}
                      rel={canal.href.startsWith("https") ? "noreferrer" : undefined}
                      className="text-sm font-medium text-white hover:text-red-400"
                    >
                      {canal.valor}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{canal.valor}</p>
                  )}
                </div>

                {canal.titulo === "Horario" && (
                  <p
                    className={`mt-2 text-xs ${
                      estadoHorario.abierto ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {estadoHorario.texto}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="mb-5">
            <p className="text-xs uppercase text-neutral-500">Equipo comercial</p>
            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Contactá al área indicada
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {equipoComercial.map((persona) => (
              <article
                key={persona.nombre}
                className="rounded-2xl border border-white/10 bg-white/3 p-4 transition hover:border-red-500/40 hover:bg-white/5 sm:p-5"
              >
                <div className="mb-3">
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    {persona.nombre}
                  </h4>
                  <p className="mt-1 text-sm leading-5 text-neutral-400">
                    {persona.rol}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href={`https://wa.me/${persona.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${persona.telefono.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2 px-4 py-2.5 text-sm font-medium text-white hover:border-red-500/40 hover:bg-white/5"
                  >
                    <Phone size={16} />
                    Llamar
                  </a>

                  {persona.email && (
                    <a
                      href={`mailto:${persona.email}`}
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2 px-4 py-2.5 text-sm font-medium text-white hover:border-red-500/40 hover:bg-white/5 sm:col-span-2"
                    >
                      <Mail size={16} className="shrink-0" />
                      <span className="truncate">{persona.email}</span>
                    </a>
                  )}
                </div>

                <p className="mt-3 text-sm text-neutral-400">{persona.telefono}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};