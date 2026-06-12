import { Category } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="mb-24 scroll-mt-32">
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-ts-red rounded-full shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
          <h2 className="text-2xl md:text-3xl font-black text-ts-white uppercase tracking-tight">
            {category.title}
          </h2>
        </div>
        
        {category.subtitle && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ts-red/5 border border-ts-red/10 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-ts-red animate-pulse" />
            <span className="text-[10px] md:text-xs font-black text-ts-gray uppercase tracking-widest leading-none">
              {category.subtitle}
            </span>
          </div>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {category.items.map((item) => (
          <MenuCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
