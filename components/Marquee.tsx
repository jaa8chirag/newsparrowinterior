export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-6">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((t, i) => (
              <span key={i} className="flex items-center font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold">
                <span className={i % 2 ? "outline-text" : ""}>{t}</span>
                <span className="mx-8 text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
