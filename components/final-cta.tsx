export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Есть задача по росту?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Разберём проект и предложим понятный план действий.
        </p>
        <a
          href="mailto:hello@ranvio.ru"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Обсудить проект
        </a>
      </div>
    </section>
  )
}
