


export type Producto = {
  id: string
  nombre: string
  descripcion: string
  imagen: string
  categoriaId: string
  subcategoriaId: string
}

export const productos: Producto[] = [
  {
    id: "toner-brother-30A",
    nombre: "Toner Brother TN 1060",
    descripcion: "Cartucho original con rendimiento estándar y óptima densidad de impresión.",
    imagen: "/Productos/toner-brother-tn-1060(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toner-hp-30a",
    nombre: "Toner HP 30A",
    descripcion: "Tóner original HP con rendimiento certificado y alta precisión.",
    imagen: "/Productos/toner-HP-30A(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toner-kyocera-tk-172",
    nombre: "Toner Kyocera TK 172",
    descripcion: "Unidad original con desempeño estable y larga vida útil.",
    imagen: "/Productos/Toner-Kyocera-TK-172(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },
  {
    id: "toner-lexmark-51b4000",
    nombre: "Toner Lexmark 51b4000",
    descripcion: "Cartucho original de impresión uniforme y alto rendimiento.",
    imagen: "/Productos/toner-Lexmark-51b4000(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },

  {
    id: "toner-ricoh-p311",
    nombre: "Toner Ricoh P311",
    descripcion: "Tóner original diseñado para máxima eficiencia operativa.",
    imagen: "/Productos/toner-Ricoh-P311(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },

  {
    id: "toner-xerox-phaser-3020-3025",
    nombre: "Toner Xerox Phaser 3020/3025",
    descripcion: "Cartucho original con calidad constante y definición precisa.",
    imagen: "/Productos/Toner-Xerox-phaser-3020-3025(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales"
  },

  {
    id: "toner-GTC",
    nombre: "Toner GTC",
    descripcion: "Compatible de alto rendimiento con impresión homogénea.",
    imagen: "/Productos/toner-gtc.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toner-MAGNA-(MGN)",
    nombre: "Toner MAGNA (MGN)",
    descripcion: "Cartucho alternativo con desempeño técnico confiable.",
    imagen: "/Productos/toner-mgn.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toner-B-BOX",
    nombre: "Toner B-BOX",
    descripcion: "Compatible optimizado para impresión eficiente.",
    imagen: "/Productos/b-box.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toner-LASER-GOLD",
    nombre: "Toner LASER GOLD",
    descripcion: "Alternativo premium con estabilidad y alto rendimiento.",
    imagen: "/Productos/toner-laser-gold.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "toner-Global-Market",
    nombre: "Toner LASER GOLD",
    descripcion: "Solución compatible con rendimiento técnico equilibrado.",
    imagen: "/Productos/global-market.jpeg",
    categoriaId: "toners",
    subcategoriaId: "alternativos"
  },

  {
    id: "resma-autor-a4-80g",
    nombre: "Resma Autor A4",
    descripcion: "Papel obra de 80 g/m², óptimo para impresión láser e inkjet.",
    imagen: "/Productos/resma-autor-a4-80g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "80gramos" 
  },

  {
    id: "resma-autor-a4-75g",
    nombre: "Resma Autor A4",
    descripcion: "Gramaje liviano con buena opacidad y rendimiento diario.",
    imagen: "/Productos/resma-Autor-A4-75g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "75gramos" 
  },

  {
    id: "resma-punax-a4-75g",
    nombre: "Resma Punax A4",
    descripcion: "Superficie uniforme para copiado y documentación interna.",
    imagen: "/Productos/resma-punax-a4-75g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "75gramos" 
  },

  {
    id: "resma-pampa-a4-70g",
    nombre: "Resma Pampa A4",
    descripcion: "Opción económica para alto volumen de impresión.",
    imagen: "/Productos/resma-pampa-a4-70g.jpeg",
    categoriaId: "papeles",
    subcategoriaId: "70gramos" 
  },
  
  {
    id: "epson-l3250",
    nombre: "Epson EcoTank L3250",
    descripcion: "Impresora multifunción con sistema continuo.",
    imagen: "/Productos/epson-l3250.jpg",
    categoriaId: "tecnologia",
    subcategoriaId: "mouse" 
  },
  {
    id: "Cuaderno A4 cuadriculado",
    nombre: "Cuaderno A4 cuadriculado",
    descripcion: "CCuaderno A4 cuadriculado con tapa de cuero.",
    imagen: "/productos/cartucho-canon-245.jpg",
    categoriaId: "Libreria",
    subcategoriaId: "cuadernos"
  }
]