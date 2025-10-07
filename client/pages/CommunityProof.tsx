import { FlowNationShell } from "@/components/layout/flownation-shell";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "4,125+", label: "Community Members" },
  { value: "9+", label: "Disciplines Covered" },
  { value: "8,335+", label: "Challenges Completed" },
  { value: "0+", label: "Expert Coaches" },
];

const testimonials = [
  {
    name: "Anya Sharma",
    role: "Trail Running",
    quote:
      "FlowNation transformed my training. The community support is incredible, and the personalized plans pushed me further than I thought possible. I've found my flow state!",
  },
  {
    name: "Marcus 'The Machine' Chen",
    role: "Road Cycling",
    quote:
      "The detailed analytics and diverse routes available on FlowNation are unmatched. I've shaved minutes off my PRs and connected with cyclists worldwide. Highly recommend!",
  },
  {
    name: "Chloe Dubois",
    role: "Open Water Swimming",
    quote:
      "As an open water swimmer, finding a dedicated community was tough. FlowNation offers amazing resources, expert advice, and a real sense of camaraderie. My confidence has soared!",
  },
  {
    name: "Javier 'The Peak' Rodriguez",
    role: "Rock Climbing",
    quote:
      "The strength and conditioning programs are game-changers. I've improved my grip, endurance, and strategic planning, tackling harder routes with more control. This platform truly understands athletes.",
  },
  {
    name: "Sarah 'Ironwoman' Patel",
    role: "Triathlon",
    quote:
      "Managing three disciplines is complex, but FlowNation makes it seamless. The cross-training insights and support from fellow triathletes have been invaluable in my race preparations.",
  },
  {
    name: "Kevin 'Kickflip' Lee",
    role: "Skateboarding",
    quote:
      "Never thought I'd find a community for extreme sports here! FlowNation connects riders, sharers, and enthusiasts, sharing tips and locations. It's truly inspiring to see. Game on!",
  },
];

export default function CommunityProof() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            A Thriving Community, <span className="text-[#708bff]">United</span> by Passion
          </h1>
          <p className="mx-auto max-w-3xl text-base text-white/80">
            Join thousands of athletes pushing their limits, sharing victories, and finding inspiration together.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-[#0f121b] px-6 py-8 text-center"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm text-white/70">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <header className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold">Voices of Our Community</h2>
            <p className="text-base text-white/70">
              Hear from real athletes who have found their edge and their tribe with FlowNation.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl border border-white/10 bg-[#0f121b] p-6">
                <p className="text-base text-white/70">“{testimonial.quote}���</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <span className="mt-2 inline-flex items-center rounded-full bg-[#2b2f43] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {testimonial.role}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#1c1f30] via-[#151826] to-[#10131d] px-10 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready to Find Your Flow?</h2>
          <p className="mt-4 text-base text-white/70">
            Unleash your potential and connect with a world of dedicated athletes.
          </p>
          <a
            href="/community"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#4b5bfe] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            Join the FlowNation Community Today!
            <ArrowRight className="size-4" />
          </a>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#0f121b] px-10 py-12 text-center">
          <p className="text-3xl font-semibold text-white">
            Where Every <span className="text-[#6f89ff]">Stride</span>, Every <span className="text-[#ff7dbc]">Stroke</span>, Every
            <span className="text-[#ff7847]"> Climb</span> Fuels Your Greatness.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white">Company</span>
            <span>Resources</span>
            <span>Legal</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">© FlowNation. All rights reserved.</p>
        </div>
      </footer>
    </FlowNationShell>
  );
}
