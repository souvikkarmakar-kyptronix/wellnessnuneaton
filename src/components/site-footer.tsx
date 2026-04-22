import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">Relaxify</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Premium therapeutic massage, laser & body sculpting in Nuneaton. Trained at Medical University of Latvia.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Treatments</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/treatments/deep-tissue-massage" className="hover:text-primary">Deep Tissue Massage</Link></li>
            <li><Link to="/treatments/sports-massage" className="hover:text-primary">Sports Massage</Link></li>
            <li><Link to="/treatments/hot-stone-massage" className="hover:text-primary">Hot Stone Massage</Link></li>
            <li><Link to="/treatments/lymphatic-drainage" className="hover:text-primary">Lymphatic Drainage</Link></li>
            <li><Link to="/endosphere" className="hover:text-primary">Endosphere Therapy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Elina</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/laser-hair-removal" className="hover:text-primary">Laser Hair Removal</Link></li>
            <li><Link to="/waxing" className="hover:text-primary">Waxing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Nuneaton, Warwickshire</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +44 7000 000 000</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@relaxify.co.uk</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /> Mon–Sat · 9am–7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Relaxify Wellness. All rights reserved.</p>
          <p>Massage · Endosphere · Laser · Waxing — Nuneaton</p>
        </div>
      </div>
    </footer>
  );
}