import React from 'react';
import { ChevronDown } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-light-gray py-2.5">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-end items-center gap-6">
        <a href="#" className="text-xs font-medium uppercase tracking-[0.08em] text-dark-gray hover:text-coral transition-colors duration-200">
          Quem Somos
        </a>
        <a href="#" className="text-xs font-medium uppercase tracking-[0.08em] text-dark-gray hover:text-coral transition-colors duration-200">
          Area do Cliente
        </a>
        <a href="#" className="text-xs font-medium uppercase tracking-[0.08em] text-dark-gray hover:text-coral transition-colors duration-200">
          Painel do Doador
        </a>
        <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.08em] text-dark-gray hover:text-coral transition-colors duration-200">
          Language
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
