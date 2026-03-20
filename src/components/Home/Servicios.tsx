import { Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 mt-2">
            Soluciones completas en impresión y tecnología
          </p>
        </div>

        {/* 🔥 BLOQUE DESTACADO (CLICKEABLE) */}
        <Link
          to="/alquiler"
          className="block bg-blue-600 text-white rounded-2xl p-8 mb-12 shadow-lg hover:bg-blue-700 transition"
        >
          <h3 className="text-2xl font-bold mb-3">
            Alquiler Empresarial de Equipos
          </h3>

          <p className="mb-4 text-sm md:text-base">
            Reducí costos y optimizá tu empresa con soluciones de impresión completas.
          </p>

          <span className="inline-block mt-2 font-semibold underline">
            Ver más →
          </span>
        </Link>

        {/* GRID DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">
              Insumos de Impresión
            </h4>
            <p className="text-gray-600 text-sm">
              Tóner, cartuchos y tintas originales y alternativas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">
              Tecnología
            </h4>
            <p className="text-gray-600 text-sm">
              Equipamiento moderno para empresas y hogares.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">
              Librería
            </h4>
            <p className="text-gray-600 text-sm">
              Todo lo necesario para oficina y estudio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">
              Asesoramiento
            </h4>
            <p className="text-gray-600 text-sm">
              Atención personalizada para cada cliente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">
              Entregas Rápidas
            </h4>
            <p className="text-gray-600 text-sm">
              Envíos eficientes y confiables.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};