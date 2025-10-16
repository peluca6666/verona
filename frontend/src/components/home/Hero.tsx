'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1673909705718-e7c23ee7220b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 from-0% via-black/20 via-30% via-white/0 via-60% to-white to-90%"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-6xl px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Main Heading */}
        <h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-thin text-amber-300 tracking-[0.25em] leading-none mb-8"
          style={{ 
            fontFamily: 'Playfair Display, serif',
          }}
        >
          VERONA
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-light text-white tracking-[0.2em]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          BIJOUTERIE & ACCESORIOS
        </p>

        {/* Simple CTA */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group flex items-center gap-3 mx-auto text-white hover:text-amber-400 transition-colors duration-300"
          >
            <span className="text-base tracking-[0.3em] font-medium">EXPLORAR</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}