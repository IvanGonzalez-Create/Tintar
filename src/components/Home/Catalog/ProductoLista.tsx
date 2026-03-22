import type { ProductoLista as ProductoListaType } from "../../../data/productosLista";
import { useCotizacion } from "../../Context/CotizacionContext";
import { Trash2 } from "lucide-react";

type Props = {
  productos: ProductoListaType[];
  categoriaId: string;
};

export const ProductosLista = ({ productos, categoriaId }: Props) => {
  const esInsumoDeImpresion =
    categoriaId === "toners" || categoriaId === "cartuchos";

  const { agregarProducto, quitarProducto, cotizacion } = useCotizacion();

  return (
    <div>
      {/* Mobile: cards */}
      <div className="space-y-3 md:hidden">
        {productos.map((producto) => {
          const yaAgregado = cotizacion.some((p) => p.id === producto.id);

          return (
            <div
              key={producto.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-gray-900 wrap-break-word">
                  {producto.modelo ?? producto.nombre ?? "-"}
                </h3>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium text-gray-900">
                    {esInsumoDeImpresion ? "Marca:" : "Tipo:"}
                  </span>{" "}
                  <span className="wrap-break-word">
                    {esInsumoDeImpresion
                      ? producto.marca ?? "-"
                      : producto.tipo ?? "-"}
                  </span>
                </div>

                <div>
                  <span className="font-medium text-gray-900">
                    {esInsumoDeImpresion
                      ? "Capacidad de imagen:"
                      : "Detalle:"}
                  </span>{" "}
                  <span className="wrap-break-word">
                    {esInsumoDeImpresion
                      ? producto.capacidad ?? "-"
                      : producto.detalle ?? "-"}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                {yaAgregado ? (
                  <div className="flex gap-2">
                    <span className="flex-1 rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white">
                      Agregado ✓
                    </span>

                      <button
                        type="button"
                        onClick={() => quitarProducto(producto.id)}
                        className="p-2 rounded-md text-red-500 hover:bg-red-100 transition cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => agregarProducto(producto)}
                    className="w-full rounded-md bg-[#6B0F1A] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 cursor-pointer"
                  >
                    Consultar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop / tablet: tabla */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm font-semibold text-gray-600">
              <th className="py-3 pr-4">MODELO</th>
              <th className="py-3 pr-4">
                {esInsumoDeImpresion ? "MARCA" : "TIPO"}
              </th>
              <th className="py-3 pr-4">
                {esInsumoDeImpresion ? "CAPACIDAD DE TONER" : "DETALLE"}
              </th>
              <th className="py-3"></th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => {
              const yaAgregado = cotizacion.some((p) => p.id === producto.id);

              return (
                <tr key={producto.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 pr-4 align-top">
                    <span className="wrap-break-word">
                      {producto.modelo ?? producto.nombre ?? "-"}
                    </span>
                  </td>

                  <td className="py-3 pr-4 align-top capitalize">
                    <span className="wrap-break-word">
                      {esInsumoDeImpresion
                        ? producto.marca ?? "-"
                        : producto.tipo ?? "-"}
                    </span>
                  </td>

                  <td className="py-3 pr-4 align-top">
                    <span className="wrap-break-word">
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
                                yaAgregado ? undefined : agregarProducto(producto)
                              }
                              disabled={yaAgregado}
                              className={`w-[130px] rounded-md px-4 py-1 text-center text-sm whitespace-nowrap text-white transition ${
                                yaAgregado
                                  ? "bg-green-600 cursor-default"
                                  : "bg-[#6B0F1A] hover:opacity-90 cursor-pointer"
                              }`}
                            >
                              {yaAgregado ? "Agregado ✓" : "Consultar"}
                            </button>

                            <button
                              type="button"
                              onClick={() => quitarProducto(producto.id)}
                              className={`p-2 rounded-md transition ${
                                yaAgregado
                                  ? "text-red-500 hover:bg-red-100 cursor-pointer"
                                  : "invisible pointer-events-none"
                              }`}
                              aria-hidden={!yaAgregado}
                              tabIndex={yaAgregado ? 0 : -1}
                            >
                              <Trash2 size={16} />
                            </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};