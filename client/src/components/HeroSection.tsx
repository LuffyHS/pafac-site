import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Layout assimétrico com imagem e texto
 * - Tipografia hierárquica clara
 * - CTA com hover effect elegante
 */

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cuidamos de você e da sua{' '}
                <span className="text-primary">família</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg">
                Há mais de 20 anos oferecemos assistência familiar completa, com tranquilidade, 
                segurança e economia para momentos que importam.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300"
                onClick={() => {
                  const plansSection = document.getElementById('planos');
                  plansSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Planos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <p className="text-sm text-foreground/60">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-sm text-foreground/60">Cidades Atendidas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <p className="text-sm text-foreground/60">Famílias Atendidas</p>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl" />
            <img
              src="/images/hero-family-care.jpg"
              alt="Família unida"
              className="relative rounded-2xl shadow-lg object-cover w-full h-96 md:h-full"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
