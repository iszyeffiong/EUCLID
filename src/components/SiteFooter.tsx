import { Phone, MapPin, Clock } from "lucide-react";
import { ADDRESS, PHONE, PHONE_HREF } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">Euclid Plumbing & Heating</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Family owned and operated since 1962. Serving Etobicoke and the Greater Toronto Area
            with honest, reliable plumbing and heating services.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-accent" />
            <a href={PHONE_HREF} className="font-semibold hover:text-accent">
              {PHONE}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            <span>{ADDRESS}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-accent" />
            <span>Flexible hours • Emergencies & weekends available</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Service Area</h4>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Etobicoke, Mississauga, North York, Toronto, Vaughan, and surrounding GTA communities.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-5 text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Euclid Plumbing & Heating. Licensed contractors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
