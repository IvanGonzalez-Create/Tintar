import type { Producto } from "../../../data/productos";
import ProductoCard from "./ProductosCard";

type Props = {
  productos: Producto[];
};

export const ProductosLista = ({ productos }: Props) => {
  if (productos.length === 0) return <p>No hay productos para esta subcategoría.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}
    </div>
  );
};