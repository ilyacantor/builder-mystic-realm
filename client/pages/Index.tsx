import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Mail,
  MessageCircle,
  SliderHorizontal,
} from "lucide-react";

const colorTokens = [
  { name: "Electric Cyan", hex: "#00BCC4" },
  { name: "Bright Orange", hex: "#FF6F00" },
  { name: "Deep Charcoal", hex: "#0D0F14" },
  { name: "Graphite Gray", hex: "#202A2A" },
  { name: "Primary Surface", hex: "#0B0C1A" },
  { name: "Brand2nd Surface", hex: "#FF6F0A" },
  { name: "Primary Card", hex: "#0B0C43" },
  { name: "Brand2nd Card", hex: "#FF6F33" },
];

const typographyCards = [
  {
    label: "H1 – Quicksand Bold 30px White",
    title: "The FlowNation Journey",
    description: "Expressive hero headlines that set the tone for every experience.",
  },
  {
    label: "H2 – Quicksand Semibold 24px Cyan",
    title: "Discover Your Next Challenge",
    description: "Section intros that energize athletes to explore further.",
  },
  {
    label: "Body – Inter Regular 16px Light Gray",
    title: "FlowNation connects endurance athletes with events, communities, and insights.",
    description:
      "Find your pace, track your progress, and join a vibrant network of peers. Secondary body text is ideal for detailed descriptions or captions.",
  },
];

const componentCards = [
  {
    title: "Buttons",
    items: [
      { label: "Primary Action", className: "bg-primary text-primary-foreground" },
      { label: "Outline Action", className: "border border-white/15 bg-transparent text-foreground/80" },
      { label: "Ghost Action", className: "bg-transparent text-foreground/70" },
      { label: "Accent Action", className: "bg-accent text-accent-foreground" },
    ],
  },
  {
    title: "Cards",
    items: [
      { label: "Event Highlight", description: "Join us for the Annual Triathlon Challenge on October 28th. Sign up now!" },
    ],
  },
  {
    title: "Form Elements",
    elements: [
      { placeholder: "Email Address" },
      { placeholder: "Your message here...", multiline: true },
      { placeholder: "Select a sport" },
    ],
  },
  {
    title: "Checkbox & Radio",
    checklist: ["Accept terms and conditions", "Option One", "Option Two"],
  },
  {
    title: "Tags & Badges",
    tags: [
      { label: "Running", variant: "cyan" },
      { label: "Cycling", variant: "cyan" },
      { label: "Triathlon", variant: "cyan" },
      { label: "Urgent", variant: "orange" },
      { label: "New Event", variant: "orange" },
      { label: "Featured", variant: "orange" },
    ],
  },
  {
    title: "Toggles & Slider",
    toggles: [
      { label: "Dark Mode", active: true },
      { label: "Distance Preference: 50 km", slider: true },
    ],
  },
];

export default function Index() {
  return (
    <SiteLayout>
      <section id="hero" className="container">
        <div className="rounded-xl bg-hero-panel p-12 text-center shadow-card-elevated md:rounded-[2.5rem] md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
            FlowNation UI
          </p>
          <h1 className="mt-6 font-display text-4xl text-white sm:text-5xl">Design System</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 sm:text-lg">
            The foundational elements and components that power FlowNation UI. A consistent visual language for a seamless experience.
          </p>
        </div>
      </section>

      <section id="colors" className="container mt-24 space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">Color Tokens</h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70">
            Our core brand colors and their semantic usage across the application, ensuring visual consistency and impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {colorTokens.map((token) => (
            <div key={token.name} className="rounded-xl border border-white/10 bg-secondary/70 p-6 text-left shadow-card-soft">
              <div className="size-16 rounded-full" style={{ backgroundColor: token.hex }} />
              <p className="mt-6 text-sm font-semibold text-white">{token.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{token.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="typography" className="container mt-24 space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">Typography</h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70">
            Our typefaces and their hierarchical application for headings and body text, ensuring readability and brand personality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {typographyCards.map((card) => (
            <article key={card.label} className="h-full rounded-xl border border-white/10 bg-secondary/70 p-8 text-left shadow-card-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">{card.label}</p>
              <h3 className="mt-4 font-display text-2xl text-white">{card.title}</h3>
              <p className="mt-4 text-sm text-foreground/70">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="components" className="container mt-24 space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">Components</h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/70">
            Interactive elements and structural building blocks for dynamic and user-friendly interfaces.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {componentCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-secondary/70 p-8 text-left shadow-card-soft">
              <h3 className="font-display text-xl text-white">{card.title}</h3>
              {card.items ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {card.items.map((item) => (
                    <span
                      key={item.label}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] ${item.className}`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {card.elements ? (
                <div className="mt-6 space-y-3 text-sm text-foreground/70">
                  {card.elements.map((element, index) => (
                    <div key={`${card.title}-${element.placeholder}-${index}`} className="rounded-lg border border-white/10 bg-background/80 px-4 py-3">
                      {element.multiline ? (
                        <p className="text-left text-foreground/50">{element.placeholder}</p>
                      ) : (
                        <p className="text-left text-foreground/60">{element.placeholder}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
              {card.checklist ? (
                <ul className="mt-6 space-y-3 text-left text-sm text-foreground/70">
                  {card.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {card.tags ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] ${
                        tag.variant === "cyan"
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {card.toggles ? (
                <div className="mt-6 space-y-4 text-left text-sm text-foreground/70">
                  {card.toggles.map((toggle) => (
                    <div key={toggle.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-background/80 px-4 py-3">
                      <span>{toggle.label}</span>
                      {toggle.slider ? (
                        <div className="relative h-1 w-32 rounded-full bg-white/10">
                          <div className="absolute inset-y-0 left-0 h-full w-3/4 rounded-full bg-primary" />
                          <div className="absolute -top-1.5 left-3/4 h-4 w-4 rounded-full bg-primary" />
                        </div>
                      ) : (
                        <span className="flex h-6 w-12 items-center rounded-full bg-primary/30">
                          <span className="ml-auto mr-1 inline-block size-4 rounded-full bg-primary" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="container mt-24">
        <div className="rounded-xl border border-white/10 bg-secondary/70 p-10 text-left shadow-card-soft">
          <h2 className="font-display text-2xl text-white">Keep Building with FlowNation</h2>
          <p className="mt-4 max-w-2xl text-sm text-foreground/70">
            Use these tokens and components across every page for visual harmony. Combine brand surfaces, interactive states, and purposeful typography to deliver elite experiences for every athlete.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground hover:bg-primary/90">
              Download kit
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-white/10 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 hover:border-primary/40 hover:text-white"
            >
              <MessageCircle className="mr-2 size-4" /> Contact team
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-white/10 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 hover:border-primary/40 hover:text-white"
            >
              <Mail className="mr-2 size-4" /> Subscribe updates
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-white/10 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 hover:border-primary/40 hover:text-white"
            >
              <SliderHorizontal className="mr-2 size-4" /> View guidelines
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
