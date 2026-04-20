import { Phone, Siren } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/business";

export function EmergencyBanner() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container-tight flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Siren className="h-7 w-7 shrink-0" />
          <p className="text-lg font-bold tracking-tight">
            Plumbing or heating emergency? We answer 24/7.
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="pulse-cta inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-base font-bold text-accent shadow-lg"
        >
          <Phone className="h-5 w-5" />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
