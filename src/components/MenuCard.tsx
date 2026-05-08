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
      className="group relative overflow-hidden rounded-3xl border border-[#E8A628]/15 bg-[#2A2520] shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-[#F5B800]/45 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
    >
      {/* Ambient amber glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 30px rgba(232,166,40,0.08)" }} />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay mimicking restaurant warm lighting */}
        <div className="absolute inset-0 bg-linear-to-t from-[#181512] via-[#181512]/35 to-transparent opacity-90" />

        {item.tag && (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-gold ${
            item.tag === "Hot"      ? "bg-gradient-amber-wall text-[#181512]"
            : item.tag === "New"   ? "bg-[#F0E8D8] text-[#181512]"
            :                        "bg-gradient-gold text-[#181512]"
          }`}>
            {item.tag}
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3">
          <div className="text-[10px] uppercase tracking-widest text-[#F5B800]/85">{item.category}</div>
          <h3 className="font-display text-xl font-bold leading-tight text-[#F0E8D8]">{item.name}</h3>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="line-clamp-2 text-xs leading-relaxed text-[#9E8E78]">{item.description}</p>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-display text-xl font-black text-[#F5B800]">৳{item.price}</span>
          <button
            aria-label={`Add ${item.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-[#181512] shadow-gold transition-all hover:scale-110 hover:shadow-[0_8px_24px_rgba(245,184,0,0.55)]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
