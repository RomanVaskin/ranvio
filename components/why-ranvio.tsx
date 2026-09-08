const principles = [
  { title: "Работаем от спроса и данных", desc: "Решения строятся на реальном спросе рынка и аналитике, а не на догадках." },
  { title: "Считаем лиды и продажи", desc: "Оцениваем работу по заявкам и выручке, а не по количеству активностей." },
  { title: "Автоматизируем повторяющиеся процессы", desc: "Убираем ручную рутину, чтобы команда фокусировалась на росте." },
  { title: "Масштабируем то, что работает", desc: "Находим рабочие связки и усиливаем их бюджетом и системой." },
]

export function WhyRanvio() {
  return (
    <section id="approach" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-3xl text-balance font-sans text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          Не просто маркетинг. <span className="text-primary">Система роста.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-card p-7 md:p-9">
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
