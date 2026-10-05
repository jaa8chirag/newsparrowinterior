"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { divisions, brand, socials } from "@/lib/data";

const items = [
  { slug: "", index: "00", name: "Home", short: "Back to the start", image: "/images/wa1.jpeg" },
  ...divisions.map((d) => ({ slug: d.slug, index: d.index, name: d.name, short: d.short, image: d.image })),
  { slug: "contact", index: "06", name: "Contact", short: "Start your next project", image: "/images/wa7.jpeg" },
];

// Menu animation is pure CSS driven by `open`, so it can never get stuck empty.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const toggle = (next: boolean) => {
    setOpen(next);
    document.documentElement.classList.toggle("lenis-stopped", next);
  };

  const rise = (i: number): React.CSSProperties => ({
    transform: open ? "translateY(0)" : "translateY(110%)",
    transitionDelay: open ? `${350 + i * 60}ms` : "0ms",
  });
  const fade = (i: number): React.CSSProperties => ({
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(20px)",
    transitionDelay: open ? `${700 + i * 80}ms` : "0ms",
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-difference md:px-10 md:py-6">
        <Link href="/" className="font-display text-2xl font-semibold text-white" onClick={() => open && toggle(false)}>
          Sparroh<span className="text-accent">.</span>
        </Link>
        <button
          onClick={() => toggle(!open)}
          className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
          <span className="relative block h-3 w-7">
            <span className={`absolute left-0 h-px w-full bg-white transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-full bg-white transition-all duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </header>

      <div
        data-lenis-prevent
        inert={!open}
        aria-hidden={!open}
        style={{ clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
        className="fixed inset-0 z-40 overflow-y-auto bg-foreground text-background transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      >
        <div className="grid min-h-full gap-8 px-5 pb-8 pt-24 md:grid-cols-[1.3fr_1fr] md:gap-10 md:px-10 md:pt-28">
          <div className="flex flex-col justify-between gap-8">
            <nav onMouseLeave={() => setActive(0)}>
              {items.map((d, i) => (
                <div key={d.name} className="overflow-hidden border-b border-black/15">
                  <Link
                    href={d.slug ? `/${d.slug}` : "/"}
                    onClick={() => toggle(false)}
                    onMouseEnter={() => setActive(i)}
                    className={`block transition-[translate,opacity] duration-500 hover:translate-x-4 ${
                      active !== i ? "md:opacity-40" : ""
                    }`}
                  >
                    <span style={rise(i)} className="flex items-baseline gap-3 py-2 transition-transform duration-700 ease-out md:gap-4 md:py-3">
                      <span className="w-6 shrink-0 text-xs tracking-widest opacity-60">{d.index}</span>
                      <span className="font-display text-[clamp(2rem,9vw,4.5rem)] font-semibold leading-none md:whitespace-nowrap md:text-[clamp(2.2rem,5vw,4.5rem)]">
                        {d.name}
                      </span>
                      <span className="hidden text-sm opacity-60 lg:block">{d.short}</span>
                    </span>
                  </Link>
                </div>
              ))}
            </nav>

            <div style={fade(0)} className="flex flex-wrap items-end justify-between gap-6 text-sm transition-all duration-700">
              <div>
                <p className="opacity-60">Call us</p>
                <a href={brand.phoneHref} className="font-display text-2xl font-semibold">
                  {brand.phone}
                </a>
              </div>
              <ul className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-black/30 px-4 py-1.5 transition-colors hover:bg-background hover:text-foreground"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={fade(1)} className="relative hidden transition-all duration-700 md:block">
            <div className="sticky top-28 h-[calc(100vh-10rem)] overflow-hidden rounded-sm bg-black/10">
              {items.map((d, i) => (
                <Image
                  key={d.name}
                  src={d.image}
                  alt=""
                  fill
                  sizes="40vw"
                  className={`object-cover transition-all duration-700 ${active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.25em] opacity-70">{items[active].index}</p>
                <p className="font-display text-3xl font-semibold">{items[active].short}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
