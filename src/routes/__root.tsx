import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActions } from "@/components/floating-actions";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

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
      { title: "Massage Nuneaton — Relaxify Wellness | Pain Relief & Body Care" },
      { name: "description", content: "Advanced therapeutic massage, laser hair removal & Endosphere body sculpting in Nuneaton. Book with Elina, Level 4 qualified therapist." },
      { name: "author", content: "Relaxify Wellness" },
      { property: "og:title", content: "Massage Nuneaton — Relaxify Wellness | Pain Relief & Body Care" },
      { property: "og:description", content: "Advanced therapeutic massage, laser hair removal & Endosphere body sculpting in Nuneaton. Book with Elina, Level 4 qualified therapist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Massage Nuneaton — Relaxify Wellness | Pain Relief & Body Care" },
      { name: "twitter:description", content: "Advanced therapeutic massage, laser hair removal & Endosphere body sculpting in Nuneaton. Book with Elina, Level 4 qualified therapist." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/afc6ee1c-1fc0-477a-983c-5662c316c24e/id-preview-64832875--341a088d-a5ed-4410-adb2-c7b32fd79c8e.lovable.app-1776869844047.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/afc6ee1c-1fc0-477a-983c-5662c316c24e/id-preview-64832875--341a088d-a5ed-4410-adb2-c7b32fd79c8e.lovable.app-1776869844047.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
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
      <FloatingActions />
      <Toaster richColors position="top-center" />
    </div>
  );
}
