import ScrollIndicator from "../ui/ScrollIndicator";

export default function Hero() {
  return (
    <section 
      className="h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1673909705718-e7c23ee7220b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-8">
        <div className="mb-6 group">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white tracking-[0.1em] leading-tight group-hover:text-amber-100 transition-all duration-700 relative"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            BRILLA CON LO
            <span className="block text-amber-200 mt-1 sm:mt-2 relative">
              ESENCIAL
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent"></div>
            </span>
          </h1>
        </div>

        <div className="mb-8 sm:mb-12">
          <p 
            className="text-lg sm:text-xl md:text-2xl font-light text-amber-100/90 tracking-[0.05em] leading-relaxed px-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Elegancia y distinción en cada pieza
          </p>
        </div>
      </div>
      
      <ScrollIndicator onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />

      {/* Corner decorations - hidden on mobile */}
      <div className="hidden sm:block absolute top-8 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-amber-300/30"></div>
      <div className="hidden sm:block absolute top-8 right-4 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-t-2 border-amber-300/30"></div>
      <div className="hidden sm:block absolute bottom-8 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-b-2 border-amber-300/30"></div>
      <div className="hidden sm:block absolute bottom-8 right-4 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-amber-300/30"></div>
    </section>
  );
}