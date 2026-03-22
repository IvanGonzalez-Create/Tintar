import { useMemo } from "react";
import { useCotizacion } from "../../components/Context/CotizacionContext";
import type { ProductoLista as ProductoListaType } from "../../types/Productos";
import type { ProductoConEstado, UseProductosListaReturn } from "../../types/Categorias";

export const useProductosLista = (
  productos: ProductoListaType[],
  categoriaId: string
): UseProductosListaReturn => {
  const { agregarProducto, quitarProducto, cotizacion } = useCotizacion();

  const esInsumoDeImpresion = useMemo(() => {
    return categoriaId === "toners" || categoriaId === "cartuchos";
  }, [categoriaId]);

  const productosConEstado = useMemo<ProductoConEstado[]>(() => {
    return productos.map((producto) => {
      const yaAgregado = cotizacion.some((p) => p.id === producto.id);

      return {
        ...producto,
        yaAgregado,
      };
    });
  }, [productos, cotizacion]);

  return {
    esInsumoDeImpresion,
    productos: productosConEstado,
    agregarProducto,
    quitarProducto,
  };
};