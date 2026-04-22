import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/deep-tissue.jpg";

export const Route = createFileRoute("/treatments/deep-tissue-massage")({
  head: () => ({
    meta: [
      { title: "Deep Tissue Massage in Nuneaton | Relaxify" },
      { name: "description", content: "Targeted deep tissue massage in Nuneaton for chronic pain, tension and posture relief. Book with Elina, Level 4 qualified therapist." },
      { property: "og:title", content: "Deep Tissue Massage — Nuneaton" },
      { property: "og:description", content: "Clinical-grade pain relief & tension release." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Pain Relief"
      title="Deep Tissue Massage in Nuneaton"
      description="Slow, focused pressure that reaches deeper muscle layers — ideal for chronic pain, postural issues and stubborn tension."
      image={img}
      whatIsIt="Deep tissue massage uses sustained pressure and slow strokes to target the inner layers of muscles and connective tissue. It's a clinical, results-driven approach for releasing knots, restoring movement and easing pain that surface-level massage can't reach."
      whoFor={[
        "Chronic neck, shoulder & lower back pain",
        "Office workers with postural tension",
        "Athletes with tight, overworked muscles",
        "Recovery from old injuries or scar tissue",
      ]}
      benefits={[
        "Releases deep muscle knots and adhesions",
        "Improves posture and range of motion",
        "Reduces chronic pain and inflammation",
        "Lowers stress hormones and improves sleep",
      ]}
      howItWorks={[
        { step: "Consultation", text: "We discuss your pain points, lifestyle and goals." },
        { step: "Targeted assessment", text: "I identify the muscles and patterns driving your tension." },
        { step: "Therapeutic session", text: "Slow, deep pressure with constant feedback for comfort." },
        { step: "Aftercare plan", text: "Personalised stretches and follow-up advice." },
      ]}
      duration="60 or 90 minutes"
      pricing={[
        { label: "60 min session", price: "£55" },
        { label: "90 min session", price: "£75" },
      ]}
      faqs={[
        { q: "Is deep tissue massage painful?", a: "It can feel intense at moments, but never sharply painful. I adjust pressure constantly to your comfort." },
        { q: "How many sessions will I need?", a: "Most clients feel significant relief after 1–3 sessions; chronic conditions often benefit from a 4–6 week plan." },
        { q: "What should I do after?", a: "Drink plenty of water, rest if you can, and follow the gentle stretches I'll show you." },
      ]}
    />
  ),
});