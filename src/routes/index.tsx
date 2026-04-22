import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, ShieldCheck, Sparkles, Star, Check, Instagram, Facebook, Heart, MessageCircle, Play } from "lucide-react";
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
import endosphereVideo from "@/assets/endosphere.mp4.asset.json";
import deepTissueVideo from "@/assets/deep-tissue.mp4.asset.json";
import sportsMassageVideo from "@/assets/sports-massage.mp4.asset.json";
import laserVideo from "@/assets/laser.mp4.asset.json";
import hotStoneVideo from "@/assets/hot-stone.mp4.asset.json";
import lymphaticVideo from "@/assets/lymphatic.mp4.asset.json";
import waxingVideo from "@/assets/waxing.mp4.asset.json";
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
import gymStage1 from "@/assets/gym-stage-1.jpg";
import gymStage2 from "@/assets/gym-stage-2.jpg";
import gymStage3 from "@/assets/gym-stage-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Massage & Body Care in Nuneaton — Relaxify Wellness" },
      { name: "description", content: "Therapeutic massage, Endosphere body treatments & laser hair removal in Nuneaton. Qualified, discreet care with a complimentary consultation. Individual results vary." },
      { property: "og:title", content: "Relaxify Wellness — Nuneaton" },
      { property: "og:description", content: "Considered care. Quiet confidence. Individual results vary." },
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
  { name: "Sarah M.", quote: "I left feeling lighter and noticeably less tense. Elina listened carefully and tailored every step.", tag: "Tension relief" },
  { name: "Joanne K.", quote: "After my Endosphere course my skin felt firmer and smoother — a really considered, professional experience.", tag: "Body confidence" },
  { name: "Mark R.", quote: "A calm, attentive sports massage. I felt looser and more mobile after the session.", tag: "Recovery" },
];

const socialPosts = [
  { platform: "instagram" as const, img: endosphereImg, caption: "Endosphere results after 6 sessions ✨", likes: "1.2k", comments: 84, time: "2h", url: "https://instagram.com" },
  { platform: "tiktok" as const, img: deepTissue, caption: "POV: 60 min of pure relief 💆‍♀️", likes: "8.4k", comments: 312, time: "5h", url: "https://tiktok.com" },
  { platform: "facebook" as const, img: laserImg, caption: "Spring offer — 20% off laser hair removal", likes: "342", comments: 27, time: "1d", url: "https://facebook.com" },
  { platform: "instagram" as const, img: hotStone, caption: "Hot stone Mondays 🔥 Limited slots open", likes: "956", comments: 41, time: "1d", url: "https://instagram.com" },
  { platform: "tiktok" as const, img: lymphatic, caption: "Lymphatic drainage — before & after", likes: "12.1k", comments: 528, time: "2d", url: "https://tiktok.com" },
  { platform: "facebook" as const, img: sportsMassage, caption: "Helping local athletes recover faster", likes: "418", comments: 33, time: "3d", url: "https://facebook.com" },
];

const socialChannels = [
  { platform: "instagram" as const, handle: "@relaxify.nuneaton", followers: "8.4k", url: "https://instagram.com" },
  { platform: "facebook" as const, handle: "Relaxify Wellness", followers: "3.2k", url: "https://facebook.com" },
  { platform: "tiktok" as const, handle: "@relaxify", followers: "12.6k", url: "https://tiktok.com" },
];

function PlatformIcon({ platform, className }: { platform: "instagram" | "facebook" | "tiktok"; className?: string }) {
  if (platform === "instagram") return <Instagram className={className} />;
  if (platform === "facebook") return <Facebook className={className} />;
  // TikTok — inline SVG (lucide has no tiktok)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.27a8.16 8.16 0 0 0 4.77 1.52V6.34a4.85 4.85 0 0 1-1.84-.35z" />
    </svg>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Calm spa room" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-12 pt-20 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-[1.1fr_1fr] md:gap-12 md:py-28 lg:py-36">
          <div className="flex flex-col justify-center text-white animate-fade-up">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] ios-blur sm:px-4 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Nuneaton · Wellness Clinic
            </span>
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
              Considered care.<br />Quiet results.<br /><span className="italic text-white/95">Crafted for you.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-base md:text-lg">
              Therapeutic massage, laser hair removal & non-invasive body treatments in Nuneaton — delivered with skill, discretion and complete respect for your privacy.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 rounded-full bg-white text-primary hover:bg-white/95 tap-highlight-none">
                <Link to="/contact">Book a Session <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 tap-highlight-none">
                <Link to="/contact">Request a Complimentary Consultation</Link>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/85 sm:gap-x-8 sm:gap-y-4 sm:text-sm">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Qualified Therapist</span>
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Medical University Trained</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> Highly Rated by Local Clients</span>
            </div>
          </div>
          <div className="lg:pl-6">
            <LeadForm title="Book a Free Call Back" />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] shadow-elegant md:rounded-3xl">
              <img src={elinaImg} alt="Elina, qualified therapist" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-elegant md:block">
              <p className="text-3xl font-display font-semibold text-primary">2+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years experience</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">Meet Your Therapist</p>
            <h2 className="font-display text-[1.85rem] font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Hello, I'm Elina — your therapist in Nuneaton.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              I'm a Level 4 qualified massage therapist trained at a medical university in Latvia. My approach is calm, attentive and personalised — every session is shaped around how you feel that day, what you'd like to work on, and what your body needs most.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { icon: Award, label: "Level 4 Qualified" },
                { icon: GraduationCap, label: "Medical University Training" },
                { icon: ShieldCheck, label: "Insured & Confidential" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl border border-border bg-card p-3 shadow-card sm:p-4">
                  <b.icon className="mb-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <p className="text-[11px] font-medium leading-tight sm:text-sm">{b.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-7 rounded-full px-0 text-primary hover:bg-transparent hover:text-primary-deep">
              <Link to="/about">Read more about my approach <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES — BENTO */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
            <div className="max-w-xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">— Our Services</p>
              <h2 className="font-display text-[2rem] font-semibold leading-[1.05] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Considered for your <span className="italic text-primary">body</span>,<br />
                shaped around <span className="italic text-primary">you</span>.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Seven signature treatments — from focused therapeutic massage to gentle, non-invasive body care. Tap any tile to learn more.
            </p>
          </div>

          {/* Mobile: horizontal snap-scroll (iOS card stack feel) */}
          <div className="-mx-5 mt-10 sm:hidden">
            <div className="scroll-snap-x flex gap-4 overflow-x-auto px-5 pb-2">
              {[
                { to: "/endosphere", title: "Endosphere", desc: "Non-invasive body treatment", img: endosphereImg, video: endosphereVideo.url, featured: true },
                { to: "/treatments/deep-tissue-massage", title: "Deep Tissue", desc: "Focused tension relief", img: deepTissue, video: deepTissueVideo.url },
                { to: "/treatments/sports-massage", title: "Sports Massage", desc: "Mobility & recovery", img: sportsMassage, video: sportsMassageVideo.url },
                { to: "/laser-hair-removal", title: "Laser", desc: "Smoother skin", img: laserImg, video: laserVideo.url },
                { to: "/treatments/hot-stone-massage", title: "Hot Stone", desc: "Soothing warmth", img: hotStone, video: hotStoneVideo.url },
                { to: "/treatments/lymphatic-drainage", title: "Lymphatic Drainage", desc: "Light & rhythmic", img: lymphatic, video: lymphaticVideo.url },
                { to: "/waxing", title: "Waxing", desc: "Precise & discreet", img: waxingImg, video: waxingVideo.url },
              ].map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="snap-card relative w-[78%] flex-none overflow-hidden rounded-[1.5rem] bg-card shadow-card tap-highlight-none"
                >
                  <div className="relative aspect-[4/5]">
                    <video src={s.video} poster={s.img} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-primary shadow-soft">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    {s.featured && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                        <Sparkles className="h-2.5 w-2.5" /> Featured
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <h3 className="font-display text-xl font-semibold leading-tight">{s.title}</h3>
                      <p className="mt-0.5 text-xs text-white/85">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tablet+ : original bento grid */}
          <div className="mt-14 hidden auto-rows-[minmax(0,1fr)] gap-4 sm:grid sm:grid-cols-6 sm:gap-5">
            {/* Featured large card — Endosphere */}
            <Link
              to="/endosphere"
              className="group relative col-span-6 row-span-2 overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-1 md:col-span-3 md:row-span-2 md:min-h-[28rem]"
            >
              <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
                <video
                  src={endosphereVideo.url}
                  poster={endosphereImg}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
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
                    A gentle, non-invasive body treatment using compressive micro-vibration. Comfortable, no downtime — individual results vary.
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
              { to: "/treatments/deep-tissue-massage", title: "Deep Tissue", desc: "Focused work for stubborn tension", img: deepTissue, video: deepTissueVideo.url, span: "col-span-6 md:col-span-3" },
              { to: "/treatments/sports-massage", title: "Sports Massage", desc: "Mobility & post-training recovery", img: sportsMassage, video: sportsMassageVideo.url, span: "md:col-span-2" },
              { to: "/laser-hair-removal", title: "Laser Hair Removal", desc: "Smoother skin, fewer worries", img: laserImg, video: laserVideo.url, span: "md:col-span-2" },
              { to: "/treatments/hot-stone-massage", title: "Hot Stone", desc: "Warmth that quietly unwinds you", img: hotStone, video: hotStoneVideo.url, span: "md:col-span-2" },
              { to: "/treatments/lymphatic-drainage", title: "Lymphatic Drainage", desc: "Light, rhythmic & soothing", img: lymphatic, video: lymphaticVideo.url, span: "col-span-6 md:col-span-3" },
              { to: "/waxing", title: "Waxing", desc: "Precise, hygienic, discreet", img: waxingImg, video: waxingVideo.url, span: "col-span-6 md:col-span-3" },
            ].map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant ${s.span} min-h-[14rem]`}
              >
                <div className="absolute inset-0">
                  <video
                    src={s.video}
                    poster={s.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
          <div className="overflow-hidden rounded-3xl shadow-elegant aspect-[4/5] md:aspect-auto">
            <video
              src={endosphereVideo.url}
              poster={endosphereImg}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured Treatment</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">Endosphere Therapy</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              A non-invasive body treatment using compressive micro-vibration. Comfortable sessions, no needles, no downtime — designed to leave you feeling lighter and more cared for.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { sessions: "3", result: "Skin may feel firmer" },
                { sessions: "6", result: "Smoother appearance" },
                { sessions: "12", result: "More refined contour" },
              ].map((p) => (
                <div key={p.sessions} className="rounded-2xl border border-primary/20 bg-primary-soft p-5 text-center">
                  <p className="font-display text-3xl font-semibold text-primary-deep">{p.sessions}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sessions</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{p.result}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Indicative outcomes only. Individual results vary and are not guaranteed. A complimentary consultation is offered before any course begins.
            </p>
            <Button asChild className="mt-8 rounded-full" size="lg">
              <Link to="/endosphere">View Treatment Plans <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LASER PRICING */}
      <section className="bg-gradient-soft px-4 py-20 md:px-6 md:py-28">
        <SectionHeader eyebrow="Laser Hair Removal" title="Smoother skin, quietly assured" subtitle="Comfortable sessions with a tailored consultation. Suitability and results are confirmed at your patch test." />
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
          {["Tailored to your skin", "Discreet & private", "Patch test included", "Qualified operator"].map((b) => (
            <span key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {b}</span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
          Suitability is confirmed at consultation. Results vary by skin type, hair colour and individual response. Not a medical treatment.
        </p>
      </section>

      {/* RESULTS / BEFORE-AFTER */}
      {/* INDICATIVE JOURNEY — editorial timeline */}
      <section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">— Indicative Journey</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                A typical<br />
                <span className="italic text-primary">Endosphere</span> course.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Illustrative milestones only. No needles, no downtime — individual results vary and are confirmed at your complimentary consultation.
            </p>
          </div>

          <div className="relative mt-20 grid gap-10 md:grid-cols-3 md:gap-6">
            {/* Connecting line — desktop only */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
            />

            {[
              { session: "03", label: "Settling in", desc: "Skin may feel firmer and better hydrated as the body adjusts to the rhythm of treatment.", img: gymStage1 },
              { session: "06", label: "Mid-course", desc: "A smoother, more even appearance — many clients notice they simply feel lighter in their skin.", img: gymStage2 },
              { session: "12", label: "Refined", desc: "A more toned, refined contour. The course completes with a personalised maintenance plan.", img: gymStage3 },
            ].map((s, i) => (
              <div key={s.session} className="relative">
                {/* Timeline dot + session label */}
                <div className="mb-8 flex items-center gap-4 md:flex-col md:items-center md:gap-3">
                  <span className="relative grid h-6 w-6 place-items-center rounded-full bg-background ring-1 ring-primary/30 md:h-7 md:w-7">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    Around session {s.session}
                  </span>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] shadow-elegant aspect-[4/5]">
                  <img
                    src={s.img}
                    alt={`Illustrative stage ${i + 1}`}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-[1.65rem]">
                    Stage {i + 1} — {s.label}
                  </h3>
                  <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Indicative
                  </span>
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Images are illustrative and do not depict named clients. Outcomes vary by individual; nothing here constitutes a medical claim or guarantee.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — FLOATING COLLAGE */}
      <section className="bg-gradient-soft px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border bg-card px-4 py-16 shadow-card md:px-8 md:py-20">
          {/* Floating portraits zone (decorative, fixed height) */}
          <div className="relative mx-auto hidden h-[360px] w-full sm:block md:h-[420px]" aria-hidden="true">
            {[
              { img: client1, top: "4%", left: "2%", w: "h-28 w-24 md:h-36 md:w-32", delay: "0s" },
              { img: client2, top: "32%", left: "10%", w: "h-32 w-28 md:h-40 md:w-32", delay: "0.4s" },
              { img: client3, top: "8%", left: "20%", w: "h-32 w-28 md:h-44 md:w-36", delay: "0.8s" },
              { img: client4, top: "55%", left: "26%", w: "h-24 w-20 md:h-32 md:w-28", delay: "1.2s" },
              { img: client5, top: "2%", left: "40%", w: "h-28 w-24 md:h-36 md:w-32", delay: "0.2s" },
              { img: client6, top: "55%", right: "40%", w: "h-24 w-20 md:h-32 md:w-28", delay: "0.6s" },
              { img: client7, top: "8%", right: "20%", w: "h-32 w-28 md:h-44 md:w-36", delay: "1s" },
              { img: client8, top: "4%", right: "2%", w: "h-28 w-24 md:h-36 md:w-32", delay: "0.5s" },
              { img: client2, top: "32%", right: "10%", w: "h-32 w-28 md:h-40 md:w-32", delay: "1.4s" },
            ].map((p, i) => (
              <div
                key={i}
                className={`absolute overflow-hidden rounded-2xl border border-border bg-card shadow-elegant animate-float ${p.w}`}
                style={{
                  top: p.top,
                  left: p.left,
                  right: p.right,
                  animationDelay: p.delay,
                  animationDuration: `${5 + (i % 4)}s`,
                }}
              >
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile portrait strip */}
          <div className="mb-10 flex justify-center gap-2 sm:hidden">
            {[client1, client4, client5, client7, client8].map((img, i) => (
              <div key={i} className="h-16 w-14 overflow-hidden rounded-xl border border-border shadow-card">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Centered content */}
          <div className="mt-2 flex flex-col items-center text-center sm:mt-10">
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-soft">
              Testimonials
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              Trusted quietly by clients<br />
              <span className="text-muted-foreground">across Nuneaton</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Honest words from people I've cared for. Shared with consent — names shortened to protect privacy. Individual experiences vary.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-foreground px-7 text-background hover:bg-foreground/90">
              <Link to="/contact">
                Read More Reviews <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Quotes row */}
          <div className="mx-auto mt-14 grid w-full max-w-5xl gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-background p-6 text-left shadow-soft">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <p className="text-xs font-medium">{t.name}</p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL FEED */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-soft">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Daily updates
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                Follow our journey<br />
                <span className="text-muted-foreground">on social media</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Tips, transformations and behind-the-scenes — fresh posts every day across Instagram, Facebook and TikTok.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialChannels.map((c) => (
                <a
                  key={c.platform}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition group-hover:bg-primary">
                    <PlatformIcon platform={c.platform} className="h-5 w-5" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-foreground">{c.handle}</span>
                    <span className="block text-xs text-muted-foreground">{c.followers} followers</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Posts grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {socialPosts.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Platform badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
                    <PlatformIcon platform={p.platform} className="h-3.5 w-3.5" />
                    <span className="capitalize">{p.platform}</span>
                  </div>

                  {/* Time badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                    {p.time}
                  </div>

                  {/* Play icon for tiktok */}
                  {p.platform === "tiktok" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-elegant">
                        <Play className="h-6 w-6 fill-foreground text-foreground" />
                      </span>
                    </div>
                  )}

                  {/* Caption + stats */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="line-clamp-2 text-sm font-medium leading-snug">{p.caption}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5 fill-white" /> {p.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="h-3.5 w-3.5" /> {p.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & PRIVACY STRIP */}
      <section className="px-4 pb-4 pt-8 md:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/60 p-5 text-center shadow-soft md:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Your privacy & care</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
            All consultations and treatments are private and confidential. Personal and health information you share is handled securely, kept only as long as needed and never sold or shared without your consent (UK GDPR & Data Protection Act 2018). Treatments are not a substitute for medical advice — please consult your GP for any medical condition. Individual results vary and are not guaranteed.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
