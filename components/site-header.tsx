import { Wordmark } from "./wordmark"

const nav = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#results" },
  { label: "Подход", href: "#approach" },
  { label: "Контакты", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <a href="#top" className="shrink-0" aria-label="RANVIO — на главную">
          <Wordmark className="h-5 w-auto md:h-6" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Обсудить проект
        </a>
      </div>
    </header>
  )
}
