"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Single Store",
    price: "₹1,499",
    period: "/month",
    tagline: "For the neighbourhood favourite",
    features: ["1 outlet", "Unlimited orders", "WhatsApp updates", "GST invoicing", "Basic analytics"],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹3,999",
    period: "/month",
    tagline: "For chains on the rise",
    features: ["Up to 5 outlets", "Rider app & live tracking", "WhatsApp API automation", "Advanced analytics", "Staff & shift management", "Priority support"],
    featured: true,
  },
  {
    name: "Empire",
    price: "Custom",
    period: "",
    tagline: "For luxury laundry brands",
    features: ["Unlimited outlets", "White-label customer app", "Dedicated success manager", "Custom integrations", "SLA & onboarding"],
    featured: false,
  },
];

export default function Billing() {
  return (
    <section id="billing" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="kicker mb-4">Billing</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Pricing as <span className="text-gold italic">clean</span> as your linen.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[var(--ink-dim)]">
            GST-ready invoices, UPI / card / cash reconciliation, and plans that
            scale from one drum to a hundred.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative rounded-3xl p-8 ${
                p.featured
                  ? "glass-deep border-[var(--accent)]/40 shadow-[0_0_80px_rgba(103,209,255,0.12)]"
                  : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 py-1 text-[10px] font-bold tracking-widest text-black">
                  MOST POPULAR
                </div>
              )}
              <div className="text-sm font-semibold text-[var(--ink-dim)]">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-5xl">{p.price}</span>
                <span className="text-sm text-[var(--ink-dim)]">{p.period}</span>
              </div>
              <div className="mt-1 text-xs italic text-[var(--ink-dim)]">{p.tagline}</div>
              <div className="hairline my-6" />
              <ul className="space-y-2.5 text-sm text-[var(--ink-dim)]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  p.featured
                    ? "bg-white text-black hover:bg-[var(--accent)]"
                    : "glass hover:border-white/25"
                }`}
              >
                {p.price === "Custom" ? "Talk to Sales" : "Choose Plan"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
