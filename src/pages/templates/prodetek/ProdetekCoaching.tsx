import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Award } from 'lucide-react';
import SectionLabel from './SectionLabel'; 

// --- 🟢 TYPESCRIPT ---
interface SpaceCard {
  // 🟢 2. Remplace JSX.Element par ReactNode
  icon: ReactNode; 
  title: string;
  description: string;
  cta: string;
  variant: 'default' | 'neon';
}

// --- 🟢 DONNÉES ---
const spaces: SpaceCard[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Espace Joueur',
    description: 'Créez votre CV numérique complet. Renseignez votre club, vos statistiques et téléchargez vos meilleurs matchs. Devenez visible pour les recruteurs du monde entier.',
    cta: 'Créer mon profil',
    variant: 'default'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Espace Recruteur',
    description: 'Accédez à notre Scouting Engine. Filtrez les joueurs par âge, poste et statistiques. Trouvez les pépites qui correspondent à vos besoins.',
    cta: 'Accès Recruteur',
    variant: 'neon'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Espace Coach',
    description: 'Accédez à un réseau de préparateurs physiques certifiés. Optimisez vos performances et préparez vos athlètes pour les détections officielles.',
    cta: 'Trouver un Coach',
    variant: 'default'
  }
];

// --- 🟢 COMPOSANT PRINCIPAL ---
export default function ProdetekCoaching() {
  return (
    // 🟢 Ajout de bg-darkbg pour s'assurer que le fond reste raccord
    <section id="coaching" className="relative px-6 overflow-hidden border-t py-28 md:py-36 border-border bg-darkbg">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <SectionLabel text="Espaces Membres" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-6xl leading-none tracking-tight uppercase font-display md:text-8xl text-foreground"
          >
            Trois Profils, <span className="text-outline">Un Seul But</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {spaces.map((space, index) => (
            <motion.div
              key={space.title} // 🟢 React: On utilise le titre comme clé
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 lg:p-10 rounded-3xl flex flex-col transition-all duration-500 ${
                space.variant === 'neon'
                  ? 'glass-card border-neon/20 hover:border-neon/40'
                  : 'glass-card glass-card-hover'
              }`}
            >
              <div aria-hidden="true" className="flex items-center justify-center w-12 h-12 mb-8 transition-colors border border-border rounded-xl text-neon group-hover:border-neon/40">
                {space.icon}
              </div>

              <h3 className="mb-4 text-4xl tracking-tight uppercase transition-colors font-display text-foreground group-hover:text-neon">
                {space.title}
              </h3>

              <p className="flex-1 mb-8 text-sm font-light leading-relaxed text-muted-foreground">
                {space.description}
              </p>

              <button
                // 🟢 Remplacé 'text-background' par 'text-darkbg' pour la couleur d'écriture sur les boutons
                className={`w-full py-4 font-body text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-sm ${
                  space.variant === 'neon'
                    ? 'bg-neon text-darkbg hover:neon-glow-sm'
                    : 'border border-border text-foreground hover:bg-neon hover:text-darkbg hover:border-neon'
                }`}
              >
                {space.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}