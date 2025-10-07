import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Component,
  Cpu,
  Database,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";

const featureCards = [
  {
    title: "Adaptive Architectures",
    description:
      "Compose transformer blocks, graph networks, and custom layers in a unified visual canvas.",
    highlight: "Auto-layer suggestions",
    icon: Cpu,
  },
  {
    title: "Data Rituals",
    description:
      "Cleanse, balance, and augment datasets with smart recipes that remember your preferences.",
    highlight: "Versioned data flows",
    icon: Database,
  },
  {
    title: "Guardrails Built In",
    description:
      "Automate governance with realtime bias detection, explainability reports, and approval workflows.",
    highlight: "Responsible by design",
    icon: ShieldCheck,
  },
  {
    title: "Deploy Anywhere",
    description:
      "Ship to edge devices, cloud endpoints, or your favorite MLOps stack with a single push.",
    highlight: "Zero-downtime releases",
    icon: Rocket,
  },
];

const workflow = [
  {
    step: "01",
    title: "Model Blueprint",
    description:
      "Start from curated templates or sketch your own architecture with drag-and-drop precision.",
  },
  {
    step: "02",
    title: "Training Playground",
    description:
      "Run multiple experiments in parallel, compare metrics, and promote the best performing candidate.",
  },
  {
    step: "03",
    title: "Continuous Delivery",
    description:
      "Automate evaluation pipelines, route traffic, and monitor live signals from a single dashboard.",
  },
];

const trainingMetrics = [
  { label: "Accuracy", value: "98.6%", trend: "+4.2%", positive: true },
  { label: "Latency", value: "42 ms", trend: "-8 ms", positive: true },
  { label: "Drift", value: "0.6%", trend: "-1.1%", positive: true },
];

const diagnostics = [
  { label: "Precision", value: 93 },
  { label: "Recall", value: 96 },
  { label: "F1 Score", value: 94 },
];

const configOptions = [
  {
    label: "Optimizer",
    value: "AdamW",
  },
  {
    label: "Learning Rate",
    value: "2e-4",
  },
  {
    label: "Warmup",
    value: "1,500 steps",
  },
  {
    label: "Regularization",
    value: "Dropout 0.15",
  },
];

export default function Index() {
  return (
    <SiteLayout>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-hero-grid opacity-70 md:h-[640px]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-mesh" />

        <section
          id="overview"
          className="container relative space-y-16 pb-24 pt-20 sm:pt-24 lg:space-y-20 lg:pb-28 lg:pt-32"
        >
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.45em] text-foreground/60">
                <Sparkles className="size-3.5 text-primary" />
                Create Model
              </span>
              <div className="space-y-6">
                <h1 className="font-display text-4xl leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
                  Create model experiences that feel bespoke—and deploy them in minutes.
                </h1>
                <p className="max-w-xl text-lg text-foreground/80 sm:text-xl">
                  Model Canvas orchestrates the entire lifecycle from dataset ingestion to deployment-ready endpoints. Sketch ideas, tune parameters, and launch a production-grade model without leaving the page.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  size="lg"
                  className="bg-gradient-to-r from-primary via-accent to-primary text-base text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
                >
                  Launch Model Builder
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border border-white/10 bg-white/5 text-base text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
                >
                  <a href="/#insights">View Documentation</a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-sm text-foreground/60">
                <div className="space-y-1">
                  <p className="font-medium text-foreground/70">Trusted by teams shipping AI safely</p>
                  <div className="flex items-center gap-6 text-xs uppercase tracking-[0.4em] text-foreground/40">
                    <span>NovaLabs</span>
                    <span>Helios</span>
                    <span>Beacon</span>
                    <span>Voyant</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 -top-14 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-8 bottom-6 h-36 w-36 rounded-full bg-accent/20 blur-[120px]" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 font-medium text-foreground/70">
                    <Layers className="size-3" />
                    Transformer · Hybrid
                  </span>
                  <span>Version 7 • Live</span>
                </div>
                <div className="mt-6 grid gap-5">
                  <div className="rounded-2xl border border-white/10 bg-background/80 p-4">
                    <p className="text-sm font-medium text-foreground/70">Architecture preview</p>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                      {["Embedding", "Attention", "Graph"].map((label) => (
                        <div
                          key={label}
                          className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-foreground/70"
                        >
                          <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">
                            Layer
                          </span>
                          <span className="font-medium text-foreground/80">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/80 p-4">
                    <p className="text-sm font-medium text-foreground/70">Training metrics</p>
                    <div className="mt-3 grid gap-3">
                      {trainingMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm"
                        >
                          <span className="text-foreground/60">{metric.label}</span>
                          <div className="flex items-center gap-3 font-semibold text-foreground">
                            <span>{metric.value}</span>
                            <span
                              className={metric.positive ? "text-emerald-300" : "text-destructive"}
                            >
                              {metric.trend}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-background/70 p-4 text-sm">
                  <div>
                    <p className="text-foreground/60">Training window</p>
                    <p className="text-lg font-semibold text-foreground">Session 34B · Auto-scaling</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
                    <Timer className="size-3.5" />
                    12m left
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 w-full max-w-[260px] -translate-x-1/2 rounded-3xl border border-white/10 bg-background/90 p-5 shadow-soft backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                  Dataset snapshot
                </p>
                <div className="mt-3 space-y-2 text-sm text-foreground/70">
                  <div className="flex items-center justify-between">
                    <span>Rows</span>
                    <span className="font-semibold text-foreground">2.4M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Features</span>
                    <span className="font-semibold text-foreground">182</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Freshness</span>
                    <span className="font-semibold text-emerald-300">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container relative pb-24 lg:pb-28">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="font-display text-3xl text-balance text-white sm:text-4xl">
                Built for builders, scaled for entire organizations.
              </h2>
              <p className="text-base text-foreground/70 sm:text-lg">
                Every interaction in Model Canvas is orchestrated for high-velocity teams. From dataset lineage to post-deployment guardrails, every pixel accelerates collaboration.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="self-start border border-white/10 bg-white/5 text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
            >
              <a href="/#workflow" className="inline-flex items-center gap-2">
                Explore full platform
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, description, highlight }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-500 hover:border-primary/60 hover:bg-white/10"
              >
                <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-primary/20 blur-3xl transition duration-500 group-hover:bg-primary/30" />
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-background/80 text-primary shadow-soft">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="container relative pb-24 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                Orchestrate
              </span>
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                A workflow that keeps creation in flow state.
              </h2>
              <p className="text-base text-foreground/70 sm:text-lg">
                Blueprint, iterate, and ship models inside one opinionated canvas. Automations remove the mechanical steps, so teams stay focused on what matters: shaping intelligent behavior.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/60 hover:bg-white/10"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{item.description}</p>
                  <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="container relative pb-24 lg:pb-32">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                    Diagnostics
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-white">Real-time validation</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/50">
                  <LineChart className="mr-2 inline size-3.5" />
                  Live
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  {diagnostics.map((diag) => (
                    <div key={diag.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-foreground/60">
                        <span>{diag.label}</span>
                        <span className="font-semibold text-foreground">{diag.value}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                          style={{ width: `${diag.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-background/80 p-5">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground/70">Alerts & guardrails</p>
                    <div className="space-y-2 text-sm text-foreground/60">
                      <p className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                        <span className="flex items-center gap-2">
                          <Component className="size-4 text-primary" />
                          Explainability summary
                        </span>
                        <span className="text-emerald-300">Passed</span>
                      </p>
                      <p className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                        <span className="flex items-center gap-2">
                          <BarChart3 className="size-4 text-primary" />
                          Bias monitor
                        </span>
                        <span className="text-foreground/70">Balanced</span>
                      </p>
                      <p className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                        <span className="flex items-center gap-2">
                          <ShieldCheck className="size-4 text-primary" />
                          Compliance scan
                        </span>
                        <span className="text-emerald-300">Clean</span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-foreground/60">
                    <p className="font-semibold text-foreground/70">"Model Canvas unlocked a 4× faster experimentation cadence across labs and production."</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.35em] text-foreground/40">— Aurora Systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                      Configuration
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">Launch controls</h3>
                  </div>
                  <SlidersHorizontal className="size-5 text-primary" />
                </div>
                <div className="mt-6 space-y-4 text-sm text-foreground/70">
                  {configOptions.map((option) => (
                    <div
                      key={option.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/80 px-4 py-3"
                    >
                      <span className="text-foreground/60">{option.label}</span>
                      <span className="font-medium text-foreground">{option.value}</span>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  className="mt-6 w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
                >
                  Generate training job
                </Button>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                      Integrations
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">Ship wherever you need</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 text-sm text-foreground/70">
                  {[
                    { label: "Edge delivery", detail: "Triton, CoreML, WebGPU" },
                    { label: "Cloud endpoints", detail: "SageMaker, Vertex, Azure" },
                    { label: "Observability", detail: "Weights & Biases, Evidently" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/80 px-4 py-3"
                    >
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-foreground/60">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="container relative pb-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-background to-background p-10 shadow-glow sm:p-14">
            <div className="absolute inset-y-0 right-0 hidden w-1/3 rounded-l-full bg-primary/10 blur-3xl lg:block" />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-4">
                <h2 className="font-display text-3xl text-white sm:text-4xl">
                  Ready to craft your next breakthrough model?
                </h2>
                <p className="text-base text-foreground/70 sm:text-lg">
                  Curate data, define architecture, and deploy with observability baked in. Model Canvas keeps every stakeholder aligned from ideation to production.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  size="lg"
                  className="bg-gradient-to-r from-primary via-accent to-primary text-base text-primary-foreground shadow-glow transition hover:from-primary/90 hover:via-accent/90 hover:to-primary/90"
                >
                  Start creating now
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border border-white/10 bg-white/5 text-base text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
                >
                  <a href="mailto:hello@modelcanvas.ai">Schedule onboarding</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
