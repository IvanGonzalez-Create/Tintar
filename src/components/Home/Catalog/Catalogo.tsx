import { useCatalogo } from "../../../hooks/useCatalogo";
import { useState ,useRef, useEffect } from "react";
import ProductosGrid from "./ProductosGrid";
import { ProductosView } from "./ProductosView";
import type { Producto } from "../../../data/productos";

export default function Catalogo() {
  const {
    categorias,
    categoriaActiva,
    subcategoriaActiva,
    categoriaSeleccionada,
    cambiarCategoria,
    setSubcategoriaActiva,
    productosFiltrados,
  } = useCatalogo();

  const [visible, setVisible] = useState(false);
  const [productoActivo, setProductoActivo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Si hay una subcategoría activa, mostramos ProductosView
  if (productoActivo) {
    return (
      <ProductosView
        subcategoriaId={productoActivo}
        productos={productosFiltrados}
        onBack={() => setProductoActivo(null)}
      />
    );
  }

  return (
    <section
      ref={sectionRef}
      id="productos"
      className={`py-24 bg-white fade-section ${visible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Nuestros Productos</h2>
          <p className="mt-4 text-neutral-600">
            Insumos y tecnología para potenciar tu empresa
          </p>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => cambiarCategoria(cat.id)}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                categoriaActiva === cat.id
                  ? "bg-[#6B0F1A] text-white border-[#6B0F1A]"
                  : "bg-white text-black border-neutral-200 hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              } ${cat.destacada ? "shadow-md" : ""}`}
            >
              <span className="font-semibold text-lg">{cat.nombre}</span>
            </button>
          ))}
        </div>

        {/* Subcategorías */}
        {categoriaSeleccionada && (
          <div className="mt-12 flex flex-wrap justify-center gap-6 fade-sub visible">
            {categoriaSeleccionada.subcategorias.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSubcategoriaActiva(sub.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  subcategoriaActiva === sub.id
                    ? "text-[#6B0F1A]"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {sub.nombre}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-200 ${
                    subcategoriaActiva === sub.id
                      ? "bg-[#6B0F1A] scale-x-100"
                      : "bg-[#6B0F1A] scale-x-0"
                  } origin-left`}
                />
              </button>
            ))}
          </div>
        )}

        {/* Grilla general de productos */}
        <div className="mt-16 min-h-[300px]">
          <ProductosGrid
            productos={productosFiltrados}
            onConsultar={(producto: Producto) =>
              setProductoActivo(producto.subcategoriaId)
            }
          />
        </div>
      </div>
    </section>
  );
}