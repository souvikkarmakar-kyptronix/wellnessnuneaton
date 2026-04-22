import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, ShieldCheck, Sparkles, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { SectionHeader } from "@/components/section-header";
import { CtaSection } from "@/components/cta-section";
import heroImg from "@/assets/hero-massage.jpg";
import elinaImg from "@/assets/elina-portrait.jpg";
import deepTissue from "@/assets/deep-tissue.jpg";
import sportsMassage from "@/assets/sports-massage.jpg";
import hotStone from "@/assets/hot-stone.jpg";
import lymphatic from "@/assets/lymphatic.jpg";
import endosphereImg from "@/assets/endosphere.jpg";
import laserImg from "@/assets/laser.jpg";
import waxingImg from "@/assets/waxing.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";
import client7 from "@/assets/client-7.jpg";
import client8 from "@/assets/client-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Massage Nuneaton — Pain Relief, Recovery & Body Care | Relaxify" },
      { name: "description", content: "Premium therapeutic massage, Endosphere body sculpting & laser hair removal in Nuneaton. Book with Elina, Level 4 qualified therapist. Free consultation." },
      { property: "og:title", content: "Massage Nuneaton — Relaxify Wellness" },
      { property: "og:description", content: "Pain Relief. Recovery. Confidence." },
    ],
  }),
  component: Index,
});

const services = [
  { to: "/treatments/deep-tissue-massage", title: "Deep Tissue Massage", desc: "Targeted relief for chronic tension and pain.", img: deepTissue },
  { to: "/treatments/sports-massage", title: "Sports Massage", desc: "Performance, recovery & injury prevention.", img: sportsMassage },
  { to: "/treatments/hot-stone-massage", title: "Hot Stone Massage", desc: "Deep warmth that melts stress away.", img: hotStone },
  { to: "/treatments/lymphatic-drainage", title: "Lymphatic Drainage", desc: "Reduce swelling & detoxify naturally.", img: lymphatic },
  { to: "/endosphere", title: "Endosphere Therapy", desc: "Non-invasive body sculpting & cellulite reduction.", img: endosphereImg },
  { to: "/laser-hair-removal", title: "Laser Hair Removal", desc: "Smooth, lasting results in fast sessions.", img: laserImg },
  { to: "/waxing", title: "Waxing", desc: "Clean, gentle & precise hair removal.", img: waxingImg },
] as const;

const testimonials = [
  { name: "Sarah M.", quote: "After 3 sessions my back pain is gone. Elina is incredibly knowledgeable.", tag: "Pain relief" },
  { name: "Joanne K.", quote: "Endosphere changed my legs after 6 sessions — visible, real results.", tag: "Confidence" },
  { name: "Mark R.", quote: "Best sports massage in Nuneaton. I recover twice as fast now.", tag: "Recovery" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Calm spa room" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-6 md:py-28 lg:py-36">
          <div className="flex flex-col justify-center text-white animate-fade-up">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Nuneaton · Wellness Clinic
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Pain Relief.<br />Recovery.<br /><span className="italic text-white/95">Confidence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Advanced therapeutic massage, laser treatments & body sculpting — delivered with medical precision in Nuneaton.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/95">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/85">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Certified Therapist</span>
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Medical University Trained</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 5.0 Reviews</span>
            </div>
          </div>
          <div className="lg:pl-6">
            <LeadForm title="Book a Free Call Back" />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={elinaImg} alt="Elina, qualified therapist" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-elegant md:block">
              <p className="text-3xl font-display font-semibold text-primary">2+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years experience</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Meet Your Therapist</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Hi, I'm Elina — your path to pain-free living.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm a Level 4 qualified massage therapist trained at a Medical University in Latvia. My approach
              combines clinical insight with deeply restorative techniques — so you don't just feel relaxed, you feel transformed.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Award, label: "Certified Therapist" },
                { icon: GraduationCap, label: "Medical Background" },
                { icon: ShieldCheck, label: "2+ Years Experience" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <b.icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">{b.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-8 rounded-full px-0 text-primary hover:bg-transparent hover:text-primary-deep">
              <Link to="/about">Read my full story <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES — BENTO */}
      <section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">— Our Services</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                Crafted for your <span className="italic text-primary">body</span>,<br />
                designed for <span className="italic text-primary">results</span>.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Seven signature treatments — from clinical pain relief to advanced body sculpting. Tap any tile to explore.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-6 md:gap-5">
            {/* Featured large card — Endosphere */}
            <Link
              to="/endosphere"
              className="group relative col-span-1 row-span-2 overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-1 md:col-span-3 md:row-span-2 md:min-h-[28rem]"
            >
              <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
                <img src={endosphereImg} alt="" className="h-full w-full object-cover" />
              </div>
              <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
              <div aria-hidden className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                  <h3 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    Endosphere<br />Therapy
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-white/90">
                    Non-invasive cellulite reduction & body sculpting using micro-vibration technology. Real, visible results.
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs uppercase tracking-wider text-white/70">From</span>
                    <span className="font-display text-3xl font-semibold">£40</span>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary transition-transform duration-500 group-hover:rotate-45">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Other 6 services as bento cards */}
            {[
              { to: "/treatments/deep-tissue-massage", title: "Deep Tissue", desc: "Chronic pain relief", img: deepTissue, span: "md:col-span-3" },
              { to: "/treatments/sports-massage", title: "Sports Massage", desc: "Recovery & performance", img: sportsMassage, span: "md:col-span-2" },
              { to: "/laser-hair-removal", title: "Laser Hair Removal", desc: "Smooth, lasting results", img: laserImg, span: "md:col-span-2" },
              { to: "/treatments/hot-stone-massage", title: "Hot Stone", desc: "Deep, soothing warmth", img: hotStone, span: "md:col-span-2" },
              { to: "/treatments/lymphatic-drainage", title: "Lymphatic Drainage", desc: "Detox & reduce swelling", img: lymphatic, span: "md:col-span-3" },
              { to: "/waxing", title: "Waxing", desc: "Clean & precise", img: waxingImg, span: "md:col-span-3" },
            ].map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant ${s.span} min-h-[14rem]`}
              >
                <div className="absolute inset-0">
                  <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>
                <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-primary backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="absolute left-5 top-5 font-display text-xs font-semibold tracking-widest text-white/70">
                  0{i + 2}
                </span>
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold leading-tight md:text-[1.65rem]">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/treatments">View all treatments <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ENDOSPHERE HIGHLIGHT */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={endosphereImg} alt="Endosphere therapy device" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured Treatment</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">Endosphere Therapy</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Non-invasive cellulite reduction using micro-vibration & compression technology. Sculpt, smooth and tone with zero downtime.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { sessions: "3", result: "Skin firmer" },
                { sessions: "6", result: "Visible smoothing" },
                { sessions: "12", result: "Sculpted contour" },
              ].map((p) => (
                <div key={p.sessions} className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
                  <p className="font-display text-3xl font-semibold text-primary-deep">{p.sessions}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sessions</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{p.result}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 rounded-full" size="lg">
              <Link to="/endosphere">View Treatment Plans <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LASER PRICING */}
      <section className="bg-gradient-soft px-4 py-20 md:px-6 md:py-28">
        <SectionHeader eyebrow="Laser Hair Removal" title="Smooth skin, lasting confidence" subtitle="Fast, comfortable sessions with long-term results." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { area: "Chest", price: "£80" },
            { area: "Stomach", price: "£80" },
            { area: "Full Leg", price: "£120" },
            { area: "Full Back", price: "£120" },
          ].map((p) => (
            <div key={p.area} className="rounded-3xl border border-border bg-card p-7 text-center shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">From</p>
              <p className="mt-1 font-display text-4xl font-semibold text-primary-deep">{p.price}</p>
              <p className="mt-3 text-base font-medium text-foreground">{p.area}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {["Long-term results", "Smooth skin", "Fast sessions", "Safe for all skin types"].map((b) => (
            <span key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {b}</span>
          ))}
        </div>
      </section>

      {/* RESULTS / BEFORE-AFTER */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <SectionHeader eyebrow="Real Results" title="Endosphere transformation timeline" subtitle="Visible improvement at every milestone — without injections or downtime." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { label: "After 3 Sessions", desc: "Improved skin tone & firmness", pct: "30%" },
            { label: "After 6 Sessions", desc: "Visible cellulite reduction", pct: "60%" },
            { label: "After 12 Sessions", desc: "Sculpted, smooth contours", pct: "95%" },
          ].map((r, i) => (
            <div key={r.label} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-soft to-primary/20">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="font-display text-6xl font-semibold text-primary-deep">{r.pct}</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">improvement</p>
                  </div>
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
                  Stage {i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{r.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-soft px-4 py-20 md:px-6 md:py-28">
        <SectionHeader eyebrow="Client Stories" title="Trusted by clients across Nuneaton" />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-deep">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
