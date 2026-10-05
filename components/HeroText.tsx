"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  eyebrow: string;
  lines: string[];
  sub: string;
  delay?: number;
};

/** Hero headline: masked line reveal + parallax fade on scroll. */
export default function HeroText({ eyebrow, lines, sub, delay = 0 }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ delay })
        .from("[data-eyebrow]", { opacity: 0, y: 20, duration: 0.8 })
        .from("[data-line]", { yPercent: 115, duration: 1.3, ease: "power4.out", stagger: 0.12 }, "-=0.5")
        .from("[data-sub]", { opacity: 0, y: 24, duration: 0.9 }, "-=0.7");

      gsap.to(root.current, {
        yPercent: 25,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 md:px-10 md:pb-20">
      <p data-eyebrow className="mb-6 text-xs uppercase tracking-[0.2em] text-foreground/80 md:text-sm md:tracking-[0.3em]">
        {eyebrow}
      </p>
      <h1 className="font-display text-[clamp(2.8rem,12vw,14rem)] font-semibold leading-[0.88]">
        {lines.map((l) => (
          <span key={l} className="block overflow-hidden pb-[0.08em]">
            <span data-line className="block">
              {l}
            </span>
          </span>
        ))}
      </h1>
      <p data-sub className="mt-6 max-w-md text-base text-foreground/85 md:mt-8 md:text-lg">
        {sub}
      </p>
    </div>
  );
}
