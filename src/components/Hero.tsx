import React from 'react';
import { Star, MessageCircle, ShieldCheck, Heart, Sparkles, Check, Phone } from 'lucide-react';
import heroImage from '../assets/images/plantora_hero_plant_1790504389999.jpg';

interface HeroProps {
  onOpenWhatsAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsAppModal }) => {
  const directWhatsappUrl = "https://wa.me/918007588747?text=Hi%20Plantora!%20I%20would%20like%20to%20order%20the%20Money%20Plant%20(Golden%20Pothos)%20for%20%E2%82%B9399.";

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:py-16 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#1B4D2E]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Product Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Lifestyle Hero Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={heroImage}
                  alt="Plantora Golden Pothos Money Plant in white pot"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay for tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Handcrafted Badge top left */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/60 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-[#0F3820] tracking-wide uppercase">Fresh In Stock</span>
                </div>

                {/* "Green Vibes Only" Decorative Badge top right */}
                <div className="absolute top-4 right-4 bg-[#0F3820]/80 backdrop-blur-md text-[#E5C158] font-handwriting text-lg px-3 py-1 rounded-2xl border border-[#D4AF37]/30 shadow-md rotate-3">
                  Green Vibes Only ✨
                </div>

                {/* Bottom Photo Callout overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-stone-100 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B4D2E]/10 flex items-center justify-center shrink-0">
                      <span className="text-xl">🪴</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F3820]">Golden Pothos (Money Plant)</h4>
                      <p className="text-[11px] text-stone-500">Includes white pot + saucer saucer</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#1B4D2E] text-[10px] font-bold">
                    Ready to Display
                  </span>
                </div>
              </div>

              {/* Floating Badge overlay bottom right offset */}
              <div className="absolute -bottom-5 -right-2 sm:right-4 bg-gradient-to-br from-[#0F3820] to-[#1B4D2E] text-white p-4 rounded-2xl shadow-xl border-2 border-white max-w-[170px] hidden sm:block animate-float">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Perfect Gift</span>
                </div>
                <p className="text-xs font-serif leading-tight text-emerald-50">
                  "Brings greenery & good luck to any desk or shelf!"
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Direct Purchase CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Rating & Social Proof Pill */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-sm text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#0F3820]">4.8★</span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600 font-medium">30+ Happy Plant Lovers</span>
            </div>

            {/* Main Headline & Subheadline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3820] leading-[1.15] tracking-tight">
                Bring Home <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#2D6A4F] font-serif">Nature's Freshness</span>
              </h1>
              
              <div className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#1B4D2E] uppercase bg-[#1B4D2E]/10 px-3 py-1 rounded-md">
                Fresh Plants · Affordable Prices · Perfect Gifts
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Transform your home or office with our lush, air-purifying <strong>Money Plant (Golden Pothos)</strong>. Delivered healthy, fully potted, and ready to thrive with zero hassle.
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs font-medium text-stone-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1B4D2E]/10 text-[#1B4D2E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Purifies Indoor Air</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1B4D2E]/10 text-[#1B4D2E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Low Maintenance Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1B4D2E]/10 text-[#1B4D2E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>White Pot + Saucer Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1B4D2E]/10 text-[#1B4D2E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Attracts Good Luck & Vastu</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#2D6A4F]/20 shadow-md flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  Special Offer Price
                </div>
                <div className="flex items-baseline gap-2.5 mt-0.5">
                  <span className="font-serif text-3xl font-extrabold text-[#0F3820]">
                    ₹399
                  </span>
                  <span className="text-sm text-stone-400 line-through font-medium">
                    ₹599
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#1B4D2E] text-xs font-bold">
                    SAVE ₹200 (33% OFF)
                  </span>
                </div>
              </div>

              <div className="text-right text-[11px] text-stone-500">
                <span className="block text-emerald-700 font-semibold">✓ Free Pot + Saucer</span>
                <span className="block">✓ Express Safe Delivery</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between px-1 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" /> 100% Freshness Guarantee
                </span>
                <a 
                  href="tel:8007588747" 
                  className="text-[#1B4D2E] font-semibold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Call 8007588747
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
