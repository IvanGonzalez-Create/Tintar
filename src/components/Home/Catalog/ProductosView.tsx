import { useState, useMemo, useEffect } from "react";
import { ProductosLista } from "./ProductoLista";
import { productosLista } from "../../../data/productosLista";


type Props = {
  marca: string
  onBack: () => void
}

export const ProductosView = ({ marca, onBack }: Props) => {

  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);


  const productosPorPagina = 10;

  const productosFiltrados = useMemo(() => {
    return productosLista
      .filter((p) => p.marca === marca)
      .filter((p) =>
        (p.modelo ?? "").toLowerCase().includes(busqueda.toLowerCase())
      );
  }, [marca, busqueda]);

    useEffect(() => {
      setPaginaActual(1);
    }, [busqueda]);


  const indiceFinal = paginaActual * productosPorPagina;
  const indiceInicial = indiceFinal - productosPorPagina;

  const productosPagina = productosFiltrados.slice(
    indiceInicial,
    indiceFinal
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);


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

        {/* Lista */}
        <ProductosLista productos={productosPagina} />

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