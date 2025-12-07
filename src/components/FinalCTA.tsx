import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: '.cta-content',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-google-blue/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-google-red/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-google-green/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="cta-content max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-google-red/10 border border-google-red/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-google-red" />
            </span>
            <span className="text-sm text-google-red font-medium">Limited pre-order availability</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Experience <span className="gradient-text">Pixel 9</span>
            <br />
            Today
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join millions who've discovered the power of Google AI in their pocket. 
            Pre-order now and be among the first to experience the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2 text-lg px-10 py-5">
              Pre-order Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg px-10 py-5">
              Compare Models
            </button>
          </div>

          {/* Trust footer */}
          <p className="mt-10 text-sm text-muted-foreground">
            Free shipping • 14-day returns • 2-year warranty
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
