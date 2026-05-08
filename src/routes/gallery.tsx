import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { X } from "lucide-react";
import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import interior from "@/assets/hero-interior.jpg";
import ghost from "@/assets/item-ghost-burger.jpg";
import volcano from "@/assets/item-volcano-pizza.jpg";
import fatboy from "@/assets/item-fatboy.jpg";
import pasta from "@/assets/item-pasta.jpg";
import steak from "@/assets/item-steak.jpg";
import chicken from "@/assets/item-chicken.jpg";
import dessert from "@/assets/item-dessert.jpg";
import drink from "@/assets/item-drink.jpg";
import bar from "@/assets/gallery-bar.jpg";
import hex from "@/assets/gallery-hex.jpg";
import dining from "@/assets/gallery-dining.jpg";
import mirror from "@/assets/gallery-mirror.jpg";
import spread from "@/assets/about-spread.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pizz & Burg" },
      { name: "description", content: "Cinematic photography of our food, interior, drinks and unforgettable moments." },
    ],
  }),
  component: GalleryPage,
});

const cats = ["All", "Food", "Interior", "Desserts", "Drinks"] as const;
type Cat = (typeof cats)[number];

const photos: { src: string; cat: Cat }[] = [
  { src: burger, cat: "Food" },
  { src: hex, cat: "Interior" },
  { src: pizza, cat: "Food" },
  { src: bar, cat: "Interior" },
  { src: ghost, cat: "Food" },
  { src: dessert, cat: "Desserts" },
  { src: volcano, cat: "Food" },
  { src: dining, cat: "Interior" },
  { src: drink, cat: "Drinks" },
  { src: fatboy, cat: "Food" },
  { src: mirror, cat: "Interior" },
  { src: pasta, cat: "Food" },
  { src: steak, cat: "Food" },
  { src: interior, cat: "Interior" },
  { src: chicken, cat: "Food" },
  { src: spread, cat: "Food" },
];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionHeader eyebrow="Gallery" title="A feast for the eyes." subtitle="Cinematic moments captured in golden light." />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active === c ? "bg-gradient-gold text-jet shadow-gold" : "border border-border bg-white/5 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((p, i) => (
            <motion.button
              key={p.src + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              onClick={() => setOpen(p.src)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border/60 bg-card"
            >
              <img src={p.src} alt="" loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-jet/60 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-0" />
            </motion.button>
          ))}
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[60] grid place-items-center bg-jet/95 p-6 backdrop-blur">
          <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass">
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={open}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-deep"
          />
        </div>
      )}
    </SiteLayout>
  );
}
