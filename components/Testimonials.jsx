"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "We went from lost garments every week to zero mix-ups in six months. Customers noticed before we did.",
    name: "Rohit Malhotra",
    role: "Owner, PressPoint — Delhi",
  },
  {
    quote:
      "Three outlets, one dashboard. I check my daily settlement from home while the drums are still spinning.",
    name: "Sneha Kulkarni",
    role: "Founder, Aqua Laundry Co. — Pune",
  },
  {
    quote:
      "The premium feel of the customer updates alone justified the price. We raised our rates 20% after switching.",
    name: "Arjun Reddy",
    role: "Director, White Collar Dry Cleaners — Hyderabad",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="kicker mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Loved by owners who <span className="text-gradient">sweat the details.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass flex flex-col rounded-3xl p-8"
            >
              <div className="mb-5 font-display text-5xl leading-none text-[var(--accent)]/60">“</div>
              <blockquote className="flex-1 leading-relaxed text-[var(--ink-dim)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7">
                <div className="hairline mb-5" />
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="mt-0.5 text-xs text-[var(--ink-dim)]">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
