import { Heart, Users, Shield, Leaf } from 'lucide-react';

/**
 * Services Section - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Cards com ícones minimalistas
 * - Hover effects com elevação sutil
 * - Paleta de cores: azul profundo + verde menta
 */

const services = [
  {
    icon: Heart,
    title: 'Cerimonial Completo',
    description: 'Organização e montagem de cerimônias com respeito à tradição e cultura religiosa.',
    color: 'text-primary',
  },
  {
    icon: Leaf,
    title: 'Ornamentação',
    description: 'Cuidamos da ornamentação com flores, coroas, velas e livros de registro.',
    color: 'text-accent',
  },
  {
    icon: Shield,
    title: 'Translado até 1.000km',
    description: 'Realizamos transporte para cerimônias em cidades distantes com segurança.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Apoio à Família',
    description: 'Suporte emocional e burocrático em momentos difíceis. Você não está sozinho.',
    color: 'text-accent',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nosso Apoio a Você
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Oferecemos uma assistência familiar completa, com todos os serviços que você precisa
            em um único lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
