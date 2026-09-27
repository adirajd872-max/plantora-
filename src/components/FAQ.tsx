import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How fast is the delivery?',
      answer: 'Orders are processed and dispatched within 24 hours! Local deliveries take 1-2 business days, while pan-India delivery takes 3-5 days. Every plant is packed in a protective reinforced box to ensure zero damage.',
    },
    {
      question: 'What is the size of the plant and pot?',
      answer: 'The plant stands approximately 8 to 12 inches tall with lush trailing vines. It arrives pre-potted in a 4.5-inch durable white pot with matching saucer, ready to place on any desk, table, or window sill.',
    },
    {
      question: 'Is Money Plant easy to care for beginners?',
      answer: 'Yes! Golden Pothos is recognized as one of the easiest and most resilient indoor plants. It thrives in indirect light, requires minimal watering (1-2 times a week), and forgives occasional neglect.',
    },
    {
      question: 'Can I send this as a gift to someone?',
      answer: 'Absolutely! Money Plants make thoughtful, symbolic gifts representing growth and good fortune. You can include a custom handwritten message note at no extra charge. Just mention it on WhatsApp!',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#FFFDF9] border-t border-stone-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] bg-[#1B4D2E]/10 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0F3820]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Everything you need to know about ordering, delivery, and plant care.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl border border-stone-200/80 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base font-bold text-[#0F3820] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#2D6A4F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/40">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center bg-[#1B4D2E]/5 p-4 rounded-2xl border border-[#1B4D2E]/10">
          <p className="text-xs text-stone-700 font-medium">
            Have another question not answered here?
          </p>
          <a
            href="https://wa.me/918007588747?text=Hi%20Plantora!%20I%20have%20a%20question%20about..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D6A4F] hover:underline mt-1"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Ask us directly on WhatsApp (8007588747)
          </a>
        </div>

      </div>
    </section>
  );
};
