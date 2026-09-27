import React from 'react';
import { Check, MessageCircle, Sparkles, ShieldCheck, Truck, Gift, PhoneCall } from 'lucide-react';

interface PricingCardProps {
  onOpenWhatsAppModal: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ onOpenWhatsAppModal }) => {
  const directWhatsappUrl = "https://wa.me/918007588747?text=Hi%20Plantora!%20I%20would%20like%20to%20order%20the%20Money%20Plant%20(Golden%20Pothos)%20for%20%E2%82%B9399.";

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Pricing Box Container */}
        <div className="relative bg-white rounded-3xl border-2 border-[#1B4D2E]/30 shadow-2xl overflow-hidden">
          
          {/* Top Banner Ribbon */}
          <div className="bg-gradient-to-r from-[#0F3820] via-[#1B4D2E] to-[#0F3820] p-4 text-white text-center relative">
            <span className="bg-[#D4AF37] text-[#0F3820] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-1 shadow-sm">
              LIMITED TIME LAUNCH OFFER
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Golden Pothos Money Plant
            </h2>
            <p className="text-xs text-emerald-200 mt-0.5">
              Includes White Pot + Saucer · Complete Ready-to-Display Package
            </p>
          </div>

          {/* Pricing Details & Inclusions */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Price & Savings Highlight */}
            <div className="text-center space-y-2 bg-[#FAF7F2] p-6 rounded-2xl border border-stone-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Special All-Inclusive Price
              </span>
              
              <div className="flex items-center justify-center gap-3">
                <span className="font-serif text-5xl font-extrabold text-[#0F3820]">
                  ₹399
                </span>
                <div className="text-left">
                  <span className="text-sm text-stone-400 line-through font-medium block">
                    MRP ₹599
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                    SAVE ₹200 (33% OFF)
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 pt-1">
                ⚡ No hidden costs • Express safe delivery available
              </p>
            </div>

            {/* Inclusions Checklist */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-[#0F3820] text-center sm:text-left">
                What's Included in Your Plantora Box:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Fresh, Rooted Golden Pothos Plant</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Matte White Pot + Matching Saucer</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Nutrient-rich Soil Mix Pre-Potted</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Plantora Printed Care Guide Booklet</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Spill-Proof Protective Transit Packaging</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Optional Free Gift Greeting Card</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3 pt-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Enquire & Order on WhatsApp (₹399)</span>
              </a>

              <div className="flex flex-wrap items-center justify-around gap-2 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" /> 100% Replacement Guarantee
                </span>
                <span>•</span>
                <a href="tel:8007588747" className="hover:underline text-[#1B4D2E] font-semibold flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5" /> Call 8007588747
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
