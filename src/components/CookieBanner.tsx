"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, thirdParty: false });

  useEffect(() => {
    // Vérification du consentement existant
    const consent = localStorage.getItem("ts_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "custom") {
      const savedPrefs = localStorage.getItem("ts_cookie_prefs");
      if (savedPrefs) setPrefs(JSON.parse(savedPrefs));
    } else if (consent === "accepted") {
      setPrefs({ analytics: true, thirdParty: true });
    }

    // Écouteur pour rouvrir la bannière depuis le footer
    const handleOpen = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener("open-cookie-banner", handleOpen);
    return () => window.removeEventListener("open-cookie-banner", handleOpen);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("ts_cookie_consent", "accepted");
    setPrefs({ analytics: true, thirdParty: true });
    setIsVisible(false);
    setShowPreferences(false);
  };

  const declineAll = () => {
    localStorage.setItem("ts_cookie_consent", "declined");
    setPrefs({ analytics: false, thirdParty: false });
    setIsVisible(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    localStorage.setItem("ts_cookie_consent", "custom");
    localStorage.setItem("ts_cookie_prefs", JSON.stringify(prefs));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ts-bg/95 backdrop-blur-xl border-t border-ts-red/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] p-4 md:p-6 transform transition-transform duration-500 animate-in slide-in-from-bottom">
      
      {!showPreferences ? (
        // BANNIÈRE SIMPLE
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-ts-gray font-medium flex-1">
            <p className="leading-relaxed">
              Nous utilisons des cookies pour assurer le bon fonctionnement du site et, avec votre accord, pour mesurer l’audience et améliorer votre expérience. Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.
              <br />
              <Link href="/politique-cookies" className="text-ts-red hover:text-ts-white underline mt-2 inline-block transition-colors">
                Consulter la politique de cookies
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button 
              onClick={declineAll}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-white border border-ts-white/30 hover:bg-ts-white hover:text-ts-bg transition-colors uppercase tracking-wider text-center"
            >
              Refuser
            </button>
            <button 
              onClick={() => setShowPreferences(true)}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-white border border-ts-white/30 hover:bg-ts-white hover:text-ts-bg transition-colors uppercase tracking-wider text-center"
            >
              Personnaliser
            </button>
            <button 
              onClick={acceptAll}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)] text-center"
            >
              Accepter
            </button>
          </div>
        </div>
      ) : (
        // PANNEAU DE PERSONNALISATION
        <div className="max-w-3xl mx-auto w-full">
          <h3 className="text-xl font-black text-ts-white uppercase tracking-wider mb-6">Préférences de cookies</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between bg-ts-card p-4 rounded-xl border border-ts-red/10">
              <div>
                <p className="font-bold text-ts-white uppercase text-sm">Cookies nécessaires</p>
                <p className="text-xs text-ts-gray mt-1">Toujours actifs. Assurent le fonctionnement de base du site.</p>
              </div>
              <div className="w-12 h-6 bg-ts-red/50 rounded-full relative opacity-50 cursor-not-allowed">
                <div className="absolute right-1 top-1 w-4 h-4 bg-ts-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-ts-card p-4 rounded-xl border border-ts-red/10">
              <div>
                <p className="font-bold text-ts-white uppercase text-sm">Mesure d'audience</p>
                <p className="text-xs text-ts-gray mt-1">Permettent d'analyser le trafic (ex: Google Analytics).</p>
              </div>
              <button 
                onClick={() => setPrefs({...prefs, analytics: !prefs.analytics})}
                className={`w-12 h-6 rounded-full relative transition-colors ${prefs.analytics ? 'bg-ts-red' : 'bg-gray-600'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-ts-white rounded-full transition-transform ${prefs.analytics ? 'translate-x-7' : 'translate-x-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between bg-ts-card p-4 rounded-xl border border-ts-red/10">
              <div>
                <p className="font-bold text-ts-white uppercase text-sm">Services tiers</p>
                <p className="text-xs text-ts-gray mt-1">Permettent l'affichage de Google Maps ou d'avis externes.</p>
              </div>
              <button 
                onClick={() => setPrefs({...prefs, thirdParty: !prefs.thirdParty})}
                className={`w-12 h-6 rounded-full relative transition-colors ${prefs.thirdParty ? 'bg-ts-red' : 'bg-gray-600'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-ts-white rounded-full transition-transform ${prefs.thirdParty ? 'translate-x-7' : 'translate-x-1'}`}></div>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button 
              onClick={() => setShowPreferences(false)}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-gray hover:text-ts-white transition-colors uppercase tracking-wider"
            >
              Retour
            </button>
            <button 
              onClick={savePreferences}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-white border border-ts-red bg-ts-red/20 hover:bg-ts-red transition-colors uppercase tracking-wider"
            >
              Enregistrer mes choix
            </button>
            <button 
              onClick={acceptAll}
              className="px-6 py-3 text-xs font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)]"
            >
              Tout accepter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
