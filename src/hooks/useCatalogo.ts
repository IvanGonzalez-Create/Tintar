import { useState } from "react";
import { categorias } from "../data/categorias";
import { productos } from "../data/productos";

export const useCatalogo = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<string>(categorias[0].id);
  const [subcategoriaActiva, setSubcategoriaActiva] = useState<string>( categorias[0].subcategorias[0]?.id || "" );

  const categoriaSeleccionada = categorias.find(
    (cat) => cat.id === categoriaActiva
  );

  const cambiarCategoria = (id: string) => {
    setCategoriaActiva(id);

    const categoria = categorias.find((cat) => cat.id === id);

    if (categoria && categoria.subcategorias.length > 0) {
      setSubcategoriaActiva(categoria.subcategorias[0].id);
    }
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