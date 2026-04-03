import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/layout/Header";
import HeroHome from "@/components/layout/HeroHome";
import PageHero from "@/components/layout/PageHero"; // Notre nouveau Hero secondaire

function App() {
  return (
    <Router>
      {/* 🟢 Le fond reste cohérent avec ton Vert #069668 défini dans l'index.css */}
      <div className="min-h-screen bg-background">
        
        <SiteHeader logoText="Prymia" />
        
        <main>
          <Routes>
            {/* 🏠 Accueil - Hero Full Screen avec Stats */}
            <Route path="/" element={<HeroHome />} />

            {/* 🟢 Routes Virtuelles Services (SEO) */}
            <Route 
              path="/services/:slug" 
              element={
                <PageHero 
                  badge="Expertise Digitale"
                  title="Nos Solutions Web" 
                  subtitle="Performance, Design et SEO : des services sur-mesure pour votre croissance."
                />
              } 
            />

            {/* 🟢 Routes Virtuelles SEO Local (Villes) */}
            <Route 
              path="/agence-web/:city" 
              element={
                <PageHero 
                  badge="Proximité & Engagement"
                  title="Votre Agence Web Locale" 
                  subtitle="Nous accompagnons les entreprises locales dans leur transformation numérique."
                />
              } 
            />

            {/* 🟢 Routes Virtuelles Tarifs */}
            <Route 
              path="/tarifs/:service" 
              element={
                <PageHero 
                  badge="Transparence"
                  title="Nos Tarifs & Forfaits" 
                  subtitle="Des offres claires et adaptées à vos objectifs et à votre budget."
                />
              } 
            />

            {/* 🟢 Portfolio & Blog */}
            <Route 
              path="/realisations" 
              element={
                <PageHero 
                  badge="Portfolio"
                  title="Nos Dernières Réalisations" 
                  subtitle="Découvrez les projets qui font la fierté de nos clients."
                />
              } 
            />
            
            <Route 
              path="/blog/:slug" 
              element={
                <PageHero 
                  badge="Blog & Actu"
                  title="Le Mag Digital" 
                  subtitle="Conseils, astuces et actualités du monde du web par Prymia."
                />
              } 
            />

            {/* 404 de secours */}
            <Route 
              path="*" 
              element={<PageHero title="404" subtitle="Oups, cette page n'existe pas." />} 
            />
          </Routes>
        </main>

        {/* Le Footer viendra ici plus tard */}
      </div>
    </Router>
  );
}

export default App;