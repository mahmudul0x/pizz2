import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, Tag, Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import burger from "@/assets/item-fatboy.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import volcano from "@/assets/item-volcano-pizza.jpg";
import chicken from "@/assets/item-chicken.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Deals & Offers — Pizz & Burg" },
      { name: "description", content: "Combo meals, weekend deals and limited-time flash offers at Pizz & Burg." },
    ],
  }),
  component: OffersPage,
});

const offers = [
  { title: "Family Combo", off: "30% OFF", desc: "2 large pizzas + 4 burgers + 4 drinks. Feeds the whole crew.", price: 1990, was: 2890, img: pizza, badge: "Best Value" },
  { title: "Burger Mania", off: "Buy 1 Get 1", desc: "Any signature burger comes with a free classic burger. Tuesdays only.", price: 590, was: 1180, img: burger, badge: "Tuesday Only" },
  { title: "Pizza Night", off: "25% OFF", desc: "Two medium wood-fired pizzas + garlic bread + dip. Friday & Saturday nights.", price: 1290, was: 1720, img: volcano, badge: "Weekend" },
  { title: "Crispy Bucket Deal", off: "20% OFF", desc: "8-piece fried chicken bucket with fries and dip.", price: 590, was: 740, img: chicken, badge: "All Week" },
];

function OffersPage() {
  return (
    <SiteLayout>
      {/* Header — warm tint */}
      <section className="bg-[#FFF6E5] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Deals & Offers"
            title="Hot deals, served daily."
            subtitle="Limited-time combos and weekend specials. Don't miss out."
          />
        </div>
      </section>

      {/* Cards — white bg */}
      <section className="bg-white py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-black/06 shadow-card transition-all hover:-translate-y-1 hover:border-[#FFC300]/35 hover:shadow-card-hover"
              >
                {/* Gold top accent on hover */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-gold rounded-t-3xl transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid sm:grid-cols-5">
                  <div className="relative sm:col-span-2 overflow-hidden">
                    <img
                      src={o.img}
                      alt={o.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink shadow-gold">
                      <Flame className="h-3 w-3" /> {o.badge}
                    </span>
                  </div>
                  <div className="p-6 sm:col-span-3">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold font-semibold">
                      <Tag className="h-3 w-3" /> {o.off}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-black text-ink md:text-3xl">{o.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{o.desc}</p>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-black text-gold">৳{o.price}</span>
                      <span className="text-sm text-ink-muted line-through">৳{o.was}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-ink-muted">
                      <Clock className="h-3.5 w-3.5 text-gold" /> Limited time only
                    </div>
                    <Link
                      to="/menu"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105"
                    >
                      Grab This Deal <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
