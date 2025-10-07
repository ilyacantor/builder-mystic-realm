import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import {
  Bike,
  CalendarDays,
  ChevronRight,
  Gauge,
  MapPin,
  MessageCircle,
  Route,
  UsersRound,
} from "lucide-react";

const rideProfiles = [
  {
    name: "Sarah Chen",
    location: "Brooklyn, NY",
    specialty: "Road Cyclist",
    status: "Connect",
  },
  {
    name: "Miguel Ramirez",
    location: "Austin, TX",
    specialty: "Gravel Explorer",
    status: "Request",
  },
  {
    name: "Emily White",
    location: "Boulder, CO",
    specialty: "Triathlete",
    status: "Connect",
  },
  {
    name: "David Jones",
    location: "Portland, OR",
    specialty: "Trail Runner",
    status: "Invite",
  },
];

const eventCards = [
  {
    title: "Sunday Morning Group Ride",
    location: "City Park, Anyplace",
    date: "Sun, Apr 21 • 70 km",
    cta: "View Details",
    highlight: "Road",
  },
  {
    title: "Spring Triathlon Challenge",
    location: "Lakeside Recreation Area",
    date: "Sat, May 04 • 1.5 km swim",
    cta: "Register",
    highlight: "Triathlon",
  },
  {
    title: "Gravel Grinder Classic",
    location: "Wyoming Pines Forest",
    date: "Sat, May 18 • 110 km",
    cta: "Register",
    highlight: "Gravel",
  },
  {
    title: "Coastal Century Ride",
    location: "Oceanfront Loop",
    date: "Sun, Jun 02 • 160 km",
    cta: "View Details",
    highlight: "Road",
  },
];

const gearReviews = [
  {
    title: "Road Cycling Shoes ‘Speedster X’",
    summary:
      "Unbeatable power transfer and comfort for long-distance rides. Perfect for road warriors."
  },
  {
    title: "Triathlon Watch ‘Endurance Pro’",
    summary:
      "Advanced metrics and long battery life for multisport athletes. Seamless water transitions."
  },
  {
    title: "Aero Road Jersey ‘Velocity’",
    summary:
      "Designed for speed, efficient aerodynamics, and premium moisture control for every ride."
  },
];

const activityFeed = [
  "Sarah just completed a 100km road ride!",
  "New event: Mountain Epic added near you!",
  "Kim joined the Morning Runner group.",
  "FlowNation now supports custom routes!",
];

const integrations = [
  { label: "Strava", status: "Connected" },
  { label: "Garmin Connect", status: "Connected" },
  { label: "Zwift", status: "Disconnected" },
];

export default function Index() {
  return (
    <SiteLayout>
      <div className="space-y-24 pb-20">
        <section id="home" className="relative overflow-hidden rounded-[36px] border border-white/5 bg-secondary/70 px-6 py-12 shadow-card-soft backdrop-blur-xl sm:px-12">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(0,188,212,0.22),rgba(10,10,10,0.6)),radial-gradient(circle_at_top_right,rgba(255,127,17,0.18),transparent_60%)]" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                FlowNation
              </span>
              <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                Welcome to Your Personalized FlowNation Experience
              </h1>
              <p className="text-lg text-foreground/75">
                Discover the best paved routes, join spirited group rides, and track your performance with precision. FlowNation connects you to a vibrant community passionate about the open road.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.3em]">
                {[("Road"), ("Gravel"), ("Triathlete")].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    className={`rounded-full border border-white/10 px-5 py-2 transition ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-background/40 text-foreground/70 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div
              id="dashboard"
              className="grid w-full max-w-md gap-4 rounded-[28px] border border-white/5 bg-background/70 p-6 text-sm text-foreground/70"
            >
              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-secondary/70 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Today&apos;s Focus</p>
                  <p className="mt-1 text-base font-semibold text-white">Recovery Ride</p>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  <Gauge className="size-4" /> Moderate
                </div>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/5 bg-secondary/70 px-4 py-3">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
                    <Bike className="size-4 text-primary" /> Weekly Distance
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">210 km</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-secondary/70 px-4 py-3">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
                    <UsersRound className="size-4 text-primary" /> Group Rides
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">3 Events</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-secondary/70 px-4 py-3">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
                    <CalendarDays className="size-4 text-primary" /> Next Challenge
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">Coastal Century • Jun 02</p>
                </div>
              </div>
              <Button className="w-full bg-primary text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary/90">
                View Dashboard
              </Button>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground/70">
            {activityFeed.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="local" className="space-y-10">
          <div className="flex flex-col gap-6 rounded-[36px] border border-white/5 bg-secondary/70 p-8 shadow-card-soft backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Local Scene</p>
                <h2 className="mt-2 font-display text-3xl text-white">Discover rides tailored to your terrain.</h2>
              </div>
              <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                <button type="button" className="rounded-full border border-primary bg-primary/20 px-4 py-1 text-primary">
                  Nearby
                </button>
                <button type="button" className="rounded-full border border-white/10 px-4 py-1 hover:border-primary/40 hover:text-white">
                  Upcoming
                </button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {eventCards.map((event) => (
                <article key={event.title} className="flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-background/70 p-6 text-sm text-foreground/70">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                      <Route className="size-4" /> {event.highlight}
                    </span>
                    <h3 className="font-display text-xl text-white">{event.title}</h3>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
                      <MapPin className="size-4" /> {event.location}
                    </p>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
                      <CalendarDays className="size-4" /> {event.date}
                    </p>
                  </div>
                  <Button
                    variant={event.cta === "Register" ? "default" : "ghost"}
                    className={`mt-6 w-full text-xs uppercase tracking-[0.3em] ${
                      event.cta === "Register"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-white/10 bg-transparent text-foreground/80 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {event.cta}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[36px] border border-white/5 bg-secondary/70 p-8 shadow-card-soft backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Connect with Your Tribe</p>
                <h2 className="mt-2 font-display text-2xl text-white">Meet athletes who match your energy.</h2>
              </div>
              <Button variant="ghost" className="border border-white/10 bg-background/60 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white">
                <MessageCircle className="mr-2 size-4" /> Start Chat
              </Button>
            </div>
            <div className="mt-6 space-y-4">
              {rideProfiles.map((profile) => (
                <div key={profile.name} className="flex items-center justify-between rounded-[24px] border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground/70">
                  <div>
                    <p className="text-base font-semibold text-white">{profile.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{profile.location}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{profile.specialty}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="border border-white/10 bg-transparent text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                  >
                    {profile.status}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[36px] border border-white/5 bg-secondary/70 p-8 shadow-card-soft backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Gear & Reviews</p>
              <div className="mt-4 space-y-4">
                {gearReviews.map((gear) => (
                  <article key={gear.title} className="rounded-[24px] border border-white/10 bg-background/70 p-5 text-sm text-foreground/70">
                    <h3 className="font-display text-xl text-white">{gear.title}</h3>
                    <p className="mt-2 text-foreground/70">{gear.summary}</p>
                    <Button variant="ghost" className="mt-4 inline-flex items-center gap-2 border border-white/10 bg-transparent text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:text-white">
                      Read Review
                      <ChevronRight className="size-4" />
                    </Button>
                  </article>
                ))}
              </div>
            </div>
            <div id="gear" className="rounded-[36px] border border-white/5 bg-secondary/70 p-8 shadow-card-soft backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Training Integrations</p>
              <div className="mt-4 space-y-3">
                {integrations.map((integration) => (
                  <div key={integration.label} className="flex items-center justify-between rounded-[24px] border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground/70">
                    <span>{integration.label}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em] ${
                        integration.status === "Connected"
                          ? "bg-primary/15 text-primary"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="overflow-hidden rounded-[36px] border border-white/5 bg-gradient-to-br from-primary/15 via-background to-background p-12 text-center shadow-card-soft backdrop-blur-xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Join the FlowNation Community Today!</h2>
          <p className="mt-4 text-base text-foreground/70">
            Unlock your full potential, connect with athletes worldwide, and achieve your goals with FlowNation&apos;s personalized experience.
          </p>
          <form className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="h-12 w-full rounded-full border border-white/10 bg-background/70 px-6 text-sm text-foreground/80 placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:w-64"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="h-12 w-full rounded-full border border-white/10 bg-background/70 px-6 text-sm text-foreground/80 placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:w-72"
            />
            <Button className="h-12 rounded-full bg-primary px-8 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary/90">
              Join FlowNation
            </Button>
          </form>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Trusted by thousands of athletes worldwide.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
