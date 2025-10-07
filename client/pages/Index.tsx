import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import {
  Award,
  ArrowRight,
  BarChart3,
  Bike,
  Calendar,
  Flame,
  HeartPulse,
  MapPinned,
  MessageCircle,
  Settings2,
  Users,
  Zap,
} from "lucide-react";

const featureHighlights = [
  {
    title: "Road Cycling",
    description: "Conquer epic climbs with curated elevation-rich routes and pacing insights.",
    icon: Bike,
    accent: "Power focus",
  },
  {
    title: "Gravel Adventures",
    description: "Navigate technical trails with surface-aware guidance and gear intel.",
    icon: MapPinned,
    accent: "Trail tested",
  },
  {
    title: "Triathlon",
    description: "Balance swim, ride, and run blocks with adaptive recovery scheduling.",
    icon: HeartPulse,
    accent: "3-discipline sync",
  },
  {
    title: "Run Club",
    description: "Dial in tempo sessions and connect with pacers nearby for every distance.",
    icon: Flame,
    accent: "Tempo ready",
  },
];

const personaStories = [
  {
    name: "Endurance Maverick",
    summary: "Custom blocks for long-course athletes balancing work, travel, and podium goals.",
    stats: "Avg 210 km weekly • FTP 285W",
  },
  {
    name: "Gravel Seeker",
    summary: "Route discovery with terrain filters, nutrition reminders, and gear pairing.",
    stats: "60% off-road • 8 events booked",
  },
  {
    name: "Multi-Sport Maestro",
    summary: "Structured tri plans synced across pools, tracks, and Zwift, all in one hub.",
    stats: "3 disciplines • 5 integrations",
  },
];

const dashboardMetrics = [
  { label: "Functional Threshold Power", value: "285W" },
  { label: "Average Speed", value: "28.5 km/h" },
  { label: "Rides Completed", value: "124" },
];

const performanceTrends = [
  { label: "Mileage", value: "180 km" },
  { label: "Elevation", value: "5,420 m" },
  { label: "Training Load", value: "Moderate" },
];

const communityMembers = [
  {
    name: "Alex 'The Pacer' Smith",
    rides: "124 Rides",
    speed: "28.3 km/h Avg",
    events: "7 Events Together",
  },
  {
    name: "Sarah 'Trailblazer' Lee",
    rides: "89 Rides",
    speed: "22.1 km/h Avg",
    events: "5 Events Together",
  },
  {
    name: "Mike 'Powerhouse' Chen",
    rides: "155 Rides",
    speed: "30.2 km/h Avg",
    events: "11 Events Together",
  },
  {
    name: "Emily 'Speedy' White",
    rides: "98 Rides",
    speed: "27.8 km/h Avg",
    events: "8 Events Together",
  },
  {
    name: "David 'Enduro' Brown",
    rides: "110 Rides",
    speed: "25.3 km/h Avg",
    events: "6 Events Together",
  },
  {
    name: "Jessica 'Summit' Green",
    rides: "72 Rides",
    speed: "19.8 km/h Avg",
    events: "2 Events Together",
  },
];

const recommendedPartners = [
  {
    name: "Sophia 'Sprinter' King",
    rides: "55 Rides • 24 km/h avg",
  },
  {
    name: "Lucas 'Climber' Hall",
    rides: "80 Rides • 15.2 km/h avg",
  },
  {
    name: "Mia 'Zen' Kim",
    rides: "30 Rides • 19.8 km/h avg",
  },
];

const recentChats = [
  {
    name: "Alex Smith",
    message: "Hey, thinking about that long ride next weekend. You in?",
  },
  {
    name: "Sarah Lee",
    message: "Finished my marathon prep run! Feeling strong.",
  },
  {
    name: "Mike Chen",
    message: "Anyone doing the coastal triathlon this year?",
  },
];

const upcomingRides = [
  {
    title: "Sunday Morning Gravel Grind",
    date: "Sun, Oct 27",
    distance: "60 km",
    riders: "8 Riders",
  },
  {
    title: "Wednesday Evening Hill Repeats",
    date: "Wed, Oct 30",
    distance: "25 km",
    riders: "5 Riders",
  },
];

const profilePreferences = [
  { label: "Dark Mode", value: "Enabled" },
  { label: "Make Profile Public", value: "Enabled" },
  { label: "Email Notifications", value: "Paused" },
];

export default function Index() {
  return (
    <SiteLayout>
      <div className="space-y-28">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-70" />
          <div className="container grid gap-16 pb-24 pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
                FlowNation Community
              </span>
              <div className="space-y-6">
                <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  A thriving athletic universe powered by connection, data, and grit.
                </h1>
                <p className="max-w-xl text-lg text-foreground/75 sm:text-xl">
                  Join cyclists, runners, triathletes, and explorers switching between training, events, and community moments without leaving the FlowNation canvas.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_32px_70px_-30px_rgba(0,188,212,0.85)] transition hover:bg-primary/90"
                >
                  Start Your Journey
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border border-white/10 bg-secondary/60 text-base text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <a href="#community">Discover Riders</a>
                </Button>
              </div>
              <div className="grid gap-6 text-sm text-foreground/70 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-bold text-white">4,125+</p>
                  <p className="uppercase tracking-[0.35em] text-foreground/50">Community members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">8,335+</p>
                  <p className="uppercase tracking-[0.35em] text-foreground/50">Challenges completed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">60+</p>
                  <p className="uppercase tracking-[0.35em] text-foreground/50">Events this season</p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 rounded-[32px] border border-white/10 bg-secondary/80 p-8 shadow-card-soft backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Today&apos;s Focus</p>
                  <p className="text-lg font-semibold text-white">Endurance + Strength</p>
                </div>
                <div className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
                  Balanced
                </div>
              </div>
              <div className="grid gap-4">
                {dashboardMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-background/70 px-5 py-4 text-sm text-foreground/70"
                  >
                    <p className="text-foreground/50">{metric.label}</p>
                    <p className="text-xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-background/70 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  <BarChart3 className="size-4 text-primary" /> Weekly Outlook
                </p>
                <div className="mt-4 grid gap-3 text-sm text-foreground/70">
                  {performanceTrends.map((trend) => (
                    <div key={trend.label} className="flex items-center justify-between">
                      <span>{trend.label}</span>
                      <span className="font-semibold text-white">{trend.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 animate-shimmer bg-gradient-to-r from-primary via-accent to-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="persona" className="container space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Guest Persona</p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                FlowNation adapts to every discipline, schedule, and ambition.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-foreground/70">
                Layer your persona preferences to auto-tune training blocks, find compatible buddies, and sync insights across your favorite platforms.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="self-start border border-white/10 bg-secondary/60 text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
            >
              <a href="#profile" className="inline-flex items-center gap-2">
                Configure profile
                <Settings2 className="size-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {personaStories.map((persona) => (
              <div
                key={persona.name}
                className="rounded-[28px] border border-white/10 bg-card/80 p-7 shadow-card-soft backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Persona</p>
                <h3 className="mt-4 font-display text-2xl text-white">{persona.name}</h3>
                <p className="mt-3 text-sm text-foreground/70">{persona.summary}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.4em] text-foreground/50">{persona.stats}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureHighlights.map(({ title, description, icon: Icon, accent }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-secondary/70 p-6 shadow-card-soft backdrop-blur-xl transition hover:border-primary/60 hover:bg-secondary/80"
              >
                <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition duration-300 group-hover:bg-primary/20" />
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                  {accent}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="dashboard" className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Dashboard</p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                Visualize every watt, stride, and stroke in one command center.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-foreground/70">
                FlowNation distills performance signals, event timelines, and achievements so you can tune training loads and celebrate progress with your crew.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground/70">
              <Zap className="size-5 text-primary" />
              <span>Live sync with Garmin, Strava, Zwift</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 rounded-[32px] border border-white/10 bg-secondary/70 p-8 shadow-card-soft backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Good morning, Alex</p>
                  <h3 className="font-display text-2xl text-white">Recovery Day</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="border border-white/10 bg-background/60 text-xs uppercase tracking-[0.35em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  View plan
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    <Users className="size-4 text-primary" /> Today&apos;s Distance
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">25 mi</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/50">Ride with team comet</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    <HeartPulse className="size-4 text-primary" /> Training Load
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">Moderate</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/50">HRV trending up</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    <Award className="size-4 text-primary" /> Badges & Achievements
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Centurion</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">King of the Mountain</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Eco Rider</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    <Calendar className="size-4 text-primary" /> Upcoming Sessions
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                    <li className="flex items-center justify-between">
                      <span>Sunrise Endurance Ride</span>
                      <span>Sat • 100 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Interval Track Session</span>
                      <span>Mon • 8x800 m</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Tempo Swim</span>
                      <span>Wed • 2.5 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[32px] border border-white/10 bg-secondary/70 p-7 shadow-card-soft backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Recent Chats</p>
                <div className="mt-4 space-y-4 text-sm text-foreground/70">
                  {recentChats.map((chat) => (
                    <div key={chat.name} className="rounded-2xl border border-white/5 bg-background/60 px-4 py-3">
                      <p className="font-semibold text-white">{chat.name}</p>
                      <p className="mt-1 text-foreground/70">{chat.message}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-secondary/70 p-7 shadow-card-soft backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Upcoming Group Rides</p>
                <div className="mt-4 space-y-4">
                  {upcomingRides.map((ride) => (
                    <div key={ride.title} className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-background/60 p-4 text-sm text-foreground/70">
                      <p className="font-semibold text-white">{ride.title}</p>
                      <p className="text-foreground/60">{ride.date}</p>
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
                        <span>{ride.distance}</span>
                        <span>{ride.riders}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="mt-5 w-full border border-white/10 bg-background/60 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  View full calendar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Community</p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                Find riders who match your speed, terrain, and vibe.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-foreground/70">
                Browse FlowNation profiles with deep training context to plan your next ride, tri relay, or community challenge.
              </p>
            </div>
            <Button
              variant="ghost"
              className="self-start border border-white/10 bg-secondary/60 text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
            >
              <MessageCircle className="mr-2 size-4" /> Start a chat
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {communityMembers.map((member) => (
              <article key={member.name} className="rounded-[28px] border border-white/10 bg-card/80 p-6 shadow-card-soft backdrop-blur-xl">
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span className="font-semibold text-white">{member.name}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">
                    Connect
                  </span>
                </div>
                <div className="mt-5 space-y-2 text-xs uppercase tracking-[0.35em] text-foreground/45">
                  <p className="text-foreground/60">{member.rides}</p>
                  <p className="text-foreground/60">{member.speed}</p>
                  <p className="text-foreground/60">{member.events}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">You might like to ride with...</p>
            <div className="grid gap-6 md:grid-cols-3">
              {recommendedPartners.map((partner) => (
                <div key={partner.name} className="rounded-[28px] border border-white/10 bg-secondary/70 p-6 shadow-card-soft backdrop-blur-xl">
                  <p className="font-semibold text-white">{partner.name}</p>
                  <p className="mt-2 text-sm text-foreground/70">{partner.rides}</p>
                  <Button
                    variant="ghost"
                    className="mt-5 w-full border border-white/10 bg-background/60 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                  >
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Profile</p>
              <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                Centralize preferences, integrations, and privacy in seconds.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-foreground/70">
                Sync FlowNation with your wearables, manage visibility, and fine-tune notifications without leaving the profile hub.
              </p>
            </div>
            <Button
              variant="ghost"
              className="self-start border border-white/10 bg-secondary/60 text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
            >
              <Users className="mr-2 size-4" /> Manage team access
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-white/10 bg-secondary/70 p-7 shadow-card-soft backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Profile Information</p>
                  <p className="mt-2 font-display text-2xl text-white">Jane Doe</p>
                  <p className="mt-1 text-sm text-foreground/70">jane.doe@flow-nation.com</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="border border-white/10 bg-background/60 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  Upload new photo
                </Button>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-foreground/70">
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Favorite Sports</p>
                  <p className="mt-2 text-white">Cycling • Triathlon • Trail Running • Gravel</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">External Connections</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Strava</span>
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Connected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Garmin Connect</span>
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Connected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Zwift</span>
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[32px] border border-white/10 bg-secondary/70 p-7 shadow-card-soft backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Preferences</p>
                <div className="mt-5 space-y-3 text-sm text-foreground/70">
                  {profilePreferences.map((pref) => (
                    <div key={pref.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                      <span>{pref.label}</span>
                      <span className="font-semibold text-white">{pref.value}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="mt-6 w-full border border-white/10 bg-background/60 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  Save changes
                </Button>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-secondary/70 p-7 shadow-card-soft backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">Integrations</p>
                <div className="mt-4 space-y-3 text-sm text-foreground/70">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                    <span>TrainingPeaks</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Connected</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                    <span>Wahoo</span>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">Syncing</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3">
                    <span>Apple Health</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="container">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-primary/20 via-background to-background p-12 text-center shadow-card-soft backdrop-blur-xl">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Ready to find your flow?
            </h2>
            <p className="mt-4 text-base text-foreground/70 sm:text-lg">
              Unlock elite-level training, discover global events, and connect with athletes who match your pace.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_32px_70px_-30px_rgba(0,188,212,0.85)] transition hover:bg-primary/90"
              >
                Join the FlowNation Community
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-white/10 bg-secondary/60 text-base text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
              >
                Explore upcoming events
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
