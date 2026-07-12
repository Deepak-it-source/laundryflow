"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FEATURES = [
  {
    title: "Order Command Center",
    desc: "Live pipeline of every garment — received, washing, ironing, ready, delivered. Nothing slips.",
    icon: "🧺",
  },
  {
    title: "Pickup & Delivery",
    desc: "Route-optimised rider app with doorstep OTP confirmation and live customer tracking links.",
    icon: "🛵",
  },
  {
    title: "Smart Tagging",
    desc: "QR garment tags eliminate mix-ups. Scan in, scan out — a full custody trail per item.",
    icon: "🏷️",
  },
  {
    title: "Multi-Store Cloud",
    desc: "Run one outlet or fifty. Central pricing, central inventory, per-branch P&L in real time.",
    icon: "🏬",
  },
  {
    title: "Staff & Shifts",
    desc: "Attendance, productivity per presser, and incentive payouts computed automatically.",
    icon: "👔",
  },
  {
    title: "Customer Memory",
    desc: "Fabric preferences, starch levels, allergy notes — remembered forever, applied every order.",
    icon: "✨",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);

  return (
    <section ref={ref} id="features" className="relative overflow-hidden py-28 md:py-40">
      {/* Parallax backdrop reusing an uploaded frame */}
      <motion.div
        aria-hidden
        style={{ y: bgY, backgroundImage: "url(/frames/frame_052.jpg)" }}
        className="absolute inset-[-14%] bg-cover bg-center opacity-[0.14] blur-sm"
      />
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[140px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="kicker mb-4">Features</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Engineered like a <span className="text-gradient">machine room.</span>
          </h2>
          <p className="mt-5 text-[var(--ink-dim)]">
            Every module tuned for throughput — so your counters move as fast as your drums.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass group rounded-3xl p-7 transition-colors hover:border-white/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
