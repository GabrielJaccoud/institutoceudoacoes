import { Navbar } from './components/Navbar';
import { FooterCTA } from './sections/FooterCTA';
import { FooterLinks } from './sections/FooterLinks';
import { HeroSection } from './sections/HeroSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ImpactSection } from './sections/ImpactSection';
import { DonateSection } from './sections/DonateSection';
import { HUBSection } from './sections/HUBSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PartnersSection } from './sections/PartnersSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <ImpactSection />
        <DonateSection />
        <HUBSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
