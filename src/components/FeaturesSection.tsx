import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Cpu, Battery, Camera, Shield, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: 'Magic Editor',
    description: 'AI-powered photo editing that transforms your shots with a single tap. Remove objects, enhance colors, and create magic.',
    bgColor: 'bg-google-blue/10',
    iconColor: 'text-google-blue',
  },
  {
    icon: Cpu,
    title: 'Tensor G4 Chip',
    description: 'Google\'s most powerful chip yet. Blazing fast performance with on-device AI processing for instant results.',
    bgColor: 'bg-google-red/10',
    iconColor: 'text-google-red',
  },
  {
    icon: Battery,
    title: '24+ Hour Battery',
    description: 'All-day battery that adapts to your usage. Extreme Battery Saver extends life even further when you need it.',
    bgColor: 'bg-google-green/10',
    iconColor: 'text-google-green',
  },
  {
    icon: Camera,
    title: 'Pro Camera System',
    description: '50MP main sensor with Night Sight and Astrophotography mode. Capture the stars like never before.',
    bgColor: 'bg-google-yellow/10',
    iconColor: 'text-google-yellow',
  },
  {
    icon: Shield,
    title: 'Titan M2 Security',
    description: 'Hardware-level security with the Titan M2 chip. Your data stays protected with 7 years of security updates.',
    bgColor: 'bg-google-blue/10',
    iconColor: 'text-google-blue',
  },
  {
    icon: Workflow,
    title: 'Seamless Ecosystem',
    description: 'Works perfectly with your Google devices. Quick Share, Nearby, and Phone Hub make everything connected.',
    bgColor: 'bg-google-green/10',
    iconColor: 'text-google-green',
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.features-header', {
        scrollTrigger: {
          trigger: '.features-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards stagger animation
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="features-header text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-blue/10 text-google-blue text-sm font-medium mb-6">
            Powered by Google AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligence that works
            <br />
            <span className="gradient-text">for you</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature designed to make your life easier, your photos stunning, 
            and your experience seamless.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bgColor}`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
