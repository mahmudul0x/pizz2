import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-footer border-t border-[#E8A628]/25">
      {/* Gold line accent */}
      <div className="gold-line-divider absolute inset-x-0 top-0" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink-muted leading-relaxed">
            Premium burgers, pizzas and a cinematic dining experience across
            North Bengal.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              className="grid h-9 w-9 place-items-center rounded-full border border-[#FFC300]/30 bg-white text-ink/60 transition-colors hover:border-[#FFC300] hover:text-gold shadow-card"
              href="#"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              className="grid h-9 w-9 place-items-center rounded-full border border-[#FFC300]/30 bg-white text-ink/60 transition-colors hover:border-[#FFC300] hover:text-gold shadow-card"
              href="#"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            <li><Link to="/menu" className="transition-colors hover:text-gold">Menu</Link></li>
            <li><Link to="/signature" className="transition-colors hover:text-gold">Signature Items</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-gold">Gallery</Link></li>
            <li><Link to="/offers" className="transition-colors hover:text-gold">Deals & Offers</Link></li>
            <li><Link to="/reservations" className="transition-colors hover:text-gold">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Branches</h4>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2 leading-snug">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Captain Tower, Ganeshtala — Dinajpur
            </li>
            <li className="flex gap-2 leading-snug">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Sydney Tower (3rd Floor) — Bogura
            </li>
            <li className="flex gap-2 leading-snug">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              RAMC Shopping Complex — Rangpur
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> 01749-281818
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> pizzandburg@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E8A628]/20 py-5 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Pizz & Burg. Cooked with heart, served with soul.
      </div>
    </footer>
  );
}
