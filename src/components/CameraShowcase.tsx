import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aiPhotoComparison from '@/assets/ai-photo-comparison.png';

gsap.registerPlugin(ScrollTrigger);

const CameraShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.camera-header', {
        scrollTrigger: {
          trigger: '.camera-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.camera-feature', {
        scrollTrigger: {
          trigger: '.camera-features',
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cameraFeatures = [
    { label: 'Photo Unblur', desc: 'Fix old blurry photos with AI' },
    { label: 'Magic Eraser', desc: 'Remove unwanted objects instantly' },
    { label: 'Night Sight', desc: 'Stunning low-light photography' },
    { label: 'Real Tone', desc: 'Accurate skin tones for everyone' },
  ];

  return (
    <section id="camera" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="camera-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-yellow/10 text-google-yellow text-sm font-medium mb-6">
            Advanced Camera System
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See what <span className="gradient-text">AI can do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Magic Editor uses generative AI to give you even more control over your photos.
            Transform your shots into masterpieces.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div ref={imageRef} className="relative max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img 
              src={aiPhotoComparison} 
              alt="AI Photo Enhancement Comparison"
              className="w-full"
            />
            
            {/* Labels */}
            <div className="absolute bottom-6 left-6 glass-card px-4 py-2">
              <span className="text-sm font-medium text-foreground">Before</span>
            </div>
            <div className="absolute bottom-6 right-6 glass-card px-4 py-2">
              <span className="text-sm font-medium text-foreground">After AI Enhancement</span>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-google-blue/20 via-google-yellow/20 to-google-green/20 blur-3xl -z-10 rounded-3xl" />
        </div>

        {/* Camera Features */}
        <div className="camera-features grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cameraFeatures.map((feature, index) => (
            <div key={feature.label} className="camera-feature glass-card p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.label}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CameraShowcase;
