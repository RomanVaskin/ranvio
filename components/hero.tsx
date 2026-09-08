import { HeroVisual } from "./hero-visual"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Digital growth agency · Россия
          </div>

          <h1 className="text-balance font-sans text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
            Приводим трафик,{" "}
            <span className="relative whitespace-nowrap text-primary">
              заявки
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/40"
                preserveAspectRatio="none"
              >
                <path d="M2 8 Q 150 2 298 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            и рост
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            SEO, сайты, реклама, Telegram и AI-автоматизация для бизнеса.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Получить стратегию
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              Посмотреть услуги
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
