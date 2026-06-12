import { Product } from "@/data/menu";

export default function MenuCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#121214] rounded-2xl overflow-hidden border border-white/5 hover:border-ts-red/20 transition-all duration-500 group hover:-translate-y-1.5 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_4px_20px_rgba(229,9,20,0.1)] flex flex-col h-full relative">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-ts-red text-ts-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-[0_0_15px_rgba(229,9,20,0.6)] border border-white/10">
          {product.badge}
        </div>
      )}
      
      {product.image ? (
        <div className="relative h-64 overflow-hidden bg-[#0a0a0b] flex items-center justify-center p-4">
          {/* Immersive radial ambient glow behind the food image */}
          <div className="absolute w-28 h-28 rounded-full bg-ts-red/10 blur-[40px] group-hover:w-40 group-hover:h-40 group-hover:bg-ts-red/20 transition-all duration-700 ease-out pointer-events-none" />
          
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain scale-[1.15] group-hover:scale-[1.22] transition-transform duration-500 ease-out relative z-10"
          />
          {/* Vignette effect fading to card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/15 to-transparent pointer-events-none z-20" />
        </div>
      ) : (
        /* Premium minimalistic placeholder for items without images */
        <div className="relative h-44 bg-[#0a0a0b] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="w-16 h-16 rounded-full bg-ts-red/5 flex items-center justify-center border border-ts-red/10 group-hover:scale-110 transition-transform duration-500">
            <span className="text-3xl filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🍔</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-ts-red to-transparent"></div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow relative z-30">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-base md:text-lg font-black text-ts-white uppercase tracking-tight group-hover:text-ts-red transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
          {product.price !== null && (
            <span className="text-sm font-black text-ts-white bg-ts-red px-3 py-1.5 rounded-lg whitespace-nowrap shadow-[0_0_10px_rgba(229,9,20,0.3)] border border-white/10">
              {product.price.toFixed(2)} €
            </span>
          )}
        </div>
        <p className="text-ts-gray/60 text-sm font-medium leading-relaxed flex-grow">
          {product.description}
        </p>
      </div>
    </div>
  );
}
