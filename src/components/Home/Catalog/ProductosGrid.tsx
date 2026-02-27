import ProductoCard from "./ProductosCard";
import { type Producto } from "../../../data/productos";

type Props = {
  productos: Producto[];
};



export default function ProductosGrid({ productos }: Props) {

  if (productos.length === 0) {
    return null;
  }


  return (
    
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}