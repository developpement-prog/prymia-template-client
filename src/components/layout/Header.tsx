import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import MenuSidebar from "./MenuSidebar"; // On importe ton beau menu optimisé

// --- Types ---
interface NavLink {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  logoText?: string;
  contactHref?: string;
  navLinks?: NavLink[];
}

const DEFAULT_NAV: NavLink[] = [
  { label: "Accueil",       href: "/" },
  { label: "Services",      href: "/services" },
  { label: "Réalisations",  href: "/realisations" },
  { label: "À propos",      href: "/a-propos" },
  { label: "Blog",          href: "/blog" },
  { label: "Contact",       href: "/contact" },
];

// --- Icône burger animée ---
const BurgerIcon: React.FC<{ open: boolean; isScrolled: boolean }> = ({ open, isScrolled }) => (
  <span className="relative flex flex-col items-center justify-center w-5 h-5" aria-hidden="true">
    <span
      /* 🟢 Utilisation de isScrolled ici pour changer la couleur dynamiquement */
      className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
        isScrolled || open ? 'bg-white' : 'bg-card-highlight'
      }`}
      style={{ width: "20px", top: open ? "50%" : "30%", transform: open ? "translateY(-50%) rotate(45deg)" : "none" }}
    />
    <span
      className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
        isScrolled || open ? 'bg-white' : 'bg-card-highlight'
      }`}
      style={{ width: "20px", opacity: open ? 0 : 1 }}
    />
    <span
      className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
        isScrolled || open ? 'bg-white' : 'bg-card-highlight'
      }`}
      style={{ width: "20px", bottom: open ? "50%" : "30%", transform: open ? "translateY(50%) rotate(-45deg)" : "none" }}
    />
  </span>
);

const SiteHeader: React.FC<SiteHeaderProps> = ({
  logoText = "Prymia",
  contactHref = "/contact",
  navLinks = DEFAULT_NAV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Détection du scroll pour changer la couleur du header
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-500 ease-in-out ${
          isScrolled ? "shadow-lg border-b border-white/10" : "bg-transparent"
        }`}
        style={{ 
          backgroundColor: isScrolled ? "#069668" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none"
        }}
      >
        <div className="container h-full px-4 mx-auto">
          <div className="flex items-center justify-between h-full">

            {/* --- LOGO --- */}
            <a href="/" className="flex items-center gap-3 group">
              <Logo 
                className={`h-11 w-auto transition-colors duration-500 ${
                  isScrolled ? "text-white" : "text-card-highlight"
                }`} 
              />
              <span className="text-2xl font-black tracking-tighter text-white uppercase font-display">
                {logoText}
              </span>
            </a>

            {/* --- NAV DESKTOP (cachée sur mobile) --- */}
            <nav className="items-center hidden gap-2 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors text-white/80 hover:text-white font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* --- ACTIONS --- */}
            <div className="flex items-center gap-4">
              <a
                href={contactHref}
                className={`hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all duration-300 border ${
                  isScrolled 
                    ? "bg-white text-[#069668] border-white" 
                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#069668]"
                }`}
              >
                Devis gratuit
              </a>

              {/* Le bouton Burger qui ouvre la Sidebar */}
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Ouvrir le menu"
              >
                <BurgerIcon open={menuOpen} isScrolled={isScrolled} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 🟢 LA MAGIE EST ICI : On appelle ton fichier MenuSidebar.tsx */}
      <MenuSidebar 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
    </>
  );
};

export default SiteHeader;