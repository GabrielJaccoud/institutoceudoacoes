import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: 2500, suffix: '+', label: 'VIDAS TRANSFORMADAS', description: 'Pessoas diretamente impactadas pelos nossos programas' },
  { value: 15, suffix: '+', label: 'COMUNIDADES ATENDIDAS', description: 'Municipios e localidades beneficiadas' },
  { value: 5, prefix: 'R$', suffix: 'M+', label: 'EM DOACOES ARRECADADAS', description: 'Investidos diretamente em projetos sociais' },
  { value: 98, suffix: '%', label: 'DOS RECURSOS APLICADOS', description: 'Transparencia total na gestao das doacoes' },
];

const AnimatedStat: React.FC<{
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
}> = ({ value, prefix, suffix, label, description, inView }) => {
  return (
    <div className="text-center px-4 md:px-6">
      <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-3">
        {prefix && <span>{prefix}</span>}
        {inView ? (
          <CountUp end={value} duration={2.5} separator="." />
        ) : (
          <span>0</span>
        )}
        <span>{suffix}</span>
      </div>
      <p className="font-sans font-medium text-xs uppercase tracking-[0.08em] text-white/70 mb-2">
        {label}
      </p>
      <p className="font-sans text-sm text-white/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const ImpactSection: React.FC = () => {
  const headerRef = useScrollAnimation();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="impacto" className="w-full bg-navy py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16 md:mb-20">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            NOSSO IMPACTO
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Numeros que contam historias
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && (
                <div className="hidden lg:block w-px h-24 bg-white/15 self-center mx-auto" />
              )}
              <AnimatedStat
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                inView={inView}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
