type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" };

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}