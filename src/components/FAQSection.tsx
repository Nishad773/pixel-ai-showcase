import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'When will Pixel 9 start shipping?',
    answer: 'Pixel 9 pre-orders begin shipping within 2-3 weeks of your order date. You\'ll receive a tracking number via email once your order ships.',
  },
  {
    question: 'What\'s included in the box?',
    answer: 'Your Pixel 9 comes with a USB-C to USB-C cable, Quick Switch Adapter, SIM tool, and quick start guide. To reduce environmental impact, we no longer include a power adapter, but you can purchase one separately.',
  },
  {
    question: 'How long will Pixel 9 receive software updates?',
    answer: 'Pixel 9 is guaranteed to receive 7 years of OS updates and security patches, making it the longest-supported Android phone ever.',
  },
  {
    question: 'Can I trade in my old phone?',
    answer: 'Yes! We accept trade-ins for most smartphones in working condition. You can get up to $500 off your new Pixel 9 depending on your trade-in device.',
  },
  {
    question: 'Is the Pixel 9 water resistant?',
    answer: 'Yes, Pixel 9 has an IP68 water resistance rating, meaning it can withstand submersion in freshwater up to 1.5 meters for up to 30 minutes.',
  },
  {
    question: 'Does Pixel 9 work with wireless charging?',
    answer: 'Absolutely! Pixel 9 supports wireless charging up to 15W with the Pixel Stand (2nd gen), and is compatible with all Qi-certified wireless chargers.',
  },
  {
    question: 'What carriers support Pixel 9?',
    answer: 'Pixel 9 is unlocked and works with all major carriers including Verizon, AT&T, T-Mobile, and many more. It also supports both 5G and 4G LTE networks worldwide.',
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-header', {
        scrollTrigger: {
          trigger: '.faq-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="faq-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-yellow/10 text-google-yellow text-sm font-medium mb-6">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Got questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
