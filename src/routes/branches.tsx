import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { branches } from "@/data/menu";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Pizz & Burg" },
      { name: "description", content: "Visit Pizz & Burg in Dinajpur, Bogura or Rangpur. Find addresses, hours and directions." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <section className="bg-[#1E1C1A] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Branches"
            title="Find your nearest Pizz & Burg."
            subtitle="Three vibrant locations across North Bengal — each with its own atmosphere."
          />
        </div>
      </section>

      {/* Branch cards */}
      <section className="bg-[#181512] py-16 pb-24">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid gap-0 overflow-hidden rounded-3xl border border-[#E8A628]/15 shadow-card lg:grid-cols-2"
            >
              {/* Map — dark filtered */}
              <div className="aspect-video w-full lg:aspect-auto">
                <iframe
                  title={b.name}
                  src={b.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320, filter: "grayscale(0.7) contrast(1.0) brightness(0.70)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info */}
              <div className="bg-[#2A2520] p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#F5B800] font-semibold">
                  Branch {i + 1}
                </div>
                <h3 className="mt-1 font-display text-4xl font-black text-[#F0E8D8] md:text-5xl">{b.city}</h3>
                <p className="mt-2 text-sm text-[#9E8E78]">{b.name}</p>

                <div className="mt-6 space-y-3 text-sm text-[#F0E8D8]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B800]" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-[#F5B800]" />
                    <span>{b.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#F5B800]" />
                    <a href={`tel:${b.phone}`} className="transition-colors hover:text-[#F5B800]">{b.phone}</a>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-[#181512] shadow-gold transition-all hover:scale-105"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${b.phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8A628]/30 px-5 py-2.5 text-sm font-semibold text-[#F0E8D8] transition-all hover:border-[#F5B800]/60 hover:text-[#F5B800]"
                  >
                    Call Branch
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
