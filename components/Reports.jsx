"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Horizontal pinned gallery — cards reuse frames from the uploaded sequence.
const CARDS = [
  { frame: "/frames/frame_012.jpg", title: "Pickup & Tagging", desc: "We collect from your doorstep and tag every garment — a full custody trail from day one." },
  { frame: "/frames/frame_030.jpg", title: "Wash & Care", desc: "Fabric-matched cycles, pH-balanced detergents and solvent-safe dry cleaning." },
  { frame: "/frames/frame_048.jpg", title: "Steam Finishing", desc: "Boutique-grade pressing — crisp collars, knife-edge creases, perfect pleats." },
  { frame: "/frames/frame_071.jpg", title: "Doorstep Delivery", desc: "Folded or hung in breathable covers, delivered back fresh — right on schedule." },
];

export default function Reports() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const getDistance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reports" className="relative h-screen overflow-hidden">
      <div className="absolute left-6 top-16 z-10 md:left-24 md:top-24">
        <p className="kicker mb-3">Our Process</p>
        <h2 className="font-display text-3xl md:text-5xl">
          From pickup to <span className="text-gradient">perfection.</span>
        </h2>
      </div>

      <div ref={trackRef} className="flex h-full items-center gap-8 pl-6 pr-[10vw] pt-24 md:pl-24">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className="glass-deep group relative h-[52vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl sm:w-[46vw] lg:w-[30vw]"
          >
            <img
              src={c.frame}
              alt={c.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)]">{c.desc}</p>
            </div>
          </article>
        ))}
        <div className="flex h-[52vh] w-[60vw] shrink-0 items-center justify-center sm:w-[30vw]">
          <div className="text-center">
            <div className="font-display text-5xl text-white/20 md:text-7xl">24hr</div>
            <div className="mt-2 text-sm tracking-widest text-[var(--ink-dim)]">EXPRESS TURNAROUND</div>
          </div>
        </div>
      </div>
    </section>
  );
}
