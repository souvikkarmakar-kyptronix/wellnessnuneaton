import { Link } from "@tanstack/react-router";
import { Check, Clock, PoundSterling, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LeadForm } from "@/components/lead-form";
import { PageBanner } from "@/components/page-banner";
import { CtaSection } from "@/components/cta-section";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  whatIsIt: string;
  whoFor: string[];
  benefits: string[];
  howItWorks: { step: string; text: string }[];
  duration: string;
  pricing: { label: string; price: string }[];
  faqs: { q: string; a: string }[];
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageBanner eyebrow={p.eyebrow} title={p.title} description={p.description} image={p.image} />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-semibold">What is this treatment?</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{p.whatIsIt}</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Who it's for</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Benefits</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary-soft">
                      <Check className="h-3 w-3 text-primary-deep" />
                    </span>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">How it works</h2>
              <ol className="mt-6 space-y-4">
                {p.howItWorks.map((s, i) => (
                  <li key={s.step} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.step}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Duration & Pricing</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <Clock className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Session Length</p>
                  <p className="mt-1 font-display text-xl font-semibold">{p.duration}</p>
                </div>
                {p.pricing.map((pr) => (
                  <div key={pr.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <PoundSterling className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{pr.label}</p>
                    <p className="mt-1 font-display text-xl font-semibold">{pr.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold">Frequently asked</h2>
              <Accordion type="single" collapsible className="mt-4">
                {p.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/treatments">All Treatments</Link>
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title="Book this treatment" />
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}