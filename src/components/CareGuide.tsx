import React, { useState } from 'react';
import { Sun, Droplets, Layers, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export const CareGuide: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'desk' | 'living' | 'bedroom'>('desk');

  const locationTips = {
    desk: {
      title: 'Study / Work Desk Setup',
      light: 'Filtered window light or indoor LED desk light',
      watering: 'Water once every 5-6 days',
      proTip: 'Wipe leaves every fortnight to remove computer dust and keep foliage glossy.',
    },
    living: {
      title: 'Living Room & Bookshelf',
      light: 'Bright indirect sunlight near balcony or window',
      watering: 'Water 1-2 times a week when soil top inch feels dry',
      proTip: 'Let vines trail naturally over shelf edges or support with a mini moss pole.',
    },
    bedroom: {
      title: 'Bedside Table & Nightstand',
      light: 'Mild indirect ambient room lighting',
      watering: 'Water once a week lightly',
      proTip: 'Keeps releasing oxygen at night to promote restful indoor air.',
    },
  };

  return (
    <section id="care" className="py-16 bg-[#F4EFE6] relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Care Bullets & Main Guidance */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] bg-[#1B4D2E]/10 px-3 py-1 rounded-full">
                Beginner Friendly
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] mt-2">
                Simple Plant Care Tips
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2">
                Golden Pothos is almost un-killable! Follow these 4 easy rules to keep your plant lush green forever.
              </p>
            </div>

            {/* Bullet List */}
            <div className="space-y-4">
              
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#0F3820]">
                    1. Indirect Sunlight
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Keep in bright, indirect light or filtered shade. Avoid direct harsh harsh afternoon sun which can scorch leaves.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#0F3820]">
                    2. Water 1–2 Times a Week
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Water only when the top 1 inch of soil feels dry to touch. Avoid overwatering — less is always more with pothos!
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#0F3820]">
                    3. Well-Draining Soil & Pot
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Your Plantora plant comes pre-potted with organic nutrient-rich soil and a drainage pot + saucer so roots stay healthy.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#0F3820]">
                    4. Wipe Leaves Occasionally
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Gently wipe the leaves with a damp cloth every few weeks to keep them fresh, clean, and glossy for maximum photosynthesis.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Room & Maintenance Meter */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xl space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                Interactive Placement Guide
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                Where will you keep it?
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Select your intended room placement for tailored care tips:
              </p>
            </div>

            {/* Room Selector Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedLocation('desk')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedLocation === 'desk'
                    ? 'bg-[#1B4D2E] text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                💻 Work Desk
              </button>
              <button
                type="button"
                onClick={() => setSelectedLocation('living')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedLocation === 'living'
                    ? 'bg-[#1B4D2E] text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                🛋️ Living Room
              </button>
              <button
                type="button"
                onClick={() => setSelectedLocation('bedroom')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  selectedLocation === 'bedroom'
                    ? 'bg-[#1B4D2E] text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                🛏️ Bedroom
              </button>
            </div>

            {/* Tailored Tip Output */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/20 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#0F3820] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                {locationTips[selectedLocation].title}
              </h4>
              <div className="space-y-1.5 text-xs text-stone-700">
                <p>☀️ <strong>Light:</strong> {locationTips[selectedLocation].light}</p>
                <p>💧 <strong>Watering:</strong> {locationTips[selectedLocation].watering}</p>
                <p className="text-emerald-900 bg-emerald-100/60 p-2 rounded-lg mt-2">
                  💡 <strong>Pro Tip:</strong> {locationTips[selectedLocation].proTip}
                </p>
              </div>
            </div>

            {/* Care Stats Indicator Bar */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between text-stone-600 font-semibold">
                <span>Care Difficulty</span>
                <span className="text-emerald-700 font-bold">1/5 (Super Easy)</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#2D6A4F] h-full w-[20%]" />
              </div>

              <div className="flex justify-between text-stone-600 font-semibold pt-1">
                <span>Growth Rate</span>
                <span className="text-emerald-700 font-bold">Fast Trailing</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#2D6A4F] h-full w-[80%]" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Pet Safety: Keep out of reach of curious cats/dogs as pothos leaves can cause mild stomach upset if ingested.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
