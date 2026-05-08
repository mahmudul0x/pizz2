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
      className="group relative overflow-hidden rounded-3xl bg-white border border-black/05 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover hover:border-[#FFC300]/30"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />

        {item.tag && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${
              item.tag === "Hot"
                ? "bg-[#E8A628] text-white"
                : item.tag === "New"
                ? "bg-white text-ink"
                : "bg-gradient-gold text-ink"
            }`}
          >
            {item.tag}
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3">
          <div className="text-[10px] uppercase tracking-widest text-[#FFC300]/90">{item.category}</div>
          <h3 className="font-display text-xl font-bold leading-tight text-white">{item.name}</h3>
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="line-clamp-2 text-xs text-ink-muted leading-relaxed">{item.description}</p>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-display text-xl font-black text-gold">৳{item.price}</span>
          <button
            aria-label={`Add ${item.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-ink shadow-gold transition-all hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,195,0,0.45)]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
