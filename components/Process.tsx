"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { process } from "@/lib/data";

/** 60-day journey: a line draws down the page while each step lights up. */
export default function Process() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-line-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-steps]", start: "top 60%", end: "bottom 60%", scrub: true },
        }
      );
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.2, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none reverse" },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="grid gap-12 overflow-x-clip md:grid-cols-[1fr_1.4fr]">
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-sm uppercase tracking-[0.25em] text-muted">Our process</p>
        <h2 className="mt-4 font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.9]">
          <span className="text-accent">60</span> days from design to handover.
        </h2>
      </div>

      <div data-steps className="relative pl-10 md:pl-16">
        <div className="absolute bottom-0 left-2 top-0 w-px bg-line md:left-4">
          <div data-line-fill className="h-full w-full origin-top bg-accent" />
        </div>
        {process.map((s, i) => (
          <div key={s.title} data-step className="relative pb-16 last:pb-0 md:pb-24">
            <span className="absolute -left-[2.4rem] top-3 h-3 w-3 rounded-full bg-accent md:-left-[3.4rem]" />
            <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 font-display text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-none">{s.title}</h3>
            <p className="mt-4 max-w-md text-muted">{s.text}</p>
            <div className="relative mt-8 aspect-[4/3] max-w-xl overflow-hidden rounded-sm bg-white">
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-contain p-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
