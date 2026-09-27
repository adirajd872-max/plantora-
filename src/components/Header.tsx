import React from 'react';
import { PlantoraLogo } from './PlantoraLogo';
import { MessageCircle, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppModal }) => {
  const directWhatsappUrl = "https://wa.me/918007588747?text=Hi%20Plantora!%20I%20would%20like%20to%20order%20the%20Money%20Plant%20(Golden%20Pothos)%20for%20%E2%82%B9399.";

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#1B4D2E]/10 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0F3820] via-[#1B4D2E] to-[#0F3820] text-white text-[11px] md:text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span>
          <strong>Plantora Launch Offer:</strong> Money Plant @ <strong className="text-[#E5C158]">₹399</strong> (MRP ₹599) • Free Pot + Saucer Included
        </span>
        <span className="hidden sm:inline-block text-emerald-300/60">•</span>
        <a 
          href="tel:8007588747" 
          className="hidden sm:inline-flex items-center gap-1 text-emerald-200 hover:text-white underline underline-offset-2 ml-1"
        >
          <PhoneCall className="w-3 h-3" /> Call 8007588747
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0" aria-label="Plantora Home">
          <PlantoraLogo size="md" showTagline={true} />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#1C2A20]/80 uppercase">
          <a href="#gallery" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            Photos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
          <a href="#benefits" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
          <a href="#care" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            Care Guide
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
          <a href="#trust" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            Trust & Reviews
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
          <a href="#pricing" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            Offer
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
          <a href="#faq" className="hover:text-[#2D6A4F] transition-colors py-1 relative group">
            FAQs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D6A4F] transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Zone 3: Direct Action */}
        <div className="flex items-center gap-3">
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Optionally trigger modal if wanted, or open directly
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1B4D2E] hover:bg-[#0F3820] text-white font-semibold text-xs transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            <span>Order Now</span>
          </a>

          <button
            onClick={onOpenWhatsAppModal}
            className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-md active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Order ₹399</span>
          </button>
        </div>
      </div>
    </header>
  );
};
