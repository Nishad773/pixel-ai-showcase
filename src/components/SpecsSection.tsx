import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { category: 'Display', value: '6.3" OLED', detail: '120Hz Smooth Display, HDR+' },
  { category: 'Processor', value: 'Tensor G4', detail: 'Next-gen Google AI chip' },
  { category: 'Memory', value: '12GB RAM', detail: 'LPDDR5X' },
  { category: 'Storage', value: '128-512GB', detail: 'UFS 3.1' },
  { category: 'Main Camera', value: '50MP', detail: 'f/1.68, OIS, Laser AF' },
  { category: 'Ultra Wide', value: '48MP', detail: 'f/1.7, Macro Focus' },
  { category: 'Battery', value: '4,700 mAh', detail: '24+ hours with Extreme Battery Saver' },
  { category: 'Charging', value: '30W Fast', detail: '50% in 30 minutes' },
];

const SpecsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.specs-header', {
        scrollTrigger: {
          trigger: '.specs-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.spec-item', {
        scrollTrigger: {
          trigger: '.specs-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="specs" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="specs-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-green/10 text-google-green text-sm font-medium mb-6">
            Technical Specifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every component engineered for excellence.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="specs-grid max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden">
            {specs.map((spec, index) => (
              <div
                key={spec.category}
                className={`spec-item flex items-center justify-between p-6 ${
                  index !== specs.length - 1 ? 'border-b border-border' : ''
                } hover:bg-secondary/30 transition-colors`}
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{spec.category}</p>
                  <p className="text-lg font-semibold text-foreground">{spec.value}</p>
                </div>
                <p className="text-sm text-muted-foreground text-right max-w-[200px]">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
