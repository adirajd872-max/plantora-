import React from 'react';
import { Wind, Sparkles, Smile, Sprout, Home, Droplets } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: Wind,
      title: 'Purifies Air',
      description: 'Helps remove harmful toxins (like formaldehyde & benzene) and improves indoor air quality.',
      color: 'bg-[#1B4D2E]/10 text-[#1B4D2E]',
    },
    {
      icon: Sparkles,
      title: 'Brings Positive Energy',
      description: 'Known in Vastu & Feng Shui to attract prosperity, good fortune, wealth, and positive vibes.',
      color: 'bg-[#D4AF37]/15 text-[#9E7C12]',
    },
    {
      icon: Smile,
      title: 'Reduces Stress',
      description: 'Adds vibrant natural greenery to your space, which helps calm the mind and lower fatigue.',
      color: 'bg-emerald-100 text-emerald-800',
    },
    {
      icon: Sprout,
      title: 'Low Maintenance',
      description: 'Grows easily in low to bright indirect light. Very forgiving even if you forget watering.',
      color: 'bg-teal-100 text-teal-800',
    },
    {
      icon: Home,
      title: 'Perfect for Indoors',
      description: 'Ideal for living rooms, work desks, bedrooms, study corners, and office cubicles.',
      color: 'bg-[#1B4D2E]/10 text-[#1B4D2E]',
    },
    {
      icon: Droplets,
      title: 'Improves Humidity',
      description: 'Helps maintain better humidity levels in air-conditioned rooms, easing dry skin & airways.',
      color: 'bg-sky-100 text-sky-800',
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] bg-[#1B4D2E]/10 px-3 py-1 rounded-full">
            Why Choose Money Plant
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820]">
            6 Natural Benefits for Your Space
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            More than just a beautiful plant — Money Plant brings health, peace, and prosperity into your home.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0F3820] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Plantora Benefit #{idx + 1}</span>
                  <span className="text-[#2D6A4F] font-semibold group-hover:underline">Learn more</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
