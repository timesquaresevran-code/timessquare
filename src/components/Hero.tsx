import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-ts-bg flex flex-col justify-center overflow-hidden border-b border-ts-red/20 pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Burger"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ts-bg via-ts-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ts-bg/90 to-transparent h-40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full z-10 w-full">
        
        <h2 className="text-ts-red font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 text-sm md:text-lg drop-shadow-[0_0_8px_rgba(229,9,20,0.5)] animate-pulse">
          Ouverture officielle lundi 15 juin 2026
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-ts-white mb-6 uppercase leading-none drop-shadow-2xl">
          TIMES SQUARE <br/>
          <span className="text-ts-red drop-shadow-[0_0_15px_rgba(229,9,20,0.6)]">SEVRAN</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-ts-gray font-bold tracking-widest uppercase mb-12 flex flex-wrap justify-center gap-x-3 gap-y-2">
          <span>Burgers</span> <span className="text-ts-red">•</span>
          <span>Naan Burgers</span> <span className="text-ts-red">•</span>
          <span>Naandwichs</span> <span className="text-ts-red">•</span>
          <span>Smash Burgers</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-3xl">
          <Link href="/menu" className="flex-1 px-8 py-5 text-lg font-bold rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(229,9,20,0.8)] border border-ts-red uppercase tracking-widest flex items-center justify-center">
            Voir la carte
          </Link>
          <a href="tel:0186047946" className="flex-1 px-8 py-5 text-lg font-bold rounded-full text-ts-white border border-ts-white/30 hover:bg-ts-white hover:text-ts-bg transition-all transform hover:-translate-y-1 uppercase tracking-widest flex items-center justify-center bg-ts-bg/50 backdrop-blur-sm">
            📞 Appeler
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 text-lg font-bold rounded-full text-ts-white border border-ts-red/50 hover:bg-ts-red/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest flex items-center justify-center bg-ts-bg/50 backdrop-blur-sm">
            📍 Itinéraire
          </a>
        </div>
      </div>
    </div>
  );
}
