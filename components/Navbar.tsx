import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Programas', href: '#programas' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Como Doar', href: '#como-doar' },
  { label: 'Parceiros', href: '#parceiros' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-xl shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
            <img
              src="/assets/logo-aceu.png"
              alt="A+Ceu - Instituto Ceu"
              className="h-12 md:h-14 w-auto"
              style={{ 
                filter: scrolled ? 'none' : 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                maxHeight: '56px'
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="link-gold font-sans font-medium text-base text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#como-doar')}
              className="btn-gold text-sm"
            >
              <Heart className="w-4 h-4" />
              QUERO DOAR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center gap-8 lg:hidden">
          <button
            className="absolute top-6 right-6 p-2 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-3xl text-white hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#como-doar')}
            className="btn-gold mt-4"
          >
            <Heart className="w-5 h-5" />
            QUERO DOAR
          </button>
        </div>
      )}
    </>
  );
};
