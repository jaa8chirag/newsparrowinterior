"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cities } from "@/lib/data";

export default function Cities() {
  const root = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-city]", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.6,
        stagger: { each: 0.025, from: "random" },
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <ul ref={root} className="flex flex-wrap gap-3">
      {cities.map((c) => (
        <li
          key={c}
          data-city
          className="rounded-full border border-line px-5 py-2 text-sm transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-black"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}
