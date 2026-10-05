"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Stat = { value: number; suffix: string; label: string };

export default function Stats({ stats }: { stats: Stat[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-num]").forEach((el) => {
        const end = Number(el.dataset.num);
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = Math.round(o.v).toLocaleString();
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="grid gap-px bg-line md:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-background p-8 md:p-12">
          <div className="font-display text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-none">
            <span data-num={s.value}>0</span>
            <span className="text-accent">{s.suffix}</span>
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
