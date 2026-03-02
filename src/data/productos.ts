


export type Producto = {
  id: string
  nombre: string
  descripcion: string
  marca: string
  imagen: string
  categoriaId: string
  subcategoriaId: string
}

export const productos: Producto[] = [
  {
    id: "toners-brother",
    nombre: "Toners Brother",
    descripcion: "Cartuchos originales con rendimiento estándar y óptima densidad de impresión.",
    marca: "brother",
    imagen: "/Productos/toner-brother-tn-1060(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-hp",
    nombre: "Toners HP",
    descripcion: "Tóners originales HP con rendimiento certificado y alta precisión.",
    marca: "hp",
    imagen: "/Productos/toner-HP-30A(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-epson",
    nombre: "Toners Epson",
    descripcion: "Tóners originales diseñados para máxima eficiencia operativa.",
    marca: "epson",
    imagen: "/Productos/toner-epson(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-ricoh",
    nombre: "Toners Ricoh",
    descripcion: "Tóners originales diseñados para máxima eficiencia operativa.",
    marca: "ricoh",
    imagen: "/Productos/toner-Ricoh-P311(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-xerox",
    nombre: "Toners Xerox",
    descripcion: "Cartuchos originales con calidad constante y definición precisa.",
    marca: "xerox",
    imagen: "/Productos/Toner-Xerox-phaser-3020-3025(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-kyocera",
    nombre: "Toners Kyocera",
    descripcion: "Unidades originales con desempeño estable y larga vida útil.",
    marca: "kyocera",
    imagen: "/Productos/Toner-Kyocera-TK-172(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toners-lexmark",
    nombre: "Toners Lexmark",
    descripcion: "Cartuchos originales de impresión uniforme y alto rendimiento.",
    marca: "lexmark",
    imagen: "/Productos/toner-Lexmark-51b4000(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },

  {
    id: "toners-GTC",
    nombre: "Toners GTC",
    descripcion: "Compatibles de alto rendimiento con impresión homogénea.",
    marca: "gtc",
    imagen: "/Productos/toner-gtc.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toners-MAGNA-(MGN)",
    nombre: "Toner MAGNA (MGN)",
    descripcion: "Cartucho alternativo con desempeño técnico confiable.",
    marca: "magna (mgn)",
    imagen: "/Productos/toner-mgn.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toners-B-BOX",
    nombre: "Toner B-BOX",
    descripcion: "Compatible optimizado para impresión eficiente.",
    marca: "b-box",
    imagen: "/Productos/b-box.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toners-LASER-GOLD",
    nombre: "Toner LASER GOLD",
    descripcion: "Alternativo premium con estabilidad y alto rendimiento.",
    marca: "laser-gold",
    imagen: "/Productos/toner-laser-gold.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toners-Global-Market",
    nombre: "Global Market",
    descripcion: "Solución compatible con rendimiento técnico equilibrado.",
    marca: "global-market",
    imagen: "/Productos/global-market.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "resma-autor-a4-80g",
    nombre: "Resma Autor A4",
    descripcion: "Papel obra de 80 g/m², óptimo para impresión láser e inkjet.",
    marca: "autor",
    imagen: "/Productos/resma-autor-a4-80g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "80gramos" 
  },

  {
    id: "resma-autor-a4-75g",
    nombre: "Resma Autor A4",
    descripcion: "Gramaje liviano con buena opacidad y rendimiento diario.",
    marca: "autor",
    imagen: "/Productos/resma-Autor-A4-75g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "75gramos" 
  },

  {
    id: "resma-punax-a4-75g",
    nombre: "Resma Punax A4",
    descripcion: "Superficie uniforme para copiado y documentación interna.",
    marca: "punax",
    imagen: "/Productos/resma-punax-a4-75g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "75gramos" 
  },

  {
    id: "resma-pampa-a4-70g",
    nombre: "Resma Pampa A4",
    descripcion: "Opción económica para alto volumen de impresión.",
    marca: "pampa",
    imagen: "/Productos/resma-pampa-a4-70g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "70gramos" 
  },
  
  {
    id: "epson-l3250",
    nombre: "Epson EcoTank L3250",
    descripcion: "Impresora multifunción con sistema continuo.",
    marca: "epsonwae",
    imagen: "/Productos/epson-l3250.jpg",
    categoriaId: "tecnologia",
    subcategoriaId: "mouse" 
  },
  {
    id: "Cuaderno A4 cuadriculado",
    nombre: "Cuaderno A4 cuadriculado",
    descripcion: "Cuaderno A4 cuadriculado con tapa de cuero.",
    marca: "A5",
    imagen: "/productos/cartucho-canon-245.jpg",
    categoriaId: "Libreria",
    subcategoriaId: "cuadernos"
  }
]