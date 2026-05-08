import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[#E8A628]/20 bg-[#0F0D0B]">
      {/* Gold shimmer top line */}
      <div className="gold-line-divider absolute inset-x-0 top-0" />

      {/* Amber wall panel accent strip */}
      <div className="h-1 w-full bg-gradient-amber-wall opacity-70" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9E8E78]">
            Premium burgers, pizzas and a cinematic dining experience across North Bengal.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#E8A628]/25 bg-[#1E1C1A] text-[#9E8E78] transition-all hover:border-[#F5B800]/60 hover:text-[#F5B800] hover:shadow-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#E8A628]/25 bg-[#1E1C1A] text-[#9E8E78] transition-all hover:border-[#F5B800]/60 hover:text-[#F5B800] hover:shadow-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F5B800]">Explore</h4>
          <ul className="space-y-2.5 text-sm text-[#9E8E78]">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/signature", label: "Signature Items" },
              { to: "/gallery", label: "Gallery" },
              { to: "/offers", label: "Deals & Offers" },
              { to: "/reservations", label: "Reservations" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to as "/"} className="transition-colors hover:text-[#F5B800]">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F5B800]">Branches</h4>
          <ul className="space-y-3 text-sm text-[#9E8E78]">
            {[
              "Captain Tower, Ganeshtala — Dinajpur",
              "Sydney Tower (3rd Floor) — Bogura",
              "RAMC Shopping Complex — Rangpur",
            ].map((addr) => (
              <li key={addr} className="flex gap-2 leading-snug">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B800]" />
                {addr}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F5B800]">Contact</h4>
          <ul className="space-y-3 text-sm text-[#9E8E78]">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#F5B800]" /> 01749-281818
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#F5B800]" /> pizzandburg@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E8A628]/15 py-5 text-center text-xs text-[#9E8E78]">
        © {new Date().getFullYear()} Pizz & Burg. Cooked with heart, served with soul.
      </div>
    </footer>
  );
}
