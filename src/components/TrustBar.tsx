import React from 'react';
import { ShieldCheck, Truck, Award, Heart, CheckCircle2, Users, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rohan Sharma',
      location: 'Pune',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      comment: 'Ordered for my study desk. Received a super healthy, glossy Money Plant in 2 days. Packaging was completely spill-proof!',
      rating: 5,
      date: '2 days ago',
    },
    {
      id: 2,
      name: 'Preeti Kulkarni',
      location: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      comment: 'The white pot + saucer looks premium in my living room. Great price at ₹399 compared to local nurseries.',
      rating: 5,
      date: '5 days ago',
    },
    {
      id: 3,
      name: 'Aditya & Neha',
      location: 'Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      comment: 'Gifted this to my sister for her new apartment. She loved the handwritten card option on WhatsApp!',
      rating: 5,
      date: '1 week ago',
    },
  ];

  return (
    <section id="trust" className="py-16 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F3820]">
                100% Fresh Guarantee
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Arrives healthy & vibrant or we replace it free of cost immediately.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 shadow-md">
              <Truck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F3820]">
                Safe Transit Packaging
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Custom eco-friendly protective crates ensure zero soil spill or leaf damage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F3820]">
                Pot + Saucer Included
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                No extra nursery pot shopping needed. Unbox and display right away.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F3820]">
                1,200+ Community
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Joined by green lovers on Instagram & WhatsApp care assistance.
              </p>
            </div>
          </div>

        </div>

        {/* Social Proof & Follower Count Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#0F3820] text-white rounded-2xl shadow-lg">
          <div className="flex items-center gap-3">
            {/* Avatar Stack */}
            <div className="flex -space-x-3 overflow-hidden">
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F3820] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Follower 1" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F3820] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Follower 2" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F3820] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="Follower 3" />
              <div className="h-9 w-9 rounded-full bg-[#2D6A4F] text-[#D4AF37] font-bold text-xs flex items-center justify-center ring-2 ring-[#0F3820]">
                +6
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Followed by <strong className="text-[#E5C158]">Rohan, Preeti, Aravind</strong> +6 more friends
              </p>
              <p className="text-[11px] text-emerald-200">
                1,200+ Instagram Followers • @plantora.official
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-colors shrink-0"
          >
            Visit Instagram
          </a>
        </div>

        {/* Real Customer Reviews Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820]">
              Loved by Home Decorators & Plant Lovers
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Read what verified buyers say about their Plantora Money Plant experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-stone-400">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0F3820] flex items-center gap-1">
                      {rev.name}
                      <CheckCircle2 className="w-3 h-3 text-[#2D6A4F]" />
                    </div>
                    <span className="text-[10px] text-stone-400">Verified Buyer • {rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
