import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Zap, Clock } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import { LeadForm } from "@/components/lead-form";
import img from "@/assets/laser.jpg";

export const Route = createFileRoute("/laser-hair-removal")({
  head: () => ({
    meta: [
      { title: "Laser Hair Removal in Nuneaton | Relaxify" },
      { name: "description", content: "Professional laser hair removal in Nuneaton. Smooth skin, long-term results, fast safe sessions. Pricing from £80." },
      { property: "og:title", content: "Laser Hair Removal — Nuneaton" },
      { property: "og:description", content: "Smooth skin. Long-term results." },
      { property: "og:image", content: img },
    ],
  }),
  component: LaserPage,
});

const areas = [
  { area: "Upper Lip", price: "£25" },
  { area: "Underarms", price: "£40" },
  { area: "Bikini", price: "£50" },
  { area: "Chest", price: "£80" },
  { area: "Stomach", price: "£80" },
  { area: "Half Leg", price: "£80" },
  { area: "Full Leg", price: "£120" },
  { area: "Full Back", price: "£120" },
];

const benefits = [
  { icon: ShieldCheck, title: "Safe & gentle", text: "Suitable for all skin types with adjustable energy levels." },
  { icon: Zap, title: "Fast sessions", text: "Most areas completed in under 30 minutes." },
  { icon: Clock, title: "Long-term results", text: "Visible reduction after 4–6 sessions; permanent smoothness." },
];

const steps = [
  { t: "Free patch test", d: "Quick test to confirm settings safe for your skin." },
  { t: "Pre-treatment prep", d: "Shave area 24h before; avoid sun & retinols 1 week prior." },
  { t: "Laser session", d: "Cooling-tipped device targets the hair follicle precisely." },
  { t: "Aftercare", d: "Soothing gel applied; avoid heat & sun for 48h." },
];

function LaserPage() {
  return (
    <>
      <PageBanner
        eyebrow="Laser Hair Removal"
        title="Smooth skin. Lasting confidence."
        description="Advanced laser technology, safe for all skin tones — delivered with a calm clinical approach."
        image={img}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-semibold">Pricing by area</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {areas.map((p) => (
                  <div key={p.area} className="rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">From</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-primary-deep">{p.price}</p>
                    <p className="mt-2 text-sm font-medium">{p.area}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Save with course bookings — ask about packages of 6 or 8.</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Benefits & safety</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <b.icon className="mb-3 h-5 w-5 text-primary" />
                    <p className="font-semibold">{b.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">The process</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.t}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="grid gap-2 text-sm">
              {["No needles, no surgery", "Suitable for face & body", "Reduces ingrown hairs", "Sessions every 4–6 weeks"].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title="Book Laser Consultation" />
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}