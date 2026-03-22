import { CotizacionProvider } from "./components/Context/CotizacionContext";
import Catalogo from "./components/Home/Catalog/Catalogo";
import Hero from "./components/Home/Hero";
import { Servicios } from "./components/Home/Servicios";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Layout/Footer";
import { Contacto } from "./components/Home/Contacto";

function Home() {
  return (
    <>
      <Hero />
      <Catalogo />
      <Servicios />
      <Contacto/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CotizacionProvider>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CotizacionProvider>
    </BrowserRouter>
  );
}

export default App;