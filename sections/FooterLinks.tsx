import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'PROGRAMAS',
    links: ['TRBT', 'Agro', 'Ecossistema A+', 'Transparencia'],
  },
  {
    title: 'INSTITUCIONAL',
    links: ['Quem Somos', 'Nossa Historia', 'Equipe', 'Relatorios Anuais'],
  },
  {
    title: 'CONTATO',
    links: ['contato@institutoceu.org', 'Fale Conosco', 'Seja um Parceiro', 'Trabalhe Conosco'],
  },
];

export const FooterLinks: React.FC = () => {
  return (
    <footer className="w-full bg-navy-dark py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Logo */}
          <div>
            <img
              src="/assets/logo-aceu.png"
              alt="A+Ceu - Instituto Ceu"
              className="h-14 w-auto mb-5"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
              Construimos mais que estruturas.<br />
              <span className="text-gold">Transformamos vidas.</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columns 2-4 */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.1em] text-gold mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 link-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; 2025 Instituto Ceu — A+ Engenharia. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-white/40">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
};
