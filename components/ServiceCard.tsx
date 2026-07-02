import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-1 group">
      <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
        <Icon 
          className="w-12 h-12 text-coral stroke-[1.5] transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-3">{title}</h3>
      <p className="text-sm text-dark-gray leading-relaxed">{description}</p>
    </div>
  );
};
