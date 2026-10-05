"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const n = { v: 0 };
      document.documentElement.classList.add("lenis-stopped");
      gsap
        .timeline({ onComplete: () => document.documentElement.classList.remove("lenis-stopped") })
        .to(n, {
          v: 100,
          duration: 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(n.v)).padStart(3, "0");
          },
        })
        .to("[data-pre-text]", { yPercent: -110, duration: 0.6, ease: "power3.in" })
        .to(root.current, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=0.1")
        .set(root.current, { display: "none" });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[90] flex items-end justify-between bg-accent p-6 text-black md:p-10">
      <div className="overflow-hidden">
        <p data-pre-text className="font-display text-[clamp(1.8rem,9vw,9rem)] font-semibold leading-none">
          Sparroh Group
        </p>
      </div>
      <div className="overflow-hidden">
        <span data-pre-text ref={count} className="font-display text-[clamp(1.8rem,9vw,9rem)] font-semibold leading-none tabular-nums">
          000
        </span>
      </div>
    </div>
  );
}
