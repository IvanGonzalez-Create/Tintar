import type { EstadoHorario } from "../../types/Contacto";

const APERTURA_MIN = 9 * 60 + 30;
const CIERRE_MIN = 16 * 60 + 30;

const formatHora = (totalMinutos: number) => {
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  return `${horas}:${String(minutos).padStart(2, "0")}`;
};

const formatDuracion = (minutos: number) => {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;

  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
};

export const obtenerEstadoHorario = (): EstadoHorario => {
  const ahora = new Date();
  const dia = ahora.getDay();
  const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes();

  const esDiaLaboral = dia >= 1 && dia <= 5;
  const estaAbierto =
    esDiaLaboral &&
    minutosActuales >= APERTURA_MIN &&
    minutosActuales < CIERRE_MIN;

  if (estaAbierto) {
    const faltanMinutos = CIERRE_MIN - minutosActuales;

    return {
      abierto: true,
      texto: `Abierto · Cierra en ${formatDuracion(faltanMinutos)}`,
    };
  }

  if (esDiaLaboral && minutosActuales < APERTURA_MIN) {
    return {
      abierto: false,
      texto: `Cerrado · Abre hoy a las ${formatHora(APERTURA_MIN)}`,
    };
  }

  if ((dia === 5 && minutosActuales >= CIERRE_MIN) || dia === 6 || dia === 0) {
    return {
      abierto: false,
      texto: "Cerrado · Abre el lunes a las 9:30",
    };
  }

  return {
    abierto: false,
    texto: `Cerrado · Abre mañana a las ${formatHora(APERTURA_MIN)}`,
  };
};