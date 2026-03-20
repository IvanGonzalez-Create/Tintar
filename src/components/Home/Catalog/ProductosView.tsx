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
  const [animandoLista, setAnimandoLista] = useState(false);

  const productosPorPagina = 8;
  const categoriaId = productoActivo.categoriaId.toLowerCase();
  const marca = productoActivo.marca.toLowerCase();
  const listaId = (productoActivo.listaId ?? "").toLowerCase();

  const esInsumoDeImpresion =
    categoriaId === "toners" || categoriaId === "cartuchos";

  const placeholderBusqueda = esInsumoDeImpresion
    ? "Buscar por modelo..."
    : "Buscar por modelo, tipo o detalle...";

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
        const textoBusqueda = busqueda.toLowerCase().trim();

        if (!textoBusqueda) return true;

        const campos = [
          p.modelo ?? "",
          p.nombre ?? "",
          p.marca ?? "",
          p.tipo ?? "",
          p.detalle ?? "",
          p.capacidad ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return campos.includes(textoBusqueda);
      });
  }, [categoriaId, marca, listaId, busqueda, esInsumoDeImpresion]);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, categoriaId, marca, listaId]);

  useEffect(() => {
    setAnimandoLista(true);

    const timeout = setTimeout(() => {
      setAnimandoLista(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [paginaActual]);

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);

  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual((prev) => prev - 1);
    }
  };

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prev) => prev + 1);
    }
  };

  return (
    <section className="py-24 bg-white" id="productos">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="mb-6 text-sm font-medium text-[#6B0F1A] hover:underline"
        >
          ← Volver
        </button>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder={placeholderBusqueda}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full border px-4 py-2 pr-10 rounded-md"
          />

          {busqueda && (
            <button
              type="button"
              onClick={() => setBusqueda("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>

        <div
          className={`min-h-[420px] transition-all duration-150 ${
            animandoLista ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"
          }`}
        >
          <ProductosLista
            productos={productosPagina}
            categoriaId={categoriaId}
          />
        </div>

        {totalPaginas > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <button
              onClick={irPaginaAnterior}
              disabled={paginaActual === 1}
              className={`px-4 py-2 rounded border text-sm ${
                paginaActual === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              }`}
            >
              ← Anterior
            </button>

            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i}
                onClick={() => setPaginaActual(i + 1)}
                className={`px-3 py-2 rounded border text-sm ${
                  paginaActual === i + 1
                    ? "bg-[#6B0F1A] text-white border-[#6B0F1A]"
                    : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={irPaginaSiguiente}
              disabled={paginaActual === totalPaginas}
              className={`px-4 py-2 rounded border text-sm ${
                paginaActual === totalPaginas
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              }`}
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};