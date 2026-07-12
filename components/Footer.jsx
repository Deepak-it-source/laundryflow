export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-[var(--ink-dim)] md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-xs font-black text-black">
            L
          </span>
          <span className="font-display text-white">LaundryFlow</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} LaundryFlow. Crafted for luxury laundry brands.</div>
        <div className="flex gap-6 text-xs">
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Terms</a>
          <a href="#" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
