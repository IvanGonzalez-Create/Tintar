import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import type { CanalContacto, PersonaContacto } from "../types/Contacto";

export const equipoComercial: PersonaContacto[] = [
  {
    nombre: "Rodrigo Almirón",
    rol: "Jefe de ventas",
    telefono: "11 3674-3998",
    whatsapp: "541136743998",
    email: "ventas.tintar1@gmail.com",
  },
  {
    nombre: "Martin Agovino",
    rol: "Ventas · Administración",
    telefono: "11 5876-1306",
    whatsapp: "541158761306",
    email: "ventas.tintar@gmail.com",
  },
  {
    nombre: "Lautaro Silva",
    rol: "Ventas · Técnico en impresoras",
    telefono: "11 5747-0740",
    whatsapp: "541157470740",
    email: "ventas.tintar2@gmail.com",
  },
  {
    nombre: "Omar Bruno",
    rol: "Representante comercial",
    telefono: "11 5379-0707",
    whatsapp: "541153790707",
    email: "",
  },
];

export const canales: CanalContacto[] = [
  {
    titulo: "WhatsApp",
    descripcion: "Consultas y cotizaciones rápidas.",
    valor: "11 3674-3998",
    href: "https://wa.me/541136743998",
    icono: MessageCircle,
  },
  {
    titulo: "Email",
    descripcion: "Consultas comerciales.",
    valor: "ventas.tintar@gmail.com",
    href: "mailto:ventas.tintar@gmail.com",
    icono: Mail,
  },
  {
    titulo: "Ubicación",
    descripcion: "Atención comercial.",
    valor: "Lagorio 704",
    href: "#",
    icono: MapPin,
  },
  {
    titulo: "Horario",
    descripcion: "Días y horarios de atención.",
    valor: "Lun a Vie · 9:30 – 16:30",
    href: "#",
    icono: Clock,
  },
];