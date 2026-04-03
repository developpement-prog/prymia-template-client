import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, TrendingUp, ShieldCheck, Zap, Globe } from 'lucide-react';
// 🟢 On importe notre SectionLabel tout propre !
import SectionLabel from './SectionLabel';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="flex flex-col items-start p-8 transition-all duration-300 rounded-lg group glass-card glass-card-hover"
  >
    <div aria-hidden="true" className="flex items-center justify-center w-12 h-12 mb-6 transition-colors border rounded-full border-border text-neon group-hover:bg-neon/10">
      {icon}
    </div>
    <h3 className="mb-3 text-2xl tracking-tight uppercase font-display text-foreground">{title}</h3>
    <p className="text-sm leading-relaxed font-body text-muted-foreground">{description}</p>
  </motion.div>
);

const features = [
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Identification',
    description: 'Algorithmes de scouting avancés pour repérer les talents émergents dès le plus jeune âge.'
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Évaluation',
    description: 'Tests physiques et techniques rigoureux menés par des experts certifiés FIFA & NBA.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Développement',
    description: "Programmes d'entraînement personnalisés pour maximiser le potentiel de chaque athlète."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Accompagnement',
    description: "Gestion de carrière, conseils juridiques et financiers pour sécuriser l'avenir des talents."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Performance',
    description: 'Suivi biométrique en temps réel pour optimiser la préparation physique et mentale.'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Placement',
    description: 'Réseau mondial de clubs partenaires pour offrir les meilleures opportunités de carrière.'
  }
];

export default function ProdetekFeatures() {
  return (
    <section id="detection" className="relative px-6 overflow-hidden py-28 md:py-36 bg-darkbg">
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] text-foreground/[0.015] uppercase tracking-tight select-none pointer-events-none"
      >
        Detection
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <SectionLabel text="Notre Expertise" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-6xl leading-none tracking-tight uppercase font-display md:text-8xl text-foreground"
          >
            Le futur du <span className="text-outline">Scouting</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-base italic font-light text-muted-foreground"
          >
            Nous ne nous contentons pas de trouver des joueurs — nous bâtissons des carrières légendaires.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}