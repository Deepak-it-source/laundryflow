"use client";

import { motion } from "framer-motion";

const CHANNELS = [
  { icon: "📞", label: "Call us", value: "+91 98765 43210" },
  { icon: "✉️", label: "Email", value: "hello@laundryflow.in" },
  { icon: "📍", label: "Head office", value: "Koramangala, Bengaluru" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="kicker mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-6xl">
              Let&apos;s get your store <span className="text-gradient">flowing.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[var(--ink-dim)]">
              Book a 20-minute demo and see your own store running on
              LaundryFlow — orders, riders, billing and all.
            </p>

            <div className="mt-10 space-y-5">
              {CHANNELS.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-lg">
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-xs tracking-wider text-[var(--ink-dim)]">{c.label}</div>
                    <div className="text-sm font-semibold">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-deep rounded-3xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs tracking-wider text-[var(--ink-dim)]">NAME</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/60"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs tracking-wider text-[var(--ink-dim)]">PHONE</span>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/60"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-xs tracking-wider text-[var(--ink-dim)]">STORE / BRAND NAME</span>
              <input
                type="text"
                placeholder="e.g. Sparkle Dry Cleaners"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/60"
              />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-xs tracking-wider text-[var(--ink-dim)]">MESSAGE</span>
              <textarea
                rows={4}
                placeholder="Tell us about your store…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/60"
              />
            </label>
            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-white py-3.5 text-sm font-bold text-black transition hover:bg-[var(--accent)]"
            >
              Book a Free Demo
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
