export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="bg-footer-gradient/10">
        <div className="container flex flex-col gap-8 py-12 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="font-display text-2xl text-white">FlowNation</p>
            <p className="max-w-md text-foreground/60">
              Unlock your potential with curated training, vibrant communities, and insights designed for every discipline under one athletic hub.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
            <a href="#community" className="transition hover:text-white">
              Community
            </a>
            <a href="#dashboard" className="transition hover:text-white">
              Dashboard
            </a>
            <a href="#profile" className="transition hover:text-white">
              Profile
            </a>
            <a href="#cta" className="transition hover:text-white">
              Join
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              IG
            </a>
            <a href="https://strava.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Strava
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              YT
            </a>
          </div>
        </div>
      </div>
      <div className="bg-footer-gradient py-4 text-center text-xs font-medium text-background">
        © {year} FlowNation. Ride beyond limits.
      </div>
    </footer>
  );
};
