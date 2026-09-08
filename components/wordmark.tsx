export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-sans font-semibold tracking-tight text-foreground ${className ?? ""}`}
      style={{ fontSize: "inherit", lineHeight: 1 }}
    >
      <span className="text-[1.25em] leading-none">RANVIO</span>
      <span className="ml-1 inline-block h-[0.35em] w-[0.35em] translate-y-[-0.05em] rounded-full bg-primary" aria-hidden="true" />
    </span>
  )
}
