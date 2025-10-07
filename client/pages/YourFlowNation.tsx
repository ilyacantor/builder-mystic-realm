const quickStats = [
  { title: "Today's Distance", value: "25 mi" },
  { title: "Active Hours", value: "2.5 h" },
  { title: "Calories Burned", value: "1800" },
  { title: "Training Load", value: "Moderate" },
  { title: "Elevation Gain", value: "1,600 ft" },
  { title: "Sleep Quality", value: "86%" },
];

const knowledge = [
  {
    title: "The Science of Recovery for Cyclists",
    label: "Read",
  },
  {
    title: "Trail Running: Mastering Technical Descents",
    label: "Explore",
  },
  {
    title: "Ironman Training: Beyond the Swim and Run",
    label: "Discover",
  },
  {
    title: "The Ultimate Guide to Winter Cycling Gear",
    label: "View",
  },
];

const upcoming = [
  {
    title: "FlowNation Half Marathon",
    date: "Sat, Jun 15",
    location: "Riverfront Park",
  },
  {
    title: "Morning Gravel Grind",
    date: "Sun, Jun 23",
    location: "Hillside Trails",
  },
  {
    title: "Wednesday Night Ride",
    date: "Wed, Jun 26",
    location: "City Loop",
  },
];

const buddies = [
  { name: "Sarah Chen", discipline: "Road Cycling" },
  { name: "David Kim", discipline: "Gravel" },
  { name: "Jessica Lee", discipline: "Triathlon" },
  { name: "Michael Brown", discipline: "Mountain" },
  { name: "Emily White", discipline: "Runner" },
];

const gear = [
  {
    title: "Aero Road Helmet",
    description: "Streamlined design for speed-focused riders with enhanced ventilation.",
  },
  {
    title: "Trail Running Shoes",
    description: "Grip and cushioning tuned for technical terrain and long adventures.",
  },
  {
    title: "GPS Cycling Computer",
    description: "Advanced metrics, maps, and live tracking for every ride.",
  },
  {
    title: "Compression Socks",
    description: "Improve recovery and circulation for endurance athletes.",
  },
];

const integrations = [
  { name: "Strava", status: "Manage" },
  { name: "Garmin Connect", status: "Manage" },
  { name: "Zwift", status: "Manage" },
  { name: "TrainingPeaks", status: "Manage" },
];

export default function YourFlowNation() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#1f2333] px-3 py-1 text-xs font-bold uppercase tracking-[0.35em] text-white/80">FN</span>
            <span className="font-display text-xl font-semibold tracking-[0.2em] text-white">FlowNation</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/60 lg:flex">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/discover" className="hover:text-white">Discover</a>
            <a href="/community" className="hover:text-white">Community</a>
            <a href="/your-flownation" className="text-white">Gear</a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white">•</button>
            <img
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alex"
              alt="Alex"
              className="size-10 rounded-full border-2 border-white/20"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Your FlowNation</p>
              <h1 className="text-4xl font-semibold text-white">Good morning, Alex — Recovery Day.</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[#ff6f00] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                Log Ride
              </button>
              <button className="rounded-full bg-[#00bcc4] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                Plan Route
              </button>
              <button className="rounded-full border border-white/10 bg-[#0f121b] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Share Activity
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {quickStats.map((stat) => (
              <div key={stat.title} className="rounded-3xl border border-white/10 bg-[#10131d] px-4 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.title}</p>
                <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {knowledge.map((item) => (
            <article key={item.title} className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#10131d] px-6 py-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <button className="mt-auto w-fit rounded-full border border-white/10 bg-[#0f121b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {item.label}
              </button>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <h2 className="text-base font-semibold text-white">Upcoming Events</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {upcoming.map((event) => (
              <div key={event.title} className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4">
                <p className="text-sm font-semibold text-white">{event.title}</p>
                <p className="mt-2 text-sm text-white/60">{event.date}</p>
                <p className="text-sm text-white/60">{event.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <h2 className="text-base font-semibold text-white">Suggested Ride Buddies</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {buddies.map((buddy) => (
              <div key={buddy.name} className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4 text-center">
                <img
                  src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(buddy.name)}`}
                  alt={buddy.name}
                  className="mx-auto size-12 rounded-full border-2 border-[#161b29]"
                />
                <p className="mt-3 text-sm font-semibold text-white">{buddy.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{buddy.discipline}</p>
                <button className="mt-4 w-full rounded-full bg-[#ff6f00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                  Add Connect
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">Performance Insights</h2>
            <div className="mt-6 h-52 rounded-2xl border border-white/10 bg-[#0f121b]" />
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">Weekly Mileage</h2>
            <div className="mt-6 h-52 rounded-2xl border border-white/10 bg-[#0f121b]" />
          </article>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <h2 className="text-base font-semibold text-white">Gear & Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {gear.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <h2 className="text-base font-semibold text-white">Integrations</h2>
          <div className="mt-6 space-y-3">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3">
                <p className="text-sm font-semibold text-white">{integration.name}</p>
                <div className="flex items-center gap-3">
                  <div className="h-16 w-24 rounded-xl border border-white/10 bg-[#10131d]" />
                  <button className="rounded-full border border-white/10 bg-[#10131d] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {integration.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white">Quick Links</span>
            <span>Community</span>
            <span>Gear Hub</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Powered by athletes. Built for the endurance community.</p>
        </div>
      </footer>
    </div>
  );
}
