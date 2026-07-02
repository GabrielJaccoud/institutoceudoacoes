import React from 'react';
import { Monitor, HeartHandshake, Megaphone, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { PillButton } from '../components/PillButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const SolutionsSection: React.FC = () => {
  const headlineRef = useScrollAnimation();

  const services = [
    {
      icon: Monitor,
      title: 'Plataforma de Doacao',
      description: 'A melhor opcao para gestao de doacoes da sua ONG.',
    },
    {
      icon: HeartHandshake,
      title: 'Sistema de Embaixadores',
      description: 'Campanhas em rede: mais alcance e mais resultados!',
    },
    {
      icon: Megaphone,
      title: 'Landing Page de Doacao',
      description: 'A captacao de recursos comeca na sua pagina.',
    },
    {
      icon: Lightbulb,
      title: 'Canvas de Captacao de Recursos',
      description: 'Construimos com voce a sua estrategia de captacao.',
    },
    {
      icon: TrendingUp,
      title: 'Gestao de Google ADS',
      description: 'Mais visibilidade e recursos com beneficio de US$10mil mensais em publicidade',
    },
    {
      icon: Users,
      title: 'Solucoes de ESG',
      description: 'Campanhas internas? A Doare tem a solucao!',
    },
  ];

  return (
    <section className="w-full bg-white wave-pattern py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div ref={headlineRef} className="animate-on-scroll text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coral mb-4">
            Conheca as nossas solucoes
          </h2>
          <p className="text-dark-gray text-base max-w-[600px] mx-auto">
            A Doare oferece <strong className="text-dark">tecnologia de doacoes online</strong> para 
            aumentar captacao de recursos atraves de inovacao social
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <PillButton>Converse com Nossos Especialistas</PillButton>
        </div>
      </div>
    </section>
  );
};
