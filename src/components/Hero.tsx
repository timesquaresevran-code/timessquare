import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-ts-bg flex flex-col justify-center overflow-hidden border-b border-ts-red/10 pt-20">
      {/* Background with Grid & Image Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-25 scale-105 animate-fade-in"
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Burger"
        />
        {/* Dark subtle grid texture */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gradient overlays to blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-ts-bg via-ts-bg/85 to-ts-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ts-bg/90 via-transparent to-transparent h-60" />
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-ts-red/10 rounded-full blur-[150px] pointer-events-none" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full z-10 w-full animate-slide-up">
        
        {/* Animated Accent Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ts-red/10 border border-ts-red/20 mb-8 backdrop-blur-sm animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-ts-red animate-ping" />
          <h2 className="text-ts-red font-black tracking-[0.2em] uppercase text-xs md:text-sm">
            Ouverture officielle lundi 15 juin 2026
          </h2>
        </div>
        
        {/* Massive Typographic Header with Gradient Clip */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-ts-white mb-6 uppercase leading-none drop-shadow-2xl select-none">
          <span className="bg-gradient-to-b from-ts-white via-ts-white to-ts-white/50 bg-clip-text text-transparent">TIMES SQUARE</span> <br/>
          <span className="bg-gradient-to-r from-ts-red to-[#ff4754] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">SEVRAN</span>
        </h1>
        
        {/* Bullet features */}
        <p className="mt-4 text-sm md:text-base text-ts-gray font-bold tracking-[0.2em] uppercase mb-14 flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-2xl leading-relaxed animate-float">
          <span>Burgers Premium</span> <span className="text-ts-red font-black">•</span>
          <span>Naan Burgers</span> <span className="text-ts-red font-black">•</span>
          <span>Naandwichs</span> <span className="text-ts-red font-black">•</span>
          <span>Smash Burgers</span>
        </p>
        
        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-3xl">
          <Link href="/menu" className="flex-1 px-8 py-5 text-sm font-black rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_35px_rgba(229,9,20,0.7)] hover:scale-[1.03] active:scale-95 transform transition-all duration-300 border border-ts-red uppercase tracking-widest flex items-center justify-center">
            Voir la carte
          </Link>
          <a href="tel:0186047946" className="flex-1 px-8 py-5 text-sm font-black rounded-full text-ts-white border border-white/10 hover:border-white/30 hover:bg-white/5 hover:scale-[1.03] active:scale-95 transform transition-all duration-300 uppercase tracking-widest flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            📞 Appeler
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Bd+Westinghouse,+93270+Sevran" target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-5 text-sm font-black rounded-full text-ts-white border border-ts-red/30 hover:border-ts-red/60 hover:bg-ts-red/5 hover:scale-[1.03] active:scale-95 transform transition-all duration-300 uppercase tracking-widest flex items-center justify-center bg-ts-bg/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            📍 Itinéraire
          </a>
        </div>
      </div>
    </div>
  );
}
