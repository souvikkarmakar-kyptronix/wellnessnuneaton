import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-elegant md:px-12">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.22em] opacity-90">Ready when you are</p>
        <h2 className="relative font-display text-3xl font-semibold leading-tight md:text-5xl">
          Start Your Transformation Today
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base opacity-90 md:text-lg">
          Book your session or claim a free consultation with Elina — Level 4 qualified therapist.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/95">
            <Link to="/contact">Book Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10">
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}