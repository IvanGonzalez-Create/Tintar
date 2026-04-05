import type { Producto } from "../types/Productos";


export const productos: Producto[] = [
  {
    id: "toners-brother",
    nombre: "Toners Brother",
    descripcion: "Cartuchos originales con rendimiento estándar y óptima densidad de impresión.",
    marca: "brother",
    imagen: "/Productos/toner-brother-tn-1060(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-hp",
    nombre: "Toners HP",
    descripcion: "Tóners originales HP con rendimiento certificado y alta precisión.",
    marca: "hp",
    imagen: "/Productos/toner-HP-30A(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-epson",
    nombre: "Toners Epson",
    descripcion: "Tóners originales diseñados para máxima eficiencia operativa.",
    marca: "epson",
    imagen: "/Productos/toner-epson(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-ricoh",
    nombre: "Toners Ricoh",
    descripcion: "Tóners originales diseñados para máxima eficiencia operativa.",
    marca: "ricoh",
    imagen: "/Productos/toner-Ricoh-P311(Original).jpeg",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-xerox",
    nombre: "Toners Xerox",
    descripcion: "Cartuchos originales con calidad constante y definición precisa.",
    marca: "xerox",
    imagen: "/Productos/Toner-Xerox-phaser-3020-3025(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-kyocera",
    nombre: "Toners Kyocera",
    descripcion: "Unidades originales con desempeño estable y larga vida útil.",
    marca: "kyocera",
    imagen: "/Productos/Toner-Kyocera-TK-172(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-lexmark",
    nombre: "Toners Lexmark",
    descripcion: "Cartuchos originales de impresión uniforme y alto rendimiento.",
    marca: "lexmark",
    imagen: "/Productos/toner-Lexmark-51b4000(Original).png",
    categoriaId: "toners",
    subcategoriaId: "originales",
  },
  {
    id: "toners-laser-gold",
    nombre: "Toners Alternativos",
    descripcion: "Opciones económicas y de alto rendimiento.",
    marca: "Alternativo",
    imagen: "/Productos/Toners-Alternativos.png",
    categoriaId: "toners",
    subcategoriaId: "alternativos",
  },
  {
    id: "impresion",
    nombre: "Hojas de Impresion",
    descripcion: "Papel A4 de alta calidad, ideal para impresiones diarias en oficinas, hogares y entornos profesionales.",
    marca: "impresion",
    imagen: "/Productos/Papeles-A4.png",
    categoriaId: "papeles",
    subcategoriaId: "impresion",
    listaId:"impresion"
  },
  
  {
    id: "componentes",
    nombre: "Componentes",
    descripcion: "Todo lo necesario para armar o mejorar tu PC.",
    marca: "hardware",
    imagen: "/Productos/Hardware-Imagen.png",
    categoriaId: "tecnologia",
    subcategoriaId: "hardware",
    listaId:"componentes"
  },

  {
    id: "computadoras",
    nombre: "Computadoras",
    descripcion: "Combina potencia y practicidad: desde mini PC compactas hasta notebooks versátiles para el día a día.",
    marca: "hardware",
    imagen: "/Productos/computadoras.png",
    categoriaId: "tecnologia",
    subcategoriaId: "hardware",
    listaId:"computadoras"
  },

  {
    id: "monitores",
    nombre: "Monitores",
    descripcion: "Pantallas de alto rendimiento para trabajo, diseño y entretenimiento.",
    marca: "hardware",
    imagen: "/Productos/Monitores.png",
    categoriaId: "tecnologia",
    subcategoriaId: "Hardware",
    listaId:"monitores"
  },

  {
    id: "teclados-mouse",
    nombre: "Teclados & Mouse",
    descripcion: "Precisión y comodidad para productividad y gaming.",
    marca: "",
    imagen: "/Productos/Teclados-Mouse.png",
    categoriaId: "tecnologia",
    subcategoriaId: "perifericos",
    listaId:"teclados-mouse"
  },

  {
    id: "parlantes",
    nombre: "Parlantes",
    descripcion: "Potencia y claridad para disfrutar del audio en cualquier espacio.",
    marca: "",
    imagen: "/Productos/Parlantes.png",
    categoriaId: "tecnologia",
    subcategoriaId: "Audio",
    listaId:"parlantes"
  },
   {
    id: "auriculares",
    nombre: "Auriculares",
    descripcion: "Sonido de calidad para música, gaming y trabajo diario.",
    marca: "",
    imagen: "/Productos/Auriculares.png",
    categoriaId: "tecnologia",
    subcategoriaId: "Audio",
    listaId:"auriculares"
  },

  
  {
    id: "sujecion-libreria",
    nombre: "Grapadoras",
    descripcion: "Elementos para sujetar y organizar documentos de forma práctica.",
    marca: "maped",
    imagen: "/Productos/Grapadoras.jpeg",
    categoriaId: "libreria",
    subcategoriaId: "sujecion",
    listaId:"grapadoras"
    
  },

  {
    id: "accesorios-libreria",
    nombre: "Accesorios de Sujecion",
    descripcion: "Consumibles para abrochar y fijar hojas con firmeza.",
    marca: "",
    imagen: "/Productos/Clips.png",
    categoriaId: "libreria",
    subcategoriaId: "Sujecion",
    listaId:"accesorios"
  },
    {
    id: "utiles-de-escritura",
    nombre: "Utiles de Escritura",
    descripcion: "Soluciones de escritura confiables para entornos educativos y laborales.",
    marca: "",
    imagen: "/Productos/Escritura.png",
    categoriaId: "libreria",
    subcategoriaId: "escritura",
    listaId:"utiles-escritura"
  },
];