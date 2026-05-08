import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";

export function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-glow"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent opacity-90" />
        {item.tag && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
              item.tag === "Hot"
                ? "bg-accent text-jet"
                : item.tag === "New"
                ? "bg-cream text-jet"
                : "bg-gradient-gold text-jet"
            }`}
          >
            {item.tag}
          </span>
        )}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gold/90">{item.category}</div>
            <h3 className="font-display text-xl font-bold leading-tight">{item.name}</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-display text-xl font-black text-gold">৳{item.price}</span>
          <button
            aria-label={`Add ${item.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-jet shadow-gold transition-transform hover:scale-110"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
