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
        
        {/* SVG Logo */}
        <div className="mb-8 flex justify-center">
          <svg 
            viewBox="0 0 500 400" 
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Diamond Icon */}
            <g transform="translate(250, 80)">
              {/* Outer diamond shape */}
              <polygon 
                points="0,-60 60,0 0,90 -60,0" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="3"
              />
              
              {/* Top facets */}
              <line x1="-60" y1="0" x2="0" y2="20" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="60" y1="0" x2="0" y2="20" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="0" y1="-60" x2="-30" y2="0" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="0" y1="-60" x2="30" y2="0" stroke="#D4AF37" strokeWidth="2"/>
              
              {/* Middle horizontal line */}
              <line x1="-60" y1="0" x2="60" y2="0" stroke="#D4AF37" strokeWidth="2.5"/>
              
              {/* Bottom facets */}
              <line x1="-60" y1="0" x2="0" y2="90" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="60" y1="0" x2="0" y2="90" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="-30" y1="0" x2="0" y2="90" stroke="#D4AF37" strokeWidth="2"/>
              <line x1="30" y1="0" x2="0" y2="90" stroke="#D4AF37" strokeWidth="2"/>
              
              {/* Center vertical line */}
              <line x1="0" y1="-60" x2="0" y2="90" stroke="#D4AF37" strokeWidth="2"/>
              
              {/* Top inner lines */}
              <line x1="-30" y1="0" x2="0" y2="-60" stroke="#D4AF37" strokeWidth="1.5"/>
              <line x1="30" y1="0" x2="0" y2="-60" stroke="#D4AF37" strokeWidth="1.5"/>
            </g>

            {/* VERONA text */}
            <text 
              x="250" 
              y="240" 
              textAnchor="middle" 
              fill="#D4AF37"
              fontSize="82"
              fontWeight="400"
              fontFamily="'Playfair Display', serif"
              letterSpacing="8"
            >
              VERONA
            </text>

            {/* Left decorative line */}
            <line 
              x1="45" 
              y1="285" 
              x2="165" 
              y2="285" 
              stroke="#D4AF37" 
              strokeWidth="2"
            />

            {/* JOYAS text */}
            <text 
              x="250" 
              y="295" 
              textAnchor="middle" 
              fill="#D4AF37"
              fontSize="32"
              fontWeight="400"
              fontFamily="'Montserrat', sans-serif"
              letterSpacing="12"
            >
              JOYAS
            </text>

            {/* Right decorative line */}
            <line 
              x1="335" 
              y1="285" 
              x2="455" 
              y2="285" 
              stroke="#D4AF37" 
              strokeWidth="2"
            />
          </svg>
        </div>

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