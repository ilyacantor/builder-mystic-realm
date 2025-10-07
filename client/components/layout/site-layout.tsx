import type { PropsWithChildren } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-primary/8 blur-[140px]" />
      </div>
    </div>
  );
};
