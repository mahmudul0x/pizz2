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
      {/* Header — warm tint */}
      <section className="bg-[#FFF6E5] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Contact" title="Let's talk taste." subtitle="Questions, feedback or catering enquiries — we're here." />
        </div>
      </section>

      {/* Contact cards + form — white */}
      <section className="bg-white py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Contact method cards */}
          <div className="grid gap-5 lg:grid-cols-3">
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
                className="group rounded-2xl bg-white border border-black/06 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-[#FFC300]/40 hover:shadow-card-hover"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-ink shadow-gold">
                  <I className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-gold font-semibold">{label}</div>
                <div className="mt-1 font-display text-xl font-bold text-ink">{value}</div>
              </motion.a>
            ))}
          </div>

          {/* Form + Map */}
          <div className="mt-10 grid gap-0 overflow-hidden rounded-3xl border border-black/06 shadow-card lg:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              {done ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-ink shadow-gold">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-black text-ink">Message sent!</h3>
                    <p className="mt-2 text-sm text-ink-muted">We'll get back to you very soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4">
                  <h3 className="font-display text-2xl font-black text-ink">Send us a message</h3>
                  <input
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20"
                  />
                  <input
                    placeholder="Subject"
                    className="rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind…"
                    className="rounded-xl border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-[#FFC300]/60 focus:ring-2 focus:ring-[#FFC300]/20 resize-none"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-ink shadow-gold transition-all hover:scale-105">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
            <div className="relative min-h-90 bg-[#F2F2F2]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Dinajpur+Bangladesh&output=embed"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
              />
              <div className="absolute left-4 top-4 rounded-xl border border-[#FFC300]/30 bg-white/90 px-4 py-2.5 backdrop-blur-sm shadow-card">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                  <MapPin className="h-3.5 w-3.5" /> 3 Branches · Dinajpur · Bogura · Rangpur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
