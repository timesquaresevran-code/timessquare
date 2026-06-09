export default function ContactPage() {
  const horaires = [
    { jour: "Lundi - Jeudi", heure: "11h30-14h30 • 18h30-23h00" },
    { jour: "Vendredi", heure: "18h30-00h00" },
    { jour: "Samedi", heure: "11h30-15h00 • 18h30-00h00" },
    { jour: "Dimanche", heure: "18h30-23h00" },
  ];

  return (
    <div className="min-h-screen bg-ts-bg">
      {/* En-tête de page */}
      <div className="bg-ts-card border-b border-ts-red/20 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-ts-bg opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-ts-white mb-6 uppercase tracking-tighter">
            NOUS <span className="text-ts-red drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">TROUVER</span>
          </h1>
          <p className="text-xl text-ts-gray max-w-2xl mx-auto font-medium">
            Toutes les informations pour venir déguster nos recettes premium sur place ou à emporter.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Colonne de gauche : Coordonnées et Actions */}
          <div className="bg-ts-card p-10 rounded-3xl border border-ts-red/20 shadow-2xl relative group hover:border-ts-red/50 transition-all flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black text-ts-white uppercase tracking-tight mb-8 flex items-center">
                <span className="text-ts-red mr-4 text-4xl">📍</span> Adresse & Contact
              </h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-ts-gray uppercase tracking-widest text-sm font-bold mb-2">Restaurant</p>
                  <p className="text-2xl font-black text-ts-white uppercase tracking-wide">Times Square Sevran</p>
                </div>
                <div>
                  <p className="text-ts-gray uppercase tracking-widest text-sm font-bold mb-2">Localisation</p>
                  <p className="text-xl font-bold text-ts-white">2e Bd Westinghouse</p>
                  <p className="text-xl text-ts-white">93270 Sevran</p>
                </div>
                <div>
                  <p className="text-ts-gray uppercase tracking-widest text-sm font-bold mb-2">Téléphone</p>
                  <p className="text-3xl font-black text-ts-red drop-shadow-[0_0_8px_rgba(229,9,20,0.3)]">01 86 04 79 46</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0186047946" className="flex-1 px-6 py-4 text-sm font-bold rounded-full text-ts-white border-2 border-ts-red hover:bg-ts-red transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="text-xl">📞</span> Appeler
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 text-sm font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="text-xl">🗺️</span> Itinéraire
                </a>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Times+Square+Sevran+2e+Bd+Westinghouse" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-4 text-sm font-bold rounded-full text-ts-bg bg-ts-white hover:bg-gray-200 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                ⭐ Voir la fiche Google
              </a>
            </div>
          </div>

          {/* Colonne de droite : Horaires */}
          <div className="bg-ts-card p-10 rounded-3xl border border-ts-red/20 shadow-2xl relative group hover:border-ts-red/50 transition-all">
            <h2 className="text-3xl font-black text-ts-white uppercase tracking-tight mb-8 flex items-center">
              <span className="text-ts-red mr-4 text-4xl">⏱</span> Horaires
            </h2>
            <div className="divide-y divide-ts-red/10">
              {horaires.map((h, index) => (
                <div key={index} className="flex justify-between items-center py-5 group-hover:bg-ts-bg/30 px-4 -mx-4 transition-colors rounded-lg">
                  <span className="text-xl font-black text-ts-white tracking-wide uppercase">{h.jour}</span>
                  <span className="text-ts-red font-bold">{h.heure}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-ts-bg border-l-4 border-ts-red rounded-r-xl p-6 shadow-inner">
              <h3 className="text-xl font-black text-ts-white mb-2 uppercase tracking-wide">Info Pratique</h3>
              <p className="text-ts-gray font-medium text-sm leading-relaxed">
                Le restaurant peut être très fréquenté le week-end, n'hésitez pas à nous appeler à l'avance pour préparer votre commande à emporter.
              </p>
            </div>
          </div>

        </div>

        {/* Section Carte Interactive */}
        <div className="bg-ts-card rounded-3xl border border-ts-red/20 shadow-2xl overflow-hidden h-[400px] relative group">
          <div className="absolute inset-0 bg-ts-red/10 pointer-events-none mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
          <iframe 
            src="https://maps.google.com/maps?q=2e%20Bd%20Westinghouse,%2093270%20Sevran&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0 grayscale invert opacity-90 contrast-125" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Google Maps Times Square Sevran"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}
