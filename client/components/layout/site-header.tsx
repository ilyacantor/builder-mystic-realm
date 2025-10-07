import { useState } from "react";
import { Bike, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Explore", href: "#home" },
  { label: "My Dashboard", href: "#dashboard" },
  { label: "Community", href: "#community" },
  { label: "Shop", href: "#gear" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <a
          href="/#home"
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.5em] text-foreground/70"
          onClick={closeMenu}
        >
          <span className="rounded-full bg-gradient-to-br from-primary/20 via-primary/40 to-primary/20 p-2 text-primary shadow-[0_10px_40px_-20px_rgba(0,188,212,0.9)] transition duration-300 group-hover:scale-105 group-hover:from-primary/30 group-hover:via-primary/50">
            <Bike className="size-4" />
          </span>
          <span className="font-display text-xl tracking-[0.08em] text-white">
            FlowNation
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-white/10 bg-secondary/40 px-5 text-xs uppercase tracking-[0.35em] text-foreground/70 transition hover:border-primary/60 hover:bg-primary/10 hover:text-white"
          >
            <a href="#profile">Login</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary px-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_40px_-24px_rgba(0,188,212,0.8)] transition hover:bg-primary/90"
          >
            <a href="#cta">Sign Up</a>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="border border-white/10 bg-secondary/40 text-white hover:bg-secondary/60"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-background/90 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-foreground/80 transition hover:text-white"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                variant="ghost"
                className="border border-white/10 bg-secondary/40 text-sm uppercase tracking-[0.3em] text-foreground/70 transition hover:border-primary/60 hover:bg-primary/10 hover:text-white"
                onClick={closeMenu}
              >
                <a href="#profile">Login</a>
              </Button>
              <Button
                asChild
                className="bg-primary text-sm uppercase tracking-[0.3em] text-primary-foreground"
                onClick={closeMenu}
              >
                <a href="#cta">Sign Up</a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
