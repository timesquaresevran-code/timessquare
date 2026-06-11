import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { menuData } from "@/data/menu";
import Link from "next/link";

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
      image: "/images/big_square.webp", 
      href: "/menu#naan-burgers", 
      count: `${menuData.find(c => c.id === "naan-burgers")?.items.length || 6} Produits` 
    },
    { 
      id: "naandwich", 
      title: "Naandwichs", 
      image: "/images/super_trio.webp", 
      href: "/menu#naandwichs", 
      count: `${menuData.find(c => c.id === "naandwichs")?.items.length || 10} Produits` 
    },
    { 
      id: "burger", 
      title: "Burgers", 
      image: "/images/double_cheese.webp", 
      href: "/menu#burgers", 
      count: "66 Produits" // Regroupe Burgers, Smash, Tingers, Plaisirs, Spéciaux, Kids
    },
    { 
      id: "side", 
      title: "Accompagnements", 
      image: "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/X4-MOZZA-STICK-300x300.png", 
      href: "/menu#sides", 
      count: "23 Produits" // Regroupe Salades, Sides, Fried chicken
    },
    { 
      id: "dessert", 
      title: "Desserts", 
      image: "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/pistachiocroffle-300x300.png", 
      href: "/menu#desserts", 
      count: `${menuData.find(c => c.id === "desserts")?.items.length || 14} Produits` 
    },
    { 
      id: "boisson", 
      title: "Boissons", 
      image: "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/coca-cola-verre-2-300x300.png", 
      href: "/menu#boissons", 
      count: `${menuData.find(c => c.id === "boissons")?.items.length || 20} Produits` 
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
      <div className="bg-ts-card/40 border-y border-white/5 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xs font-black text-ts-red tracking-[0.4em] uppercase mb-4">La Carte</h2>
          <p className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase mb-20">Que voulez-vous déguster ?</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabCards.map((card) => (
              <Link 
                key={card.id} 
                href={card.href} 
                className="relative h-72 rounded-3xl overflow-hidden border border-white/5 shadow-2xl hover:border-ts-red/40 hover:shadow-[0_15px_35px_rgba(229,9,20,0.25)] transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover opacity-35 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ts-bg via-ts-bg/85 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10 text-left">
                  <span className="text-[10px] font-black text-ts-red uppercase tracking-widest bg-ts-red/15 border border-ts-red/20 px-2.5 py-1 rounded-full mb-3">
                    {card.count}
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-ts-white uppercase tracking-tight leading-tight group-hover:text-ts-red transition-colors duration-300">
                    {card.title}
                  </h3>
                  <span className="text-[10px] text-ts-gray/50 font-bold uppercase tracking-widest mt-2 flex items-center gap-1 group-hover:text-ts-white transition-colors duration-300">
                    Découvrir <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Ouverture & Accès */}
      <div className="bg-ts-bg py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ts-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Section Ouverture */}
            <div className="bg-ts-card/60 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative group hover:border-ts-red/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-red/5 rounded-bl-full -z-0"></div>
              <h2 className="text-2xl font-black text-ts-white uppercase tracking-tight mb-10 relative z-10 flex items-center gap-4">
                <span className="text-ts-red text-3xl">⏱</span> Nos Horaires
              </h2>
              <ul className="space-y-5 text-base font-semibold text-ts-gray relative z-10">
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span>Lundi - Jeudi</span> <span className="text-ts-white font-black bg-white/5 px-3 py-1 rounded">11h30 - 14h30 • 18h30 - 23h00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span>Vendredi</span> <span className="text-ts-white font-black bg-white/5 px-3 py-1 rounded">18h30 - 00h00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-4">
                  <span>Samedi</span> <span className="text-ts-white font-black bg-white/5 px-3 py-1 rounded">11h30 - 15h00 • 18h30 - 00h00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Dimanche</span> <span className="text-ts-white font-black bg-white/5 px-3 py-1 rounded">18h30 - 23h00</span>
                </li>
              </ul>
            </div>

            {/* Section Adresse */}
            <div className="bg-ts-card/60 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative group hover:border-ts-red/20 transition-all duration-500">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-ts-red/5 rounded-tl-full -z-0"></div>
              <h2 className="text-2xl font-black text-ts-white uppercase tracking-tight mb-10 relative z-10 flex items-center gap-4">
                <span className="text-ts-red text-3xl">📍</span> Accès & Contact
              </h2>
              <div className="space-y-8 relative z-10">
                <div>
                  <p className="text-ts-red uppercase tracking-widest text-xs font-black mb-3">Adresse</p>
                  <p className="text-2xl font-black text-ts-white leading-tight">2e Bd Westinghouse</p>
                  <p className="text-lg text-ts-gray font-medium">93270 Sevran</p>
                </div>
                <div>
                  <p className="text-ts-red uppercase tracking-widest text-xs font-black mb-3">Contact</p>
                  <p className="text-3xl font-black text-ts-white">01 86 04 79 46</p>
                </div>
                <div className="pt-4">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-sm font-black rounded-full text-ts-white hover:bg-ts-red hover:border-ts-red hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all uppercase tracking-widest w-full">
                    Lancer l'itinéraire
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
