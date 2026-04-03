import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  delay: number;
}

const SectionLabel = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center justify-center gap-4 mb-8"
  >
    <div className="w-12 h-px bg-neon" />
    <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-neon">
      {text}
    </span>
    <div className="w-12 h-px bg-neon" />
  </motion.div>
);

const StatCard = ({ icon, value, label, description, delay }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 border rounded-full border-border text-neon group-hover:border-neon group-hover:bg-neon/10">
      {icon}
    </div>
    <h3 className="mb-1 text-5xl tracking-tight font-display text-foreground">{value}</h3>
    <p className="mb-2 text-sm font-bold tracking-wider uppercase font-body text-foreground">{label}</p>
    <p className="text-muted-foreground text-sm font-light max-w-[200px]">{description}</p>
  </motion.div>
);

const HERO_BG = 'https://media.base44.com/images/public/69cd59698361db9db3f5e096/1eeeb0bb7_generated_cc0f06a3.png';

export default function ProdetekHero() {
  return (
    // 🟢 Changé : bg-darkbg
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden bg-darkbg">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Athletic hero background"
          className="object-cover w-full h-full scale-105 opacity-30"
        />
        {/* 🟢 Changé : from-darkbg, via-darkbg, to-darkbg */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkbg via-darkbg/70 to-darkbg/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon)/0.08)_0%,transparent_70%)]" />
      </div>

      <div className="absolute inset-0 grid-pattern z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 pt-16 mx-auto text-center">
        <SectionLabel text="Plateforme de Détection Elite" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-foreground leading-[0.85] mb-10 uppercase tracking-tight"
        >
          Révélez votre{' '}
          <span className="block text-outline md:inline">Potentiel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 text-lg font-light text-muted-foreground md:text-xl"
        >
          La plateforme de référence pour la détection et le scouting de talents sportifs de haut niveau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 mb-20 sm:flex-row"
        >
          {/* 🟢 Changé : text-darkbg */}
          <button className="group relative px-10 py-4 bg-neon text-darkbg font-body font-bold uppercase tracking-[0.15em] text-sm -skew-x-6 transition-all hover:scale-105 neon-glow-sm">
            <span className="flex items-center gap-3 skew-x-6">
              Commencer la détection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <button className="group flex items-center gap-3 text-foreground font-body font-semibold uppercase tracking-[0.15em] text-sm hover:text-neon transition-colors">
            <div className="flex items-center justify-center w-12 h-12 transition-colors border rounded-full border-border group-hover:border-neon">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <span>Voir le Showreel</span>
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid max-w-3xl grid-cols-1 gap-10 mx-auto md:grid-cols-3">
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value="85%"
            label="Taux de Réussite"
            description="de nos talents signent en pro"
            delay={0.8}
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            value="500+"
            label="Réseau Scouts"
            description="experts à travers le monde"
            delay={1.0}
          />
          <StatCard
            icon={<Target className="w-5 h-5" />}
            value="120+"
            label="Clubs Partenaires"
            description="dans les ligues majeures"
            delay={1.2}
          />
        </div>
      </div>

      {/* 🟢 Changé : from-darkbg */}
      <div className="absolute bottom-0 left-0 z-20 w-full h-32 bg-gradient-to-t from-darkbg to-transparent" />
    </section>
  );
}