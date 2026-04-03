import { motion } from 'framer-motion';
import { ChevronRight, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';

// --- 🟢 TYPESCRIPT ---
interface Club {
  name: string;
  short: string;
  color: string;
  detections: number;
  players: number;
}

interface Stat {
  value: string;
  label: string;
}

// --- 🟢 DONNÉES ---
const clubs: Club[] = [
  { name: 'Olympique de Marseille', short: 'OM', color: 'bg-blue-600', detections: 3, players: 42 },
  { name: 'Paris Saint-Germain', short: 'PSG', color: 'bg-indigo-900', detections: 2, players: 58 },
  { name: 'Olympique Lyonnais', short: 'OL', color: 'bg-red-600', detections: 4, players: 35 },
  { name: 'AS Monaco', short: 'ASM', color: 'bg-red-500', detections: 2, players: 29 },
  { name: 'LOSC Lille', short: 'LOSC', color: 'bg-red-700', detections: 3, players: 38 },
  { name: 'Stade Rennais', short: 'SRFC', color: 'bg-orange-600', detections: 2, players: 31 },
  { name: 'FC Nantes', short: 'FCN', color: 'bg-yellow-500', detections: 1, players: 22 },
  { name: 'RC Lens', short: 'RCL', color: 'bg-yellow-600', detections: 2, players: 27 },
];

const stats: Stat[] = [
  { value: '8+', label: 'Clubs partenaires' },
  { value: '23', label: 'Détections / an' },
  { value: '280+', label: 'Joueurs suivis' },
  { value: '94%', label: 'Taux de satisfaction' },
];

// --- 🟢 COMPOSANT PRINCIPAL ---
export default function ProdetekClubsShowcase() {
  return (
    // 🟢 Ajout de bg-darkbg pour s'assurer que le fond noir reste uniforme
    <section className="relative px-6 overflow-hidden border-t py-28 md:py-36 border-border bg-darkbg">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <div>
            <SectionLabel text="Clubs Partenaires" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl leading-none tracking-tight uppercase font-display md:text-8xl text-foreground"
            >
              Clubs <span className="text-outline">Formateurs</span>
            </motion.h2>
          </div>
          <Link
            to="/templates/prodetek" // 🟢 Lien de sécurité en attendant que la page existe
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 text-neon font-body text-xs font-bold uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Voir les détections
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name} // 🟢 Sécurité React
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex flex-col items-center gap-3 p-5 transition-all cursor-pointer glass-card rounded-2xl hover:border-neon/30 group"
            >
              <div className={`w-14 h-14 ${club.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-base tracking-tight text-white font-display">{club.short}</span>
              </div>
              <p className="text-xs font-semibold leading-tight text-center transition-colors text-foreground font-body group-hover:text-neon">
                {club.name}
              </p>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-body w-full justify-center">
                <span className="flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-neon" />
                  {club.detections} dates
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-2.5 h-2.5 text-neon" />
                  {club.players}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 p-6 mt-8 text-center glass-card rounded-2xl md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}> {/* 🟢 Sécurité React */}
              <div className="text-4xl font-display text-neon">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}