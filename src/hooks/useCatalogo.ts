import { useState } from "react";
import { categorias } from "../data/categorias";
import { productos } from "../data/productos";

export const useCatalogo = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<string>(categorias[0].id);
  const [subcategoriaActiva, setSubcategoriaActiva] = useState<string | null>(null);

  const categoriaSeleccionada = categorias.find(
    (cat) => cat.id === categoriaActiva
  );

  const cambiarCategoria = (id: string) => {
    setCategoriaActiva(id);
    setSubcategoriaActiva(null);
  };

  const productosFiltrados = subcategoriaActiva
  ? productos.filter(
      (producto) => producto.subcategoriaId === subcategoriaActiva
    )
  : [];





  return {
    categorias,
    categoriaActiva,
    subcategoriaActiva,
    categoriaSeleccionada,
    cambiarCategoria,
    setSubcategoriaActiva,
    productosFiltrados,
  };
};