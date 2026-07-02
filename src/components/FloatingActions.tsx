import { ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <Link
        to="/menu"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-bold text-jet shadow-gold pulse-glow"
      >
        <ShoppingBag className="h-4 w-4" /> Order Now
      </Link>
    </div>
  );
}
