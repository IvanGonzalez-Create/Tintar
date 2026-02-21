export default function Hero() {



  return (

    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">

     
        <div className="absolute inset-0 overflow-hidden">
        <video
            src="/Video de fondo Hero.mp4"   
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            />
        </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Soluciones Empresariales en Insumos y Alquiler
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Insumos de Impresion y Tecnologia
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#productos"
            className="bg-[#6B0F1A] px-6 py-3 rounded-md font-semibold hover:bg-[#7A1C25] transition-all duration-300"
          >
            Ver Productos
          </a>

          <a 
            href="#alquiler"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Solicitar Alquiler
          </a>
        </div>
      </div>


    </section>

  );
}

  

