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

  return (
    <>
      <Hero />
      
      {/* Nos Incontournables */}
      <div className="bg-ts-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-ts-red to-transparent"></div>
        <div className="text-center mb-16 pt-8">
          <h2 className="text-sm font-bold text-ts-red tracking-[0.3em] uppercase mb-4">L'excellence</h2>
          <p className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase drop-shadow-md">Nos incontournables</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {incontournables.map((item) => (
            item && <MenuCard key={item.id} product={item} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/menu" className="inline-flex items-center justify-center px-10 py-5 border-2 border-ts-red text-lg font-bold rounded-full text-ts-red hover:bg-ts-red hover:text-ts-white transition-all hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] uppercase tracking-widest group">
            Découvrir tout le menu
            <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Catégories du Menu */}
      <div className="bg-ts-card border-y border-ts-red/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-ts-red tracking-[0.3em] uppercase mb-4">La Carte</h2>
          <p className="text-4xl md:text-5xl font-black text-ts-white tracking-tight uppercase mb-16 drop-shadow-md">Que voulez-vous déguster ?</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {menuData.map((cat) => (
              <Link key={cat.id} href={`/menu#${cat.id}`} className="block bg-ts-bg border border-ts-red/10 rounded-2xl p-6 hover:border-ts-red hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] transition-all hover:-translate-y-2 group">
                <h3 className="text-lg md:text-xl font-black text-ts-white uppercase tracking-wider group-hover:text-ts-red transition-colors">{cat.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Ouverture & Accès */}
      <div className="bg-ts-bg py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Section Ouverture */}
            <div className="bg-ts-card p-10 rounded-3xl border border-ts-red/20 shadow-2xl relative group hover:border-ts-red/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-red/5 rounded-bl-full -z-0"></div>
              <h2 className="text-3xl font-black text-ts-white uppercase tracking-tight mb-8 relative z-10 flex items-center">
                <span className="text-ts-red mr-4 text-4xl">⏱</span> Nos Horaires
              </h2>
              <ul className="space-y-4 text-lg font-medium text-ts-gray relative z-10">
                <li className="flex justify-between border-b border-ts-bg pb-3">
                  <span>Lundi - Jeudi</span> <span className="text-ts-white font-bold">11h30-14h30 • 18h30-23h00</span>
                </li>
                <li className="flex justify-between border-b border-ts-bg pb-3">
                  <span>Vendredi</span> <span className="text-ts-white font-bold">18h30-00h00</span>
                </li>
                <li className="flex justify-between border-b border-ts-bg pb-3">
                  <span>Samedi</span> <span className="text-ts-white font-bold">11h30-15h00 • 18h30-00h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span> <span className="text-ts-white font-bold">18h30-23h00</span>
                </li>
              </ul>
            </div>

            {/* Section Adresse */}
            <div className="bg-ts-card p-10 rounded-3xl border border-ts-red/20 shadow-2xl relative group hover:border-ts-red/50 transition-colors">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-ts-red/5 rounded-tl-full -z-0"></div>
              <h2 className="text-3xl font-black text-ts-white uppercase tracking-tight mb-8 relative z-10 flex items-center">
                <span className="text-ts-red mr-4 text-4xl">📍</span> Accès
              </h2>
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-ts-gray uppercase tracking-widest text-sm font-bold mb-2">Adresse</p>
                  <p className="text-2xl font-bold text-ts-white">2e Bd Westinghouse</p>
                  <p className="text-xl text-ts-white">93270 Sevran</p>
                </div>
                <div>
                  <p className="text-ts-gray uppercase tracking-widest text-sm font-bold mb-2">Contact</p>
                  <p className="text-2xl font-bold text-ts-red">01 86 04 79 46</p>
                </div>
                <div className="pt-4">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-ts-red text-base font-bold rounded-full text-ts-white hover:bg-ts-red transition-all uppercase tracking-widest w-full">
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
