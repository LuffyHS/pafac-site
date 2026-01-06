import { Users, MapPin, Award } from 'lucide-react';

/**
 * About Section - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Layout assimétrico com imagem e texto
 * - Valores da empresa destacados
 * - Tipografia hierárquica clara
 */

export default function AboutSection() {
  const values = [
    {
      icon: Users,
      title: 'Família em Primeiro Lugar',
      description: 'Entendemos que cada família é única. Oferecemos suporte personalizado.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Mais de 20 anos de experiência e confiança de 50 mil famílias.',
    },
    {
      icon: MapPin,
      title: 'Presença Regional',
      description: 'Atendimento em mais de 100 cidades na Bahia com excelência.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl blur-3xl" />
            <img
              src="/images/community-support.jpg"
              alt="Comunidade Pafac"
              className="relative rounded-2xl shadow-lg object-cover w-full h-96"
            />
          </div>

          {/* Texto */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Da Nossa Família para a Sua
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Somos uma empresa de assistência familiar atuante há mais de 20 anos na Bahia.
                Nascemos com a missão de oferecer segurança, tranquilidade e economia para
                momentos que importam.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Crescemos com a confiança de mais de 50 mil famílias e hoje contamos com filiais
                em mais de 100 cidades. Cuidamos com ética, responsabilidade e o coração,
                sempre honrando a memória de quem se foi.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6 pt-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-foreground/60 text-sm mt-1">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
