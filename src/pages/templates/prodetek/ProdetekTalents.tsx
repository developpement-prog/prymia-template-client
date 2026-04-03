import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import TalentCard from './TalentCard';

// --- 🟢 DONNÉES ---
const talents = [
  {
    image: 'https://media.base44.com/images/public/69cd59698361db9db3f5e096/3e2f2b369_generated_71b4fc74.png',
    name: 'Mamadou Diallo',
    position: 'Attaquant',
    age: 19,
    club: 'FC Paris Academy'
  },
  {
    image: 'https://media.base44.com/images/public/69cd59698361db9db3f5e096/61c87f16d_generated_f06bf056.png',
    name: 'Aminata Traoré',
    position: 'Sprinter',
    age: 17,
    club: 'AS Monaco Athletics'
  },
  {
    image: 'https://media.base44.com/images/public/69cd59698361db9db3f5e096/025bc347d_generated_3606ee85.png',
    name: 'Lucas Hernandez',
    position: 'Gardien',
    age: 21,
    club: 'Olympique Lyon'
  }
];

// --- 🟢 COMPOSANT PRINCIPAL ---
export default function ProdetekTalents() {
  return (
    <section id="talents" className="relative px-6 overflow-hidden py-28 md:py-36 bg-darkbg">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <SectionLabel text="Nos Pépites" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-6xl leading-none tracking-tight uppercase font-display md:text-8xl text-foreground"
          >
            Talents <span className="text-outline">Émergents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-base font-light text-muted-foreground"
          >
            Découvrez les futurs champions repérés par notre réseau de scouts internationaux.
          </motion.p>
        </div>

        {/* 🟢 CORRECTION : Scroll horizontal sur mobile, grille sur desktop */}
        <div className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {talents.map((talent, index) => (
            <div 
              key={talent.name} 
              // 🟢 Sur mobile : la carte prend ~80% de l'écran pour laisser dépasser la suivante. 
              // Sur desktop : elle s'adapte naturellement à la grille.
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0"
            >
              <TalentCard {...talent} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}