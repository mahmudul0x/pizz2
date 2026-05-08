import { MessageCircle, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801749281818"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-deep transition-transform hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <Link
        to="/menu"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-bold text-jet shadow-gold pulse-glow"
      >
        <ShoppingBag className="h-4 w-4" /> Order Now
      </Link>
    </div>
  );
}
