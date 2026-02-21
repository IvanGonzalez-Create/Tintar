import { useState } from "react";
import { categorias } from "../data/Categorias";

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

  return {
    categorias,
    categoriaActiva,
    subcategoriaActiva,
    categoriaSeleccionada,
    cambiarCategoria,
    setSubcategoriaActiva,
  };
};