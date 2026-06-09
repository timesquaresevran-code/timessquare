import { Product } from "@/data/menu";

export default function MenuCard({ product }: { product: Product }) {
  return (
    <div className="bg-ts-card rounded-2xl overflow-hidden shadow-2xl border border-ts-card hover:border-ts-red transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] relative">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-ts-red text-ts-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
          {product.badge}
        </div>
      )}
      {product.image ? (
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ts-card via-ts-card/20 to-transparent" />
        </div>
      ) : (
        <div className="h-4 bg-ts-red w-full"></div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl font-black text-ts-white uppercase tracking-tight group-hover:text-ts-red transition-colors leading-tight">{product.name}</h3>
          {product.price !== null && (
            <span className="text-xl font-black text-ts-white bg-ts-red px-3 py-1 rounded-lg whitespace-nowrap shadow-md">
              {product.price.toFixed(2)} €
            </span>
          )}
        </div>
        <p className="text-ts-gray text-sm line-clamp-3">
          {product.description}
        </p>
      </div>
    </div>
  );
}
