import Logo from '../../../public/TINTAR LOGO.png'
import { useState, useEffect } from 'react'

export default function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false)
    

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);



    const navLinks = [
        { label: 'Inicio', href: '#home' },
        { label: 'Productos', href: '#productos' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Contacto', href: '#contacto'},
]





  return (
    <header className='w-full border-b'>
        <nav className='container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between'>

            <div className="text-xl font-bold">
                <img 
                src={Logo} 
                alt="TinTar - Insumos y alquiler de impresoras"
                className="h-10 w-auto"
                 />

                <span className="sr-only">Tintar</span>

            </div>


            <ul className="hidden lg:flex gap-6 text-sm font-medium">
                {navLinks.map(link => (
                    <li key={link.label}>

                        <a 
                        href={link.href}
                        className="hover:text-blue-600 transition-colors"
                        >
                            
                            {link.label}

                        </a>

                    </li>
                ))}
                
            </ul>


            <div>
                <a href="#Alquiler"
                className=" text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
                >

                    Alquiler Empresarial


                </a>
                
            </div>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 relative z-60"
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

        {isOpen && (
            <div
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
            />
            )}

       <div
       className= {`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}
        `}
>

                    <ul className="flex flex-col gap-4 p-6 mt-16">
                        <li><a href="#" onClick={() => setIsOpen(false)}>Inicio</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Productos</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Servicios</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Contacto</a></li>
                    </ul>
                    
            </div>


        


    </header>
  )
}
