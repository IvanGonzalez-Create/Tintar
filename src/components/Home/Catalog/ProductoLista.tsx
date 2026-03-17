import type { ProductoLista as ProductoListaType } from "../../../data/productosLista";
import { useCotizacion } from "../../Context/CotizacionContext";

type Props = {
  productos: ProductoListaType[];
  categoriaId: string;
};

export const ProductosLista = ({ productos, categoriaId }: Props) => {
  const esInsumoDeImpresion =
    categoriaId === "toners" || categoriaId === "cartuchos";

  const { agregarProducto, cotizacion } = useCotizacion();

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
          {productos.map((producto) => {
            const yaAgregado = cotizacion.some((p) => p.id === producto.id);

            return (
              <tr key={producto.id} className="border-b hover:bg-gray-50">
                <td className="py-3">
                  {producto.modelo ?? producto.nombre ?? "-"}
                </td>

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
                  <button
                    type="button"
                    onClick={() => agregarProducto(producto)}
                    disabled={yaAgregado}
                    className={`px-4 py-1 rounded-md text-sm ${
                      yaAgregado
                        ? "bg-green-600 text-white cursor-default"
                        : "bg-[#6B0F1A] text-white hover:opacity-90"
                    }`}
                  >
                    {yaAgregado ? "Agregado ✓" : "Consultar"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};