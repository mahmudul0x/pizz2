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

const featured = menu.filter((m) => ["Fat Boy Burger", "Cheesy Volcano Pizza", "Ghost Naga Chicken", "Alfredo Chicken Pasta", "Premium Beef Steak", "Molten Lava Cake"].includes(m.name));

function Index() {
  return (
    <SiteLayout>
      <Hero />

      {/* Marquee */}
      <div className="border-y border-border/40 bg-jet/60 py-4 overflow-hidden">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl font-black tracking-tight md:text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {["Cheesy Volcano Pizza", "★", "Fat Boy Burger", "★", "Ghost Naga Heat", "★", "Wood-Fired Pizza", "★", "Premium Steak", "★", "Cinematic Dining", "★"].map((t, i) => (
                <span key={i} className={i % 2 ? "text-gold" : "text-foreground/70"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-deep">
              <img src={aboutSpread} alt="Pizz & Burg signature spread" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-jet/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 rounded-2xl glass p-5 text-center shadow-glow">
              <div className="font-display text-4xl font-black text-gold">10K+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Happy guests this month</div>
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
                <div key={label} className="flex items-center gap-3 rounded-xl glass-card p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold/10 text-gold">
                    <I className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-bold text-jet shadow-gold">
                Browse Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/branches" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
                Find a Branch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Featured Menu" title="The crowd favourites." subtitle="Six iconic dishes that define what Pizz & Burg is all about." />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((m, i) => <MenuCard key={m.name} item={m} index={i} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-jet">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Interior cinematic strip */}
      <section className="hex-pattern relative py-24">
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
                className={`group relative overflow-hidden rounded-2xl border border-border/60 ${g.span}`}
              >
                <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/70 to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-jet shadow-gold">
              Explore Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Branches teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Find Us" title="Three vibrant branches." subtitle="Visit us across Dinajpur, Bogura and Rangpur." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {branches.map((b, i) => (
            <motion.div
              key={b.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:border-gold/60 hover:shadow-glow"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Branch</div>
              <h3 className="mt-1 font-display text-3xl font-black">{b.city}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.address}</p>
              <p className="mt-2 text-sm text-foreground/70">{b.hours}</p>
              <Link to="/branches" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                View on map <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-gold p-10 text-center shadow-gold md:p-16">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,oklch(0.10_0.005_60)_1px,transparent_1px)] [background-size:14px_14px]" />
          <div className="relative">
            <h3 className="font-display text-4xl font-black text-jet md:text-6xl">Hungry yet?</h3>
            <p className="mx-auto mt-3 max-w-xl text-jet/85">Reserve your table or order online — the experience is just one click away.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-jet px-6 py-3.5 text-sm font-bold text-gold hover:scale-105 transition">Reserve Table</Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-jet px-6 py-3.5 text-sm font-bold text-jet hover:bg-jet hover:text-gold transition">Order Now</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
