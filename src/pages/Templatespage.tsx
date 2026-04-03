import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const demos = [
  {
    slug: 'prodetek',
    name: 'Prodetek',
    description: 'Template industriel haute performance optimisé pour la conversion et le SEO technique.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
    tags: ['Industrie', 'BTP', 'Performance'],
    available: true
  },
  {
    slug: 'gite',
    name: 'Gîte / Hôtel',
    description: 'Template premium pour hébergements de luxe et chambres d\'hôtes.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    tags: ['Hôtellerie', 'Luxe'],
    available: false
  },
  // Tu peux ajouter les autres ici...
];

export default function TemplatesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-card-deep">
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-card-highlight" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-card-highlight font-body">Showcase</span>
            <div className="w-12 h-px bg-card-highlight" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-white"
          >
            Nos Templates <span className="text-card-highlight">Premium</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-white/60"
          >
            Découvrez nos modèles de sites web ultra-performants, conçus avec React et Tailwind pour une vitesse absolue.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col ${!demo.available && 'opacity-60'}`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={demo.image} 
                    alt={demo.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {!demo.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                      <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                        Bientôt disponible
                      </span>
                    </div>
                  )}
                  {demo.available && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-card-deep/40 group-hover:opacity-100">
                      <Link 
                        to={`/templates/${demo.slug}`}
                        className="flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-sm bg-card-highlight text-text-dark"
                      >
                        Voir la démo <ExternalLink size={14} />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {demo.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-card-highlight/10 text-card-highlight rounded text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-3 text-2xl text-white transition-colors group-hover:text-card-highlight">
                    {demo.name}
                  </h3>
                  <p className="flex-1 mb-6 text-sm text-white/60">
                    {demo.description}
                  </p>
                  
                  {demo.available ? (
                    <Link 
                      to={`/templates/${demo.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-card-highlight group/link"
                    >
                      Explorer <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-sm italic text-white/30">Coming soon...</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}