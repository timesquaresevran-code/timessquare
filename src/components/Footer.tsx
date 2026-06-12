"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ts-card py-12 mt-20 border-t border-ts-red/20 relative">
      <div className="absolute inset-0 bg-ts-bg opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.webp" 
                alt="Times Square Logo" 
                className="h-24 w-auto object-contain"
              />
              <h3 className="text-2xl font-black tracking-tighter text-ts-white uppercase">
                <span className="text-ts-red">SEVRAN</span>
              </h3>
            </div>
            <p className="text-ts-gray text-sm font-medium">
              L'excellence du fast-food. Des ingrédients de qualité pour une expérience inoubliable.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-ts-white mb-4 uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-ts-gray font-medium">
              <li><Link href="/" className="hover:text-ts-red transition-colors">Accueil</Link></li>
              <li><Link href="/menu" className="hover:text-ts-red transition-colors">Notre Menu</Link></li>
              <li><Link href="/contact" className="hover:text-ts-red transition-colors">Nous Contacter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-ts-white mb-4 uppercase tracking-wider">Nous Trouver</h4>
            <ul className="space-y-2 text-sm text-ts-gray font-medium">
              <li>2e Bd Westinghouse</li>
              <li>93270 Sevran</li>
              <li>01 86 04 79 46</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-ts-white mb-4 uppercase tracking-wider">Informations Légales</h4>
            <ul className="space-y-2 text-sm text-ts-gray font-medium">
              <li><Link href="/mentions-legales" className="hover:text-ts-red transition-colors">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-ts-red transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="/politique-cookies" className="hover:text-ts-red transition-colors">Politique des Cookies</Link></li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))} 
                  className="hover:text-ts-red transition-colors text-left"
                >
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-ts-gray font-medium flex flex-col justify-center items-center gap-2">
          <p className="font-bold text-ts-white">Times Square Sevran</p>
          <p>2e Bd Westinghouse, 93270 Sevran</p>
          <p>01 86 04 79 46</p>
          
          {/* Petit soulignement discret */}
          <div className="w-16 h-[1px] bg-white/10 mt-6 mb-4"></div>
          
          <p className="text-ts-gray/50">
            &copy; {new Date().getFullYear()} Times Square Sevran. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
