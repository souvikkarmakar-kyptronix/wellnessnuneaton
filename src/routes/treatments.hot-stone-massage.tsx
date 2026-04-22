import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/hot-stone.jpg";

export const Route = createFileRoute("/treatments/hot-stone-massage")({
  head: () => ({
    meta: [
      { title: "Hot Stone Massage in Nuneaton | Relaxify" },
      { name: "description", content: "Soothing hot stone massage in Nuneaton — deep warmth that melts tension and restores calm." },
      { property: "og:title", content: "Hot Stone Massage — Nuneaton" },
      { property: "og:description", content: "Deep warmth. Profound calm." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Deep Relaxation"
      title="Hot Stone Massage in Nuneaton"
      description="Smooth basalt stones gently heated to ease deep muscular tension and bring profound, cellular-level relaxation."
      image={img}
      whatIsIt="Heated basalt stones are placed on key energy points and used as an extension of the therapist's hands. The radiant warmth penetrates deeply, allowing the body to release tension that traditional massage might not reach."
      whoFor={[
        "Anyone needing deep stress relief",
        "Cold tension or stiffness in winter months",
        "Sleep & anxiety support",
        "First-time massage clients",
      ]}
      benefits={[
        "Penetrating muscular relief without deep pressure",
        "Improves circulation and warmth",
        "Calms the nervous system deeply",
        "Supports better sleep",
      ]}
      howItWorks={[
        { step: "Warm welcome", text: "Settle in with calming aromatherapy." },
        { step: "Stone preparation", text: "Stones are heated to a precise, safe temperature." },
        { step: "Layered massage", text: "Hands-on massage combined with strategic stone work." },
        { step: "Quiet finish", text: "Time to rest and rehydrate before you leave." },
      ]}
      duration="75 or 90 minutes"
      pricing={[
        { label: "75 min session", price: "£70" },
        { label: "90 min session", price: "£85" },
      ]}
      faqs={[
        { q: "Is it too hot?", a: "No — stones are tested and adjusted to your comfort throughout." },
        { q: "Can I combine it with deep tissue?", a: "Yes, hybrid sessions are popular. Just let me know on booking." },
        { q: "Any contraindications?", a: "Pregnancy, certain skin conditions and circulatory issues — please mention on consultation." },
      ]}
    />
  ),
});