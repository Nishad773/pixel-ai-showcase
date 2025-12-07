import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, ChevronDown, Star } from 'lucide-react';
import pixel9Hero from '@/assets/pixel9-hero.png';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(textRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(phoneRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Floating animation
      gsap.to(phoneRef.current, {
        y: -20,
        rotation: 2,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, hsl(var(--google-blue) / 0.12), transparent 50%)',
      }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-google-blue/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-google-red/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-google-yellow/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="text-xs font-medium text-google-blue">NEW</span>
              <span className="text-sm text-muted-foreground">Just Announced</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">Meet </span>
              <span className="gradient-text">Google AI.</span>
              <br />
              <span className="text-foreground">Built in.</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl text-muted-foreground max-w-xl">
              The most advanced AI-powered smartphone. Capture magic with every shot. 
              Experience the pure Android experience, reimagined.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center gap-2">
                Pre-order Now
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Video
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-google-yellow text-google-yellow" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">50K+</span> Pre-orders
              </div>
              <div className="text-sm text-muted-foreground">
                Featured in <span className="text-foreground font-semibold">The Verge</span>
              </div>
            </div>
          </div>

          {/* Phone Image */}
          <div ref={phoneRef} className="relative flex justify-center">
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-google-blue/20 blur-3xl animate-glow-pulse" />
            </div>
            
            <img
              src={pixel9Hero}
              alt="Google Pixel 9"
              className="relative z-10 w-full max-w-md drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 50px 100px rgba(66, 133, 244, 0.3))' }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
