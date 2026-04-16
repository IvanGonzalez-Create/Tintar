import type { Producto } from "../../../types/Productos";

type Props = {
  producto: Producto;
  onConsultar?: () => void;
};

export default function ProductoCard({ producto, onConsultar }: Props) {
  const esInsumoDeImpresion =
    producto.categoriaId?.toLowerCase() === "toners" ||
    producto.categoriaId?.toLowerCase() === "cartuchos";

  const mostrarDetalleExtra = !esInsumoDeImpresion;

  return (
    <div className="group rounded-xl border bg-white p-3 transition-all duration-300 hover:shadow-md sm:p-4">
      <div className="flex items-center justify-center overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-32 md:h-36"
        />
      </div>

      <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-black sm:mt-4 sm:text-base">
        {producto.nombre}
      </h3>

      {producto.descripcion && (
        <p className="mt-1 line-clamp-2 text-[11px] text-neutral-600 sm:text-xs">
          {producto.descripcion}
        </p>
      )}

      {mostrarDetalleExtra && producto.tipo && (
        <p className="mt-1 text-[11px] text-neutral-700 sm:mt-2 sm:text-sm">
          <span className="font-medium">Tipo:</span> {producto.tipo}
        </p>
      )}

      {mostrarDetalleExtra && producto.detalle && (
        <p className="mt-1 line-clamp-2 text-[11px] text-neutral-700 sm:text-sm">
          <span className="font-medium">Detalle:</span> {producto.detalle}
        </p>
      )}

      <button
        type="button"
        onClick={onConsultar}
        className="mt-3 w-full rounded-md bg-[#6B0F1A] py-1.5 text-[11px] font-medium text-white transition hover:opacity-90 sm:mt-4 sm:text-xs"
      >
        Ver Lista
      </button>
    </div>
  );
}