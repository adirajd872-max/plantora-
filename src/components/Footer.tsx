import React from 'react';
import { PlantoraLogo } from './PlantoraLogo';
import { Phone, Instagram, MessageCircle, Heart, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#092B19] text-emerald-100/80 pt-14 pb-20 md:pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <PlantoraLogo size="md" showTagline={false} />
            </div>
            
            <p className="font-handwriting text-[#E5C158] text-2xl">
              "Grow Green. Live Better."
            </p>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Plantora is your trusted online destination for fresh, vibrant indoor plants delivered safely to your doorstep. Every Money Plant is carefully nurtured and shipped in an elegant pot + saucer.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918007588747"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="tel:8007588747"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#gallery" className="hover:text-white transition-colors">Plant Gallery & Photos</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Health & Vastu Benefits</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Easy Care Instructions</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">₹399 Special Offer</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Direct Contact Box */}
          <div className="md:col-span-4 bg-[#0F3820] p-5 rounded-2xl border border-emerald-800/60 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37]" /> Contact & Orders
            </h4>
            
            <div className="space-y-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold">Phone / WhatsApp:</span>
                <a href="tel:8007588747" className="font-bold text-white hover:underline">
                  8007588747
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold">Instagram:</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
                  @plantora.official
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-semibold">Support:</span>
                <span>Mon – Sun, 9:00 AM – 9:00 PM</span>
              </div>
            </div>

            <a
              href="https://wa.me/918007588747?text=Hi%20Plantora!%20I%20have%20an%20order%20query."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 mt-2 hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Us on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} Plantora. All rights reserved. Designed with love for nature.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
