import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-jet/80">
      <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium burgers, pizzas and a cinematic dining experience across
            North Bengal.
          </p>
          <div className="mt-5 flex gap-3">
            <a className="grid h-9 w-9 place-items-center rounded-full glass hover:text-gold" href="#"><Facebook className="h-4 w-4" /></a>
            <a className="grid h-9 w-9 place-items-center rounded-full glass hover:text-gold" href="#"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/signature" className="hover:text-gold">Signature Items</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/offers" className="hover:text-gold">Deals & Offers</Link></li>
            <li><Link to="/reservations" className="hover:text-gold">Reservations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Branches</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Captain Tower, Ganeshtala — Dinajpur</li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Sydney Tower (3rd Floor) — Bogura</li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> RAMC Shopping Complex — Rangpur</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 01749-281818</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> pizzandburg@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pizz & Burg. Cooked with heart, served with soul.
      </div>
    </footer>
  );
}
