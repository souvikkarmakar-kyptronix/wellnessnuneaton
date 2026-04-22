import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, ShieldCheck } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";
import elina from "@/assets/elina-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elina — Massage Therapist in Nuneaton | Relaxify" },
      { name: "description", content: "Meet Elina, Level 4 qualified massage therapist trained at a Medical University in Latvia. Premium therapeutic care in Nuneaton." },
      { property: "og:title", content: "About Elina — Relaxify Nuneaton" },
      { property: "og:description", content: "Medical-grade therapy meets calming hospitality." },
      { property: "og:image", content: elina },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="A medical mind. A healer's hands."
        description="I'm Elina — a Level 4 qualified massage therapist trained at a Medical University in Latvia. I founded Relaxify to bring clinical-grade body care to Nuneaton, in a space that feels nothing like a clinic."
        image={elina}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl space-y-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            My path into wellness started in a medical lecture hall, not a spa. I trained in Latvia, where massage
            therapy is treated as a serious therapeutic discipline — taught alongside anatomy, physiology and clinical
            assessment. That foundation shapes every session I give today.
          </p>
          <p>
            What I love most is the moment a client steps off the table and tells me a pain they've lived with for years
            is suddenly… quiet. That's the goal: not to mask discomfort, but to actually solve it.
          </p>
          <p>
            Beyond pain relief, I expanded into Endosphere therapy and laser care because I believe wellness includes
            confidence — feeling good in your body, fully. Every treatment at Relaxify is built on that philosophy.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, t: "Medical University", d: "Trained in Latvia in clinical massage therapy." },
            { icon: Award, t: "Level 4 Qualified", d: "Advanced certification in remedial massage." },
            { icon: ShieldCheck, t: "Insured & Compliant", d: "Full professional indemnity & hygiene standards." },
            { icon: Heart, t: "Client-First", d: "Every plan tailored to your body and goals." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <b.icon className="mb-3 h-6 w-6 text-primary" />
              <p className="font-semibold">{b.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-primary/20 bg-primary-soft p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">My mission</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            "Help every client leave feeling lighter, freer and more themselves."
          </h2>
        </div>
      </section>

      <CtaSection />
    </>
  );
}