export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="container flex flex-col gap-6 py-10 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-foreground">Model Canvas</p>
          <p className="mt-1 max-w-md text-foreground/50">
            Design, calibrate, and deploy responsible intelligence across your organization with a single collaborative canvas.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <a href="#features" className="transition hover:text-foreground">
            Product
          </a>
          <a href="#workflow" className="transition hover:text-foreground">
            Workflow
          </a>
          <a href="#insights" className="transition hover:text-foreground">
            Insights
          </a>
          <a href="#cta" className="transition hover:text-foreground">
            Pricing
          </a>
        </div>
        <p className="text-xs text-foreground/40">© {year} Model Canvas. All rights reserved.</p>
      </div>
    </footer>
  );
};
