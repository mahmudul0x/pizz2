import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { MenuCard } from "@/components/MenuCard";
import { categories, menu } from "@/data/menu";
import { motion } from "framer-motion";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pizz & Burg" },
      { name: "description", content: "Explore our full menu of premium burgers, wood-fired pizza, pasta, steak and more." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<"All" | (typeof categories)[number]>("All");
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <SiteLayout>
      {/* Header — dark charcoal */}
      <section className="bg-[#1E1C1A] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="The Menu"
            title="Crafted to crave."
            subtitle="From signature burgers to wood-fired pizza, every dish is a moment worth savouring."
          />
          {/* Category filter pills */}
          <div className="mx-auto mt-10 flex max-w-full flex-wrap items-center justify-center gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  active === c
                    ? "bg-gradient-gold text-[#181512] shadow-gold"
                    : "border border-[#E8A628]/25 bg-[#2A2520] text-[#F0E8D8]/65 hover:border-[#F5B800]/55 hover:text-[#F5B800]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid — near-black bg */}
      <section className="bg-[#181512] py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((m, i) => <MenuCard key={m.name} item={m} index={i} />)}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
