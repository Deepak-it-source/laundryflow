"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Wash & Fold",
    desc: "Everyday laundry weighed, washed, dried and folded to retail-shelf neatness — back in 24 hours.",
    icon: "🧺",
    frame: "/frames/frame_015.jpg",
  },
  {
    title: "Dry Cleaning",
    desc: "Solvent-safe care for suits, sarees, lehengas and delicates, finished with breathable garment covers.",
    icon: "🥻",
    frame: "/frames/frame_033.jpg",
  },
  {
    title: "Steam Ironing",
    desc: "Crisp, boutique-grade press with fabric-matched temperatures — collars, pleats and creases perfected.",
    icon: "👔",
    frame: "/frames/frame_050.jpg",
  },
  {
    title: "Premium Care",
    desc: "Shoes, bags, carpets and curtains restored by specialists with before/after photo proof.",
    icon: "👜",
    frame: "/frames/frame_065.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="glass-deep group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-6"
            >
              <img
                src={s.frame}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
