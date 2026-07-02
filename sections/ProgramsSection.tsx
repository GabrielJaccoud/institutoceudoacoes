import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const programs = [
  {
    image: '/assets/program-trbt.jpg',
    tag: 'PROGRAMA TRBT',
    title: 'Transformando Realidades, Building Together',
    description: 'Programa de construcao e reforma de espacos comunitarios. Unimos forcas para dar dignidade atraves da infraestrutura.',
  },
  {
    image: '/assets/program-agro.jpg',
    tag: 'PROGRAMA AGRO',
    title: 'Agricultura que Gera Vida',
    description: 'Incentivamos o desenvolvimento agricola sustentavel, fortalecendo familias e criando renda nas comunidades.',
  },
  {
    image: '/assets/program-eco.jpg',
    tag: 'ECOSSISTEMA A+',
    title: 'Conexoes que Multiplicam Impacto',
    description: 'Nossa rede de parceiros, voluntarios e apoiadores que amplificam o alcance de cada projeto em territorio nacional.',
  },
];

export const ProgramsSection: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="programas" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll mb-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            NOSSOS PROGRAMAS
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Tres pilares que sustentam nossa missao
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-[600px] leading-relaxed">
            Cada programa foi desenhado para criar impacto real e duradouro nas comunidades que atendemos.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {programs.map((program) => (
            <div
              key={program.tag}
              className="animate-on-scroll group bg-white rounded-2xl overflow-hidden border border-navy/5 
              transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <span className="font-sans font-medium text-xs uppercase tracking-[0.1em] text-gold">
                  {program.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-navy mt-3 mb-3 leading-snug">
                  {program.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  {program.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-navy group-hover:text-gold transition-colors duration-300">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
