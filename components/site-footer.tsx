import { Wordmark } from "./wordmark"

const links = [
  { label: "SEO", href: "#services" },
  { label: "Сайты", href: "#services" },
  { label: "Реклама", href: "#services" },
  { label: "Telegram", href: "#services" },
  { label: "AI", href: "#services" },
  { label: "Контакты", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Wordmark className="h-6 w-auto" />
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Digital growth agency
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Навигация в подвале">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} RANVIO</p>
        </div>
      </div>
    </footer>
  )
}
