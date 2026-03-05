import ProductoCard from "./ProductosCard";
import { type Producto } from "../../../data/productos";

type Props = {
  productos: Producto[];
  onConsultar?: (producto: Producto) => void;
};



export default function ProductosGrid({ productos, onConsultar }: Props) {

  if (productos.length === 0) {
    return null;
  }


  return (
    
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
      <ProductoCard
        producto={producto}
        onConsultar={() => onConsultar?.(producto)}
      />
      
      ))}
    </div>
  );
}