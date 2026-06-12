"use client";

import { useState, useEffect } from "react";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menu";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const TABS = [
    { id: "all", label: "Tous" },
    { id: "naan-burger", label: "Naan Burger" },
    { id: "naandwich", label: "Naandwich" },
    { id: "burger", label: "Burger" },
    { id: "side", label: "Sides" },
    { id: "dessert", label: "Dessert" },
    { id: "boisson", label: "Boisson" }
  ];

  // Filtering Logic based on BOTH active tab and search query
  const filteredCategories = menuData
    .map(category => {
      // Check if category matches the active tab filter
      const matchesTab = activeTab === "all" || category.tab === activeTab;
      if (!matchesTab) return null;

      // Filter items within matching category
      const filteredItems = category.items.filter(item => {
        const matchesSearch = searchQuery === "" || 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      });

      if (filteredItems.length === 0) return null;

      return {
        ...category,
        items: filteredItems
      };
    })
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  // Scroll to section on hash changes if needed
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const targetCategory = menuData.find(cat => cat.id === hash);
      if (targetCategory) {
        // Set tab accordingly to make sure it's visible
        setActiveTab(targetCategory.tab);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-ts-bg">
      {/* Header Section */}
      <div className="bg-ts-card/10 border-b border-white/5 pt-36 pb-20 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ts-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-ts-white mb-6 uppercase tracking-tighter">
            NOTRE <span className="bg-gradient-to-r from-ts-red to-[#ff4754] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]">CARTE</span>
          </h1>
          <p className="text-base md:text-lg text-ts-gray/80 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
            Découvrez nos délices au menu de Times Square, mélange parfait de traditions culinaires et d'innovations gustatives.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="tel:0186047946" className="flex-1 px-6 py-3.5 text-xs font-black rounded-full text-ts-white border border-white/10 hover:border-ts-red/50 hover:bg-ts-red/10 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              📞 Appeler
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3.5 text-xs font-black rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              📍 Itinéraire
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-ts-gray/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Rechercher un ingrédient ou un plat (ex: Cheddar, Boursin...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 bg-ts-card/30 hover:bg-ts-card/50 focus:bg-ts-card/80 border border-white/5 focus:border-ts-red/30 rounded-full text-sm font-medium text-ts-white placeholder-ts-gray/40 focus:outline-none transition-all duration-300 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-ts-gray/40 hover:text-ts-white transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Filtres par Onglets (Tabs) */}
        <div className="sticky top-28 z-40 bg-ts-bg/85 backdrop-blur-xl py-4 mb-16 border-b border-white/5 -mx-4 px-4 sm:mx-0 sm:px-0 transition-all duration-300">
          <div className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-hide items-center justify-start md:justify-center">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button 
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    // Optionnel : remet le hash à vide si on change d'onglet
                    if (typeof window !== "undefined") {
                      window.history.pushState({}, "", window.location.pathname);
                    }
                  }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full font-black uppercase tracking-wider text-xs transition-all duration-300 border ${
                    isActive 
                      ? "bg-ts-red border-ts-red text-ts-white shadow-[0_0_20px_rgba(229,9,20,0.4)] scale-105" 
                      : "bg-ts-card/50 border-white/5 text-ts-gray/70 hover:border-ts-red/30 hover:text-ts-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sections du Menu */}
        <div key={`${activeTab}-${searchQuery}`} className="space-y-28 animate-slide-up">
          {filteredCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-ts-white mb-2 uppercase tracking-wide">Aucun résultat trouvé</h3>
            <p className="text-ts-gray/50 max-w-md mx-auto font-medium text-sm">
              Nous n'avons trouvé aucun produit correspondant à votre recherche. Essayez avec d'autres mots-clés ou changez d'onglet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
