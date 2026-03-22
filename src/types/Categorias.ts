// Types De ProductosLista

import type { ProductoLista as ProductoListaType } from "../types/Productos";

export type ProductoConEstado = ProductoListaType & {
  yaAgregado: boolean;
};

export type UseProductosListaReturn = {
  esInsumoDeImpresion: boolean;
  productos: ProductoConEstado[];
  agregarProducto: (producto: ProductoListaType) => void;
  quitarProducto: (id: string) => void;
};



// Types De Productos View

import type React from "react";
import type { Producto } from "../types/Productos";

export type UseProductosViewParams = {
  productoActivo: Producto;
  onBack: () => void;
};

export type UseProductosViewReturn = {
  busqueda: string;
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
  paginaActual: number;
  animandoLista: boolean;
  saliendo: boolean;
  categoriaId: string;
  placeholderBusqueda: string;
  productosPagina: ProductoListaType[];
  totalPaginas: number;
  handleBack: () => void;
  cambiarPagina: (pagina: number) => void;
  irPaginaAnterior: () => void;
  irPaginaSiguiente: () => void;
  buscadorRef: React.RefObject<HTMLDivElement | null>;
};