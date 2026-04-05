import { ProductosLista } from "./ProductoLista";
import type { Producto } from "../../../types/Productos";
import { useProductosView } from "../../../hooks/Catalogo/useProductosView";

type Props = {
  productoActivo: Producto;
  onBack: () => void;
};

export const ProductosView = ({ productoActivo, onBack }: Props) => {
  const {
    busqueda,
    setBusqueda,
    paginaActual,
    animandoLista,
    saliendo,
    categoriaId,
    placeholderBusqueda,
    productosPagina,
    totalPaginas,
    handleBack,
    cambiarPagina,
    irPaginaAnterior,
    irPaginaSiguiente,
    buscadorRef,
  } = useProductosView({
    productoActivo,
    onBack,
  });

  const mostrarMensajeSinResultados =
    busqueda.trim().length > 0 && productosPagina.length === 0;

  return (
    <section
      id="productos"
      className={`bg-white py-24 transition-all duration-200 ${
        saliendo ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <button
          type="button"
          onClick={handleBack}
          className="group mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#6B0F1A]/40 bg-white px-4 py-3 text-sm font-semibold text-[#6B0F1A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6B0F1A] hover:bg-[#6B0F1A]/5 hover:shadow-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B0F1A]/10 text-[#6B0F1A] transition-all duration-300 group-hover:bg-[#6B0F1A] group-hover:text-white">
            ←
          </span>

          <span className="tracking-[0.01em]">Volver</span>
        </button>

        <div ref={buscadorRef} className="relative mb-8">
          <input
            type="text"
            placeholder={placeholderBusqueda}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full rounded-md border px-4 py-2 pr-10"
          />

          {busqueda && (
            <button
              type="button"
              onClick={() => setBusqueda("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-black"
            >
              ✕
            </button>
          )}
        </div>

        {mostrarMensajeSinResultados ? (
          <div className="mb-8 rounded-2xl border border-[#6B0F1A]/20 bg-[#6B0F1A]/5 p-5 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#6B0F1A] sm:text-base">
              ¿El modelo que buscaste no lo encontraste?
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Nosotros lo conseguimos por vos. Mandanos un mensaje y lo
              conseguimos.
            </p>

            <a
              href="https://wa.me/541136743998"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#6B0F1A] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#7A1C25]"
            >
              Consultar por WhatsApp
            </a>
          </div>
        ) : (
          <div
            className={`transition-opacity duration-150 ${
              productosPagina.length <= 4
                ? "min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[540px]"
                : "min-h-[980px] sm:min-h-[900px] md:min-h-[700px] lg:min-h-[560px]"
            } ${animandoLista ? "opacity-0" : "opacity-100"}`}
          >
            <ProductosLista
              productos={productosPagina}
              categoriaId={categoriaId}
            />
          </div>
        )}

        {!mostrarMensajeSinResultados && totalPaginas > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={irPaginaAnterior}
              disabled={paginaActual === 1}
              className={`rounded border px-4 py-2 text-sm ${
                paginaActual === 1
                  ? "cursor-not-allowed bg-gray-100 text-gray-400"
                  : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              }`}
            >
              ← Anterior
            </button>

            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => cambiarPagina(i + 1)}
                className={`rounded border px-3 py-2 text-sm ${
                  paginaActual === i + 1
                    ? "border-[#6B0F1A] bg-[#6B0F1A] text-white"
                    : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={irPaginaSiguiente}
              disabled={paginaActual === totalPaginas}
              className={`rounded border px-4 py-2 text-sm ${
                paginaActual === totalPaginas
                  ? "cursor-not-allowed bg-gray-100 text-gray-400"
                  : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              }`}
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};