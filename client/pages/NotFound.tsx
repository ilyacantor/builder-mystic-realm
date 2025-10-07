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
        <div className="absolute inset-0 -z-10 bg-hero-grid opacity-40" />
        <div className="absolute inset-0 -z-20 bg-mesh" />
        <div className="container relative mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center shadow-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">Error 404</p>
          <h1 className="mt-4 font-display text-4xl text-white">This page drifted off the model.</h1>
          <p className="mt-4 text-base text-foreground/70">
            We couldn&apos;t locate the route <span className="text-foreground">{location.pathname}</span>. Return to the canvas to continue crafting your next breakthrough.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-primary text-base text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
              asChild
            >
              <a href="/">Back to home</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-white/10 bg-white/5 text-base text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
              asChild
            >
              <a href="/#features">Explore capabilities</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
