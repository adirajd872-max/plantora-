import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const PlantoraLogo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 md:h-12',
    lg: 'h-16 md:h-20',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Botanical 'P' Vector Icon inspired by Plantora design */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 110"
          className={`${sizeClasses[size]} w-auto drop-shadow-sm`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Trunk of P */}
          <path
            d="M32 95V35C32 25 40 15 55 15C72 15 82 28 82 42C82 58 68 68 50 68H32"
            stroke="#1B4D2E"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner vine loop */}
          <path
            d="M32 75C42 75 56 70 65 60C74 50 72 32 60 25C48 18 36 28 32 40"
            stroke="#2D6A4F"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Top Leaf 1 */}
          <path
            d="M50 18C42 5 30 2 25 15C20 28 35 32 50 18Z"
            fill="url(#leaf-grad-1)"
          />
          {/* Side Leaf 2 */}
          <path
            d="M32 42C18 35 12 45 22 55C32 65 38 50 32 42Z"
            fill="url(#leaf-grad-2)"
          />
          {/* Mid Leaf 3 */}
          <path
            d="M60 48C75 42 82 52 72 62C62 72 52 58 60 48Z"
            fill="url(#leaf-grad-1)"
          />
          {/* Leaf Variegation Highlights */}
          <path
            d="M35 12C38 10 42 12 45 15"
            stroke="#E5C158"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 46C23 48 26 50 28 52"
            stroke="#E5C158"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="leaf-grad-1" x1="25" y1="2" x2="50" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#52B788" />
              <stop offset="0.6" stopColor="#2D6A4F" />
              <stop offset="1" stopColor="#1B4D2E" />
            </linearGradient>
            <linearGradient id="leaf-grad-2" x1="12" y1="35" x2="38" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#74C69D" />
              <stop offset="1" stopColor="#1B4D2E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#0F3820] leading-none">
          Plant<span className="text-[#2D6A4F] relative inline-block">ø<span className="absolute -top-1 right-0 text-[#D4AF37] text-xs">🌿</span></span>ra
        </span>
        {showTagline && (
          <span className="text-[10px] md:text-[11px] font-medium tracking-wider uppercase text-[#52796F] mt-0.5">
            Grow Green. Live Better.
          </span>
        )}
      </div>
    </div>
  );
};
