import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/ServicesGrid";
import { EmergencyBanner } from "@/components/EmergencyBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing & Heating Services  Euclid Plumbing Etobicoke" },
      {
        name: "description",
        content:
          "Emergency plumbing, heating repair, boiler installation, drain cleaning, gas piping and general plumbing repairs in Etobicoke & the GTA.",
      },
      {
        property: "og:title",
        content: "Plumbing & Heating Services  Euclid Plumbing Etobicoke",
      },
      {
        property: "og:description",
        content:
          "Full-service plumbing and heating in the GTA: emergency repairs, boilers, drains, gas piping and more.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Plumbing & Heating Done Right</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            From a leaky faucet to a full boiler replacement, our licensed team handles every job
            with the same care  fast, clean, and guaranteed.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-tight grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Residential & Commercial</h2>
            <p className="mt-4 text-muted-foreground">
              We work with homeowners, property managers, and small businesses. Whether it's a
              single-family renovation or a multi-unit building, we bring the same standard of
              workmanship.
            </p>
          </div>
          <ul className="grid gap-3 text-foreground">
            {[
              "Bathroom & kitchen remodeling plumbing",
              "Hot water heating systems",
              "Property management service contracts",
              "New construction rough-ins",
              "Backflow prevention & testing",
              "Water heater replacement",
            ].map((i) => (
              <li
                key={i}
                className="rounded-lg border border-border bg-card px-4 py-3 font-semibold shadow-sm"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
