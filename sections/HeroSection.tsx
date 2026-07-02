import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPrograms = () => {
    document.querySelector('#programas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDonate = () => {
    document.querySelector('#como-doar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
      />
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,36,99,0.92) 0%, rgba(10,36,99,0.75) 50%, rgba(10,36,99,0.5) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Tagline */}
        <p 
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards
          font-sans font-medium text-xs md:text-sm uppercase tracking-[0.2em] text-gold mb-6"
        >
          INSTITUTO CEU — A+ ENGENHARIA
        </p>

        {/* Headline */}
        <h1 
          className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400 fill-mode-forwards
          font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
        >
          Transformamos <span className="text-gold">vidas</span> atraves da engenharia social
        </h1>

        {/* Subheadline */}
        <p 
          className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-600 fill-mode-forwards
          font-sans text-lg md:text-xl text-white/85 max-w-[600px] mx-auto mt-6 leading-relaxed"
        >
          Doe de qualquer lugar do mundo. Sua contribuição, independente do valor ou origem, transforma comunidades brasileiras através de projetos de engenharia social e sustentabilidade.
        </p>

        {/* CTAs */}
        <div 
          className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-800 fill-mode-forwards
          flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button onClick={scrollToDonate} className="btn-gold">
            <Heart className="w-5 h-5" />
            FAZER UMA DOACAO
          </button>
          <button onClick={scrollToPrograms} className="btn-ghost-white">
            CONHECER PROGRAMAS
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="animate-in fade-in duration-700 delay-1000 fill-mode-forwards
        absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs tracking-wider">Conheca nosso trabalho</span>
        <ChevronDown className="w-5 h-5 animate-bounce-down" />
      </div>
    </section>
  );
};
