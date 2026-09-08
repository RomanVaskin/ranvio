export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg justify-self-center lg:justify-self-end">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Абстрактная технологическая графика: линии данных, сетка и геометрические формы"
      >
        <defs>
          <linearGradient id="rv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* fine grid */}
        <g stroke="var(--border)" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
          ))}
        </g>

        {/* concentric rings */}
        <g fill="none" stroke="var(--primary)" strokeOpacity="0.25">
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="105" />
          <circle cx="200" cy="200" r="60" />
        </g>

        {/* ascending data bars */}
        <g fill="var(--primary)">
          <rect x="70" y="300" width="26" height="30" opacity="0.35" />
          <rect x="108" y="270" width="26" height="60" opacity="0.5" />
          <rect x="146" y="230" width="26" height="100" opacity="0.7" />
          <rect x="184" y="185" width="26" height="145" opacity="0.85" />
          <rect x="222" y="130" width="26" height="200" />
        </g>

        {/* trend line */}
        <path
          d="M60 320 L120 260 L180 285 L250 160 L340 90"
          fill="none"
          stroke="url(#rv-line)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [60, 320],
          [120, 260],
          [180, 285],
          [250, 160],
          [340, 90],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="var(--background)" stroke="var(--primary)" strokeWidth="3" />
        ))}

        {/* accent chevron */}
        <path d="M300 300 L340 300 L340 340" fill="none" stroke="var(--foreground)" strokeWidth="3" />
      </svg>

      {/* floating type accent */}
      <span className="pointer-events-none absolute -left-2 top-6 rotate-[-90deg] font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        growth / data
      </span>
    </div>
  )
}
