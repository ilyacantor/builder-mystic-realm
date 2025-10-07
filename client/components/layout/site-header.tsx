import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Insights", href: "#insights" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a
          href="/#overview"
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-foreground/70"
          onClick={closeMenu}
        >
          <span className="rounded-full bg-primary/20 p-2 text-primary shadow-glow transition duration-300 group-hover:bg-primary/30 group-hover:text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-display text-lg tracking-tight normal-case text-foreground">
            Model Canvas
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
          >
            <a href="/#insights">Docs</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
          >
            <a href="/#cta">Launch Studio</a>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
          >
            <a href="/#insights" onClick={closeMenu}>
              Docs
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="border border-white/10 bg-white/5 text-foreground hover:bg-white/10"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-background/90 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-foreground/80 transition hover:text-foreground"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
            >
              <a href="/#cta" onClick={closeMenu}>
                Launch Studio
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};
