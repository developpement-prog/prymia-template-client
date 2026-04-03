import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronRight, Monitor, ShoppingCart, BarChart2, RefreshCw, ArrowRight, LucideProps } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🟢 1. Définition des types pour les props
interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configuration des items
const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Templates", path: "/templates" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Zones", path: "/agence-web/paris" },
  { label: "Tarifs", path: "/tarifs" },
  { label: "Blog", path: "/blog" },
];

const serviceItems = [
  { label: "Site Vitrine", path: "/services/vitrine", icon: <Monitor />, color: "text-card-highlight", bg: "bg-card-highlight/10" },
  { label: "E-commerce", path: "/services/ecommerce", icon: <ShoppingCart />, color: "text-white", bg: "bg-white/10" },
  { label: "SEO", path: "/services/seo", icon: <BarChart2 />, color: "text-card-highlight", bg: "bg-card-highlight/10" },
  { label: "Refonte", path: "/services/refonte", icon: <RefreshCw />, color: "text-white", bg: "bg-white/10" },
];

export default function MenuSidebar({ isOpen, onClose }: MenuSidebarProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-[#069668] shadow-2xl flex flex-col overflow-hidden text-white"
          >
            
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
              <svg 
                className="absolute -bottom-1/4 -right-1/4 w-[150%] h-auto text-card-highlight animate-spin-slow" 
                viewBox="0 0 400 400" 
                fill="none"
                style={{ animationDuration: '60s' }}
              >
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50,200 Q125,50 200,200 T350,200" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <rect x="300" y="50" width="40" height="40" rx="8" fill="currentColor" opacity="0.3" />
                <circle cx="80" cy="320" r="20" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-card-highlight" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-card-highlight font-body">Menu</span>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/5 hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </header>

              {/* Scrollable Area */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-8 py-8">
                  <nav>
                    <ul className="space-y-1">
                      {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={onClose}
                              className={`group flex items-center justify-between py-4 border-b border-white/5 transition-all ${
                                isActive ? "text-card-highlight" : "text-white/80 hover:text-white"
                              }`}
                            >
                              <span className="text-3xl font-black tracking-tighter uppercase font-display">
                                {item.label}
                              </span>
                              <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                <div className="px-8 pb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-6 h-px bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-body">Nos Services</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.label}
                        to={s.path}
                        onClick={onClose}
                        className="p-5 transition-all border rounded-sm group bg-white/5 hover:bg-white/10 border-white/5"
                      >
                        <div className={`w-10 h-10 mb-4 rounded-sm ${s.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                          {/* 🟢 2. Correction du cloneElement avec le bon type LucideProps */}
                          {React.cloneElement(s.icon as React.ReactElement<LucideProps>, { size: 20, className: s.color })}
                        </div>
                        <p className="text-sm font-bold tracking-tight uppercase transition-colors font-body group-hover:text-card-highlight">
                          {s.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="p-8 border-t bg-black/10 backdrop-blur-md border-white/10">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white text-[#069668] font-black uppercase tracking-tighter text-lg hover:bg-card-highlight transition-colors shadow-xl"
                >
                  <span>Démarrer un projet</span>
                  <ArrowRight size={20} />
                </Link>
              </footer>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}