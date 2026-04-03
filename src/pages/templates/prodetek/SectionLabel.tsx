import { motion } from 'framer-motion';

// 🟢 On ajoute le typage TypeScript
interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // 🟢 Ajout de justify-center pour qu'il soit bien centré peu importe où tu l'utilises
      className="flex items-center justify-center gap-4 mb-6"
    >
      <div className="w-12 h-px bg-neon" />
      <span className="text-neon font-body text-[10px] font-bold uppercase tracking-[0.5em]">
        {text}
      </span>
      <div className="w-12 h-px bg-neon" />
    </motion.div>
  );
}