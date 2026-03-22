import { useEffect, useMemo, useRef, useState } from "react";
import { productosLista } from "../../data/productosLista";
import type { UseProductosViewParams, UseProductosViewReturn } from "../../types/Categorias";

export const useProductosView = ({
  productoActivo,
  onBack,
}: UseProductosViewParams): UseProductosViewReturn => {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [animandoLista, setAnimandoLista] = useState(false);
  const [saliendo, setSaliendo] = useState(false);

  const buscadorRef = useRef<HTMLDivElement>(null);

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

  const handleBack = () => {
    setSaliendo(true);

    setTimeout(() => {
      onBack();
    }, 200);
  };

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  const productosPagina = productosFiltrados.slice(indiceInicial, indiceFinal);

  const scrollAlBuscadorEnMobile = () => {
    const esMobile = window.innerWidth < 768;

    if (!esMobile || !buscadorRef.current) return;

    const top =
      buscadorRef.current.getBoundingClientRect().top + window.scrollY - 12;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const cambiarPagina = (pagina: number) => {
    if (pagina < 1 || pagina > totalPaginas || pagina === paginaActual) return;

    setPaginaActual(pagina);

    requestAnimationFrame(() => {
      scrollAlBuscadorEnMobile();
    });

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const irPaginaAnterior = () => {
    cambiarPagina(paginaActual - 1);
  };

  const irPaginaSiguiente = () => {
    cambiarPagina(paginaActual + 1);
  };

  return {
    busqueda,
    setBusqueda,
    paginaActual,
    animandoLista,
    saliendo,
    categoriaId,
    placeholderBusqueda,
    productosPagina,
    totalPaginas,
    handleBack,
    cambiarPagina,
    irPaginaAnterior,
    irPaginaSiguiente,
    buscadorRef,
  };
};