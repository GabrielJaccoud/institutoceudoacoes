import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: 'O Instituto Ceu nao construiu apenas uma casa para minha familia. Construiu dignidade, esperanca e um futuro melhor para meus filhos.',
    name: 'Maria Silva',
    role: 'Beneficiaria — Programa TRBT',
    image: '/assets/testimonial-1.jpg',
  },
  {
    quote: 'Atraves do programa Agro, minha familia conseguiu ter nossa propria renda. Hoje cultivamos nao so alimentos, mas sonhos.',
    name: 'Joao Pereira',
    role: 'Beneficiario — Programa Agro',
    image: '/assets/testimonial-2.jpg',
  },
  {
    quote: 'Ser voluntario no Ecossistema A+ mudou minha perspectiva. Ver o impacto real das doacoes nas comunidades e transformador.',
    name: 'Ana Costa',
    role: 'Voluntaria — Ecossistema A+',
    image: '/assets/testimonial-3.jpg',
  },
];

export const TestimonialsSection: React.FC = () => {
  const headerRef = useScrollAnimation();
  const {
    currentIndex,
    goTo,
    goNext,
    goPrev,
    setIsPaused,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel({ totalSlides: testimonials.length });

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-cream py-20 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            DEPOIMENTOS
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Quem viveu, conta
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 w-11 h-11 rounded-full border-2 border-navy/20 
            flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 w-11 h-11 rounded-full border-2 border-navy/20 
            flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card mx-8 md:mx-16">
            <div className="flex flex-col items-center text-center">
              {/* Quote Mark */}
              <span className="quote-mark mb-2">&ldquo;</span>

              {/* Quote */}
              <blockquote className="font-display italic text-lg md:text-xl text-navy leading-relaxed max-w-[600px] mb-6 -mt-4">
                {current.quote}
              </blockquote>

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-gold mb-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author */}
              <cite className="not-italic">
                <span className="font-sans font-semibold text-base text-navy block">{current.name}</span>
                <span className="font-sans text-sm text-text-secondary">{current.role}</span>
              </cite>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold scale-110'
                    : 'bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
