import React from 'react';

interface ContentCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  ctaText?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ 
  image, 
  category, 
  title, 
  description,
  ctaText = 'Acessar Conteudo'
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-card-hover group cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-[0.08em] text-coral mb-3 block">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-dark mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-dark-gray leading-relaxed mb-4">{description}</p>
        <span className="text-sm font-semibold text-dark hover:underline transition-all duration-200">
          {ctaText}
        </span>
      </div>
    </div>
  );
};
