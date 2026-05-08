import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import interior from "@/assets/hero-interior.jpg";

const slides = [
  {
    img: burger,
    eyebrow: "Signature Burger",
    title: ["Cooked With Heart,", "Served With Soul"],
    sub: "The ultimate burger & pizza experience in Bangladesh.",
    cta1: { to: "/menu" as const, label: "Explore Menu" },
    cta2: { to: "/reservations" as const, label: "Reserve Table" },
  },
  {
    img: pizza,
    eyebrow: "Premium Pizza",
    title: ["Every Slice", "Tells A Story"],
    sub: "Wood-fired, hand-stretched and dripping with melted indulgence.",
    cta1: { to: "/signature" as const, label: "View Pizzas" },
    cta2: { to: "/reservations" as const, label: "Reserve Table" },
  },
  {
    img: interior,
    eyebrow: "The Experience",
    title: ["More Than Food —", "It's An Experience"],
    sub: "A cinematic dining lounge with golden ambiance and warm vibes.",
    cta1: { to: "/branches" as const, label: "Visit Branch" },
    cta2: { to: "/gallery" as const, label: "Explore Interior" },
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* Background slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 7, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Warm overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      {/* Warm golden tint at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFC300]/20 to-transparent" />

      {/* Floating gold sparkles */}
      {Array.from({ length: 10 }).map((_, k) => (
        <motion.span
          key={k}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#FFC300]/70"
          animate={{ y: ["0%", "-20%", "0%"], opacity: [0, 0.9, 0] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC300]/60 bg-[#FFC300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FFC300] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC300] pulse-glow" />
              {s.eyebrow}
            </span>

            <h1 className="mt-5 font-display text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              <span className="block drop-shadow-lg">{s.title[0]}</span>
              <span className="block text-gradient-gold drop-shadow-lg">{s.title[1]}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg drop-shadow-sm">{s.sub}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={s.cta1.to}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105 hover:shadow-[0_12px_32px_rgba(255,195,0,0.45)]"
              >
                {s.cta1.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={s.cta2.to}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-[#FFC300] hover:bg-[#FFC300]/15 hover:text-[#FFC300]"
              >
                <CalendarDays className="h-4 w-4" />
                {s.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-6 flex items-center gap-3">
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Slide ${k + 1}`}
              className="relative h-1 w-12 overflow-hidden rounded-full bg-white/25"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-gradient-gold ${k === i ? "w-full" : "w-0"}`}
                style={{ transition: k === i ? "width 6.5s linear" : "width 0.3s" }}
              />
            </button>
          ))}
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-10 right-6 hidden items-center gap-8 rounded-2xl border border-white/15 bg-black/30 px-6 py-4 backdrop-blur-md md:flex">
          {[
            ["3", "Branches"],
            ["50+", "Menu Items"],
            ["10K+", "Happy Guests"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-2xl font-black text-[#FFC300]">{n}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
