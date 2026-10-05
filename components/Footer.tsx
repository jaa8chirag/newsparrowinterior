import Link from "next/link";
import { divisions, brand, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-foreground px-6 pb-8 pt-24 text-background md:px-10">
      <p className="text-sm uppercase tracking-[0.25em] opacity-60">The next chapter starts here</p>
      <Link
        href="/contact"
        className="mt-4 block font-display text-[clamp(3.5rem,13vw,13rem)] font-semibold leading-[0.9] transition-colors hover:text-accent"
      >
        Let&apos;s chat.
      </Link>

      <div className="mt-20 grid gap-10 border-t border-black/20 pt-8 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">{brand.group}</p>
          <p className="mt-2 max-w-xs text-sm opacity-60">{brand.tagline}. Five disciplines, one group.</p>
          <p className="mt-4 text-sm opacity-60">{brand.address}</p>
          <a href={brand.phoneHref} className="mt-2 block text-sm font-medium">
            {brand.phone}
          </a>
        </div>
        <ul className="space-y-2 text-sm">
          {divisions.map((d) => (
            <li key={d.slug}>
              <Link href={`/${d.slug}`} className="inline-block transition-transform hover:translate-x-2">
                {d.index} — {d.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/contact" className="inline-block transition-transform hover:translate-x-2">
              Contact us
            </Link>
          </li>
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noreferrer" className="inline-block transition-transform hover:translate-x-2">
                {s.name} ↗
              </a>
            </li>
          ))}
        </ul>
        <div className="text-sm opacity-60 md:text-right">
          <p>© 2022–{new Date().getFullYear()} {brand.legal}</p>
        </div>
      </div>
    </footer>
  );
}
