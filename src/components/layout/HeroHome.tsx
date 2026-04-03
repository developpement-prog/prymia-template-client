import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Play, Pause, ArrowRight } from "lucide-react";

// --- Types ---
interface Stat {
  id: number;
  text: string;
  value: string;
  color: "highlight" | "deep" | "accent";
}

interface HeroProps {
  subtitle?: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  stats?: Stat[];
}

const DEFAULT_STATS: Stat[] = [
  { id: 1, text: "Projets livrés avec succès", value: "150+", color: "highlight" },
  { id: 2, text: "Clients satisfaits",          value: "98%",  color: "deep" },
  { id: 3, text: "Années d'expertise",           value: "10+",  color: "accent" },
  { id: 4, text: "Score Google PageSpeed",       value: "95+",  color: "highlight" },
];

const COLOR_MAP: Record<Stat["color"], { bg: string; text: string; bar: string }> = {
    highlight: { bg: "bg-card-highlight", text: "text-text-dark", bar: "bg-text-dark" },
    deep:      { bg: "bg-card-deep",      text: "text-white",     bar: "bg-card-highlight" },
    accent:    { bg: "bg-card-glass",     text: "text-white",     bar: "bg-white" },
  };

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroHome: React.FC<HeroProps> = ({
  subtitle = "Agence Web",
  intro = "Nous concevons des sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
  ctaLabel = "Démarrer un projet",
  ctaHref = "/contact",
  stats = DEFAULT_STATS,
}) => {
  const [activeDot, setActiveDot] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const dotCount = Math.min(5, stats.length);

  const nextSlide = useCallback(() => {
    setActiveDot((prev) => (prev + 1) % dotCount);
  }, [dotCount]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isPlaying) interval = setInterval(nextSlide, 3000);
    return () => { if (interval) clearInterval(interval); };
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-background">
      
      {/* Background Pattern SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg
          className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] text-card-highlight animate-spin-slow"
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

      <div className="container relative z-10 flex flex-col justify-center flex-1 px-6 pt-32 pb-20 mx-auto md:pt-48">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full mb-16 md:mb-24"
        >
          <motion.div variants={fadeRightVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-card-highlight" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-card-highlight font-body">
              {subtitle}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="max-w-5xl mb-8 text-5xl text-white sm:text-7xl lg:text-8xl xl:text-9xl md:mb-12"
          >
            Créateur de<br />
            <span className="text-card-highlight">sites web</span><br />
            performants
          </motion.h1>

          <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:items-end"> 
            <motion.p
              variants={fadeUpVariants}
              className="max-w-xl text-lg md:text-xl text-white/80"
            >
              {intro}
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex-shrink-0">
              <a
                href={ctaHref}
                className="relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden text-sm font-bold tracking-widest uppercase transition-all duration-300 bg-white group md:px-12 md:py-6 text-background hover:pr-16 font-body"
              >
                <span className="relative z-10">{ctaLabel}</span>
                <ArrowRight className="absolute w-5 h-5 transition-all duration-300 -translate-x-4 -translate-y-1/2 opacity-0 right-6 top-1/2 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const styles = COLOR_MAP[stat.color];
            return (
              <motion.div
                key={stat.id}
                variants={fadeUpVariants}
                whileHover={{ y: -8 }}
                className={`h-40 md:h-52 p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-xl cursor-pointer ${styles.bg} ${activeDot === index ? 'ring-2 ring-white/20' : ''}`}
              >
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight font-body ${styles.text}`}>
                  {stat.text}
                </p>
                <div className="flex flex-col group">
                  <span className={`text-4xl md:text-5xl font-semibold tracking-tighter font-display ${styles.text}`}>
                    {stat.value}
                  </span>
                  <div className={`h-1 mt-3 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out ${styles.bar}`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🟢 RÉPARÉ : Carousel Controls (Utilise maintenant Play, Pause, activeDot, setIsPlaying) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-between mt-12"
        >
          <div className="flex gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveDot(i); setIsPlaying(false); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeDot ? "w-8 bg-card-highlight" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Aller à la stat ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors font-body"
          >
            {isPlaying ? (
              <><Pause size={14} /> Pause</>
            ) : (
              <><Play size={14} /> Play</>
            )}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute flex flex-col items-center gap-3 -translate-x-1/2 bottom-8 left-1/2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroHome;