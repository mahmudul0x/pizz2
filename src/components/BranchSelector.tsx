import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { branches } from "@/data/menu";
import { useBranch, type Branch } from "@/context/BranchContext";
import { Logo } from "./Logo";

export function BranchSelector() {
  const { selected, select } = useBranch();

  // Lock body scroll while the selector is visible
  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <AnimatePresence>
      {!selected && (
        <motion.div
          key="branch-selector"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] overflow-y-auto bg-[#181512]"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none fixed left-[-10%] top-[-10%] h-[40vw] w-[40vw] rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #F5B800, transparent 70%)" }} />
          <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] h-[40vw] w-[40vw] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #E8A628, transparent 70%)" }} />

          <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-5xl">
            {/* Logo + headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <Logo />
              </div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#F5B800] font-semibold mb-3">
                Welcome
              </p>
              <h1 className="font-display text-4xl font-black text-[#F0E8D8] md:text-6xl">
                Choose Your Branch
              </h1>
              <p className="mt-3 text-sm text-[#9E8E78] max-w-md mx-auto">
                Select a location to see branch-specific information, hours, and more.
              </p>
            </motion.div>

            {/* Branch cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {branches.map((branch, i) => (
                <BranchCard
                  key={branch.city}
                  branch={branch}
                  index={i}
                  onSelect={select}
                />
              ))}
            </div>

            {/* Subtle footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 text-center text-xs text-[#9E8E78]/60"
            >
              You can change your branch at any time from the navigation bar.
            </motion.p>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BranchCard({
  branch,
  index,
  onSelect,
}: {
  branch: Branch;
  index: number;
  onSelect: (b: Branch) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onSelect(branch)}
      className="group relative w-full overflow-hidden rounded-3xl border border-[#E8A628]/18 bg-[#2A2520] p-7 text-left transition-all duration-300 hover:border-[#F5B800]/55 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_40px_rgba(245,184,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
    >
      {/* Gold top bar on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-3xl bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />

      {/* Branch number badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8A628]/25 bg-[#E8A628]/10 px-3 py-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5B800]">
          Branch {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* City name */}
      <h2 className="font-display text-4xl font-black text-[#F0E8D8] transition-colors group-hover:text-[#F5B800]">
        {branch.city}
      </h2>

      <div className="mt-5 space-y-2.5 text-sm">
        <div className="flex items-start gap-2.5 text-[#9E8E78]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B800]/70" />
          <span>{branch.address}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#9E8E78]">
          <Clock className="h-4 w-4 shrink-0 text-[#F5B800]/70" />
          <span>{branch.hours}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#9E8E78]">
          <Phone className="h-4 w-4 shrink-0 text-[#F5B800]/70" />
          <span>{branch.phone}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#F5B800] transition-all group-hover:gap-3">
        Enter {branch.city} <ArrowRight className="h-4 w-4" />
      </div>
    </motion.button>
  );
}
