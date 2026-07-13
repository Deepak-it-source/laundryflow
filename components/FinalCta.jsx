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
          <p className="kicker mb-6">Dhobi Housz — Premium Laundry</p>
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Your wardrobe deserves
            <br />
            the <span className="text-gold italic">luxury laundry</span> <span className="text-gradient">treatment.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[var(--ink-dim)] md:text-lg">
            Free home pickup &amp; delivery across Raipur. Call us or book
            online — your clothes come back fresh, pressed and on time.
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="tel:+917354003303"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-white px-9 py-4 text-center text-sm font-bold text-black transition hover:bg-[var(--accent)] sm:w-auto"
            >
              📞 Call 73540 03303
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full glass rounded-full px-9 py-4 text-center text-sm font-semibold sm:w-auto"
            >
              Book Free Pickup
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
