const steps = [
  { n: "01", title: "Анализ", desc: "Изучаем нишу, спрос, конкурентов и текущие показатели." },
  { n: "02", title: "Стратегия", desc: "Формируем гипотезы, каналы и понятный план действий." },
  { n: "03", title: "Запуск", desc: "Быстро реализуем и выводим первые связки в работу." },
  { n: "04", title: "Оптимизация", desc: "Снижаем стоимость лида и улучшаем конверсию по данным." },
  { n: "05", title: "Масштабирование", desc: "Усиливаем то, что приносит результат, и растём в объёме." },
]

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <h2 className="text-balance font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Как мы работаем
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="border-t-2 border-primary pt-5">
            <span className="block font-mono text-5xl font-semibold leading-none tracking-tight text-foreground md:text-6xl">
              {s.n}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
