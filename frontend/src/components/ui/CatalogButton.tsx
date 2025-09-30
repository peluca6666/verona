import Link from 'next/link';

interface CatalogButtonProps {
  className?: string;
}

export default function CatalogButton({ className = '' }: CatalogButtonProps) {
  return (
    <div className={`text-center ${className}`}>
      <Link 
        href="/catalog" 
        className="group relative inline-block px-16 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium tracking-[0.15em] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <span 
          className="relative z-10 text-white font-medium tracking-[0.15em]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          EXPLORAR CATÁLOGO
        </span>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 border-2 border-amber-300/30 group-hover:border-amber-200/50 transition-colors duration-300"></div>
      </Link>
    </div>
  );
}