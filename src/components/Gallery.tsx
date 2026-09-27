import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import imgFullPot from '../assets/images/plantora_hero_plant_1790504389999.jpg';
import imgMacroLeaves from '../assets/images/plantora_gallery_leaves_1790504406138.jpg';
import imgDeskSetting from '../assets/images/plantora_gallery_desk_1790504421834.jpg';
import imgShelfDecor from '../assets/images/plantora_gallery_shelf_1790504437848.jpg';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  description: string;
  badge: string;
}

export const Gallery: React.FC = () => {
  const images: GalleryItem[] = [
    {
      id: 'full-pot',
      url: imgFullPot,
      title: 'Healthy Golden Pothos in Pot',
      description: 'Lush variegated foliage pre-potted in a lightweight matte white ceramic-style pot with matching drainage saucer.',
      badge: 'Full View'
    },
    {
      id: 'macro-leaves',
      url: imgMacroLeaves,
      title: 'Vibrant Variegated Foliage',
      description: 'Golden yellow and emerald green heart-shaped leaves that naturally purify indoor air.',
      badge: 'Leaf Detail'
    },
    {
      id: 'desk-setting',
      url: imgDeskSetting,
      title: 'Perfect for Office & Study Desks',
      description: 'Adds a calm green presence to your study table or work laptop setup.',
      badge: 'Workspace'
    },
    {
      id: 'shelf-decor',
      url: imgShelfDecor,
      title: 'Living Room & Shelf Decor',
      description: 'Trails gracefully over bookshelves, TV consoles, or hanging planters.',
      badge: 'Home Styling'
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-[#FFFDF9] border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2D6A4F] bg-[#1B4D2E]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Visual Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820]">
            Every Angle of Nature's Beauty
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Take a look at how Plantora Money Plants look in real home & office settings. Tap any photo to zoom in.
          </p>
        </div>

        {/* Gallery Grid / Horizontal Scroll on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] sm:aspect-square overflow-hidden relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge top right */}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0F3820] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {img.badge}
                </span>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Title & Description overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base font-bold leading-tight">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-stone-200 line-clamp-2 mt-0.5 font-light">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone-400 mt-4 italic">
          ✨ Tap any photo above to inspect in high resolution
        </p>

      </div>

      {/* Lightbox Zoom Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors z-10"
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors hidden sm:block z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors hidden sm:block z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-stone-900 border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeImageIndex].url}
              alt={images[activeImageIndex].title}
              className="max-h-[70vh] w-auto mx-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-stone-900 text-white border-t border-stone-800 text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                {images[activeImageIndex].badge} • Image {activeImageIndex + 1} of {images.length}
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {images[activeImageIndex].title}
              </h3>
              <p className="text-xs text-stone-300 max-w-lg mx-auto mt-1">
                {images[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
