import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badge }) => {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-background py-24 md:py-36 min-h-[45vh]">
      
      {/* ── BACKGROUND PATTERN SVG (Identique au HeroHome) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg
          /* Positionnement identique mais adapté à la hauteur réduite */
          className="absolute -bottom-1/4 -right-1/4 w-[120%] md:w-[80%] h-auto text-card-highlight animate-spin-slow"
          viewBox="0 0 400 400"
          fill="none"
          style={{ animationDuration: "60s" }}
        >
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50,200 Q125,50 200,200 T350,200" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <rect x="300" y="50" width="40" height="40" rx="8" fill="currentColor" opacity="0.3" />
          <circle cx="80" cy="320" r="20" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Badge avec la ligne d'accentuation du Hero */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-card-highlight" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-card-highlight font-body">
              {badge || "Prymia"}
            </span>
          </div>

          {/* Titre en Teko (font-display) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] font-display text-white mb-8"
          >
            {title}
          </motion.h1>

          {/* Sous-titre en Oswald (font-body) */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl text-lg leading-relaxed md:text-xl text-white/80 font-body"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Ligne de finition en bas pour marquer la transition avec le contenu */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-card-highlight/20 to-transparent" />
    </section>
  );
};

export default PageHero;