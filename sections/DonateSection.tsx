import React from 'react';
import { Smartphone, TrendingUp, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const donationOptions = [
  {
    icon: Smartphone,
    title: 'Doacao via PIX',
    description: 'Rapido, seguro e sem taxas. Doe qualquer valor instantaneamente.',
    button: 'DOAR COM PIX',
    btnClass: 'btn-navy',
    detail: 'Chave PIX: doacao@institutoceu.org',
  },
  {
    icon: TrendingUp,
    title: 'Doacao Mensal',
    description: 'Seja um construtor mensal. Apoio continuo para impacto duradouro.',
    button: 'QUERO DOAR MENSAL',
    btnClass: 'btn-gold',
    detail: 'A partir de R$ 30/mes',
  },
  {
    icon: Building2,
    title: 'Parceria Empresarial',
    description: 'Sua empresa pode fazer parte da transformacao social. Match de doacoes, voluntariado e mais.',
    button: 'SER PARCEIRO',
    btnClass: 'btn-navy',
    detail: 'Programa de Matching Corporativo',
  },
];

export const DonateSection: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="como-doar" className="w-full bg-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            COMO DOAR
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Cada contribuicao constroi um futuro melhor
          </h2>
        </div>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {donationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="animate-on-scroll bg-white rounded-2xl p-8 md:p-10 text-center border border-navy/5 
                shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-navy/5">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {option.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                  {option.description}
                </p>
                <button className={`${option.btnClass} w-full text-sm`}>
                  {option.button}
                </button>
                <p className="font-sans text-xs text-text-muted mt-4">
                  {option.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
