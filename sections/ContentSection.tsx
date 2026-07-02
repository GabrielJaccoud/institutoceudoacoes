import React from 'react';
import { ContentCard } from '../components/ContentCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ContentSection: React.FC = () => {
  const headlineRef = useScrollAnimation();

  const contents = [
    {
      image: '/assets/asset_4.jpg',
      category: 'WEBINAR',
      title: 'Captar recursos nao se sustenta so na importancia da sua causa.',
      description: 'Assista a Gravacao da Webinar. A Nova Captacao: como ONGs vao crescer com tecnologia em 2026',
    },
    {
      image: '/assets/asset_5.jpg',
      category: '— DO BASICO AO AVANCADO —',
      title: 'Como estruturar uma captacao de recursos Pessoa Fisica no digital',
      description: 'Bate-papo pratico e inspirador com Saulo Paganela da Doare e Derick Lemos da Metrica.Social',
    },
    {
      image: '/assets/asset_6.jpg',
      category: 'SUPER FUNCIONALIDADE',
      title: 'Pix Automatico da Doare',
      description: 'Tudo o que voce precisa saber sobre a solucao que esta revolucionando a captacao de recursos no Brasil.',
    },
  ];

  return (
    <section className="w-full bg-light-gray py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div ref={headlineRef} className="animate-on-scroll text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coral">
            Conteudos Gratuitos
          </h2>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {contents.map((content, index) => (
            <div 
              key={content.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ContentCard
                image={content.image}
                category={content.category}
                title={content.title}
                description={content.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
