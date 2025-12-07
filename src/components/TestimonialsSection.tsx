import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The Pixel 9 is the best smartphone camera I've ever used. The AI features are genuinely magical.",
    author: "Marques Brownlee",
    role: "Tech Reviewer, MKBHD",
    avatar: "MB"
  },
  {
    quote: "Google has finally nailed the premium smartphone experience. This is Android at its absolute best.",
    author: "Nilay Patel",
    role: "Editor-in-Chief, The Verge",
    avatar: "NP"
  },
  {
    quote: "The Tensor G4 chip makes everything feel instant. The AI features are years ahead of the competition.",
    author: "Joanna Stern",
    role: "Tech Columnist, WSJ",
    avatar: "JS"
  },
];

const awards = [
  { name: "Best Smartphone 2024", org: "TechRadar" },
  { name: "Editor's Choice", org: "CNET" },
  { name: "Innovation Award", org: "CES 2024" },
  { name: "Best Camera Phone", org: "DxOMark" },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });

      gsap.from('.award-item', {
        scrollTrigger: {
          trigger: '.awards-row',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-google-red/10 text-google-red text-sm font-medium mb-6">
            What Experts Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by <span className="gradient-text">everyone</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.author} className="testimonial-card glass-card p-8">
              <Quote className="w-10 h-10 text-google-blue/30 mb-6" />
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-google-blue to-google-green flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="awards-row flex flex-wrap justify-center gap-8">
          {awards.map((award) => (
            <div key={award.name} className="award-item text-center">
              <p className="font-semibold text-foreground">{award.name}</p>
              <p className="text-sm text-muted-foreground">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
