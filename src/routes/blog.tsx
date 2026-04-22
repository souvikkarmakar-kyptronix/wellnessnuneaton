import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import heroImg from "@/assets/hero-massage.jpg";
import deepTissue from "@/assets/deep-tissue.jpg";
import sportsMassage from "@/assets/sports-massage.jpg";
import endosphere from "@/assets/endosphere.jpg";
import lymphatic from "@/assets/lymphatic.jpg";
import laser from "@/assets/laser.jpg";
import hotStone from "@/assets/hot-stone.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Massage & Body Care Blog | Relaxify Nuneaton" },
      { name: "description", content: "Expert articles on pain relief, recovery, body sculpting & skin care from Elina, qualified therapist in Nuneaton." },
      { property: "og:title", content: "Wellness Blog — Relaxify Nuneaton" },
      { property: "og:description", content: "Pain relief, recovery & body care insights." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { cat: "Pain Relief", title: "5 signs you actually need deep tissue, not relaxation massage", read: "5 min", img: deepTissue },
  { cat: "Recovery", title: "How to recover faster between training sessions", read: "6 min", img: sportsMassage },
  { cat: "Body Sculpting", title: "Endosphere vs traditional cellulite treatments — what works", read: "7 min", img: endosphere },
  { cat: "Skin Care", title: "The pre & post laser routine that protects your skin", read: "4 min", img: laser },
  { cat: "Detox", title: "Lymphatic drainage: separating science from the wellness hype", read: "8 min", img: lymphatic },
  { cat: "Wellbeing", title: "Why hot stone therapy still outperforms most spa treatments", read: "5 min", img: hotStone },
];

function BlogPage() {
  return (
    <>
      <PageBanner
        eyebrow="Journal"
        title="Massage & Body Care Blog"
        description="Practical, evidence-led articles on pain relief, recovery, body sculpting and skincare — from a clinically trained therapist."
        image={heroImg}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-primary-deep">{p.cat}</span>
                  <span className="text-muted-foreground">{p.read} read</span>
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{p.title}</h2>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}