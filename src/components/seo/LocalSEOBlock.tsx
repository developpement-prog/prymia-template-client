import { MapPin, Phone } from 'lucide-react';

interface LocalSEOBlockProps {
  cityName: string;
  isHeadquarters?: boolean; // Permet de savoir si c'est Saint-Priest (ton siège)
}

export default function LocalSEOBlock({ cityName, isHeadquarters = false }: LocalSEOBlockProps) {
  // 🟢 1. Le balisage Schema.org (JSON-LD) invisible pour les humains, vital pour Google
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prymia",
    "image": "https://prymia.fr/logo.png", // Mets le vrai lien de ton logo
    "@id": "https://prymia.fr",
    "url": "https://prymia.fr",
    "telephone": "0400000000", // Ton vrai numéro
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "TON ADRESSE EXACTE", // Ex: 12 Rue de la République
      "addressLocality": "Saint-Priest",
      "postalCode": "69800",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.6969, // Mets tes vraies coordonnées
      "longitude": 4.9444
    }
  };

  return (
    <section className="py-20 border-t bg-background border-border/50">
      {/* 🟢 Injection du Schema.org dans le code source */}
      {isHeadquarters && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
      )}

      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 px-6 mx-auto lg:grid-cols-2">
        
        {/* 🟢 ÉTAPE 1 de l'expert : La Sémantique (Le mot SEO en H2) */}
        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight uppercase md:text-4xl font-display">
            Besoin d'une <span className="text-brand-emerald">Agence SEO à {cityName}</span> ?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground font-body">
            <p>
              Avoir un site internet moderne n'est que la première étape. Chez Prymia, nous n'assurons pas uniquement la création de votre plateforme web : <strong>nous la propulsons en tête des résultats Google.</strong>
            </p>
            <p>
              En tant qu'experts du référencement naturel, nous analysons votre marché local et mettons en place une stratégie technique et sémantique sur-mesure pour attirer vos futurs clients directement depuis les moteurs de recherche.
            </p>
          </div>

          {/* 🟢 ÉTAPE 3 : L'avantage déloyal (Adresse physique) */}
          {isHeadquarters && (
            <div className="p-6 mt-8 border bg-card-deep rounded-xl border-white/5">
              <h3 className="mb-4 tracking-wider text-white uppercase font-display">Notre Siège Social</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <MapPin size={16} className="text-brand-emerald" />
                  TON ADRESSE EXACTE, 69800 Saint-Priest
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <Phone size={16} className="text-brand-emerald" />
                  04 XX XX XX XX
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* 🟢 ÉTAPE 3 (Suite) : Google Maps Embed */}
        {isHeadquarters && (
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Remplace l'attribut src par l'URL "Intégrer une carte" de TA fiche Google My Business */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44569.1764654393!2d4.908051408801905!3d45.69698547437812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c6b1b7b7b7b7%3A0x408ab2ae4be6f80!2s69800%20Saint-Priest!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

      </div>
    </section>
  );
}