export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-[var(--ink-dim)] md:flex-row">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <path d="M16 3 2 14h5v13h18V14h5L16 3z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="16" cy="19" r="4.5" fill="none" stroke="white" strokeWidth="1.6" />
            <circle cx="16" cy="19" r="1.6" fill="white" />
          </svg>
          <span className="font-display tracking-[0.14em] text-white">DHOBI HOUSZ</span>
        </div>
        <div className="text-center text-xs">
          © {new Date().getFullYear()} Dhobi Housz — Premium Laundry & Dry Cleaning · Shop No 3, Raheja Residency, Avanti Vihar, Raipur
        </div>
        <div className="flex gap-6 text-xs">
          <a href="https://www.instagram.com/dhobi.housz" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
          <a href="tel:+917354003303" className="transition hover:text-white">Call Us</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
