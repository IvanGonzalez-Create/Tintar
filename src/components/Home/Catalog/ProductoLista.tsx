import type { ProductoLista as ProductoListaType } from "../../../types/Productos";
import { Trash2 } from "lucide-react";
import { useProductosLista } from "../../../hooks/Catalogo/useProductosLista";

type Props = {
  productos: ProductoListaType[];
  categoriaId: string;
};

export const ProductosLista = ({ productos, categoriaId }: Props) => {
  const {
    productos: productosUI,
    esInsumoDeImpresion,
    agregarProducto,
    quitarProducto,
  } = useProductosLista(productos, categoriaId);

  return (
    <div>
      {/* Mobile */}
      <div className="space-y-3 md:hidden">
        {productosUI.map((producto) => (
          <div
            key={producto.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col h-full"
          >
            {/* Título con altura fija */}
            <h3 className="text-sm font-semibold text-gray-900 min-h-[40px] line-clamp-2">
              {producto.modelo ?? producto.nombre ?? "-"}
            </h3>

            {/* Info con altura fija */}
            <div className="space-y-2 text-sm text-gray-600 mt-2 min-h-[70px]">
              <div>
                <span className="font-medium text-gray-900">
                  {esInsumoDeImpresion ? "Marca:" : "Tipo:"}
                </span>{" "}
                {esInsumoDeImpresion
                  ? producto.marca ?? "-"
                  : producto.tipo ?? "-"}
              </div>

              <div>
                <span className="font-medium text-gray-900">
                  {esInsumoDeImpresion
                    ? "Capacidad de imagen:"
                    : "Detalle:"}
                </span>{" "}
                {esInsumoDeImpresion
                  ? producto.capacidad ?? "-"
                  : producto.detalle ?? "-"}
              </div>
            </div>

            {/* Botones siempre abajo */}
            <div className="mt-auto pt-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    !producto.yaAgregado && agregarProducto(producto)
                  }
                  disabled={producto.yaAgregado}
                  className={`flex-1 rounded-md py-2 text-sm font-medium text-white transition ${
                    producto.yaAgregado
                      ? "bg-green-600 cursor-default"
                      : "bg-[#6B0F1A] hover:opacity-90 cursor-pointer"
                  }`}
                >
                  {producto.yaAgregado ? "Agregado ✓" : "Consultar"}
                </button>

                <button
                  type="button"
                  onClick={() => quitarProducto(producto.id)}
                  className={`shrink-0 rounded-md p-2 transition ${
                    producto.yaAgregado
                      ? "text-red-500 hover:bg-red-100 cursor-pointer"
                      : "invisible pointer-events-none"
                  }`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm font-semibold text-gray-600">
              <th className="w-[38%] py-3 pr-4 align-top">MODELO</th>
              <th className="w-[20%] py-3 pr-4 align-top">
                {esInsumoDeImpresion ? "MARCA" : "TIPO"}
              </th>
              <th className="w-[24%] py-3 pr-4 align-top">
                {esInsumoDeImpresion
                  ? "CAPACIDAD DE TONER"
                  : "DETALLE"}
              </th>
              <th className="w-[18%] py-3 align-top"></th>
            </tr>
          </thead>

          <tbody>
            {productosUI.map((producto) => (
              <tr key={producto.id} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 align-top">
                  <span className="break-words">
                    {producto.modelo ?? producto.nombre ?? "-"}
                  </span>
                </td>

                <td className="py-3 pr-4 align-top capitalize">
                  <span className="break-words">
                    {esInsumoDeImpresion
                      ? producto.marca ?? "-"
                      : producto.tipo ?? "-"}
                  </span>
                </td>

                <td className="py-3 pr-4 align-top">
                  <span className="break-words">
                    {esInsumoDeImpresion
                      ? producto.capacidad ?? "-"
                      : producto.detalle ?? "-"}
                  </span>
                </td>

                <td className="py-3 align-top">
                  <div className="flex items-center gap-2 min-w-[180px]">
                    <button
                      type="button"
                      onClick={() =>
                        !producto.yaAgregado &&
                        agregarProducto(producto)
                      }
                      disabled={producto.yaAgregado}
                      className={`w-[130px] rounded-md px-4 py-1 text-sm text-white transition ${
                        producto.yaAgregado
                          ? "bg-green-600 cursor-default"
                          : "bg-[#6B0F1A] hover:opacity-90 cursor-pointer"
                      }`}
                    >
                      {producto.yaAgregado
                        ? "Agregado ✓"
                        : "Consultar"}
                    </button>

                    <button
                      type="button"
                      onClick={() => quitarProducto(producto.id)}
                      className={`p-2 rounded-md transition ${
                        producto.yaAgregado
                          ? "text-red-500 hover:bg-red-100 cursor-pointer"
                          : "invisible pointer-events-none"
                      }`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};