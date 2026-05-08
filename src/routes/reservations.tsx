import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar as CalendarIcon } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { branches } from "@/data/menu";
import interior from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Pizz & Burg" },
      { name: "description", content: "Reserve a table at Pizz & Burg in Dinajpur, Bogura or Rangpur." },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  return (
    <SiteLayout>
      {/* Header */}
      <section className="bg-[#FFF6E5] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Reservations"
            title="Book your golden table."
            subtitle="Reserve your spot for an unforgettable evening."
          />
        </div>
      </section>

      {/* Form card */}
      <section className="bg-white py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-0 overflow-hidden rounded-3xl border border-black/06 shadow-card lg:grid-cols-5">
            {/* Side image */}
            <div className="relative hidden lg:col-span-2 lg:block">
              <img src={interior} alt="" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/60" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-display text-3xl font-black text-white">Cinematic dining awaits.</h3>
                <p className="mt-2 text-sm text-white/70">Golden ambiance, warm lighting and an experience worth dressing up for.</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 lg:col-span-3">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid h-full place-items-center text-center"
                >
                  <div>
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-ink shadow-gold">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-black text-ink">Reservation received!</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-muted">We'll confirm your table by phone shortly. See you soon at Pizz & Burg.</p>
                    <button
                      onClick={() => setDone(false)}
                      className="mt-6 rounded-full border border-[#FFC300]/50 px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gradient-gold hover:text-ink"
                    >
                      Make another booking
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
                    <CalendarIcon className="h-3.5 w-3.5" /> Reserve a table
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Select label="Branch" name="branch" options={branches.map((b) => b.city)} />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Date" name="date" type="date" min={today} required />
                    <Field label="Time" name="time" type="time" required />
                    <Select label="Guests" name="guests" options={["1","2","3","4","5","6","7","8+"]} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-ink/60">Notes</label>
                    <textarea
                      name="notes"
                      rows={3}
                      className="w-full rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40 transition focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20 resize-none"
                      placeholder="Any allergies, special occasions…"
                    />
                  </div>
                  <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105">
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-ink/60">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none transition focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20"
      />
    </div>
  );
}

function Select({ label, options, name }: { label: string; options: string[]; name: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-ink/60">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none transition focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
