import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  service: z.string().min(1, "Choose a service"),
  time: z.string().trim().max(80).optional(),
});

type Props = { compact?: boolean; title?: string };

export function LeadForm({ compact = false, title = "Get a Call Back" }: Props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check your details");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! Elina will call you back shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`relative rounded-2xl border border-border/60 bg-card p-6 shadow-elegant ${compact ? "" : "md:p-8"}`}
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Free consultation</p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="grid gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="07000 000000" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Service</Label>
          <Select name="service">
            <SelectTrigger id="service"><SelectValue placeholder="Choose a treatment" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="deep-tissue">Deep Tissue Massage</SelectItem>
              <SelectItem value="sports">Sports Massage</SelectItem>
              <SelectItem value="hot-stone">Hot Stone Massage</SelectItem>
              <SelectItem value="lymphatic">Lymphatic Drainage</SelectItem>
              <SelectItem value="endosphere">Endosphere Therapy</SelectItem>
              <SelectItem value="laser">Laser Hair Removal</SelectItem>
              <SelectItem value="waxing">Waxing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="time">Preferred time</Label>
          <Input id="time" name="time" placeholder="e.g. Sat morning" />
        </div>
        <Button type="submit" disabled={loading} size="lg" className="mt-2 rounded-full">
          {loading ? "Sending…" : "Get a Call Back"}
        </Button>
        <p className="text-center text-[11px] text-muted-foreground">No spam. Reply within 24h.</p>
      </div>
    </form>
  );
}