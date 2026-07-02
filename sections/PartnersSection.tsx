import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const partners = [
  { name: 'A+ Engenharia', abbr: 'A+' },
  { name: 'HUB / Fintech', abbr: 'HUB' },
  { name: 'Parceiro Estrategico', abbr: 'PE' },
  { name: 'Investidor Social', abbr: 'IS' },
  { name: 'Corporacao Parceira', abbr: 'CP' },
];

export const PartnersSection: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="parceiros" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            NOSSOS PARCEIROS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Juntos construimos mais
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 stagger-children">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="animate-on-scroll group flex flex-col items-center gap-2 px-8 py-6 
              rounded-2xl border border-navy/5 bg-white transition-all duration-300 
              hover:border-gold/30 hover:shadow-card"
            >
              <span className="font-display text-3xl font-bold text-navy/30 group-hover:text-gold transition-colors duration-300">
                {partner.abbr}
              </span>
              <span className="font-sans text-xs font-medium text-text-muted uppercase tracking-wider group-hover:text-navy transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
