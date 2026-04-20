import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ShieldCheck, Clock, Award, Star } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";
import { PHONE, PHONE_HREF } from "@/lib/business";
import { ServicesGrid } from "@/components/ServicesGrid";
import { EmergencyBanner } from "@/components/EmergencyBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Euclid Plumbing & Heating  Etobicoke Plumber Since 1962" },
      {
        name: "description",
        content:
          "Reliable emergency plumbing, heating repair, boiler installation & drain cleaning in Etobicoke. Family owned since 1962. Free estimates, senior discount.",
      },
      {
        property: "og:title",
        content: "Euclid Plumbing & Heating  Etobicoke Plumber Since 1962",
      },
      {
        property: "og:description",
        content:
          "Reliable emergency plumbing & heating in Etobicoke. Family owned since 1962. Free estimates.",
      },
    ],
  }),
  component: Index,
});

const whyUs = [
  { icon: Award, title: "Since 1962", text: "Three generations of family-run craftsmanship." },
  { icon: Clock, title: "Fast Response", text: "Same-day emergency service across the GTA." },
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Certified plumbing & gas technicians." },
  { icon: Star, title: "Senior Discount", text: "Fair pricing with free written estimates." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="container-tight grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Family Business Since 1962
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Reliable Plumbing &{" "}
              <span className="text-gradient-accent">Heating Services</span> in Etobicoke
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Fast emergency response. Trusted local experts. Over 60 years keeping homes
              and businesses across the GTA running smoothly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-xl transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" />
                Call Now  {PHONE}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-base font-bold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
              >
                Get Free Estimate
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
              {["Free Estimates", "Senior Discount", "Licensed Contractors", "Emergency Service"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/30 blur-2xl" />
            <img
              src={heroImg}
              alt="Euclid plumber servicing a residential boiler in Etobicoke"
              width={1600}
              height={1088}
              className="relative w-full rounded-2xl object-cover shadow-2xl ring-1 ring-primary-foreground/10"
            />
          </div>
        </div>
      </section>

      <EmergencyBanner />

      {/* Services */}
      <section className="py-20">
        <div className="container-tight">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">What We Do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Full-service plumbing and heating, done right the first time.
            </h2>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-secondary py-20">
        <div className="container-tight">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Why Euclid</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Six decades of trust in every home we enter.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-tight">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Testimonials</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">What our neighbors say.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Came out within the hour when our basement flooded. Honest price and excellent work.",
                n: "Margaret D., Etobicoke",
              },
              {
                q: "Installed a new boiler for us  efficient, clean job, and they treated our home with respect.",
                n: "Rafael S., Mississauga",
              },
              {
                q: "Been using Euclid for 20+ years. You won't find more trustworthy tradespeople in the GTA.",
                n: "Tom & Linda, Toronto",
              },
            ].map((t) => (
              <figure key={t.n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                   {t.n}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl">Need a plumber or heating tech today?</h2>
          <p className="max-w-xl text-primary-foreground/80">
            Serving Etobicoke and the Greater Toronto Area. Call now for fast, friendly service.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-xl"
          >
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
