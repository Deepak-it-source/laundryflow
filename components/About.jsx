"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "500+", label: "Laundry stores" },
  { value: "12L+", label: "Garments processed" },
  { value: "28", label: "Cities served" },
  { value: "4.9★", label: "Owner rating" },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="kicker mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-6xl">
              From one drum to a <span className="text-gradient">luxury brand.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--ink-dim)]">
              LaundryFlow was born inside a real laundry — between steam presses,
              missed pickups and handwritten ledgers. We turned that chaos into
              software that runs the counter, the floor and the books, so owners
              can focus on what matters: immaculate garments and happy customers.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink-dim)]">
              Today, hundreds of stores across India run their entire operation
              on LaundryFlow — from neighbourhood favourites to premium
              dry-clean chains.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-display text-3xl md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs tracking-wider text-[var(--ink-dim)]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-deep relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[3/4]"
          >
            <motion.img
              src="/frames/frame_040.jpg"
              alt="Inside a LaundryFlow-powered store"
              style={{ y: imgY }}
              className="absolute inset-[-10%] h-[120%] w-[110%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-7">
              <div className="font-display text-xl">Built inside real laundries</div>
              <p className="mt-1 text-sm text-[var(--ink-dim)]">Not a boardroom. A shop floor.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
