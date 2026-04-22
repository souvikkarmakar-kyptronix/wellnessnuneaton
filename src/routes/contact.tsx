import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { LeadForm } from "@/components/lead-form";
import heroImg from "@/assets/hero-massage.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Relaxify Wellness Nuneaton" },
      { name: "description", content: "Book your appointment with Relaxify Wellness in Nuneaton. Phone, email and online booking — free consultations available." },
      { property: "og:title", content: "Contact — Relaxify Nuneaton" },
      { property: "og:description", content: "Book massage, Endosphere, laser & waxing in Nuneaton." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: MapPin, label: "Visit", value: "Nuneaton, Warwickshire, UK" },
  { icon: Phone, label: "Call", value: "+44 7000 000 000" },
  { icon: Mail, label: "Email", value: "hello@relaxify.co.uk" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9am – 7pm" },
];

function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's get you booked in."
        description="Send a message, request a callback or call directly. Free consultations available for all body care treatments."
        image={heroImg}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((i) => (
                <div key={i.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <i.icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="mt-1 font-medium">{i.value}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Relaxify Nuneaton location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-1.500%2C52.515%2C-1.430%2C52.555&layer=mapnik&marker=52.527%2C-1.466"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <LeadForm title="Send a Booking Request" />
        </div>
      </section>
    </>
  );
}