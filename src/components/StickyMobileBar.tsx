import React from 'react';
import { MessageCircle } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenWhatsAppModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenWhatsAppModal }) => {
  const directWhatsappUrl = "https://wa.me/918007588747?text=Hi%20Plantora!%20I%20would%20like%20to%20order%20the%20Money%20Plant%20(Golden%20Pothos)%20for%20%E2%82%B9399.";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F3820]/95 backdrop-blur-md text-white p-3 border-t border-white/10 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Price Info */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-extrabold text-white">
              ₹399
            </span>
            <span className="text-xs text-stone-300 line-through">
              ₹599
            </span>
          </div>
          <span className="text-[10px] text-emerald-300 font-semibold leading-none">
            Includes Pot + Saucer
          </span>
        </div>

        {/* WhatsApp CTA Button */}
        <a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] active:bg-[#1da850] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>Enquire on WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
