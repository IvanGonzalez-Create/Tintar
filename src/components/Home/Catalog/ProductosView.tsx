import { useState, useMemo } from "react";
import { ProductosLista } from "./ProductoLista";
import type { Producto } from "../../../data/productos";

type Props = {
  productos: Producto[];
  subcategoriaId: string;
  onBack: () => void;
};

export const ProductosView = ({ productos, subcategoriaId, onBack }: Props) => {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = useMemo(() => {
    return productos
      .filter((p) => p.subcategoriaId === subcategoriaId)
      .filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
  }, [productos, subcategoriaId, busqueda]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Volver */}
        <button
          onClick={onBack}
          className="mb-6 text-sm font-medium text-[#6B0F1A] hover:underline"
        >
          ← Volver
        </button>

        {/* Buscador */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar modelo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Lista de productos filtrados */}
        <ProductosLista productos={productosFiltrados} />
      </div>
    </section>
  );
};