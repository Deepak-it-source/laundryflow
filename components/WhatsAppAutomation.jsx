"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MESSAGES = [
  { from: "biz", text: "Hi Priya! 👋 Your 8 garments are picked up. Order #LF-2841 confirmed." },
  { from: "biz", text: "Update: Your order is now being steam-pressed ✨" },
  { from: "user", text: "Wow, that was fast! When is delivery?" },
  { from: "biz", text: "Out for delivery 🛵 — arriving today between 5–6 PM. Track live: lf.io/t/2841" },
  { from: "user", text: "Perfect. Paying by UPI 👍" },
  { from: "biz", text: "Payment of ₹640 received ✅ Invoice attached. See you next week!" },
];

export default function WhatsAppAutomation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="whatsapp" className="relative overflow-hidden py-28 md:py-40">
      <motion.div
        aria-hidden
        style={{ y: bgY, backgroundImage: "url(/frames/frame_066.jpg)" }}
        className="absolute inset-[-12%] bg-cover bg-center opacity-[0.12] blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/60 to-[var(--bg)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="glass-deep rounded-[2.5rem] border-white/10 p-3 shadow-2xl">
            <div className="rounded-[2rem] bg-[#0b141a] p-4">
              <div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] font-bold text-black">
                  LF
                </div>
                <div>
                  <div className="text-sm font-semibold">LaundryFlow</div>
                  <div className="text-[10px] text-emerald-400">online · automated</div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                {MESSAGES.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.18, duration: 0.5, ease: "easeOut" }}
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                      m.from === "biz"
                        ? "self-start rounded-tl-sm bg-[#1f2c34] text-[#e9edef]"
                        : "self-end rounded-tr-sm bg-[#005c4b] text-white"
                    }`}
                  >
                    {m.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker mb-4">WhatsApp Automation</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Your best employee <span className="text-gradient">never sleeps.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--ink-dim)]">
            Pickup confirmations, stage-by-stage updates, delivery windows,
            payment links and invoices — sent automatically on WhatsApp, in
            your brand's voice.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Official WhatsApp Business API",
              "Order status broadcasts at every stage",
              "UPI payment links with auto-reconciliation",
              "Re-engagement campaigns for dormant customers",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-[var(--ink-dim)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-[10px] text-emerald-300">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
