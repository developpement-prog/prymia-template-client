/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-main) / <alpha-value>)",
        card: {
          highlight: "rgb(var(--bg-card-highlight) / <alpha-value>)", 
          deep: "rgb(var(--bg-card-deep) / <alpha-value>)",           
          glass: "rgba(255, 255, 255, 0.1)",                          
        },
        accent: {
          DEFAULT: "rgb(var(--cta-main) / <alpha-value>)",            
          hover: "rgb(var(--cta-hover) / <alpha-value>)",
        },
        text: {
          main: "rgb(var(--text-main) / <alpha-value>)",
          dark: "rgb(var(--text-dark) / <alpha-value>)",              
          muted: "rgb(var(--text-muted) / <alpha-value>)",            
        },
        brand: {
          emerald: "rgb(var(--brand-emerald) / <alpha-value>)",
          yellow: "rgb(var(--brand-yellow) / <alpha-value>)",
        },
      },
      fontFamily: {
        // 🟢 On garde la définition, mais on va l'utiliser avec font-semibold
        display: ['Teko', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],
      },
      // 🟢 Optionnel : tu peux définir des graisses spécifiques ici si besoin
      fontWeight: {
        heading: '600',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      }
    },
  },
  plugins: [],
}