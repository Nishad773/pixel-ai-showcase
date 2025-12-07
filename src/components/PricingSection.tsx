import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Pixel 9',
    storage: '128GB',
    price: 799,
    features: [
      '6.3" OLED Display',
      '50MP Main Camera',
      'Tensor G4 Chip',
      '12GB RAM',
      '24+ Hour Battery',
      '7 Years of Updates',
    ],
    popular: false,
  },
  {
    name: 'Pixel 9',
    storage: '256GB',
    price: 899,
    features: [
      '6.3" OLED Display',
      '50MP Main Camera',
      'Tensor G4 Chip',
      '12GB RAM',
      '24+ Hour Battery',
      '7 Years of Updates',
      'Double the Storage',
    ],
    popular: true,
  },
  {
    name: 'Pixel 9 Pro',
    storage: '512GB',
    price: 1099,
    features: [
      '6.7" LTPO OLED Display',
      '50MP + 48MP + 5x Telephoto',
      'Tensor G4 Pro Chip',
      '16GB RAM',
      'Biggest Battery Ever',
      '7 Years of Updates',
      'Pro Camera Features',
      'Premium Build',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-header', {
        scrollTrigger: {
          trigger: '.pricing-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="pricing-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-blue/10 text-google-blue text-sm font-medium mb-6">
            Choose Your Pixel
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Just pick your storage and you're ready to go.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={`${plan.name}-${plan.storage}`}
              className={`pricing-card relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'glass-card border-google-blue/50 scale-105'
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-google-blue text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.storage}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-google-green flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Pre-order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
