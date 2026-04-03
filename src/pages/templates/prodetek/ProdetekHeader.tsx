import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 🟢 J'ai ajouté ArrowLeft ici
import { Search, User, Bell, X, ArrowLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Détections', href: '/detections', isRoute: true },
  { name: 'Talents', href: '#talents' },
  { name: 'Préparateurs', href: '/preparateurs', isRoute: true },
  { name: 'Scouting', href: '#scouting' },
  { name: 'Contact', href: '#contact' },
];

export default function ProdetekHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl py-3 border-b border-neon/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        
        {/* 🟢 BLOC GAUCHE : Bouton Retour + Logo */}
        <div className="flex items-center gap-6">
          {/* Bouton Retour (exclusif au mode démo Prymia) */}
          <Link 
            to="/templates" 
            className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors font-body text-xs font-bold uppercase tracking-[0.2em] border border-border px-3 py-1.5 rounded-full hover:border-neon/50 bg-background/50 backdrop-blur-md"
          >
            <ArrowLeft size={14} /> Retour
          </Link>

          {/* Logo Prodetek */}
          <Link to="/templates/prodetek" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center transition-transform duration-300 -skew-x-12 w-9 h-9 bg-neon group-hover:rotate-3">
              <span className="text-2xl skew-x-12 text-background font-display">P</span>
            </div>
            <span className="hidden text-2xl tracking-tight uppercase font-display text-foreground sm:block">
              Pro<span className="text-neon">detek</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="font-body text-xs font-semibold text-muted-foreground hover:text-neon uppercase tracking-[0.2em] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs font-semibold text-muted-foreground hover:text-neon uppercase tracking-[0.2em] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
              </a>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden transition-colors sm:block text-muted-foreground hover:text-neon">
            <Search className="w-4 h-4" />
          </button>
          <button className="relative transition-colors text-muted-foreground hover:text-neon">
            <Bell className="w-4 h-4" />
            <span className="absolute w-2 h-2 rounded-full -top-1 -right-1 bg-neon" />
          </button>
          <div className="hidden w-px h-5 bg-border sm:block" />
          <Link
            to="/mon-compte"
            className="hidden sm:flex items-center gap-2 text-foreground font-body text-xs font-bold uppercase tracking-[0.2em] hover:text-neon transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Profil</span>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-neon transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background lg:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute flex items-center justify-center w-10 h-10 transition-colors border rounded-full top-6 right-6 border-border text-muted-foreground hover:text-foreground hover:border-neon"
            >
              <X className="w-5 h-5" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-5xl tracking-tight uppercase transition-colors font-display text-foreground hover:text-neon"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-5xl tracking-tight uppercase transition-colors font-display text-foreground hover:text-neon"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Profile + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center w-full gap-4 px-8 mt-12"
            >
              <Link
                to="/mon-compte"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 border border-border text-foreground font-body font-bold uppercase tracking-[0.2em] text-sm hover:border-neon hover:text-neon transition-all"
              >
                <User className="w-4 h-4" />
                <span>Mon Profil</span>
              </Link>
              <button className="w-full px-10 py-4 bg-neon text-background font-body font-bold uppercase tracking-[0.2em] text-sm -skew-x-6">
                <span className="block skew-x-6">Rejoindre</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}