"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Wash & Fold",
    desc: "Everyday laundry weighed, washed, dried and folded to retail-shelf neatness.",
    icon: "🧺",
    frame: "/frames/frame_000.jpg",
    price: "₹79/kg",
    tag: "24hr turnaround",
  },
  {
    num: "02",
    title: "Dry Cleaning",
    desc: "Solvent-safe care for suits, sarees, lehengas and delicates — with stain treatment.",
    icon: "🥻",
    frame: "/frames/frame_079.jpg",
    price: "₹149 onwards",
    tag: "Wedding-wear experts",
  },
  {
    num: "03",
    title: "Steam Ironing",
    desc: "Boutique-grade press with fabric-matched temperatures — collars, pleats, creases perfected.",
    icon: "👔",
    frame: "/frames/frame_045.jpg",
    price: "₹99/kg with wash",
    tag: "Knife-edge finish",
  },
  {
    num: "04",
    title: "Premium Care",
    desc: "Shoes, bags, carpets and curtains restored by specialists with photo proof.",
    icon: "👜",
    frame: "/frames/frame_070.jpg",
    price: "On quote",
    tag: "Before/after photos",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 56 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 md:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="kicker mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Every garment, <span className="text-gold italic">handled beautifully.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[var(--ink-dim)]">
            The full menu of premium garment care — with free home pickup and
            delivery across Raipur.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`glass-deep group relative flex aspect-[3/4.4] flex-col justify-end overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-[var(--accent)]/40 ${
                i % 2 === 1 ? "lg:mt-10" : ""
              }`}
            >
              {/* Backdrop frame */}
              <img
                src={s.frame}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10 transition-opacity duration-500" />

              {/* Editorial number */}
              <div className="absolute right-5 top-4 font-display text-5xl text-white/15 transition-colors duration-500 group-hover:text-[var(--accent)]/40">
                {s.num}
              </div>

              {/* Tag chip */}
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] tracking-widest text-[var(--ink-dim)] backdrop-blur-sm">
                {s.tag.toUpperCase()}
              </div>

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">{s.desc}</p>

                <div className="hairline my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--accent)]">{s.price}</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-white/70 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    BOOK <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Strip below cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-widest text-[var(--ink-dim)]"
        >
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> FREE PICKUP & DELIVERY</span>
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> TAGGED & TRACKED</span>
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /> 24HR EXPRESS AVAILABLE</span>
        </motion.div>
      </div>
    </section>
  );
}
