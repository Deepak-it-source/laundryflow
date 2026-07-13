"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 80;
const frameSrc = (i) => `/frames/frame_${String(i).padStart(3, "0")}.jpg`;

/**
 * Pinned cinematic canvas: scrubs the uploaded 80-frame Whisk sequence
 * against scroll position, with three narrative overlays
 * (Hero → Brand Story → Product Story) choreographed on the same timeline.
 */
export default function CinematicSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const productRef = useRef(null);
  const progressBarRef = useRef(null);
  const [loadedPct, setLoadedPct] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const images = [];
    const state = { frame: 0 };
    let loaded = 0;
    let killed = false;

    const drawCover = (img) => {
      if (!img || !img.complete || !img.naturalWidth) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const render = () => {
      const i = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(state.frame)));
      // fall back to the nearest loaded frame so scrubbing never blanks out
      let img = images[i];
      if (!img?.complete || !img?.naturalWidth) {
        for (let d = 1; d < FRAME_COUNT && (!img?.complete || !img?.naturalWidth); d++) {
          img = images[i - d]?.complete ? images[i - d] : images[i + d];
        }
      }
      drawCover(img);
    };

    // Preload: first frame immediately, rest in parallel.
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = img.onerror = () => {
        loaded++;
        if (killed) return;
        setLoadedPct(Math.round((loaded / FRAME_COUNT) * 100));
        if (img === images[0] || loaded === 1) render();
        if (loaded === FRAME_COUNT) setReady(true);
      };
      images.push(img);
    }

    const fade = { duration: 0.07, ease: "power2.out" };
    const ctxGsap = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=450%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(state, { frame: FRAME_COUNT - 1, ease: "none", duration: 1, onUpdate: render }, 0);
      if (progressBarRef.current) {
        tl.fromTo(progressBarRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1 }, 0);
      }

      // Hero exits
      tl.to(heroRef.current, { autoAlpha: 0, y: -70, ...fade }, 0.1);
      // Brand story in/out
      tl.fromTo(storyRef.current, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, ...fade }, 0.24);
      tl.to(storyRef.current, { autoAlpha: 0, y: -70, ...fade }, 0.46);
      // Product story in/out
      tl.fromTo(productRef.current, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, ...fade }, 0.6);
      tl.to(productRef.current, { autoAlpha: 0, y: -50, ...fade }, 0.88);
    }, sectionRef);

    const onResize = () => render();
    window.addEventListener("resize", onResize);

    return () => {
      killed = true;
      window.removeEventListener("resize", onResize);
      ctxGsap.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="vignette absolute inset-0" />

      {/* Loading indicator until all 80 frames are cached */}
      {!ready && (
        <div className="absolute right-6 top-6 z-20 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--ink-dim)]">
          LOADING CINEMATIC {loadedPct}%
        </div>
      )}

      {/* Overlay 1 — Hero */}
      <div ref={heroRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="kicker mb-6">Cloud Laundry Operating System</p>
        <h1 className="font-display max-w-5xl text-5xl leading-[1.05] md:text-8xl">
          From a <span className="text-gold italic">washing machine</span>
          <br />
          to a <span className="text-gradient">laundry empire.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-[var(--ink-dim)] md:text-lg">
          LaundryFlow is the premium cloud platform that runs your entire
          laundry business — services, orders, billing and reports.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#cta" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent)]">
            Start Free Trial
          </a>
          <a href="#features" className="glass rounded-full px-7 py-3 text-sm font-medium transition hover:border-white/25">
            Explore Platform
          </a>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-[var(--ink-dim)]">
          SCROLL TO EXPERIENCE
          <span className="block h-8 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>

      {/* Overlay 2 — Brand Story */}
      <div ref={storyRef} className="invisible absolute inset-0 z-10 flex items-center justify-start px-6 md:px-24">
        <div className="glass-deep max-w-xl rounded-3xl p-8 md:p-12">
          <p className="kicker mb-4">Brand Story</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Every great laundry brand starts with a single drum spinning.
          </h2>
          <p className="mt-5 text-[var(--ink-dim)]">
            We watched neighbourhood laundries drown in paper tokens and missed
            calls. LaundryFlow was born to give them the same machinery that
            powers luxury hospitality — without the complexity.
          </p>
        </div>
      </div>

      {/* Overlay 3 — Product Story */}
      <div ref={productRef} className="invisible absolute inset-0 z-10 flex items-center justify-end px-6 md:px-24">
        <div className="glass-deep max-w-xl rounded-3xl p-8 md:p-12 text-right">
          <p className="kicker mb-4">The Platform</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            One flow. Pickup to pressed, tracked to the second.
          </h2>
          <p className="mt-5 text-[var(--ink-dim)]">
            Orders stream in, machines stay busy, customers stay informed on
            WhatsApp, and every rupee is reconciled — automatically, in the
            cloud, on any device.
          </p>
        </div>
      </div>

      {/* Scrub progress */}
      <div className="absolute bottom-0 left-0 z-10 h-[2px] w-full bg-white/10">
        <div ref={progressBarRef} className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
      </div>
    </section>
  );
}
