import type { PropsWithChildren } from "react";

import type { PropsWithChildren } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,188,212,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(255,127,17,0.14),_transparent_55%)]" />
        <div className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute -right-32 top-1/4 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
      </div>
      <SiteHeader />
      <main className="relative pb-24 pt-6">{children}</main>
      <SiteFooter />
    </div>
  );
};
