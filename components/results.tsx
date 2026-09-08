const metrics = [
  { value: "+180%", label: "Рост органического трафика" },
  { value: "−32%", label: "Стоимость лида" },
  { value: "x2.4", label: "Рост конверсии" },
]

export function Results() {
  return (
    <section id="results" className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-balance font-sans text-4xl font-semibold tracking-tight md:text-5xl">
            Результат важнее активности
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
            Демо-данные · условный пример
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-primary-foreground/20 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-primary p-8 md:p-10">
              <span className="block font-sans text-6xl font-semibold tracking-tight md:text-7xl">{m.value}</span>
              <p className="mt-4 text-pretty text-primary-foreground/80">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
