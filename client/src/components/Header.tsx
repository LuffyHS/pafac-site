import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Pafac
 * Design: Minimalismo Corporativo Elegante
 * - Navegação limpa com espaço negativo
 * - Logo e menu responsivo
 * - Hover effects suaves
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Planos', href: '#planos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Pafac</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 transition-all duration-200"
              onClick={() => {
                window.open('https://area.pafac.com.br', '_blank');
              }}
            >
              Área do Cliente
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
              onClick={() => {
                const plansSection = document.getElementById('planos');
                plansSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contratar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/5"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://area.pafac.com.br', '_blank');
                }}
              >
                Área do Cliente
              </Button>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  setIsMenuOpen(false);
                  const plansSection = document.getElementById('planos');
                  plansSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contratar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
