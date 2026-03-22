import { createContext, useContext, useState } from "react";
import type { ProductoLista } from "../../types/Productos";

type CotizacionContextType = {
  cotizacion: ProductoLista[];
  agregarProducto: (producto: ProductoLista) => void;
  quitarProducto: (id: string) => void;
  limpiar: () => void;
};

const CotizacionContext = createContext<CotizacionContextType | undefined>(undefined);


export const CotizacionProvider = ({ children }: { children: React.ReactNode }) => {
  const [cotizacion, setCotizacion] = useState<ProductoLista[]>([]);

  const agregarProducto = (producto: ProductoLista) => {
    setCotizacion((prev) => {
      const existe = prev.some((p) => p.id === producto.id);
      if (existe) return prev; 
      return [...prev, producto];
    });
  };

  const quitarProducto = (id: string) => {
    setCotizacion((prev) => prev.filter((p) => p.id !== id));
  };

  const limpiar = () => setCotizacion([]);

  return (
    <CotizacionContext.Provider
      value={{ cotizacion, agregarProducto, quitarProducto, limpiar }}
    >
      {children}
    </CotizacionContext.Provider>
  );
};

export const useCotizacion = () => {
  const context = useContext(CotizacionContext);
  if (!context) throw new Error("useCotizacion debe usarse dentro de CotizacionProvider");
  return context;
};