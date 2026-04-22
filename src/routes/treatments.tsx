import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import heroImg from "@/assets/hero-massage.jpg";
import deepTissue from "@/assets/deep-tissue.jpg";
import sportsMassage from "@/assets/sports-massage.jpg";
import hotStone from "@/assets/hot-stone.jpg";
import lymphatic from "@/assets/lymphatic.jpg";
import endosphereImg from "@/assets/endosphere.jpg";
import laserImg from "@/assets/laser.jpg";
import waxingImg from "@/assets/waxing.jpg";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Massage & Body Care in Nuneaton | Relaxify" },
      { name: "description", content: "Explore our full range of treatments: deep tissue, sports, hot stone, lymphatic drainage, Endosphere, laser hair removal & waxing." },
      { property: "og:title", content: "Treatments — Relaxify Nuneaton" },
      { property: "og:description", content: "Pain relief, recovery & body care in Nuneaton." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: TreatmentsPage,
});

const groups = [
  {
    title: "Pain Relief & Massage",
    items: [
      { to: "/treatments/deep-tissue-massage", title: "Deep Tissue Massage – Nuneaton", desc: "Targeted relief for chronic muscle tension.", img: deepTissue },
      { to: "/treatments/sports-massage", title: "Sports Massage – Nuneaton", desc: "Performance, recovery & injury prevention.", img: sportsMassage },
      { to: "/treatments/hot-stone-massage", title: "Hot Stone Massage – Nuneaton", desc: "Deep warmth that soothes muscles & mind.", img: hotStone },
      { to: "/treatments/lymphatic-drainage", title: "Lymphatic Drainage – Nuneaton", desc: "Reduce swelling & support natural detox.", img: lymphatic },
    ],
  },
  {
    title: "Body Care & Aesthetics",
    items: [
      { to: "/endosphere", title: "Endosphere Therapy", desc: "Non-invasive cellulite reduction & sculpting.", img: endosphereImg },
      { to: "/laser-hair-removal", title: "Laser Hair Removal", desc: "Long-term smoothness in fast sessions.", img: laserImg },
      { to: "/waxing", title: "Waxing", desc: "Clean, gentle & precise hair removal.", img: waxingImg },
    ],
  },
] as const;

function TreatmentsPage() {
  return (
    <>
      <PageBanner
        eyebrow="All Treatments"
        title="Therapy & body care, refined."
        description="Every treatment is rooted in clinical knowledge and delivered with calm precision. Choose the experience that fits your goals."
        image={heroImg}
      />
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">{g.title}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <Link key={s.to} to={s.to} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}