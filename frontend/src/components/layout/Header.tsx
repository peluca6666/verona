export default function Header() {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Colección" },
    { href: "/about", label: "Sobre nosotros"}
  ];

  return (
    <header className="bg-gradient-to-b from-black/20 to-transparent backdrop-blur-xl border-b border-amber-200/20 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-12 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="group relative">
            <h1 
              className="text-4xl font-thin text-white tracking-[0.25em] group-hover:text-amber-100 transition-all duration-500 relative"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              VERONA
              
              {/* left line */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 w-0 group-hover:w-8 h-px bg-gradient-to-r from-transparent to-amber-300/80 transition-all duration-700"></div>
              
              {/* right line */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 w-0 group-hover:w-8 h-px bg-gradient-to-r from-amber-300/80 to-transparent transition-all duration-700"></div>
            </h1>
            
            <div className="text-xs tracking-[0.3em] text-amber-200/60 font-light text-center">
              JOYAS
            </div>
          </div>
          
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-12">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <a 
                    href={item.href}
                    className="text-white/80 hover:text-amber-100 transition-all duration-400 font-light tracking-[0.15em] uppercase text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}