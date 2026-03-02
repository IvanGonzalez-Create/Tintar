export interface Subcategoria {
  id: string;
  nombre: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  destacada: boolean;
  subcategorias: Subcategoria[];
}



export const categorias : Categoria[] = [
  {
    id: "toners",
    nombre: "Toners & Cartuchos",
    destacada: true,
    subcategorias: [
      { id: "originales", nombre: "Originales" },
      { id: "alternativos", nombre: "Alternativos" },
    ],
  },
  {
    id: "papeles",
    nombre: "Papeles",
    destacada: true,
    subcategorias: [
      { id: "80gramos", nombre: "80 Gramos" },
      { id: "75gramos", nombre: "75 Gramos" },
      { id: "70gramos", nombre: "70 Gramos" },
    ],
  },
  {
    id: "tecnologia",
    nombre: "Tecnología",
    destacada: false,
    subcategorias: [
      { id: "mouse", nombre: "Mouse" },
      { id: "teclado", nombre: "Teclado" },
      { id: "auriculares", nombre: "Auriculares"},
      { id: "monitor", nombre: "Monitor" },
      { id: "hardware", nombre: "Hardware" },
      { id: "parlante", nombre: "Parlantes" },
    ],
  },
  {
    id: "libreria",
    nombre: "Librería",
    destacada: true,
    subcategorias: [
      { id: "escritura", nombre: "Escritura" },
      { id: "sujecion", nombre: "Sujecion" },
    ],
  },
];