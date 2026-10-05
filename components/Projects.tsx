"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects, portfolioCategories } from "@/lib/data";

export default function Projects() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-project]").forEach((el, i) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
        // parallax on the visual block
        gsap.to(el.querySelector("[data-visual]"), {
          yPercent: i % 2 ? -8 : 8,
          ease: "none",
          scrollTrigger: { trigger: el, scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div className="mb-12 flex flex-wrap gap-2">
        {portfolioCategories.map((c) => (
          <span key={c} className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.15em] text-muted">
            {c}
          </span>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            data-project
            data-cursor
            className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden rounded-sm ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
              <div data-visual className="absolute inset-[-10%] transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={p.image}
                  alt={`${p.brand} store, ${p.place}`}
                  fill
                  sizes={i % 3 === 0 ? "100vw" : "50vw"}
                  className="object-cover"
                />
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.15em]">
                {p.category}
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl font-semibold md:text-4xl">{p.name}</h3>
              <p className="text-sm text-muted">{p.place}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
