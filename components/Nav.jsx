"use client";

import { motion } from "framer-motion";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Why Us", "#features"],
  ["Pricing", "#billing"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-6 py-3">
        <a href="#hero" className="flex items-center gap-3">
          {/* House-roof logo mark */}
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
            <path d="M16 3 2 14h5v13h18V14h5L16 3z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="16" cy="19" r="4.5" fill="none" stroke="white" strokeWidth="1.6" />
            <circle cx="16" cy="19" r="1.6" fill="white" />
          </svg>
          <span className="leading-tight">
            <span className="font-display block text-base tracking-[0.18em]">DHOBI HOUSZ</span>
            <span className="block text-[8px] tracking-[0.42em] text-[var(--ink-dim)]">PREMIUM LAUNDRY</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-xs tracking-wider text-[var(--ink-dim)] md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-[var(--accent)]"
        >
          Book Pickup
        </a>
      </nav>
    </motion.header>
  );
}
