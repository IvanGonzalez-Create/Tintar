import { useState, useMemo, useEffect } from "react";
import { ProductosLista } from "./ProductoLista";
import { productosLista } from "../../../data/productosLista";
import type { Producto } from "../../../data/productos";

type Props = {
  productoActivo: Producto;
  onBack: () => void;
};

export const ProductosView = ({ productoActivo, onBack }: Props) => {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorPagina = 10;

  const categoriaId = productoActivo.categoriaId.toLowerCase();
  const marca = productoActivo.marca.toLowerCase();
  const listaId = (productoActivo.listaId ?? "").toLowerCase();

  const esInsumoDeImpresion =
    categoriaId === "toners" || categoriaId === "cartuchos";

  const productosFiltrados = useMemo(() => {
    return productosLista
      .filter((p) => {
        const categoria = (p.categoriaId ?? "").toLowerCase();
        const marcaProducto = (p.marca ?? "").toLowerCase();
        const listaProducto = (p.listaId ?? "").toLowerCase();

        if (categoria !== categoriaId) return false;

        if (esInsumoDeImpresion) {
          return marcaProducto === marca;
        }

        return listaProducto === listaId;
      })
      .filter((p) => {
        const texto = (p.modelo ?? p.nombre ?? "").toLowerCase();
        return texto.includes(busqueda.toLowerCase());
      });
  }, [categoriaId, marca, listaId, busqueda, esInsumoDeImpresion]);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, categoriaId, marca, listaId]);

  const indiceFinal = paginaActual * productosPorPagina;
  const indiceInicial = indiceFinal - productosPorPagina;
  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="mb-6 text-sm font-medium text-[#6B0F1A] hover:underline"
        >
          ← Volver
        </button>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar modelo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <ProductosLista
          productos={productosPagina}
          categoriaId={categoriaId}
        />

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              onClick={() => setPaginaActual(i + 1)}
              className={`px-3 py-1 border rounded ${
                paginaActual === i + 1
                  ? "bg-[#6B0F1A] text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};