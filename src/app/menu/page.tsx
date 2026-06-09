"use client";

import { useState } from "react";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menu";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const displayedCategories = activeFilter === "all" 
    ? menuData 
    : menuData.filter(cat => cat.id === activeFilter);

  return (
    <div className="min-h-screen bg-ts-bg">
      {/* Header Section */}
      <div className="bg-ts-card border-b border-ts-red/20 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-ts-bg opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-ts-white mb-6 uppercase tracking-tighter">
            NOTRE <span className="text-ts-red drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">MENU</span>
          </h1>
          <p className="text-xl text-ts-gray max-w-2xl mx-auto font-medium mb-10">
            Découvrez nos créations exclusives préparées à la commande avec des ingrédients premium.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <a href="tel:0186047946" className="flex-1 px-6 py-4 text-sm font-bold rounded-full text-ts-white border-2 border-ts-red hover:bg-ts-red transition-all uppercase tracking-widest flex items-center justify-center gap-2 group">
              <span className="text-xl group-hover:scale-110 transition-transform">📞</span> Appeler
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 text-sm font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.4)] hover:shadow-[0_0_25px_rgba(229,9,20,0.7)] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="text-xl">📍</span> Itinéraire
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtres / Ancres */}
        <div className="sticky top-24 z-40 bg-ts-bg/95 backdrop-blur-md py-4 mb-16 border-b border-ts-red/10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide items-center">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all border-2 ${activeFilter === "all" ? "bg-ts-red border-ts-red text-ts-white shadow-[0_0_15px_rgba(229,9,20,0.4)]" : "bg-ts-card border-ts-red/20 text-ts-gray hover:border-ts-red"}`}
            >
              Tous
            </button>
            {menuData.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  // Optionnel : Scroll vers la section si on est en mode 'Tous'
                  if (activeFilter === "all") {
                    document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all border-2 ${activeFilter === cat.id ? "bg-ts-red border-ts-red text-ts-white shadow-[0_0_15px_rgba(229,9,20,0.4)]" : "bg-ts-card border-ts-red/20 text-ts-gray hover:border-ts-red"}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Sections du Menu */}
        <div className="space-y-24">
          {displayedCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
