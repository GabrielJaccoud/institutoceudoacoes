import React from 'react';
import { Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FooterCTA: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const scrollToDonate = () => {
    document.querySelector('#como-doar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="animate-on-scroll w-full py-20 md:py-28"
      style={{
        background: 'linear-gradient(135deg, #0A2463 0%, #051838 100%)'
      }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Pronto para construir um Brasil melhor?
        </h2>
        <p className="font-sans text-lg text-white/80 leading-relaxed max-w-[600px] mx-auto mb-10">
          Cada doacao, por menor que seja, e um tijolo na transformacao social. 
          Faca parte dessa construcao.
        </p>
        <button onClick={scrollToDonate} className="btn-gold text-lg px-12 py-5">
          <Heart className="w-5 h-5" />
          QUERO DOAR AGORA
        </button>
      </div>
    </section>
  );
};
