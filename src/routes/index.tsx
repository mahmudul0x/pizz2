import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Star, Utensils, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MenuCard } from "@/components/MenuCard";
import { menu, branches } from "@/data/menu";
import aboutSpread from "@/assets/about-spread.jpg";
import hex from "@/assets/gallery-hex.jpg";
import bar from "@/assets/gallery-bar.jpg";
import dining from "@/assets/gallery-dining.jpg";
import mirror from "@/assets/gallery-mirror.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const featured = menu.filter((m) =>
  ["Fat Boy Burger", "Cheesy Volcano Pizza", "Ghost Naga Chicken", "Alfredo Chicken Pasta", "Premium Beef Steak", "Molten Lava Cake"].includes(m.name)
);

function Index() {
  return (
    <SiteLayout>
      <Hero />

      {/* Marquee — warm amber strip */}
      <div className="border-y border-[#FFC300]/20 bg-[#FFF6E5] py-4 overflow-hidden">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl font-black tracking-tight md:text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {["Cheesy Volcano Pizza", "★", "Fat Boy Burger", "★", "Ghost Naga Heat", "★", "Wood-Fired Pizza", "★", "Premium Steak", "★", "Cinematic Dining", "★"].map((t, i) => (
                <span key={i} className={i % 2 ? "text-gold" : "text-ink/50"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About — #FFFDF7 */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img src={aboutSpread} alt="Pizz & Burg signature spread" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 rounded-2xl bg-white border border-[#FFC300]/25 p-5 text-center shadow-card">
              <div className="font-display text-4xl font-black text-gold">10K+</div>
              <div className="text-[10px] uppercase tracking-widest text-ink-muted">Happy guests this month</div>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="About the Brand"
              title="A taste experience for the next generation."
              subtitle="Pizz & Burg is one of North Bengal's most loved premium fast-food destinations. From signature burgers and wood-fired pizza to a cinematic, Instagrammable interior — every visit feels like a moment worth sharing."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Flame, label: "Wood-fired pizzas" },
                { icon: Utensils, label: "Hand-crafted burgers" },
                { icon: Star, label: "Premium ingredients" },
                { icon: MapPin, label: "3 vibrant branches" },
              ].map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl bg-white border border-black/05 p-4 shadow-card transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#FFC300]/12 text-gold">
                    <I className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105">
                Browse Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/branches" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold">
                Find a Branch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="gold-line-divider" />
      </div>

      {/* Featured Menu — #FFFFFF */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Featured Menu" title="The crowd favourites." subtitle="Six iconic dishes that define what Pizz & Burg is all about." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m, i) => <MenuCard key={m.name} item={m} index={i} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFC300] px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gradient-gold hover:text-ink hover:shadow-gold">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interior gallery — #F8F9FA */}
      <section className="bg-[#F8F9FA] py-24">
        {/* Soft wave top */}
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Interior Experience" title="Where every corner is Instagrammable." subtitle="Golden hexagonal walls, warm hanging lights, leather booths and a cocktail bar atmosphere — designed for moments worth sharing." />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {[
              { src: hex, span: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto" },
              { src: bar, span: "aspect-square" },
              { src: dining, span: "aspect-square" },
              { src: mirror, span: "aspect-square" },
              { src: aboutSpread, span: "aspect-square" },
            ].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-black/06 shadow-card ${g.span}`}
              >
                <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-50 transition-opacity group-hover:opacity-20" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105">
              Explore Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Branches — #FFF6E5 warm tint */}
      <section className="bg-warm-tint py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Find Us" title="Three vibrant branches." subtitle="Visit us across Dinajpur, Bogura and Rangpur." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {branches.map((b, i) => (
              <motion.div
                key={b.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-black/05 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-[#FFC300]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
              >
                {/* Gold accent top line */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-gold rounded-t-3xl transition-transform duration-500 group-hover:scale-x-100" />
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Branch</div>
                <h3 className="mt-1 font-display text-3xl font-black text-ink">{b.city}</h3>
                <p className="mt-3 text-sm text-ink-muted">{b.address}</p>
                <p className="mt-2 text-sm text-ink/70">{b.hours}</p>
                <Link to="/branches" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-gap hover:gap-2">
                  View on map <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-gold p-10 text-center shadow-gold md:p-16">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />
          {/* Warm glow orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/60">Ready to dine?</p>
            <h3 className="mt-2 font-display text-4xl font-black text-ink md:text-6xl">Hungry yet?</h3>
            <p className="mx-auto mt-3 max-w-xl text-ink/75 text-base">Reserve your table or order online — the experience is just one click away.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-[#FFC300] transition-all hover:scale-105">
                Reserve Table
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/25 bg-white/30 px-7 py-3.5 text-sm font-bold text-ink backdrop-blur-sm transition-all hover:bg-ink hover:text-[#FFC300]">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
