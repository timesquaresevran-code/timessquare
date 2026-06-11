import { Category } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="mb-20 scroll-mt-28">
      <div className="flex flex-col md:flex-row md:items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-4xl font-black text-ts-white uppercase tracking-tighter drop-shadow-md whitespace-nowrap">
          {category.title}
        </h2>
        {category.subtitle && (
          <span className="text-[10px] md:text-xs font-black text-ts-red uppercase tracking-widest bg-ts-red/10 border border-ts-red/20 px-3 py-1.5 rounded-full inline-block">
            {category.subtitle}
          </span>
        )}
        <div className="flex-grow h-px bg-gradient-to-r from-ts-red/50 via-ts-red/10 to-transparent hidden md:block ml-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <MenuCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
