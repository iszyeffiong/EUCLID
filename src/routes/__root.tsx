import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import faviconPng from "../assets/favicon.png";
import faviconIco from "../assets/favicon.ico";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Euclid Plumbing & Heating  Etobicoke Plumber Since 1962" },
      {
        name: "description",
        content:
          "Family-owned plumbing and heating contractors serving Etobicoke & the GTA since 1962. Emergency service, boiler repair, drain cleaning, gas piping. Free estimates.",
      },
      { name: "author", content: "Euclid Plumbing & Heating" },
      { property: "og:title", content: "Euclid Plumbing & Heating  Etobicoke Since 1962" },
      {
        property: "og:description",
        content:
          "Trusted family plumber in Etobicoke. Emergency service, boiler installation, drain cleaning, gas piping. Free estimates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconPng },
      { rel: "shortcut icon", href: faviconIco },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "Euclid Plumbing & Heating",
          telephone: "+1-437-370-0697",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Lorraine Gdns",
            addressLocality: "Etobicoke",
            addressRegion: "ON",
            postalCode: "M9B 4Z4",
            addressCountry: "CA",
          },
          areaServed: "Etobicoke & Greater Toronto Area",
          foundingDate: "1962",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
