import React from 'react';
import { PillButton } from '../components/PillButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ESGSection: React.FC = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Illustration */}
          <div 
            ref={leftRef}
            className="animate-on-scroll flex justify-center"
          >
            <img 
              src="/assets/asset_3.png" 
              alt="Ilustracao ESG - compromisso social"
              className="max-w-full lg:max-w-[480px] w-full h-auto"
            />
          </div>

          {/* Right Column - Text */}
          <div 
            ref={rightRef}
            className="animate-on-scroll"
            style={{ animationDelay: '0.15s' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal leading-tight mb-6">
              Fortaleca o compromisso social da sua empresa com solucoes de ESG
            </h2>
            
            <p className="text-dark-gray text-base leading-relaxed max-w-[440px] mb-8">
              Com o <strong className="text-dark">Matching Corporativo</strong> sua 
              empresa aumenta o engajamento com causas sociais e gera beneficios para a 
              sociedade e tambem para o negocio.
            </p>

            <PillButton>Saiba Mais</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
};
