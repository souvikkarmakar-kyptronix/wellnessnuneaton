type Props = { eyebrow?: string; title: string; description?: string; image: string };

export function PageBanner({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-soft">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col justify-center animate-fade-up">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          )}
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}