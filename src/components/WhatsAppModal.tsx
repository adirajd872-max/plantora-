import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Gift, Sparkles, ShieldCheck } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVariant?: 'single' | 'bundle' | 'gift';
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultVariant = 'single',
}) => {
  const [selectedOption, setSelectedOption] = useState<'single' | 'bundle' | 'gift'>(defaultVariant);
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [giftNote, setGiftNote] = useState('');

  if (!isOpen) return null;

  const getWhatsAppMessage = () => {
    let msg = `Hi Plantora! 🌿\nI would like to enquire / order the Money Plant (Golden Pothos).\n\n`;
    
    if (selectedOption === 'single') {
      msg += `📦 *Order:* 1x Golden Pothos with Pot + Saucer (₹399)\n`;
    } else if (selectedOption === 'bundle') {
      msg += `📦 *Order:* Duo Pack (2x Golden Pothos) - ₹749\n`;
    } else {
      msg += `📦 *Order:* Gift Edition with Greeting Card (₹449)\n`;
    }

    if (customerName) msg += `👤 *Name:* ${customerName}\n`;
    if (city) msg += `📍 *Delivery City:* ${city}\n`;
    if (giftNote && selectedOption === 'gift') msg += `💌 *Gift Note:* "${giftNote}"\n`;

    msg += `\nPlease confirm availability and payment details. Thanks!`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/918007588747?text=${getWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#2D6A4F]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0F3820] to-[#1B4D2E] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-emerald-200 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Direct WhatsApp Order
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Connect with Plantora
          </h3>
          <p className="text-xs text-emerald-100/90 mt-1">
            Instant assistance & order confirmation via WhatsApp (8007588747)
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          {/* Option Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-2">
              Select Package
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedOption('single')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedOption === 'single'
                    ? 'border-[#2D6A4F] bg-[#1B4D2E]/5 ring-1 ring-[#2D6A4F]'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F3820]">Single Plant</span>
                  {selectedOption === 'single' && <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />}
                </div>
                <div className="font-serif text-lg font-bold text-[#0F3820] mt-1">₹399</div>
                <div className="text-[10px] text-stone-500">Includes Pot + Saucer</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedOption('bundle')}
                className={`p-3 rounded-xl border text-left transition-all relative ${
                  selectedOption === 'bundle'
                    ? 'border-[#2D6A4F] bg-[#1B4D2E]/5 ring-1 ring-[#2D6A4F]'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <span className="absolute -top-2 right-2 bg-[#D4AF37] text-[9px] font-bold text-[#0F3820] px-1.5 py-0.5 rounded-full">
                  BEST VALUE
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F3820]">Duo Pack</span>
                  {selectedOption === 'bundle' && <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />}
                </div>
                <div className="font-serif text-lg font-bold text-[#0F3820] mt-1">₹749</div>
                <div className="text-[10px] text-stone-500">2 Plants + Pots</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedOption('gift')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedOption === 'gift'
                    ? 'border-[#2D6A4F] bg-[#1B4D2E]/5 ring-1 ring-[#2D6A4F]'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F3820] flex items-center gap-1">
                    <Gift className="w-3 h-3 text-[#D4AF37]" /> Gift Edition
                  </span>
                  {selectedOption === 'gift' && <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />}
                </div>
                <div className="font-serif text-lg font-bold text-[#0F3820] mt-1">₹449</div>
                <div className="text-[10px] text-stone-500">Card + Ribbon Wrap</div>
              </button>
            </div>
          </div>

          {/* Quick Details Inputs (Optional for user comfort) */}
          <div className="space-y-3 pt-1 border-t border-stone-200/60">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="name-input" className="block text-xs font-medium text-stone-700 mb-1">
                  Your Name <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="e.g. Ananya"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-[#2D6A4F] bg-white text-stone-800"
                />
              </div>
              <div>
                <label htmlFor="city-input" className="block text-xs font-medium text-stone-700 mb-1">
                  City / Pincode <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="city-input"
                  type="text"
                  placeholder="e.g. Pune, 411001"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-[#2D6A4F] bg-white text-stone-800"
                />
              </div>
            </div>

            {selectedOption === 'gift' && (
              <div>
                <label htmlFor="gift-note-input" className="block text-xs font-medium text-stone-700 mb-1">
                  Gift Message for Card
                </label>
                <textarea
                  id="gift-note-input"
                  rows={2}
                  placeholder="e.g. Happy Birthday Rohit! Hope this money plant brings you luck and happiness. - Maya"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-[#2D6A4F] bg-white text-stone-800 resize-none"
                />
              </div>
            )}
          </div>

          {/* Trust points */}
          <div className="flex items-center justify-around p-2.5 bg-emerald-50/60 rounded-xl text-[11px] text-[#1B4D2E] font-medium border border-emerald-100">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" /> 100% Fresh Guarantee
            </div>
            <span>•</span>
            <div>🚚 Safe Transit Packaging</div>
            <span>•</span>
            <div>⚡ Fast Response</div>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-700/20 transition-all transform active:scale-[0.99]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Continue to WhatsApp (8007588747)</span>
            <Send className="w-4 h-4 ml-auto opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
