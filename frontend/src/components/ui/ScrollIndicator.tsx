import React from 'react';

interface ScrollIndicatorProps {
  onClick?: () => void;
  className?: string;
}

export default function ScrollIndicator({ onClick, className = '' }: ScrollIndicatorProps) {
  return (
    <div 
      className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-300/40 to-transparent mb-3 animate-pulse"></div>
      
      <div 
        className="text-amber-200/70 text-xs font-light tracking-[0.2em] mb-4 animate-fade-in-up" 
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          animation: 'fadeInUp 2s ease-out infinite alternate'
        }}
      >
        SCROLL
      </div>
      
      <div className="relative">
        <div className="w-5 h-8 border border-amber-300/40 rounded-full">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-px h-2 bg-amber-300/60 rounded-full"
            style={{
              animation: 'scrollDot 2s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0.4; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scrollDot {
          0% { top: 6px; opacity: 0; }
          50% { top: 8px; opacity: 1; }
          100% { top: 12px; opacity: 0; }
        }
      `}</style>
    </div>
  );
}