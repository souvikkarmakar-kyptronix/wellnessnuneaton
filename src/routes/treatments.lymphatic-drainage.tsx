import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/lymphatic.jpg";

export const Route = createFileRoute("/treatments/lymphatic-drainage")({
  head: () => ({
    meta: [
      { title: "Lymphatic Drainage Massage in Nuneaton | Relaxify" },
      { name: "description", content: "Gentle, rhythmic lymphatic drainage massage in Nuneaton to reduce swelling, support detox & post-surgery recovery." },
      { property: "og:title", content: "Lymphatic Drainage — Nuneaton" },
      { property: "og:description", content: "Reduce swelling. Restore flow." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Detox & Recovery"
      title="Lymphatic Drainage Massage in Nuneaton"
      description="A light, rhythmic technique that stimulates the lymphatic system to reduce swelling, support immunity and accelerate recovery."
      image={img}
      whatIsIt="Lymphatic drainage uses extremely gentle, directional strokes to encourage the natural flow of lymph fluid. It's a precise, evidence-based technique used for post-operative recovery, fluid retention and general wellbeing."
      whoFor={[
        "Post-surgery (cosmetic or medical) recovery",
        "Water retention and puffiness",
        "Bloating and sluggish digestion",
        "Compromised immunity or fatigue",
      ]}
      benefits={[
        "Visibly reduces swelling and puffiness",
        "Supports immune function",
        "Improves skin tone and clarity",
        "Reduces feeling of heaviness in legs",
      ]}
      howItWorks={[
        { step: "Health intake", text: "We confirm there are no contraindications." },
        { step: "Mapped flow", text: "I work along your lymphatic pathways in a precise sequence." },
        { step: "Light, rhythmic strokes", text: "Pressure is gentle — never deep — by design." },
        { step: "Hydration & advice", text: "Aftercare to keep your lymph moving between sessions." },
      ]}
      duration="60 minutes"
      pricing={[
        { label: "60 min session", price: "£55" },
        { label: "Course of 6", price: "£300" },
      ]}
      faqs={[
        { q: "Will I lose weight?", a: "It reduces fluid retention, so the scale may shift — but the goal is health, not weight loss." },
        { q: "How soon after surgery can I book?", a: "Usually after your surgeon's clearance — typically 1–2 weeks post-op." },
        { q: "How often should I have it?", a: "For post-surgery: 2–3x weekly. For general wellbeing: monthly." },
      ]}
    />
  ),
});