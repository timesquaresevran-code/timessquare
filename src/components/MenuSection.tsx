import { Category } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="mb-20 scroll-mt-24">
      <div className="flex items-center mb-10">
        <h2 className="text-4xl font-black text-ts-white uppercase tracking-tighter drop-shadow-md">{category.title}</h2>
        <div className="ml-6 flex-grow h-px bg-gradient-to-r from-ts-red via-ts-red/50 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <MenuCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
