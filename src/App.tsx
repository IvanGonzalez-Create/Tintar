import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CotizacionProvider } from "./components/Context/CotizacionContext";

import Navbar from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import Catalogo from "./components/Home/Catalog/Catalogo";
import Hero from "./components/Home/Hero";
import { SobreNosotros } from "./components/Home/SobreNosotros";
import { Servicios } from "./components/Home/Servicios";
import { Contacto } from "./components/Home/Contacto";

import AlquilerEmpresarial from "./pages/AlquilerEmpresarial";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Catalogo />
      <Servicios />
      <SobreNosotros/>
      <Contacto />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CotizacionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alquiler" element={<AlquilerEmpresarial />} />
        </Routes>
      </CotizacionProvider>
    </BrowserRouter>
  );
}

export default App;