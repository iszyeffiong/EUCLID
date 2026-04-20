import {
  AlertTriangle,
  Flame,
  Thermometer,
  Waves,
  Pipette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/business";

const ICONS: Record<string, LucideIcon> = {
  AlertTriangle,
  Flame,
  Thermometer,
  Waves,
  Pipette,
  Wrench,
};

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const Icon = ICONS[s.icon] ?? Wrench;
        return (
          <article
            key={s.slug}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all group-hover:w-full" />
          </article>
        );
      })}
    </div>
  );
}
