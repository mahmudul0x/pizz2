import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import volcano from "@/assets/item-volcano-pizza.jpg";
import ghost   from "@/assets/item-ghost-burger.jpg";
import fatboy  from "@/assets/item-fatboy.jpg";
import pizza   from "@/assets/hero-pizza.jpg";
import pasta   from "@/assets/item-pasta.jpg";

export const Route = createFileRoute("/signature")({
  head: () => ({
    meta: [
      { title: "Signature Items — Pizz & Burg" },
      { name: "description", content: "Discover the iconic dishes that built our reputation: Cheesy Volcano Pizza, Ghost Naga Burger, Fat Boy and more." },
    ],
  }),
  component: SignaturePage,
});

const items = [
  { name: "Cheesy Volcano Pizza",      tag: "The flagship", desc: "An erupting core of molten mozzarella surrounded by crisp wood-fired crust, pepperoni and chili oil. The dish that put us on the map.", img: volcano, ingredients: ["Mozzarella","Pepperoni","Chili oil","San Marzano"] },
  { name: "Ghost Naga Chicken Burger", tag: "The challenge", desc: "Hand-breaded chicken thigh, marinated 24 hours, fired up with ghost-naga heat and cooled with sriracha mayo.", img: ghost,   ingredients: ["Ghost naga","Buttermilk chicken","Jalapeño","Sriracha mayo"] },
  { name: "Fat Boy Burger",            tag: "The legend",   desc: "Three smashed beef patties, triple cheddar, smoked sauce — built for serious appetites.", img: fatboy,  ingredients: ["Triple beef","Aged cheddar","Smoked sauce","Brioche bun"] },
  { name: "Napoli Meat Feast",         tag: "The classic",  desc: "An indulgent stack of pepperoni, sausage, beef and roasted peppers on a crisp Neapolitan base.", img: pizza,   ingredients: ["Pepperoni","Italian sausage","Beef","Roasted peppers"] },
  { name: "Alfredo Chicken Pasta",     tag: "The comfort",  desc: "Silky parmesan alfredo coats every strand, topped with grilled chicken and fresh herbs.", img: pasta,   ingredients: ["Parmesan","Cream","Grilled chicken","Herbs"] },
];

function SignaturePage() {
  return (
    <SiteLayout>
      {/* Header */}
      <section className="bg-[#1E1C1A] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Signature"
            title="The dishes that define us."
            subtitle="Five icons crafted with obsession — every bite a reason to come back."
          />
        </div>
      </section>

      {/* Alternating items */}
      <section className="bg-[#181512] py-16 pb-24">
        <div className="mx-auto max-w-7xl space-y-28 px-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Image */}
              <div className="relative [direction:ltr]">
                {/* Ambient amber glow — chandelier effect */}
                <div
                  className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-50 blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(232,166,40,0.35), transparent 70%)" }}
                />
                <div className="overflow-hidden rounded-3xl border border-[#E8A628]/18 shadow-deep">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="[direction:ltr]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F5B800]/35 bg-[#E8A628]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                  <Flame className="h-3 w-3" /> {it.tag}
                </span>
                <h3 className="mt-4 font-display text-5xl font-black text-[#F0E8D8] md:text-6xl">{it.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#9E8E78]">{it.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {it.ingredients.map((g) => (
                    <span key={g}
                      className="rounded-full border border-[#E8A628]/25 bg-[#2A2520] px-3 py-1 text-xs font-medium text-[#F0E8D8]/80">
                      {g}
                    </span>
                  ))}
                </div>
                <Link to="/menu"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-[#181512] shadow-gold transition-all hover:scale-105">
                  Order this <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
