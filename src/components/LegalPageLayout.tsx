import { ReactNode } from "react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  introduction?: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, introduction, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-ts-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="mb-8">
          <Link href="/" className="text-ts-red hover:text-ts-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-8">
            <span>←</span> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-ts-white uppercase tracking-tighter mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-ts-red mb-6"></div>
          
          {introduction && (
            <p className="text-xl text-ts-gray font-medium mb-6 leading-relaxed">
              {introduction}
            </p>
          )}
          
          <p className="text-sm text-ts-gray font-medium">Dernière mise à jour : {lastUpdated}</p>
        </div>
        
        {/* Contenu */}
        <div className="bg-ts-card border border-ts-red/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Décoration d'angle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-ts-red/5 rounded-bl-full pointer-events-none"></div>
          
          {/* Avertissement demandé */}
          <div className="bg-ts-bg border-l-4 border-ts-red text-ts-white px-6 py-4 rounded-r-xl mb-10 text-sm font-bold tracking-wide shadow-md flex items-start gap-4">
            <span className="text-ts-red text-xl">⚠️</span>
            <p className="pt-1">
              Les informations juridiques seront complétées avant la mise en ligne définitive du site.
            </p>
          </div>

          {/* Sections */}
          <div className="text-ts-gray space-y-8 leading-relaxed">
            {children}
          </div>
        </div>
        
      </div>
    </div>
  );
}
