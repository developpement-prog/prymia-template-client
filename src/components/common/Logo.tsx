import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-auto h-10" }) => {
  return (
    <svg
      /* 🟢 J'ai agrandi la viewBox (80->90) pour donner de l'espace à gauche */
      viewBox="0 0 90 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        /* 🟢 J'ai décalé toutes les coordonnées X de +4 (ex: 14->18) 
           pour créer la marge de sécurité et éviter l'effet découpé */
        d="M 18,105 L 18,15 A 34 26 0 1 1 18,67 A 25 18 0 1 1 18,31 A 16 12 0 0 1 34,43"
        stroke="currentColor" // 🟢 Utilise la couleur du texte parent (géré dans Header)
        strokeWidth="6"      // Belle épaisseur pour un logo technique
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Logo;