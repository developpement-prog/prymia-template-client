import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react'; // 🟢 J'ai retiré 'Users' qui n'était pas utilisé !
import { Link } from 'react-router-dom';

// --- 🟢 TYPESCRIPT ---
interface DetectionData {
  club: string;
  clubColor: string;
  title: string;
  location: string;
  date: string;
  spots: number;
  positions: string;
}

// --- 🟢 DONNÉES ---
const recent: DetectionData[] = [
  {
    club: 'PSG',
    clubColor: 'bg-indigo-900',
    title: 'Camp des Loges',
    location: 'Saint-Germain-en-Laye',
    date: '22 Avr 2026',
    spots: 2,
    positions: 'Gardiens · Défenseurs',
  },
  {
    club: 'OM',
    clubColor: 'bg-blue-600',
    title: 'Détection Officielle',
    location: 'Marseille',
    date: '15 Avr 2026',
    spots: 4,
    positions: 'Attaquants · Milieux',
  },
  {
    club: 'OL',
    clubColor: 'bg-red-600',
    title: 'Centre de Formation',
    location: 'Meyzieu',
    date: '29 Avr 2026',
    spots: 11,
    positions: 'Tous postes',
  },
  {
    club: 'ASM',
    clubColor: 'bg-red-500',
    title: 'La Turbie · Monaco',
    location: 'La Turbie',
    date: '6 Mai 2026',
    spots: 7,
    positions: 'Milieux · Attaquants',
  },
  {
    club: 'LOSC',
    clubColor: 'bg-red-700',
    title: 'Domaine de Luchin',
    location: 'Camphin-en-Pévèle',
    date: '13 Mai 2026',
    spots: 9,
    positions: 'Défenseurs · Milieux',
  },
];

// --- 🟢 COMPOSANT PRINCIPAL ---
export default function ProdetekRecentDetections() {
  return (
    // 🟢 Remplacé bg-background par bg-darkbg pour la cohérence du thème
    <section className="relative px-6 py-10 overflow-hidden border-b border-border bg-darkbg">
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neon font-body">
              Détections en cours
            </span>
          </div>
          <Link
            to="/templates/prodetek" // 🟢 Lien de sécurité provisoire
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 text-muted-foreground hover:text-neon font-body text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
          >
            Voir tout
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-3 pb-2 overflow-x-auto scrollbar-none md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {recent.map((d, i) => (
            <motion.div
              key={d.title} // 🟢 Sécurité React : Utilisation du titre comme clé unique
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }} // 🟢 Le "i" est bien utilisé ici !
              className="min-w-[220px] md:min-w-0 glass-card rounded-2xl p-4 flex flex-col gap-3 hover:border-neon/40 transition-all cursor-pointer group flex-shrink-0"
            >
              {/* Club badge */}
              <div className="flex items-center justify-between">
                <div className={`${d.clubColor} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs text-white font-display">{d.club}</span>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider font-body px-2 py-0.5 rounded-full border ${
                  d.spots <= 4
                    ? 'text-red-400 border-red-400/30 bg-red-400/10'
                    : 'text-neon border-neon/30 bg-neon/10'
                }`}>
                  {d.spots} places
                </span>
              </div>

              {/* Title */}
              <div>
                <p className="text-sm font-bold leading-tight transition-colors text-foreground font-body group-hover:text-neon">
                  {d.title}
                </p>
                <p className="text-muted-foreground text-[10px] font-body mt-0.5">{d.positions}</p>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-1 mt-auto">
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-body">
                  <Calendar className="flex-shrink-0 w-3 h-3 text-neon" />
                  {d.date}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-body">
                  <MapPin className="flex-shrink-0 w-3 h-3 text-neon" />
                  {d.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}