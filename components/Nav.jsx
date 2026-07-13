"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Why Us", "#features"],
  ["Pricing", "#billing"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-4 mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-3 md:mx-auto md:px-6">
        <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* House-roof logo mark */}
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
            <path d="M16 3 2 14h5v13h18V14h5L16 3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="16" cy="19" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16" cy="19" r="1.6" fill="currentColor" />
          </svg>
          <span className="leading-tight">
            <span className="font-display block whitespace-nowrap text-sm tracking-[0.14em] md:text-base md:tracking-[0.18em]">DHOBI HOUSZ</span>
            <span className="block whitespace-nowrap text-[7px] tracking-[0.34em] text-[var(--ink-dim)] md:text-[8px] md:tracking-[0.42em]">PREMIUM LAUNDRY</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-xs tracking-wider text-[var(--ink-dim)] md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hidden rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-[var(--accent)] md:block"
          >
            Book Pickup
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-white transition-transform duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 rounded-3xl glass-deep p-2 md:hidden"
          >
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-5 py-3.5 text-sm tracking-wider text-[var(--ink-dim)] transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+917354003303"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl bg-white/5 px-5 py-3.5 text-sm font-semibold tracking-wider transition hover:bg-white/10"
            >
              📞 +91 73540 03303
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-2xl bg-white px-5 py-3.5 text-center text-sm font-bold text-black transition hover:bg-[var(--accent)]"
            >
              Book Free Pickup
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
