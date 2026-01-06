import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

/**
 * Footer Component - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Layout com informações de contato
 * - Links úteis organizados
 * - Redes sociais
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Pafac</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Assistência familiar completa com mais de 20 anos de confiança e segurança.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#planos" className="text-background/70 hover:text-accent transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Informações</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-background/70">(74) 3641-1923</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-background/70">contato@pafac.com.br</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-background/70">Irecê, Bahia</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {currentYear} Pafac. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
