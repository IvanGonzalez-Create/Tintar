import Logo from '../../../public/TINTAR LOGO.png'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
    return () => {
        document.body.style.overflow = "";
    };
}, [isOpen]);



    const navLinks = [
        { label: 'Inicio', href: '#home' },
        { label: 'Productos', href: '#productos' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Contacto', href: '#contacto'},
]





  return (
    <>

    <header   
    className = {`fixed top-0 left-0 w-full z-30 transition-all duration-300
    ${scrolled ? "bg-[#F8EDEE] shadow-sm border-b border-[#6B0F1A]/10"  : "bg-[#F8EDEE]/70 backdrop-blur-md"}`}
    >
        <nav className='container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between'>

            <div className="text-xl font-bold">
                <img 
                src={Logo} 
                alt="TinTar - Insumos y alquiler de impresoras"
                className="h-10 w-auto"
                 />

                <span className="sr-only">Tintar</span>

            </div>


            <ul className="hidden lg:flex gap-8 text-base font-semibold text-neutral-900">
                {navLinks.map(link => (
                    <li key={link.label} 
                    className='relative group'>

                        <a 
                        href={link.href}
                        className="transition-colors duration-300 font-semibold tracking-wide hover:text-[#6B0F1A]"
                        >
                            
                            {link.label}

                        </a>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B0F1A] transition-all duration-300 group-hover:w-full"></span>

                    </li>
                ))}
                
            </ul>


            <div>
                <a href="#Alquiler"
                className="bg-[#6B0F1A] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#7A1C25] transition-all duration-300"
                >

                    Alquiler Empresarial


                </a>
                
            </div>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 relative z-50"
            aria-label="Abrir menú"
            >
                
                {isOpen ? (
            
            // Icono de X
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
                
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                ) : (

                // Icono de Hamburguesa
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
               

            </button>


        </nav>



        

        </header>

        {isOpen && (
            <div
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/40 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
            />
            )}

       <div
       className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#F3DCDC] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
        >

                    <ul className="flex flex-col gap-6 p-6 text-black font-medium">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="transition-colors duration-300 font-semibold tracking-wide group-hover:text-[#6B0F1A]"
                                >
                                    {link.label}
                                
                                </a>                               
                            </li>
                        ))}
                    </ul>
                    
            </div>
            </>

  )
}
