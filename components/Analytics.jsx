"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";

function Counter({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

const BARS = [42, 58, 50, 72, 64, 86, 78, 95];

export default function Analytics() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="analytics" className="relative overflow-hidden py-28 md:py-40">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker mb-4">Analytics</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Your business, <span className="text-gradient">measured to the fibre.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--ink-dim)]">
            Revenue per kilogram, machine utilisation, repeat-customer rate,
            branch leaderboards — rendered live from every counter and every rider.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { v: 38, s: "%", label: "Avg. revenue lift" },
              { v: 4.9, s: "★", d: 1, label: "Customer rating" },
              { v: 12, s: "hrs", label: "Saved weekly" },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl text-white md:text-4xl">
                  <Counter to={m.v} suffix={m.s} decimals={m.d || 0} />
                </div>
                <div className="mt-1 text-xs tracking-wide text-[var(--ink-dim)]">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mock dashboard panel with parallax */}
        <motion.div style={{ y: panelY }} className="glass-deep rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Weekly Revenue</div>
              <div className="text-xs text-[var(--ink-dim)]">All branches · Live</div>
            </div>
            <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">▲ 18.4%</div>
          </div>
          <div className="flex h-44 items-end gap-3">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-[var(--accent)]/25 to-[var(--accent)]"
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-[var(--ink-dim)]">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Today"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="hairline my-6" />
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              ["₹2.4L", "This week"],
              ["1,284", "Orders"],
              ["92%", "On-time"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl py-3">
                <div className="text-lg font-semibold">{v}</div>
                <div className="text-[10px] text-[var(--ink-dim)]">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
