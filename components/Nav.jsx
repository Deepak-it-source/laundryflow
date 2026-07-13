"use client";

import { motion } from "framer-motion";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Features", "#features"],
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
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-sm font-black text-black">
            L
          </span>
          <span className="font-display text-lg tracking-wide">LaundryFlow</span>
        </a>
        <div className="hidden items-center gap-7 text-xs tracking-wider text-[var(--ink-dim)] md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-[var(--accent)]"
        >
          Free Trial
        </a>
      </nav>
    </motion.header>
  );
}
