const services = [
  {
    n: "01",
    title: "SEO",
    desc: "Строим поисковый трафик через семантику, структуру, контент и техническую оптимизацию.",
  },
  {
    n: "02",
    title: "Разработка сайтов",
    desc: "Создаём быстрые сайты и лендинги, которые продают и масштабируются.",
  },
  {
    n: "03",
    title: "Контекстная реклама",
    desc: "Запускаем и оптимизируем рекламу с фокусом на стоимость лида и продажи.",
  },
  {
    n: "04",
    title: "Продвижение в Telegram",
    desc: "Посевы, Telegram Ads, контент и аналитика для роста каналов и привлечения клиентов.",
  },
  {
    n: "05",
    title: "AI-автоматизация",
    desc: "Автоматизируем рутинные процессы, обработку лидов, контент и внутренние операции.",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Что мы делаем
        </h2>
        <p className="max-w-xs text-pretty text-muted-foreground">
          Пять направлений, которые вместе создают систему роста.
        </p>
      </div>

      <ul className="mt-14 border-t border-border">
        {services.map((s) => (
          <li key={s.n} className="group border-b border-border">
            <div className="grid grid-cols-1 gap-3 py-8 transition-colors md:grid-cols-[auto_1fr_1.4fr] md:items-center md:gap-10 md:py-10">
              <span className="font-mono text-sm text-primary md:w-16">{s.n}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {s.title}
              </h3>
              <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
