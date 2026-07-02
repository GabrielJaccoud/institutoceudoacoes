import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { PillButton } from './PillButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FooterCTA: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-purple py-12 animate-on-scroll"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <path 
              d="M16 2L28 9.5V22.5L16 30L4 22.5V9.5L16 2Z" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              fill="none"
            />
            <circle cx="16" cy="17" r="4" fill="currentColor" />
          </svg>
          <span className="text-2xl font-bold text-white tracking-tight">doare</span>
        </div>

        {/* Tagline */}
        <p className="text-white text-center md:text-left max-w-md text-sm md:text-base">
          Fortalecendo a cultura de doacoes atraves de estrategia, design, tecnologia e comunicacao,{' '}
          <strong>desde 2011.</strong>
        </p>

        {/* CTA */}
        <PillButton variant="white-outline">Agendar Demonstracao</PillButton>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:opacity-70 transition-opacity">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:opacity-70 transition-opacity">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:opacity-70 transition-opacity">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:opacity-70 transition-opacity">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
