import Logo from "../../../public/Tintar Logo Transparente.png";
import { useScrolled } from "../../hooks/useScrolled";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useState, useEffect } from "react";
import { useCotizacion } from "../Context/CotizacionContext";
import { X } from "lucide-react";
import type { NavLink } from "../../types/Navbar";

export default function Navbar() {
  const [cotizacionAbierta, setCotizacionAbierta] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [productoSaliendo, setProductoSaliendo] = useState<string | null>(null);
  const [vaciandoLista, setVaciandoLista] = useState(false);
  

  const { cotizacion, quitarProducto, limpiar } = useCotizacion();

  const scrolled = useScrolled(10);

  useLockBodyScroll(isOpen || cotizacionAbierta);

  const handleQuitarProducto = (id: string) => {
  setProductoSaliendo(id);

    setTimeout(() => {
      quitarProducto(id);
      setProductoSaliendo(null);
    }, 180);
  };

  const handleLimpiar = () => {
  if (cotizacion.length === 0) return;

  setVaciandoLista(true);

  setTimeout(() => {
    limpiar();
    setVaciandoLista(false);
  }, 180);
};

    const mensajeWhatsapp = encodeURIComponent(
    `Hola, buenos días.\n\nQuería solicitar cotización de los siguientes productos:\n\n${cotizacion
        .map((p, ) => `• ${p.modelo ?? p.nombre}`)
        .join("\n")}\n\nMuchas gracias.`
    );

  const [animarCarrito, setAnimarCarrito] = useState(false);

        useEffect(() => {
        if (cotizacion.length === 0) return;

        setAnimarCarrito(true);
        const t = setTimeout(() => setAnimarCarrito(false), 300);
        return () => clearTimeout(t);
        }, [cotizacion.length]);

  

  const linkWhatsapp = `https://wa.me/5491136743998?text=${mensajeWhatsapp}`;

  const navLinks: NavLink[] = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Servicios", href: "#Servicios" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];


  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
        ${
          scrolled
            ? "bg-[#F8EDEE]/40 backdrop-blur-md shadow-md border-b border-[#6B0F1A]/10"
            : "bg-[#fce7e7] shadow-sm border-b border-[#6B0F1A]/10"
        }`}
      >
        <nav className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">
            <img
              src={Logo}
              alt="TinTar - Insumos y alquiler de impresoras"
              className="h-10 w-auto"
            />
            <span className="sr-only">Tintar</span>
          </div>

          <ul className="hidden lg:flex gap-8 text-base font-semibold text-neutral-900">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="transition-colors duration-300 font-semibold tracking-wide hover:text-[#6B0F1A]"
                >
                  {link.label}
                </a>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B0F1A] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCotizacionAbierta(true)}
              className={`relative p-2 ${animarCarrito ? "scale-110" : ""} transition-transform cursor-pointer`}
              aria-label="Abrir lista de cotización"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-neutral-900 hover:text-[#6B0F1A] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12m-9 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>

              {cotizacion.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 flex items-center justify-center bg-red-600 text-white text-xs rounded-full">
                  {cotizacion.length}
                </span>
              )}
            </button>

            <div>
              <a
                href="#Servicios"
                className="bg-[#6B0F1A] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#7A1C25] transition-all duration-300"
              >
                Alquiler Empresarial
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCotizacionAbierta(true)}
              className="relative p-2"
              aria-label="Abrir lista de cotización"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12m-9 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>

              {cotizacion.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 flex items-center justify-center bg-red-600 text-white text-xs rounded-full">
                  {cotizacion.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 relative z-50"
              aria-label="Abrir menú"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/40 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#F3DCDC] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-6 p-6 text-black font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition-colors duration-300 font-semibold tracking-wide group-hover:text-[#6B0F1A]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {cotizacionAbierta && (
        <button
          type="button"
          onClick={() => setCotizacionAbierta(false)}
          className="fixed inset-0 bg-black/30 z-40"
          aria-label="Cerrar panel de cotización"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 ${
          cotizacionAbierta ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col pt-16">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-black">
              Lista de cotización
            </h2>

              <button
                type="button"
                onClick={() => setCotizacionAbierta(false)}
                aria-label="Cerrar"
                className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black cursor-pointer"
              >
                <X size={22} />
              </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cotizacion.length === 0 ? (
              <p className="text-sm text-neutral-500">
                Todavía no agregaste productos.
              </p>
            ) : (
        <div
          className={`space-y-4 transition-all duration-200 ease-out ${
            vaciandoLista ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
          }`}
        >
          {cotizacion.map((producto) => (
            <div
              key={producto.id}
              className={`border rounded-lg p-4 flex items-start justify-between gap-4 transition-all duration-200 ease-out ${
                productoSaliendo === producto.id
                  ? "opacity-0 scale-95 -translate-y-1"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              <div>
                <h3 className="font-medium text-black">
                  {producto.modelo ?? producto.nombre ?? "Producto"}
                </h3>

                {producto.marca && (
                  <p className="text-sm text-neutral-600 capitalize">
                    Marca: {producto.marca}
                  </p>
                )}

                {producto.tipo && (
                  <p className="text-sm text-neutral-600">
                    Tipo: {producto.tipo}
                  </p>
                )}

                {producto.detalle && (
                  <p className="text-sm text-neutral-600">
                    Detalle: {producto.detalle}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleQuitarProducto(producto.id)}
                className="text-sm text-red-600 hover:underline cursor-pointer"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
            )}
          </div>

          <div className="border-t px-6 py-4 space-y-3">
            <button
              type="button"
              onClick={handleLimpiar}
              disabled={cotizacion.length === 0}
              className={`cursor-pointer w-full py-2 rounded-md border text-sm ${
                cotizacion.length === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-black hover:border-[#6B0F1A] hover:text-[#6B0F1A]"
              }`}
            >
              Vaciar lista
            </button>

            <a
              href={cotizacion.length > 0 ? linkWhatsapp : undefined}
              target="_blank"
              rel="noreferrer"
              onClick={() => setCotizacionAbierta(false)}
              className={`cursor-pointer block w-full text-center py-2 rounded-md text-sm font-medium ${
                cotizacion.length === 0
                  ? "bg-gray-100 text-gray-400 pointer-events-none"
                  : "bg-[#6B0F1A] text-white hover:opacity-90"
              }`}
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}