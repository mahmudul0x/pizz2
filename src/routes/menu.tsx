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
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <SectionHeader eyebrow="The Menu" title="Crafted to crave." subtitle="From signature burgers to wood-fired pizza, every dish is a moment worth savouring." />

        <div className="mx-auto mt-10 flex max-w-full flex-wrap items-center justify-center gap-2 overflow-x-auto">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active === c
                  ? "bg-gradient-gold text-jet shadow-gold"
                  : "border border-border bg-white/5 text-foreground/80 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((m, i) => <MenuCard key={m.name} item={m} index={i} />)}
        </motion.div>
      </section>
    </SiteLayout>
  );
}
