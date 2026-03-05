import type { Producto } from "../../../data/productos";

type Props = {
  producto: Producto;
  onConsultar?: () => void;
};

export default function ProductoCard({ producto, onConsultar }: Props) {
  return (
    <div className="group bg-white border rounded-xl p-4 transition-all duration-300 hover:shadow-md">
      
      <div className="overflow-hidden rounded-lg bg-neutral-100 flex items-center justify-center">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-36 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 font-semibold text-base text-black">
        {producto.nombre}
      </h3>

      <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
        {producto.descripcion}
      </p>
      
      <button
      type="button"
      onClick={onConsultar}
      className="mt-4 w-full bg-[#6B0F1A] text-white py-1.5 rounded-md text-xs font-medium transition hover:opacity-90"
      >
        Consultar
        
      </button>
    </div>
  );
}