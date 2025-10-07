import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-60" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(0,188,212,0.18),_transparent_60%)]" />
        <div className="container relative mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-secondary/80 p-12 text-center shadow-card-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Error 404</p>
          <h1 className="mt-4 font-display text-4xl text-white">Looks like this ride veered off course.</h1>
          <p className="mt-4 text-base text-foreground/70">
            We couldn&apos;t locate <span className="text-white">{location.pathname}</span>. Head back to FlowNation HQ to plan your next adventure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_32px_70px_-30px_rgba(0,188,212,0.85)] transition hover:bg-primary/90"
              asChild
            >
              <a href="/">Return home</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-white/10 bg-secondary/60 text-base text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
              asChild
            >
              <a href="/#community">Browse riders</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
