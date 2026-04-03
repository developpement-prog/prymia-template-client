// 🟢 1. On importe le fichier du template Prodetek
import { prodetekTheme } from './src/pages/templates/prodetek/prodetek-theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- COULEURS PRYMIA (Ton agence) ---
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

        // 🟢 CORRECTION : Les nouvelles couleurs sont bien DANS le bloc "colors"
        'card-highlight': 'rgb(var(--bg-card-highlight) / <alpha-value>)',
        'card-deep': 'rgb(var(--bg-card-deep) / <alpha-value>)',
        'card-accent': 'rgb(var(--bg-card-accent) / <alpha-value>)',
        'text-dark': 'rgb(var(--text-dark) / <alpha-value>)',

        // --- 🎨 COULEURS DES TEMPLATES CLIENTS ---
        // 🟢 2. On injecte toutes les couleurs de Prodetek ici automatiquement !
        ...prodetekTheme.colors,
      }, // <--- C'est ici que se ferme l'objet colors !
      
      fontFamily: {
        // --- POLICES PRYMIA ---
        display: ['Teko', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],

        // 🟢 3. On injecte les polices de Prodetek automatiquement
        ...prodetekTheme.fontFamily,
      },
      
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