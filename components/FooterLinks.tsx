import React from 'react';

export const FooterLinks: React.FC = () => {
  const columns = [
    {
      title: 'DOARE',
      links: [
        'Quem Somos',
        'Carreiras',
        'Central de Ajuda ao Cliente',
        'Atendimento ao Doador',
        'Compliance & Seguranca',
        'Politica Anticorrupcao',
        'Termos de Uso',
        'Politicas de Privacidade',
      ],
    },
    {
      title: 'SOLUCOES',
      links: [
        'Plataforma de Doacoes',
        'Sistema de Embaixadores',
        'Landing Page de Doacoes',
        'Canvas de Captacao de Recursos',
        'Google Ad Grants',
      ],
    },
    {
      title: 'CONTEUDOS',
      links: [
        'Webinarios',
        'E-books',
        'Artigos',
        'Podcasts',
        'Curso Online',
      ],
    },
  ];

  return (
    <footer className="w-full bg-dark py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-coral text-sm font-semibold uppercase tracking-[0.08em] mb-5">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-[#AAAAAA] text-sm hover:text-white transition-colors duration-200 leading-relaxed"
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
        <div className="border-t border-[#444] pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Media Logos */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-[#666] text-xs font-medium tracking-wider">FOLHA DE S.PAULO</span>
              <span className="text-[#666] text-xs font-bold tracking-wider">O GLOBO</span>
              <span className="text-[#666] text-xs font-medium tracking-wider">RECORDTV</span>
              <span className="text-[#666] text-xs font-bold italic tracking-wider">VOGUE</span>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#666] text-xs">100% SEGURO CERTIFICADO SSL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#666] text-xs">Google Safe Browsing</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-[#666] text-xs mt-6">
            Todos os direitos reservados &copy; 2025 DOARE SERVICOS FINANCEIROS LTDA - ME / CNPJ: 28.229.013/0001-56
          </p>
        </div>
      </div>
    </footer>
  );
};
