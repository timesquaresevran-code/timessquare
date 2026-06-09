"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PopupOuverture() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Date d'ouverture (15 juin 2026)
    const openingDate = new Date("2026-06-15T00:00:00");
    const today = new Date();
    
    // Si on est avant la date d'ouverture
    if (today < openingDate) {
      // On vérifie si l'utilisateur l'a déjà fermé dans cette session
      const isClosed = sessionStorage.getItem("popup_ouverture_closed");
      if (!isClosed) {
        // Petit délai pour l'animation d'apparition
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("popup_ouverture_closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ts-bg/90 backdrop-blur-md animate-in fade-in duration-500">
      
      <div className="bg-ts-card border border-ts-red/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(229,9,20,0.3)] max-w-2xl w-full relative overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-500">
        
        {/* Bouton de fermeture */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-ts-gray hover:text-ts-red transition-colors w-10 h-10 flex items-center justify-center bg-ts-bg rounded-full border border-ts-red/20"
        >
          ✕
        </button>

        {/* Déco */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-ts-red/10 rounded-br-full -z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-ts-red/10 rounded-tl-full -z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          
          <div className="mb-6 inline-flex items-center justify-center px-4 py-1 border border-ts-red rounded-full bg-ts-bg shadow-[0_0_15px_rgba(229,9,20,0.4)] animate-pulse">
            <span className="text-ts-red font-bold tracking-widest uppercase text-xs">Ouverture Officielle</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-ts-white mb-6 uppercase leading-tight">
            TIMES SQUARE <span className="text-ts-red block mt-2">SEVRAN</span>
          </h2>

          <div className="bg-ts-bg border border-ts-red/20 px-6 py-4 rounded-xl mb-6 shadow-inner w-full max-w-sm">
            <p className="text-sm text-ts-gray uppercase tracking-widest mb-1">Rendez-vous le</p>
            <p className="text-2xl font-black text-ts-red">LUNDI 15 JUIN 2026</p>
          </div>
          
          <p className="text-lg text-ts-gray font-medium mb-8 leading-relaxed max-w-md">
            Venez découvrir notre carte gourmande : burgers, naan burgers, naandwichs, smash burgers et recettes signature.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full gap-4 justify-center">
            <Link 
              href="/menu" 
              onClick={closePopup}
              className="px-6 py-3 text-sm font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all uppercase tracking-widest"
            >
              Voir la carte
            </Link>
            <a 
              href="tel:0186047946" 
              className="px-6 py-3 text-sm font-bold rounded-full text-ts-white border border-ts-white/30 hover:bg-ts-white hover:text-ts-bg transition-all uppercase tracking-widest"
            >
              Appeler
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" 
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-bold rounded-full text-ts-white border border-ts-red/50 hover:bg-ts-red/10 transition-all uppercase tracking-widest"
            >
              Itinéraire
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
