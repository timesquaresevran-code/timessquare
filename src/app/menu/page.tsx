"use client";

import { useState, useEffect } from "react";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menu";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all");

  const TABS = [
    { id: "all", label: "Tous" },
    { id: "naan-burger", label: "Naan Burger" },
    { id: "naandwich", label: "Naandwich" },
    { id: "burger", label: "Burger" },
    { id: "side", label: "Sides" },
    { id: "dessert", label: "Dessert" },
    { id: "boisson", label: "Boisson" }
  ];

  const displayedCategories = activeTab === "all" 
    ? menuData 
    : menuData.filter(cat => cat.tab === activeTab);

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
      <div className="bg-ts-card/25 border-b border-white/5 pt-32 pb-20 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-ts-red/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-ts-white mb-6 uppercase tracking-tighter">
            NOTRE <span className="bg-gradient-to-r from-ts-red to-[#ff4754] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]">CARTE</span>
          </h1>
          <p className="text-lg text-ts-gray/80 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
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
        {/* Filtres par Onglets (Tabs) */}
        <div className="sticky top-20 z-40 bg-ts-bg/75 backdrop-blur-lg py-5 mb-16 border-b border-white/5 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto gap-3 pb-3 scrollbar-hide items-center justify-start md:justify-center">
            {TABS.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Optionnel : remet le hash à vide si on change d'onglet
                  if (typeof window !== "undefined") {
                    window.history.pushState({}, "", window.location.pathname);
                  }
                }}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-black uppercase tracking-wider text-xs transition-all border ${activeTab === tab.id ? "bg-ts-red border-ts-red text-ts-white shadow-[0_0_15px_rgba(229,9,20,0.4)]" : "bg-ts-card border-white/5 text-ts-gray hover:border-ts-red/50"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sections du Menu regroupées par onglets */}
        <div className="space-y-28">
          {displayedCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
