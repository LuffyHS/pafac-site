import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PlansSection from '@/components/PlansSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Pafac
 * Design: Minimalismo Corporativo Elegante
 * 
 * Seções:
 * - Header com navegação
 * - Hero com imagem de família
 * - Serviços oferecidos
 * - Planos de assistência
 * - Sobre a empresa
 * - Footer com contato
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PlansSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
