import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SiteHeader from "@/components/layout/Header";
import HeroHome from "@/components/layout/HeroHome";
import PageHero from "@/components/layout/PageHero"; 
import TemplatesPage from "./pages/TemplatesPage";

// 🟢 Les imports de ton template Prodetek
import ProdetekLayout from "./pages/templates/prodetek/ProdetekLayout"; // L'import manquant était ici !
import ProdetekHome from "./pages/templates/prodetek/ProdetekHome";

// 1. On crée un sous-composant pour pouvoir "lire" l'URL
function AppContent() {
  const location = useLocation();
  
  // 2. On vérifie si on est sur une démo (ex: /templates/prodetek)
  // Mais on garde le header si on est juste sur la liste /templates
  const isDemoPage = location.pathname.startsWith('/templates/') && location.pathname !== '/templates';

  return (
    <div className="min-h-screen bg-background">
      
      {/* 3. Le Header Prymia ne s'affiche que si isDemoPage est FAUX */}
      {!isDemoPage && <SiteHeader logoText="Prymia" />}
      
      <main>
        <Routes>
          <Route path="/" element={<HeroHome />} />
          <Route path="/templates" element={<TemplatesPage />} />
          
          {/* La magie du Layout : On imbrique les routes ! */}
          <Route path="/templates/prodetek" element={<ProdetekLayout />}>
            {/* "index" veut dire : c'est la page par défaut de ce layout */}
            <Route index element={<ProdetekHome />} />
          </Route>

          <Route 
            path="/templates/:slug" 
            element={
              <PageHero 
                badge="Démo Live"
                title="Aperçu du Template" 
                subtitle="Explorez les fonctionnalités de ce modèle premium."
              />
            } 
          />
          <Route path="/services/:slug" element={<PageHero badge="Expertise" title="Nos Solutions" subtitle="Services sur-mesure." />} />
          <Route path="/agence-web/:city" element={<PageHero badge="Proximité" title="Agence Locale" subtitle="Accompagnement local." />} />
          <Route path="/tarifs/:service" element={<PageHero badge="Transparence" title="Nos Tarifs" subtitle="Offres claires." />} />
          <Route path="/realisations" element={<PageHero badge="Portfolio" title="Réalisations" subtitle="Nos projets." />} />
          <Route path="/blog/:slug" element={<PageHero badge="Blog" title="Mag Digital" subtitle="Actualités web." />} />
          <Route path="*" element={<PageHero title="404" subtitle="Oups, cette page n'existe pas." />} />
        </Routes>
      </main>
    </div>
  );
}

// Composant principal
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;