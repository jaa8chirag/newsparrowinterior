"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { divisions } from "@/lib/data";

/** Pinned section whose cards travel horizontally as the page scrolls. */
export default function Showcase() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const dist = () => track.current!.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${dist()}`,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="overflow-hidden md:h-screen">
      <div ref={track} className="flex h-full w-max items-center gap-6 px-6 py-20 max-md:w-full max-md:flex-col md:gap-10 md:px-10 md:py-0">
        <div className="shrink-0 md:w-[32vw]">
          <p className="text-sm uppercase tracking-[0.25em] text-muted">What we do</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95]">
            Five disciplines, <span className="text-accent">one</span> group.
          </h2>
        </div>

        {divisions.map((d) => (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            className="group relative flex h-[60vh] w-full shrink-0 flex-col justify-between overflow-hidden rounded-sm p-8 md:h-[70vh] md:w-[34vw]"
          >
            <Image
              src={d.image}
              alt=""
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/40" />
            <div className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70" style={{ background: d.accent }} />
            <span className="font-display text-7xl font-semibold relative text-white/70 transition-transform duration-700 group-hover:scale-110">
              {d.index}
            </span>
            <div className="relative text-white transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-display text-5xl font-semibold leading-none">{d.name}</h3>
              <p className="mt-3 max-w-xs text-sm font-medium">{d.tagline}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {d.services.slice(0, 3).map((s) => (
                  <li key={s.title} className="rounded-full border border-white/50 px-3 py-1 text-xs">
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
