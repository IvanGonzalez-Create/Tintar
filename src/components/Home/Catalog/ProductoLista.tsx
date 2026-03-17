import type { ProductoLista as ProductoListaType } from "../../../data/productosLista";

type Props = {
  productos: ProductoListaType[];
};

export const ProductosLista = ({ productos }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-semibold text-gray-600">
            <th className="py-3">MODELO</th>
            <th className="py-3">MARCA</th>
            <th className="py-3">CAPACIDAD DE IMAGEN</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{producto.modelo ?? "-"}</td>

              <td className="py-3 capitalize">{producto.marca ?? "-"}</td>

              <td className="py-3">{producto.capacidad ?? "-"}</td>

              <td className="py-3">
                <button className="bg-[#6B0F1A] text-white px-4 py-1 rounded-md text-sm">
                  Consultar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};