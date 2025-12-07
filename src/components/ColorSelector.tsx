import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const colors = [
  { name: 'Obsidian', hex: '#1A1A1A', textColor: 'text-foreground' },
  { name: 'Porcelain', hex: '#F5F5F5', textColor: 'text-background' },
  { name: 'Wintergreen', hex: '#7ECFAC', textColor: 'text-background' },
  { name: 'Rose', hex: '#F5B5C8', textColor: 'text-background' },
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.color-header', {
        scrollTrigger: {
          trigger: '.color-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.color-phone', {
        scrollTrigger: {
          trigger: '.color-phone',
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleColorChange = (color: typeof colors[0]) => {
    gsap.to(phoneRef.current, {
      scale: 0.95,
      opacity: 0.5,
      duration: 0.2,
      onComplete: () => {
        setSelectedColor(color);
        gsap.to(phoneRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      },
    });
  };

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="color-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find your <span className="gradient-text">perfect shade</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Available in four stunning finishes. Each one designed to stand out.
          </p>
        </div>

        {/* Phone Display */}
        <div className="flex flex-col items-center gap-12">
          <div
            ref={phoneRef}
            className="color-phone relative w-64 h-[500px] rounded-[3rem] transition-all duration-500"
            style={{ 
              backgroundColor: selectedColor.hex,
              boxShadow: `0 50px 100px -20px ${selectedColor.hex}40`
            }}
          >
            {/* Phone notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-background/20 rounded-full" />
            
            {/* Camera bar */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-12 bg-background/10 rounded-2xl flex items-center justify-center gap-4">
              <div className="w-6 h-6 rounded-full bg-background/30" />
              <div className="w-6 h-6 rounded-full bg-background/30" />
            </div>

            {/* Color name overlay */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
              <p className={`text-xl font-semibold ${selectedColor.textColor}`}>
                {selectedColor.name}
              </p>
            </div>
          </div>

          {/* Color Selector */}
          <div className="flex items-center gap-6">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`color-dot ${selectedColor.name === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSelector;
