import React from 'react';
import { Shield, CreditCard, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { icon: Shield, text: 'Transacoes 100% seguras e criptografadas' },
  { icon: CreditCard, text: 'Multiplas formas de pagamento' },
  { icon: TrendingUp, text: 'Rastreamento transparente do impacto' },
  { icon: Users, text: 'Gestao eficiente de doadores' },
];

export const HUBSection: React.FC = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div ref={leftRef} className="animate-on-scroll">
            <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
              PARCERIA ESTRATEGICA
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
              Tecnologia a servico da transformacao social
            </h2>
            <p className="font-sans text-lg text-text-secondary leading-relaxed mb-8">
              Contamos com o apoio de um HUB/Fintech que nos permite oferecer doacoes via PIX 
              instantaneas, gestao transparente de recursos e total seguranca nas transacoes. 
              Sua doacao chega onde precisa, sem burocracia.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-navy/5">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-sans text-sm text-text-primary">{feature.text}</p>
                  </div>
                );
              })}
            </div>

            <button className="btn-ghost text-sm">
              CONHECER A PARCERIA
            </button>
          </div>

          {/* Right Column - Visual */}
          <div ref={rightRef} className="animate-on-scroll flex items-center justify-center" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden">
              {/* Abstract gradient visual */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0A2463 0%, #1B3A6B 40%, #2A5298 70%, #C9A84C 100%)'
                }}
              />
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <CheckCircle className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  HUB / Fintech
                </h3>
                <p className="font-sans text-sm text-white/80 max-w-[280px]">
                  Parceria estrategica que garante seguranca, transparencia e eficiencia em cada doacao
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
