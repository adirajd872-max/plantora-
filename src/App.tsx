import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { CareGuide } from './components/CareGuide';
import { TrustBar } from './components/TrustBar';
import { PricingCard } from './components/PricingCard';
import { FAQ } from './components/FAQ';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleOpenWhatsAppModal = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C2A20] font-sans selection:bg-[#2D6A4F] selection:text-white flex flex-col">
      {/* Sticky Top Navbar */}
      <Header onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* Section 2: Image Gallery */}
        <Gallery />

        {/* Section 3: Benefits Grid */}
        <Benefits />

        {/* Section 4: Care Instructions */}
        <CareGuide />

        {/* Section 5: Trust Bar & Proof */}
        <TrustBar />

        {/* Section 6: Pricing Card */}
        <PricingCard onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* Section 7: FAQ Accordion */}
        <FAQ />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar */}
      <StickyMobileBar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* WhatsApp Custom Order Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsAppModal}
      />
    </div>
  );
}
