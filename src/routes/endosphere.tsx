import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import { LeadForm } from "@/components/lead-form";
import img from "@/assets/endosphere.jpg";

export const Route = createFileRoute("/endosphere")({
  head: () => ({
    meta: [
      { title: "Endosphere Therapy in Nuneaton — Cellulite & Body Sculpting | Relaxify" },
      { name: "description", content: "Non-invasive Endosphere therapy in Nuneaton. Reduce cellulite, sculpt and tone using micro-vibration & compression technology." },
      { property: "og:title", content: "Endosphere Therapy — Nuneaton" },
      { property: "og:description", content: "Non-invasive cellulite reduction & body sculpting." },
      { property: "og:image", content: img },
    ],
  }),
  component: EndospherePage,
});

const areas = ["Legs", "Buttocks", "Tummy", "Arms"];
const pricing = [
  { label: "Single session", price: "£40", note: "Single area trial" },
  { label: "Targeted area", price: "£50", note: "Per session" },
  { label: "Full body", price: "£70", note: "Per session" },
  { label: "Consultation", price: "£0", note: "Free, no obligation", highlight: true },
];
const timeline = [
  { sessions: "3", title: "Initial response", text: "Improved skin tone, firmness & circulation." },
  { sessions: "6", title: "Visible reduction", text: "Cellulite smoothing and inch loss begins." },
  { sessions: "12", title: "Full transformation", text: "Sculpted contour, lasting smoothness." },
];

function EndospherePage() {
  return (
    <>
      <PageBanner
        eyebrow="Body Sculpting"
        title="Endosphere Therapy"
        description="Non-invasive cellulite reduction and body sculpting using compressive micro-vibration. Real results, zero downtime."
        image={img}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-semibold">The technology</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Endosphere uses 55 silicone spheres delivering compressive micro-vibration at a precise frequency.
                The result is a unique combination of lymphatic drainage, deep-tissue mobilisation and reduction of
                fluid stagnation — proven to visibly reduce cellulite and reshape the body.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Reduces cellulite of all stages",
                  "Tones and firms skin",
                  "Improves microcirculation",
                  "Drains fluid retention",
                  "Sculpts targeted areas",
                  "Supports muscle tone",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Treatment areas</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {areas.map((a) => (
                  <div key={a} className="rounded-2xl border border-border bg-card p-5 text-center shadow-card">
                    <p className="font-display text-lg font-semibold">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Pricing</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pricing.map((p) => (
                  <div
                    key={p.label}
                    className={`rounded-2xl border p-6 shadow-card ${p.highlight ? "border-primary bg-primary-soft" : "border-border bg-card"}`}
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.label}</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-primary-deep">From {p.price}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Results timeline</h2>
              <div className="mt-6 space-y-4">
                {timeline.map((t) => (
                  <div key={t.sessions} className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-card">
                    <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <p className="font-display text-2xl font-semibold leading-none">{t.sessions}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t.title}</p>
                      <p className="text-sm text-muted-foreground">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Book Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/treatments">All Treatments</Link>
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title="Free Endosphere Consult" />
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}