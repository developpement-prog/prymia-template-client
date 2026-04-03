import { motion } from 'framer-motion';

// 🟢 On ajoute le typage TypeScript
interface TalentCardProps {
  image: string;
  name: string;
  position: string;
  age: number;
  club: string;
  index?: number;
}

export default function TalentCard({ image, name, position, age, club, index = 0 }: TalentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden cursor-pointer group rounded-2xl"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`Portrait de ${name}, ${position} au ${club}`} // 🟢 SEO & Accessibilité
          loading="lazy" // 🟢 Performance : Chargement différé
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay - 🟢 Remplacé 'background' par 'darkbg' pour éviter le conflit de couleur ! */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkbg via-darkbg/30 to-transparent" />

      {/* Neon line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-neon group-hover:w-full transition-all duration-500 z-10" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neon font-body">
            {position}
          </span>
          <span className="text-muted-foreground text-[10px]">•</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-body">
            {age} ans
          </span>
        </div>
        <h3 className="text-3xl tracking-tight uppercase transition-colors font-display text-foreground group-hover:text-neon">
          {name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground font-body">{club}</p>
      </div>
    </motion.div>
  );
}