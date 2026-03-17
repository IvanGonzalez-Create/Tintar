import type { ProductoLista as ProductoListaType } from "../../../data/productosLista";

type Props = {
  productos: ProductoListaType[];
  categoriaId: string;
};

export const ProductosLista = ({ productos, categoriaId }: Props) => {
  const esInsumoDeImpresion =
    categoriaId === "toners" || categoriaId === "cartuchos";

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-semibold text-gray-600">
            <th className="py-3">MODELO</th>
            <th className="py-3">{esInsumoDeImpresion ? "MARCA" : "TIPO"}</th>
            <th className="py-3">
              {esInsumoDeImpresion ? "CAPACIDAD DE IMAGEN" : "DETALLE"}
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{producto.modelo ?? producto.nombre ?? "-"}</td>

              <td className="py-3 capitalize">
                {esInsumoDeImpresion
                  ? producto.marca ?? "-"
                  : producto.tipo ?? "-"}
              </td>

              <td className="py-3">
                {esInsumoDeImpresion
                  ? producto.capacidad ?? "-"
                  : producto.detalle ?? "-"}
              </td>

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