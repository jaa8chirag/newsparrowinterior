"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      gsap.fromTo("[data-quote]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
    },
    { scope: root, dependencies: [i] }
  );

  const t = testimonials[i];
  const go = (n: number) => setI((n + testimonials.length) % testimonials.length);

  return (
    <div ref={root}>
      <p className="mb-10 text-sm uppercase tracking-[0.25em] text-muted">Client words</p>
      <div data-quote className="min-h-[20rem] md:min-h-[24rem]">
        <p className="max-w-5xl font-display text-[clamp(1.8rem,4.5vw,4.2rem)] font-medium leading-[1.05]">
          <span className="text-accent">“</span>
          {t.quote}
          <span className="text-accent">”</span>
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.2em]">
          {t.name} <span className="text-muted">— {t.org}</span>
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button onClick={() => go(i - 1)} aria-label="Previous" className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-xl transition-colors hover:bg-foreground hover:text-background">
          ←
        </button>
        <button onClick={() => go(i + 1)} aria-label="Next" className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-xl transition-colors hover:bg-foreground hover:text-background">
          →
        </button>
        <span className="ml-4 text-sm text-muted">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
