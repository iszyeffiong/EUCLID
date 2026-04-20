import { createFileRoute } from "@tanstack/react-router";
import { EmergencyBanner } from "@/components/EmergencyBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us  Euclid Plumbing & Heating, Etobicoke Since 1962" },
      {
        name: "description",
        content:
          "Three generations of family-run plumbing and heating in Etobicoke. Learn about Euclid Plumbing & Heating and our commitment to quality since 1962.",
      },
      { property: "og:title", content: "About Euclid Plumbing & Heating  Etobicoke Since 1962" },
      {
        property: "og:description",
        content:
          "Family-owned Etobicoke plumber serving the GTA since 1962. Honest pricing, quality workmanship, local reputation.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">A family business since 1962.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-foreground">
            <p>
              For over six decades, Euclid Plumbing & Heating has delivered dependable plumbing and
              heating solutions across Etobicoke and the Greater Toronto Area.
            </p>
            <p>
              As a family-operated business, we're built on honesty, quality workmanship, and
              old-fashioned customer service. The names on our trucks are the same names answering
              your call.
            </p>
            <p>
              We're licensed plumbing and gas contractors, fully insured, and proud members of the
              local community we've served through three generations.
            </p>
          </div>
          <aside className="md:col-span-2 rounded-2xl bg-secondary p-8">
            <h3 className="font-display text-2xl">By the numbers</h3>
            <dl className="mt-6 space-y-5">
              {[
                ["60+", "Years in business"],
                ["3", "Generations of family"],
                ["10,000+", "Homes served"],
                ["24/7", "Emergency availability"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <dt className="font-display text-4xl text-primary">{n}</dt>
                  <dd className="text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
