import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { menuData } from "@/data/menu";
import Link from "next/link";

const cardThemes = {
  red: {
    glow: "hover:shadow-[0_20px_45px_rgba(229,9,20,0.3)]",
    borderHover: "hover:border-[#E50914]/40",
    textHover: "text-[#E50914]",
    badgeDot: "bg-[#E50914]",
    glowBg: "bg-[#E50914]/10",
  },
  orange: {
    glow: "hover:shadow-[0_20px_45px_rgba(249,115,22,0.3)]",
    borderHover: "hover:border-orange-500/40",
    textHover: "text-orange-500",
    badgeDot: "bg-orange-500",
    glowBg: "bg-orange-500/10",
  },
  amber: {
    glow: "hover:shadow-[0_20px_45px_rgba(234,179,8,0.3)]",
    borderHover: "hover:border-amber-500/40",
    textHover: "text-amber-500",
    badgeDot: "bg-amber-500",
    glowBg: "bg-amber-500/10",
  },
  emerald: {
    glow: "hover:shadow-[0_20px_45px_rgba(16,185,129,0.3)]",
    borderHover: "hover:border-emerald-500/40",
    textHover: "text-emerald-500",
    badgeDot: "bg-emerald-500",
    glowBg: "bg-emerald-500/10",
  },
  pink: {
    glow: "hover:shadow-[0_20px_45px_rgba(236,72,153,0.3)]",
    borderHover: "hover:border-pink-500/40",
    textHover: "text-pink-500",
    badgeDot: "bg-pink-500",
    glowBg: "bg-pink-500/10",
  },
  cyan: {
    glow: "hover:shadow-[0_20px_45px_rgba(6,182,212,0.3)]",
    borderHover: "hover:border-cyan-500/40",
    textHover: "text-cyan-500",
    badgeDot: "bg-cyan-500",
    glowBg: "bg-cyan-500/10",
  },
} as const;

export default function Home() {
  // Helper pour récupérer un produit par son ID
  const getProductById = (id: string) => {
    for (const category of menuData) {
      const item = category.items.find(p => p.id === id);
      if (item) return item;
    }
    return null;
  };

  // Sélection des produits phares ayant de belles images
  const incontournables = [
    getProductById("sb-times-square"), // Times Square (Smash Burgers)
    getProductById("bg-big-square"),   // Big Square (Burgers)
    getProductById("nd-super-trio")    // Super Trio (Naandwichs)
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  // Regroupement par onglets principaux pour la grille d'accueil
  const tabCards = [
    { 
      id: "naan-burger", 
      title: "Naan Burgers", 
      image: "/images/GEANT-768x768.webp", 
      href: "/menu#naan-burgers", 
      count: `${menuData.find(c => c.id === "naan-burgers")?.items.length || 6} Produits`,
      theme: "red" as const,
      description: "La fusion parfaite d'un pain naan chaud préparé à la minute et de steaks juteux grillés."
    },
    { 
      id: "naandwich", 
      title: "Naandwichs", 
      image: "/images/SUPER-TRIO-copie-768x598.webp", 
      href: "/menu#naandwichs", 
      count: `${menuData.find(c => c.id === "naandwichs")?.items.length || 10} Produits`,
      theme: "orange" as const,
      description: "Nos naans fourrés au fromage fondant cuits minute dans notre four tandoor traditionnel."
    },
    { 
      id: "burger", 
      title: "Burgers", 
      image: "/images/DOUBLE-CHEESE-copie-768x768.webp", 
      href: "/menu#burgers", 
      count: "66 Produits", // Regroupe Burgers, Smash, Tingers, Plaisirs, Spéciaux, Kids
      theme: "amber" as const,
      description: "Une collection de recettes classiques et de smash burgers gourmands aux saveurs inédites."
    },
    { 
      id: "side", 
      title: "Accompagnements", 
      image: "/images/X4-MOZZA-STICK-768x768.webp", 
      href: "/menu#sides", 
      count: "23 Produits", // Regroupe Salades, Sides, Fried chicken
      theme: "emerald" as const,
      description: "Pour agrémenter votre repas : frites au cheddar chaud, salades fraîches ou tenders croustillants."
    },
    { 
      id: "dessert", 
      title: "Desserts", 
      image: "/images/pistachiocroffle-768x768.webp", 
      href: "/menu#desserts", 
      count: `${menuData.find(c => c.id === "desserts")?.items.length || 14} Produits`,
      theme: "pink" as const,
      description: "Nos fameux croffles croustillants, tiramisus onctueux et churros sucrés pour finir en douceur."
    },
    { 
      id: "boisson", 
      title: "Boissons", 
      image: "/images/coca-cola-verre-2-768x768.webp", 
      href: "/menu#boissons", 
      count: `${menuData.find(c => c.id === "boissons")?.items.length || 20} Produits`,
      theme: "cyan" as const,
      description: "Milkshakes crémeux faits maison, boissons classiques ou canettes fraîches de votre choix."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Nos Incontournables */}
      <div className="bg-ts-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-ts-red to-transparent"></div>
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-72 h-72 bg-ts-red/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="text-center mb-20 pt-8 relative z-10">
          <h2 className="text-xs font-black text-ts-red tracking-[0.4em] uppercase mb-4">L'excellence</h2>
          <p className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase">
            Nos <span className="bg-gradient-to-r from-ts-red to-[#ff4754] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(229,9,20,0.3)]">incontournables</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {incontournables.map((item) => (
            item && <MenuCard key={item.id} product={item} />
          ))}
        </div>
        
        <div className="text-center mt-20 relative z-10">
          <Link href="/menu" className="inline-flex items-center justify-center px-10 py-5 border-2 border-ts-red text-sm font-black rounded-full text-ts-red hover:bg-ts-red hover:text-ts-white transition-all hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] uppercase tracking-widest group">
            Découvrir tout le menu
            <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 font-bold">→</span>
          </Link>
        </div>
      </div>

      {/* Catégories du Menu (La Carte) */}
      <div className="bg-[#0c0c0e]/90 border-y border-white/5 py-32 relative overflow-hidden">
        {/* Subtle dark pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ts-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-ts-darkred/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-5 bg-ts-red/10 border border-ts-red/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-ts-red animate-pulse" />
            <h2 className="text-[10px] font-black text-ts-red tracking-[0.5em] uppercase">La Carte Exclusive</h2>
          </div>
          
          <p className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase mb-20 max-w-2xl mx-auto leading-tight">
            Que voulez-vous <span className="bg-gradient-to-r from-ts-red via-[#ff3b47] to-[#ff7b00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(229,9,20,0.35)] font-black">déguster</span> ?
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabCards.map((card) => {
              const theme = cardThemes[card.theme];
              return (
                <Link 
                  key={card.id} 
                  href={card.href} 
                  className={`relative h-80 rounded-[2.5rem] overflow-hidden border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 group ${theme.glow} ${theme.borderHover}`}
                >
                  {/* Card Glowing Ambient Orb (shown on hover) */}
                  <div className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-[65px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${theme.glowBg}`} />

                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 bg-black/40">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover opacity-[0.45] group-hover:scale-105 group-hover:opacity-[0.60] transition-all duration-700 ease-out"
                    />
                    {/* Deep gradient masking for visual integration with improved contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between items-start z-10 text-left">
                    {/* Top Row branding & count badge */}
                    <div className="w-full flex justify-between items-center">
                      <span className="text-[8px] font-black tracking-[0.4em] text-white/20">TIMES SQUARE</span>
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-ts-gray/80">
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme.badgeDot}`} />
                        {card.count}
                      </span>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="w-full">
                      <h3 className="text-xl md:text-2xl font-black text-ts-white uppercase tracking-tight leading-none group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                        {card.title}
                      </h3>
                      <p className="text-ts-gray/50 text-xs font-semibold mt-3 group-hover:text-ts-gray/70 transition-colors duration-300 line-clamp-2 max-w-[90%] leading-relaxed">
                        {card.description}
                      </p>
                      
                      {/* Interactive Link Action */}
                      <div className="flex items-center gap-1.5 mt-5 text-[10px] font-black uppercase tracking-widest text-ts-gray/50 group-hover:text-white transition-colors duration-300">
                        <span>Découvrir</span>
                        <div className="relative w-5 h-3 overflow-hidden flex items-center">
                          <span className="absolute transform translate-x-0 group-hover:translate-x-5 transition-transform duration-300">→</span>
                          <span className={`absolute transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-300 ${theme.textHover}`}>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ouverture & Accès */}
      <div className="bg-[#08080a] py-32 relative overflow-hidden border-t border-white/5">
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-ts-red/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-ts-darkred/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5 bg-ts-red/10 border border-ts-red/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-ts-red animate-pulse" />
              <span className="text-[10px] font-black text-ts-red tracking-[0.5em] uppercase">Infos pratiques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase leading-tight">
              Venez nous <span className="bg-gradient-to-r from-ts-red via-[#ff3b47] to-[#ff7b00] bg-clip-text text-transparent">rendre visite</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* ── Horaires ── (3/5) */}
            <div className="lg:col-span-3 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl rounded-[2.5rem] border border-white/[0.06] shadow-2xl overflow-hidden group hover:border-ts-red/25 hover:shadow-[0_25px_60px_rgba(229,9,20,0.12)] transition-all duration-500 hover:-translate-y-1">

              {/* Card header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-ts-red/10 border border-ts-red/20 group-hover:bg-ts-red/20 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-5 h-5 text-ts-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-black text-ts-white uppercase tracking-tight">Nos Horaires</h3>
                </div>
                {/* Ouvert / Fermé badge */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Ouvert
                </span>
              </div>

              {/* Rows */}
              <ul className="divide-y divide-white/[0.04]">
                {[
                  { day: "Lundi – Jeudi", slots: ["11h30 – 14h30", "18h30 – 23h00"] },
                  { day: "Vendredi",      slots: ["18h30 – 00h00"] },
                  { day: "Samedi",        slots: ["11h30 – 15h00", "18h30 – 00h00"] },
                  { day: "Dimanche",      slots: ["18h30 – 23h00"] },
                ].map(({ day, slots }) => (
                  <li key={day} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-8 py-5 hover:bg-white/[0.015] transition-colors duration-200 group/row">
                    <span className="text-ts-gray/70 text-sm font-bold uppercase tracking-widest shrink-0">{day}</span>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {slots.map((slot) => (
                        <span key={slot} className="inline-flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.07] group-hover/row:border-ts-red/20 px-4 py-2 rounded-xl text-xs font-black text-white tracking-wider transition-colors duration-300">
                          <span className="w-1 h-1 rounded-full bg-ts-red/60" />
                          {slot}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Footer note */}
              <div className="px-8 py-5 border-t border-white/[0.04] flex items-center gap-2">
                <svg className="w-4 h-4 text-ts-red/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[11px] text-ts-gray/35 font-semibold">Horaires susceptibles de varier les jours fériés.</p>
              </div>
            </div>

            {/* ── Contact & Adresse ── (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Adresse card */}
              <div className="bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.06] p-7 shadow-xl group hover:border-ts-red/25 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] transition-all duration-500 hover:-translate-y-1">
                <p className="text-[10px] font-black text-ts-red uppercase tracking-[0.3em] mb-4 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Adresse
                </p>
                <p className="text-xl font-black text-ts-white leading-snug">2e Bd Westinghouse</p>
                <p className="text-sm text-ts-gray/50 font-semibold mt-1">93270 Sevran</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-gradient-to-r from-ts-red to-ts-darkred hover:from-[#ff1e2b] hover:to-ts-red text-[11px] font-black rounded-xl text-white uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(229,9,20,0.25)] hover:shadow-[0_12px_30px_rgba(229,9,20,0.4)] transition-all duration-300 group/btn"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Lancer l'itinéraire
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Téléphone card */}
              <div className="bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.06] p-7 shadow-xl group hover:border-ts-red/25 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] transition-all duration-500 hover:-translate-y-1">
                <p className="text-[10px] font-black text-ts-red uppercase tracking-[0.3em] mb-4 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Téléphone
                </p>
                <a
                  href="tel:+33186047946"
                  className="block text-3xl font-black text-ts-white tracking-tight hover:text-ts-red transition-colors duration-300 select-all"
                >
                  01 86 04 79 46
                </a>
                <p className="text-[11px] text-ts-gray/35 font-semibold mt-3">Disponible pendant les heures d'ouverture</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
