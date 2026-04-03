import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// ── IMPORT DES STYLES ──
import './index.css'

// ── IMPORT DES POLICES (Format simplifié pour éviter les erreurs TS) ──
// Ces imports chargent les polices installées via pnpm
import "@fontsource/teko";   // Charge la Teko (utilisée par h1, h2, h3)
import "@fontsource/oswald"; // Charge la Oswald (utilisée par le body et p)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)