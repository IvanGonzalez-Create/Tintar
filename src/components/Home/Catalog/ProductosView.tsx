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

  return (
    <section
      id="productos"
      className={`py-24 bg-white transition-all duration-200 ${
        saliendo ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 text-sm font-medium text-[#6B0F1A] hover:underline"
        >
          ← Volver
        </button>

        <div ref={buscadorRef} className="mb-8 relative">
          <input
            type="text"
            placeholder={placeholderBusqueda}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border px-4 py-2 pr-10 rounded-md"
          />

          {busqueda && (
            <button
              type="button"
              onClick={() => setBusqueda("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>

            <div
              className={`transition-opacity duration-150 ${
                productosPagina.length <= 4
                  ? "min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[540px]"
                  : "min-h-[980px] sm:min-h-[900px] md:min-h-[700px] lg:min-h-[560px]"
              } ${
                animandoLista ? "opacity-0" : "opacity-100"
              }`}
            >
          <ProductosLista
            productos={productosPagina}
            categoriaId={categoriaId}
          />
        </div>

        {totalPaginas > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <button
              type="button"
              onClick={irPaginaAnterior}
              disabled={paginaActual === 1}
              className={`px-4 py-2 rounded border text-sm ${
                paginaActual === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
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
                className={`px-3 py-2 rounded border text-sm ${
                  paginaActual === i + 1
                    ? "bg-[#6B0F1A] text-white border-[#6B0F1A]"
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
              className={`px-4 py-2 rounded border text-sm ${
                paginaActual === totalPaginas
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
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