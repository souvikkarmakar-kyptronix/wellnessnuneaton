import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div
      className="fixed right-4 z-50 flex flex-col gap-3 sm:right-5"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="https://wa.me/447000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.65_0.16_150)] text-white shadow-elegant tap-highlight-none transition-transform active:scale-95 hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+447000000000"
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant tap-highlight-none transition-transform active:scale-95 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}