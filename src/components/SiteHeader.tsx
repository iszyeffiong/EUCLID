import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Wrench, Calendar } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/business";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold leading-none">
            EUCLID
            <span className="block text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
              PLUMBING & HEATING
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full shrink-0" asChild>
            <a href={PHONE_HREF} aria-label={`Call us at ${PHONE}`}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild className="hidden sm:flex font-bold">
            <Link to="/contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center rounded-md p-2 text-foreground h-9 w-9"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container-tight flex flex-col py-4 gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full font-bold h-11">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Online Now
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
