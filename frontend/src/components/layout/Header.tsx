import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/catalog", label: "Colección" },
    { href: "/about", label: "Sobre nosotros"}
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 py-4 sm:py-5
        transition-all duration-300 ease-in-out
        ${isVisible 
          ? 'translate-y-0 bg-white/10 backdrop-blur-xl border-b border-white/20' 
          : '-translate-y-full'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="group relative">
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-thin tracking-[0.15em] sm:tracking-[0.25em] group-hover:text-amber-600 transition-all duration-500 relative"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#ffd700'
              }}
            >
              VERONA
              
              <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 w-0 group-hover:w-8 h-px bg-amber-600 transition-all duration-700"></div>
              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 w-0 group-hover:w-8 h-px bg-amber-600 transition-all duration-700"></div>
            </h1>
            
            <div 
              className="text-xs tracking-[0.2em] sm:tracking-[0.3em] font-light text-center"
              style={{ color: '#666666' }}
            >
              JOYAS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <a 
                    href={item.href}
                    className="relative hover:text-amber-600 transition-all duration-300 font-light tracking-[0.15em] uppercase text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#000000'
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-amber-600/80 to-transparent group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
                style={{ backgroundColor: '#000000' }}
              />
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: '#000000' }}
              />
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
                style={{ backgroundColor: '#000000' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <ul className="pt-4 pb-2 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="block hover:text-amber-600 transition-colors duration-300 font-light tracking-[0.1em] uppercase text-sm py-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#000000'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}