// Base de datos de Lista de productos

export type ProductoLista = {
  id: string;
  nombre?: string;
  marca: string;
  modelo: string;
  capacidad?: string;
  tipo?: string;
  detalle?: string;
  categoriaId: string;
  subcategoriaId?: string;
  listaId?: string;
  imagen?: string;
};


// Base de datos De Categorias

export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  marca: string;
  imagen: string;
  categoriaId: string;
  subcategoriaId: string;
  tipo?: string;
  detalle?: string;
  capacidad?: string;
  modelo?: string;
  listaId?: string;
};
