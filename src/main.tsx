import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// ── IMPORT DES STYLES ET POLICES LOCALES (RGPD OK) ──
import './index.css'
import '@fontsource/teko/700.css'; // Pour les titres en gras (Logo, Hero)
import '@fontsource/oswald/400.css'; // Pour le texte normal
import '@fontsource/oswald/500.css'; // Pour les menus/boutons
import '@fontsource/oswald/700.css'; // Pour les textes en gras

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)