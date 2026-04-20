import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { ADDRESS, MAP_EMBED, PHONE, PHONE_HREF } from "@/lib/business";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Euclid Plumbing & Heating  Etobicoke Plumber" },
      {
        name: "description",
        content:
          "Call (437) 370-0697 or request a free estimate. Euclid Plumbing & Heating serves Etobicoke and the Greater Toronto Area.",
      },
      { property: "og:title", content: "Contact Euclid Plumbing & Heating  Etobicoke" },
      {
        property: "og:description",
        content:
          "Call us or request a free estimate for plumbing and heating services in Etobicoke & the GTA.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Get In Touch</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Contact us  we're here to help.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Call for emergencies or send us a message for a free estimate. Serving Etobicoke & the GTA.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 rounded-xl bg-accent p-5 text-accent-foreground shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-80">Call Now</p>
                <p className="text-xl font-bold">{PHONE}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Location
                </p>
                <p className="font-semibold">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Hours
                </p>
                <p className="font-semibold">Flexible hours</p>
                <p className="text-sm text-muted-foreground">Emergencies & weekends available</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service Area
                </p>
                <p className="font-semibold">Etobicoke & Greater Toronto Area</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-3 lg:p-8">
            <h2 className="text-2xl">Request a Free Estimate</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what's going on and we'll get right back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-tight overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Euclid Plumbing & Heating location"
            src={MAP_EMBED}
            width="100%"
            height="420"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
