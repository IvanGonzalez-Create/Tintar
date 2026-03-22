import type { LucideIcon } from "lucide-react";

export type PersonaContacto = {
  nombre: string;
  rol: string;
  telefono: string;
  whatsapp: string;
  email: string;
};

export type CanalContacto = {
  titulo: string;
  descripcion?: string;
  valor: string;
  href: string;
  icono: LucideIcon;
};

export type EstadoHorario = {
  abierto: boolean;
  texto: string;
};