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
      {/* Header — neutral bg */}
      <section className="bg-[#F8F9FA] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Gallery" title="A feast for the eyes." subtitle="Cinematic moments captured in golden light." />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  active === c
                    ? "bg-gradient-gold text-ink shadow-gold"
                    : "border border-black/10 bg-white text-ink/70 hover:border-[#FFC300]/60 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid — white bg */}
      <section className="bg-white py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((p, i) => (
              <motion.button
                key={p.src + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                onClick={() => setOpen(p.src)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-black/06 bg-[#F2F2F2] shadow-card"
              >
                <img
                  src={p.src}
                  alt=""
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-40 transition-opacity group-hover:opacity-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-60 grid place-items-center bg-black/92 p-6 backdrop-blur-sm"
        >
          <button
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 border border-white/20 text-white transition-colors hover:bg-white/20"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={open}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </SiteLayout>
  );
}
