import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/sports-massage.jpg";

export const Route = createFileRoute("/treatments/sports-massage")({
  head: () => ({
    meta: [
      { title: "Sports Massage in Nuneaton | Relaxify" },
      { name: "description", content: "Sports massage in Nuneaton for athletes, runners and active people. Improve recovery, performance & injury prevention." },
      { property: "og:title", content: "Sports Massage — Nuneaton" },
      { property: "og:description", content: "Recover faster. Perform better." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Recovery & Performance"
      title="Sports Massage in Nuneaton"
      description="A focused, performance-oriented massage that prepares muscles for training, accelerates recovery and prevents injury."
      image={img}
      whatIsIt="Sports massage blends deep tissue, trigger-point therapy and assisted stretching to help active bodies move freely. Whether you train daily or just want to feel better in your body, this session is built around results."
      whoFor={[
        "Runners, cyclists and gym-goers",
        "Anyone in pre/post-event preparation",
        "Recovery from soft-tissue injuries",
        "Active professionals with limited mobility",
      ]}
      benefits={[
        "Accelerates muscle recovery",
        "Improves flexibility and range of motion",
        "Reduces injury risk",
        "Releases trigger points and lactic build-up",
      ]}
      howItWorks={[
        { step: "Goal setting", text: "Performance, recovery or rehab — we set clear objectives." },
        { step: "Functional check", text: "Quick mobility screen to find restrictions." },
        { step: "Targeted treatment", text: "Hands-on work focused on the muscles you rely on." },
        { step: "Recovery plan", text: "Stretches and self-care to keep gains between sessions." },
      ]}
      duration="60 or 90 minutes"
      pricing={[
        { label: "60 min session", price: "£55" },
        { label: "90 min session", price: "£75" },
      ]}
      faqs={[
        { q: "Should I book before or after a race?", a: "Both work — a lighter pre-event session 2–3 days before, and a recovery session 24–48h after." },
        { q: "Do I need to be an athlete?", a: "Not at all. Sports massage suits anyone who is active or wants to move better." },
        { q: "How often should I have one?", a: "In-season athletes benefit from weekly or bi-weekly sessions; everyone else, monthly." },
      ]}
    />
  ),
});