import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Plans Section - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Cards com preços destacados
 * - Comparação clara de funcionalidades
 * - Card destacado para plano recomendado
 */

const plans = [
  {
    name: 'Plano Básico',
    price: 30,
    description: 'Ideal para quem busca o essencial',
    features: [
      'Preparação do corpo',
      '1 modelo de urna',
      'Montagem do velório',
      'Cortejos no município',
      'Translado até 300km',
      'Higienização',
    ],
    highlighted: false,
  },
  {
    name: 'Plano Completo',
    price: 45,
    description: 'Nossa opção mais popular',
    features: [
      'Tudo do Plano Básico',
      'Preparação completa do corpo',
      'Montagem do velório',
      'Cortejos até 400km',
      'Translado até 400km',
      'Higienização completa',
      'Necromaquiagem',
      'Café simples',
    ],
    highlighted: true,
  },
  {
    name: 'Plano Alto Padrão',
    price: 140,
    description: 'Máximo conforto e qualidade',
    features: [
      'Tudo do Plano Completo',
      'Preparação premium do corpo',
      'Montagem de velório premium',
      'Translado até 1.000km',
      'Mini buffet',
      'Tanatologia completa',
      'Serviços adicionais',
      'Atendimento VIP',
    ],
    highlighted: false,
  },
];

export default function PlansSection() {
  return (
    <section id="planos" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Encontre o Plano Ideal
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Escolha entre nossos planos de assistência familiar com preços acessíveis
            e funcionalidades completas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary shadow-xl'
                  : 'bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Recomendado
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      R$ {plan.price.toFixed(2)}
                    </span>
                    <span className="text-foreground/60">/mês</span>
                  </div>
                  <p className="text-xs text-foreground/50 mt-2">
                    Sem taxa de adesão
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border border-primary/30 text-primary hover:bg-primary/5'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Contratar Agora
                </Button>

                {/* Features */}
                <div className="space-y-4 border-t border-border/50 pt-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-xl bg-muted/50 border border-border/50 text-center">
          <p className="text-foreground/70">
            Todos os planos incluem suporte 24/7 e assistência em mais de 100 cidades na Bahia.
            <br />
            <span className="text-sm text-foreground/50 mt-2 block">
              Consulte nossos termos e condições para detalhes completos.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
