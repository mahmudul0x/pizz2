import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { useBranch } from "@/context/BranchContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/signature", label: "Signature" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { selected, reset } = useBranch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1.5" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "navbar-glass"
              : "bg-[#181512]/60 backdrop-blur-md border border-[#E8A628]/15"
          }`}
        >
          <Link to="/"><Logo /></Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-[#F0E8D8]/70 transition-colors hover:text-[#F5B800]"
                activeProps={{ className: "text-[#F5B800] font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {selected && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E8A628]/30 bg-[#2A2520] px-3.5 py-2 text-xs font-semibold text-[#F5B800] transition-all hover:border-[#F5B800]/60 hover:bg-[#2A2520]"
                title="Change branch"
              >
                <MapPin className="h-3.5 w-3.5" />
                {selected.city}
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
            )}
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[#181512] shadow-gold transition-all hover:scale-105 hover:shadow-[0_8px_28px_rgba(245,184,0,0.5)]"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-lg glass lg:hidden"
          >
            {open
              ? <X className="h-5 w-5 text-[#F0E8D8]" />
              : <Menu className="h-5 w-5 text-[#F0E8D8]" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 overflow-hidden rounded-2xl glass p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                {selected && (
                  <button
                    onClick={() => { reset(); setOpen(false); }}
                    className="mb-1 flex items-center gap-2 rounded-lg border border-[#E8A628]/25 bg-[#E8A628]/10 px-3 py-2.5 text-sm font-semibold text-[#F5B800]"
                  >
                    <MapPin className="h-4 w-4" />
                    {selected.city} Branch
                    <span className="ml-auto text-xs font-normal text-[#9E8E78]">Change</span>
                  </button>
                )}
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-[#F0E8D8]/80 transition-colors hover:bg-[#E8A628]/10 hover:text-[#F5B800]"
                    activeProps={{ className: "text-[#F5B800] bg-[#E8A628]/10" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/menu"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-[#181512] shadow-gold"
                >
                  <ShoppingBag className="h-4 w-4" /> Order Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
