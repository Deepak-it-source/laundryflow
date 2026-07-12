"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CtaParticles = dynamic(() => import("./CtaParticles"), { ssr: false });

export default function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-36 md:py-52">
      {/* Uploaded closing frame as cinematic backdrop */}
      <div
        aria-hidden
        style={{ backgroundImage: "url(/frames/frame_079.jpg)" }}
        className="absolute inset-0 bg-cover bg-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/70 to-[var(--bg)]" />
      <CtaParticles />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker mb-6">Begin Your Empire</p>
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            The next <span className="text-gold italic">luxury laundry</span>
            <br />
            brand is <span className="text-gradient">yours.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[var(--ink-dim)] md:text-lg">
            Join 2,000+ laundry businesses running on LaundryFlow.
            14-day free trial. No card required. Onboarding in one afternoon.
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-9 py-4 text-sm font-bold text-black transition hover:bg-[var(--accent)]"
            >
              Start Free Trial
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass rounded-full px-9 py-4 text-sm font-semibold"
            >
              Book a Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
