import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import { LeadForm } from "@/components/lead-form";
import img from "@/assets/waxing.jpg";

export const Route = createFileRoute("/waxing")({
  head: () => ({
    meta: [
      { title: "Waxing in Nuneaton — Gentle, Hygienic Hair Removal | Relaxify" },
      { name: "description", content: "Professional waxing in Nuneaton. Clean, gentle and precise — face, body and intimate areas." },
      { property: "og:title", content: "Waxing — Nuneaton" },
      { property: "og:description", content: "Clean, gentle, hygienic hair removal." },
      { property: "og:image", content: img },
    ],
  }),
  component: WaxingPage,
});

const services = [
  { name: "Eyebrow Shaping", price: "£10" },
  { name: "Upper Lip", price: "£8" },
  { name: "Chin", price: "£8" },
  { name: "Full Face", price: "£25" },
  { name: "Underarm", price: "£12" },
  { name: "Half Arm", price: "£15" },
  { name: "Full Arm", price: "£22" },
  { name: "Half Leg", price: "£20" },
  { name: "Full Leg", price: "£30" },
  { name: "Bikini", price: "£15" },
  { name: "Brazilian", price: "£28" },
  { name: "Hollywood", price: "£32" },
];

function WaxingPage() {
  return (
    <>
      <PageBanner
        eyebrow="Waxing"
        title="Smooth, gentle, beautifully clean."
        description="Hygienic, precise waxing using premium warm wax — for face, body and intimate areas."
        image={img}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold">Services & pricing</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <ul className="divide-y divide-border">
                {services.map((s) => (
                  <li key={s.name} className="flex items-center justify-between px-5 py-4">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="font-display text-lg font-semibold text-primary-deep">{s.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-12 font-display text-3xl font-semibold">Why clients choose us</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Premium low-temperature wax",
                "Single-use applicators every time",
                "Calm, private treatment room",
                "Skin-soothing aftercare included",
                "Strict hygiene standards",
                "Gentle, experienced hands",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title="Book a Waxing Appointment" />
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}