import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pizz & Burg" },
      { name: "description", content: "Get in touch with Pizz & Burg. Call, email or WhatsApp us anytime." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [done, setDone] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionHeader eyebrow="Contact" title="Let's talk taste." subtitle="Questions, feedback or catering enquiries — we're here." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { icon: Phone, label: "Call us", value: "01749-281818", href: "tel:01749281818" },
            { icon: Mail, label: "Email", value: "pizzandburg@gmail.com", href: "mailto:pizzandburg@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/8801749281818" },
          ].map(({ icon: I, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-jet shadow-gold">
                <I className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-widest text-gold">{label}</div>
              <div className="mt-1 font-display text-xl font-bold">{value}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 grid gap-8 overflow-hidden rounded-3xl glass-card lg:grid-cols-2">
          <div className="p-8 md:p-10">
            {done ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-jet shadow-gold"><Check className="h-6 w-6" /></div>
                  <h3 className="mt-4 font-display text-2xl font-black">Message sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll get back to you very soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4">
                <h3 className="font-display text-2xl font-black">Send us a message</h3>
                <input required placeholder="Your name" className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20" />
                <input required type="email" placeholder="Email address" className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20" />
                <input placeholder="Subject" className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20" />
                <textarea required rows={5} placeholder="Tell us what's on your mind…" className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-jet shadow-gold">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
          <div className="relative min-h-[360px]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Dinajpur+Bangladesh&output=embed"
              className="h-full w-full"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              loading="lazy"
            />
            <div className="absolute left-6 top-6 rounded-xl glass px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                <MapPin className="h-3.5 w-3.5" /> 3 Branches • Dinajpur • Bogura • Rangpur
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
