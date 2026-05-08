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
      {/* Header */}
      <section className="bg-[#1E1C1A] pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Contact" title="Let's talk taste."
            subtitle="Questions, feedback or catering enquiries — we're here." />
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="bg-[#181512] py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Method cards */}
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { icon: Phone,         label: "Call us",  value: "01749-281818",         href: "tel:01749281818" },
              { icon: Mail,          label: "Email",    value: "pizzandburg@gmail.com", href: "mailto:pizzandburg@gmail.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us",          href: "https://wa.me/8801749281818" },
            ].map(({ icon: I, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-[#E8A628]/15 bg-[#2A2520] p-6 shadow-card transition-all hover:-translate-y-1 hover:border-[#F5B800]/40 hover:shadow-gold"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-[#181512] shadow-gold">
                  <I className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-[#F5B800] font-semibold">{label}</div>
                <div className="mt-1 font-display text-xl font-bold text-[#F0E8D8]">{value}</div>
              </motion.a>
            ))}
          </div>

          {/* Form + Map */}
          <div className="mt-10 grid gap-0 overflow-hidden rounded-3xl border border-[#E8A628]/15 shadow-card lg:grid-cols-2">
            {/* Form */}
            <div className="bg-[#2A2520] p-8 md:p-10">
              {done ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-[#181512] shadow-gold">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-black text-[#F0E8D8]">Message sent!</h3>
                    <p className="mt-2 text-sm text-[#9E8E78]">We'll get back to you very soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4">
                  <h3 className="font-display text-2xl font-black text-[#F0E8D8]">Send us a message</h3>
                  {[
                    { placeholder: "Your name",        type: "text",  required: true  },
                    { placeholder: "Email address",    type: "email", required: true  },
                    { placeholder: "Subject",          type: "text",  required: false },
                  ].map(({ placeholder, type, required }) => (
                    <input
                      key={placeholder}
                      type={type}
                      required={required}
                      placeholder={placeholder}
                      className="rounded-xl border border-[#E8A628]/18 bg-[#1E1C1A] px-4 py-3 text-sm text-[#F0E8D8] outline-none placeholder:text-[#9E8E78]/60 transition focus:border-[#F5B800]/55 focus:ring-2 focus:ring-[#F5B800]/15"
                    />
                  ))}
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind…"
                    className="resize-none rounded-xl border border-[#E8A628]/18 bg-[#1E1C1A] px-4 py-3 text-sm text-[#F0E8D8] outline-none placeholder:text-[#9E8E78]/60 transition focus:border-[#F5B800]/55 focus:ring-2 focus:ring-[#F5B800]/15"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-[#181512] shadow-gold transition-all hover:scale-105">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="relative min-h-90 bg-[#1E1C1A]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Dinajpur+Bangladesh&output=embed"
                className="h-full w-full"
                style={{ border: 0, filter: "grayscale(0.6) contrast(1.05) brightness(0.75)" }}
                loading="lazy"
              />
              <div className="absolute left-4 top-4 rounded-xl border border-[#E8A628]/30 bg-[#181512]/85 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5B800]">
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
